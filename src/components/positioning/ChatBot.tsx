'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import PositioningReport, { type Report } from './PositioningReport';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function parseReport(text: string): Report | null {
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/);
  if (!jsonMatch) return null;

  try {
    const data = JSON.parse(jsonMatch[1]);
    if (!data.meta || !data['画像信息']) return null;
    return data;
  } catch {
    return null;
  }
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<Report | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const hasInitialized = useRef(false);
  const shouldAutoScroll = useRef(true);

  // Only scroll if user is already near the bottom
  const scrollToBottom = useCallback((force = false) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    if (!force && !shouldAutoScroll.current) return;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Track if user has scrolled up manually
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    shouldAutoScroll.current = scrollHeight - scrollTop - clientHeight < 80;
  }, []);

  const sendMessage = useCallback(async (userMessage: string, currentMessages: Message[]) => {
    const newMessages: Message[] = userMessage
      ? [...currentMessages, { role: 'user', content: userMessage }]
      : currentMessages;

    if (userMessage) {
      setMessages(newMessages);
      shouldAutoScroll.current = true;
      setTimeout(() => scrollToBottom(true), 50);
    }
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let assistantContent = '';
      let buffer = '';

      // Add empty assistant message
      setMessages([...newMessages, { role: 'assistant', content: '' }]);
      setTimeout(() => scrollToBottom(true), 50);

      let chunkCount = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data: ')) continue;

          const data = trimmed.slice(6);
          if (data === '[DONE]') continue;

          try {
            const json = JSON.parse(data);
            if (json.content) {
              assistantContent += json.content;
              setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);
              // Scroll sparingly during streaming — every 10 chunks
              chunkCount++;
              if (chunkCount % 10 === 0) scrollToBottom();
            }
          } catch {
            // skip
          }
        }
      }
      // Final scroll after streaming completes
      scrollToBottom();

      // Check if conversation ended with a report
      const parsed = parseReport(assistantContent);
      if (parsed) {
        setReport(parsed);
        // Remove the JSON block from chat display, keep any preceding text
        const cleanContent = assistantContent.slice(0, assistantContent.indexOf('```json')).trim();
        setMessages([...newMessages, { role: 'assistant', content: cleanContent || '好啦，你的定位报告来了～' }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: '抱歉，连接出了点问题，请稍后再试～' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-trigger first message on mount
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    sendMessage('', []);
  }, [sendMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    sendMessage(trimmed, messages);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  if (report) {
    return (
      <div className="h-full overflow-y-auto">
        <PositioningReport report={report} />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-md'
                    : 'bg-gray-100 text-dark rounded-bl-md'
                }`}
              >
                {msg.content}
                {msg.role === 'assistant' && i === messages.length - 1 && isLoading && (
                  <span className="inline-block w-1.5 h-4 bg-gray-400 ml-0.5 animate-pulse rounded-sm" />
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator when no messages yet or waiting for first response */}
          {isLoading && messages.length === 0 && (
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 bg-white px-4 py-3">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入你的回答..."
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-2.5 text-[15px] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 10h14M11 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

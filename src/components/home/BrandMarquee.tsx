const brands = [
  { name: 'The Ordinary', italic: false },
  { name: 'tarte', italic: true },
  { name: 'FENTY BEAUTY', italic: false },
  { name: 'MINISO', italic: false },
  { name: 'e.l.f.', italic: true },
  { name: 'SWEET SWEAT', italic: false },
  { name: 'ROUND LAB', italic: false },
  { name: 'WESTBRONCO', italic: false },
  { name: 'STONEY CLOVER', italic: false },
  { name: 'COSRX', italic: false },
];

function BrandList() {
  return (
    <>
      {brands.map((brand) => (
        <span
          key={brand.name}
          className={`text-[22px] font-semibold text-gray-400 whitespace-nowrap tracking-[2px] uppercase ${brand.italic ? 'italic' : ''}`}
        >
          {brand.name}
        </span>
      ))}
    </>
  );
}

export default function BrandMarquee() {
  return (
    <section className="py-10 overflow-hidden border-b border-gray-200">
      <div className="relative overflow-hidden before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent after:z-[2]">
        <div className="flex gap-[60px] items-center animate-marquee w-max">
          <BrandList />
          <BrandList />
        </div>
      </div>
    </section>
  );
}

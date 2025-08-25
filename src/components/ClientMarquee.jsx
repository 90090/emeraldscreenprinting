import Marquee from "react-fast-marquee";

export default function ClientList({ clientLogos }) {

    
  return (
    <div className="relative overflow-hidden py-8">
      <h3 className="text-2xl text-center font-bold mb-10 text-emerald-700">
        Trusted By Many Connecticut Brands
      </h3>
        <Marquee gradient={false} speed={40} className="h-30">
        {clientLogos.map((c) => (
            <div
            key={c.name}
            className="flex items-center justify-center w-36 h-20 md:w-44 md:h-24 mx-6 bg-white rounded-xl shadow transition-transform duration-300 hover:scale-110"
            title={c.name}
            >
            <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
            />
            </div>
        ))}
        </Marquee>
    </div>
  );
}

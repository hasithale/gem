import Image from "next/image";
import { ChevronRight, ShieldCheck, Truck, Globe, MessageCircle } from "lucide-react";

const gemsData = [
  { id: "1", name: "Royal Padparadscha Sapphire", type: "Sapphire", weight: "4.25 cts", origin: "Ratnapura, Sri Lanka", color: "Sunset Pink-Orange", clarity: "Eye Clean", treatment: "None (Unheated)", image: "/gem1.png", price: "Price on Inquiry" },
  { id: "2", name: "Crimson Star Ruby", type: "Ruby", weight: "3.10 cts", origin: "Mogok (Verified)", color: "Pigeon Blood Red", clarity: "Slight Inclusions", treatment: "None", image: "/gem2.png", price: "Price on Inquiry" },
  { id: "3", name: "Emerald Nocturne Alexandrite", type: "Alexandrite", weight: "2.85 cts", origin: "Sri Lanka", color: "Green to Raspberry Red", clarity: "VVS", treatment: "None", image: "/gem3.png", price: "Price on Inquiry" },
];

export async function generateStaticParams() {
  return gemsData.map((gem) => ({
    id: gem.id,
  }));
}

export default async function GemDetail({ params }: { params: { id: string } }) {
  const gemId = (await params).id;
  const gem = gemsData.find(g => g.id === gemId) || gemsData[0];

  const waMessage = `I am interested in the ${gem.name} (${gem.weight}). Please provide more details.`;
  const waLink = `https://wa.me/94777123456?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
          <a href="/collections" className="hover:text-gold transition-colors">Collections</a>
          <ChevronRight size={12} />
          <span className="text-primary">{gem.name}</span>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Image Gallery */}
          <div className="relative aspect-square bg-gray-50 overflow-hidden">
            <Image 
              src={gem.image} 
              alt={gem.name} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">{gem.type}</p>
            <h1 className="text-4xl md:text-5xl mb-6">{gem.name}</h1>
            <p className="text-2xl font-serif text-primary mb-10">{gem.price}</p>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 border-y border-gray-100 py-10 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Weight</p>
                <p className="text-sm font-semibold">{gem.weight}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Origin</p>
                <p className="text-sm font-semibold">{gem.origin}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Color</p>
                <p className="text-sm font-semibold">{gem.color}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Clarity</p>
                <p className="text-sm font-semibold">{gem.clarity}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Treatment</p>
                <p className="text-sm font-semibold">{gem.treatment}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center justify-center gap-3 w-full"
              >
                <MessageCircle size={18} />
                Inquire via WhatsApp
              </a>
              <a href="/contact" className="btn btn-outline text-center">Request Private Viewing</a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-gray-100">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="text-gold mb-2" size={20} />
                <p className="text-[9px] uppercase tracking-tighter font-bold">GIA Certified</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="text-gold mb-2" size={20} />
                <p className="text-[9px] uppercase tracking-tighter font-bold">Insured Shipping</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="text-gold mb-2" size={20} />
                <p className="text-[9px] uppercase tracking-tighter font-bold">Global Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

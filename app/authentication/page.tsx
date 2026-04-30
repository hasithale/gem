import Image from "next/image";
import { ShieldCheck, Search, Globe, ChevronRight } from "lucide-react";

export default function Authentication() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 -mr-48 -mt-48 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Security & Trust</p>
          <h1 className="text-5xl text-white mb-8 max-w-2xl">Authenticity <span className="italic font-normal">Guaranteed</span></h1>
          <p className="text-white/60 max-w-xl leading-relaxed">
            Every gemstone in our collection undergoes rigorous laboratory testing by the world's most 
            respected gemological institutions to ensure its natural origin and quality.
          </p>
        </div>
      </section>

      {/* Lab Partners */}
      <section className="section bg-[#faf8fd]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="bg-white p-12 shadow-sm flex flex-col items-center text-center">
            <div className="h-16 relative w-48 mb-8 opacity-60">
              <Image src="/ngja-logo.png" alt="NGJA" fill className="object-contain" />
            </div>
            <h3 className="text-xl mb-4 uppercase tracking-widest font-bold">NGJA Certified</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The National Gem and Jewellery Authority of Sri Lanka provides the official government 
              certification and export licensing for all our gemstones.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-gold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Learn about NGJA <ChevronRight size={14} />
            </a>
          </div>

          <div className="bg-white p-12 shadow-sm flex flex-col items-center text-center">
            <div className="h-16 relative w-48 mb-8 opacity-60">
              <Image src="/gia-logo.png" alt="GIA" fill className="object-contain" />
            </div>
            <h3 className="text-xl mb-4 uppercase tracking-widest font-bold">GIA Authentication</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              For our most rare and investment-grade stones, we provide reports from the Gemological 
              Institute of America, the world's foremost authority on diamonds and colored stones.
            </p>
            <a href="#" className="text-[10px] uppercase tracking-widest font-bold text-gold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Learn about GIA <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Verification Tool Placeholder */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="bg-primary p-16 rounded-sm text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat" />
            <div className="relative z-10">
              <ShieldCheck className="text-gold mx-auto mb-6" size={48} />
              <h2 className="text-3xl text-white mb-6">Verify Your Certificate</h2>
              <p className="text-white/60 mb-10 max-w-lg mx-auto">
                Enter your certificate tracking number below to verify the authenticity 
                and specifications of your Ceylon Heritage gemstone.
              </p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Certificate Number (e.g., GIA-123456)" 
                  className="bg-white/10 border-white/20 text-white placeholder-white/30 rounded-l-sm focus:ring-gold py-4 px-6 w-full outline-none"
                />
                <button className="bg-gold text-white px-8 rounded-r-sm hover:bg-gold/90 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section bg-white border-t border-gray-100">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-gold" size={24} />
            </div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-4">Chain of Custody</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              We document every step from the mine to the final polish, ensuring complete 
              traceability and ethical integrity.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="text-gold" size={24} />
            </div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-4">Secure Export</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              All international shipments are fully insured and cleared through the National 
              Gem & Jewellery Authority's customs procedures.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="text-gold" size={24} />
            </div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-4">Direct Sourcing</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              By owning the source, we eliminate middlemen, guaranteeing both the authenticity 
              and the most competitive value for investment-grade stones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

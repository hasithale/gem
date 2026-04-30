import Image from "next/image";
import Link from "next/link";
import { History, Leaf, Hammer, Globe } from "lucide-react";

export default function Heritage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative h-[60vh] flex items-center bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/heritage-mine.png"
            alt="The Ceylon Heritage"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        </div>
        <div className="container relative z-10 text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 fade-in">The Story of Ceylon</p>
          <h1 className="text-5xl md:text-7xl text-white fade-in">A Legacy of <span className="italic font-normal">Centuries</span></h1>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl mb-8">The Island of <span className="italic font-normal">Gems</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sri Lanka, formerly known as Ceylon, has been world-renowned for its high-quality gemstones for over 2,500 years. 
              From the legendary sapphires of the Biblical era to the treasures sought by royalty and collectors today, 
              the island's unique geology has produced some of the world's most significant stones.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our family has been an integral part of this history since 1985, bridging the gap between traditional 
              artisanal mining and the sophisticated needs of the modern international market.
            </p>
            <div className="flex gap-6 items-center">
              <div className="bg-surface-container p-4 rounded-full">
                <History className="text-gold" size={24} />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest">Est. 1985</h4>
                <p className="text-xs text-gray-400">Three generations of gem expertise.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/5]">
            <Image 
              src="/hero-sapphire.png" 
              alt="Historical Sapphire" 
              fill 
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Ethical Sourcing */}
      <section className="section bg-[#faf8fd]">
        <div className="container text-center mb-20">
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Our Commitment</p>
          <h2 className="text-4xl md:text-5xl">Ethical & <span className="italic font-normal">Sustainable</span></h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-10 shadow-sm border-t-2 border-gold">
            <Leaf className="text-primary mb-6" size={32} />
            <h3 className="text-xl mb-4">Environmental Stewardship</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We practice "pit mining" which has a minimal environmental footprint compared to open-cast mining. 
              Once a mine is exhausted, the land is restored to its natural state.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-2 border-gold">
            <Globe className="text-primary mb-6" size={32} />
            <h3 className="text-xl mb-4">Fair Trade Communities</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              By working directly with local mining cooperatives, we ensure that the wealth generated 
              by our gemstones directly benefits the communities that discover them.
            </p>
          </div>
          <div className="bg-white p-10 shadow-sm border-t-2 border-gold">
            <Hammer className="text-primary mb-6" size={32} />
            <h3 className="text-xl mb-4">Traditional Lapidary</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our gemstones are cut and polished by master craftsmen using a blend of ancestral 
              techniques and modern precision technology to maximize each stone's natural fire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto border border-gray-100 p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full" />
            <h2 className="text-4xl mb-6">Experience the <span className="italic font-normal">Legacy</span></h2>
            <p className="text-gray-600 mb-10">
              We invite you to explore our curated collections or visit our private showroom in Ratnapura 
              for a personal viewing of our rarest heritage stones.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/collections" className="btn btn-primary">Browse Collections</Link>
              <Link href="/contact" className="btn btn-outline">Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

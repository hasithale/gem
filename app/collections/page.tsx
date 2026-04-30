"use client";

import GemCard from "@/components/GemCard";
import { useState } from "react";
import { Search, Sliders } from "lucide-react";

const allGems = [
  { id: "1", name: "Royal Padparadscha", type: "Sapphire", weight: "4.25 cts", image: "/gem1.png", category: "Sapphires" },
  { id: "2", name: "Crimson Star", type: "Ruby", weight: "3.10 cts", image: "/gem2.png", category: "Rubies" },
  { id: "3", name: "Emerald Nocturne", type: "Alexandrite", weight: "2.85 cts", image: "/gem3.png", category: "Alexandrite" },
  { id: "4", name: "Golden Aura", type: "Sapphire", weight: "5.50 cts", image: "/gem4.png", category: "Sapphires" },
  { id: "5", name: "Rose Petal", type: "Sapphire", weight: "2.20 cts", image: "/gem5.png", category: "Sapphires" },
  { id: "6", name: "Tiger's Glance", type: "Chrysoberyl", weight: "6.75 cts", image: "/gem6.png", category: "Other" },
];

const categories = ["All", "Sapphires", "Rubies", "Alexandrite", "Other"];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGems = activeCategory === "All" 
    ? allGems 
    : allGems.filter(gem => gem.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#faf8fd] pt-24">
      {/* Header */}
      <section className="pt-20 pb-20 bg-white">
        <div className="container">
          <p className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">The Collection</p>
          <h1 className="text-5xl md:text-6xl mb-8">Curated <span className="italic font-normal">Excellence</span></h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-100 pt-10">
            {/* Categories */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-transparent text-gray-400 border-gray-200 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Filter/Search Placeholder */}
            <div className="flex gap-4 items-center text-gray-400">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                <input 
                  type="text" 
                  placeholder="Search stones..." 
                  className="bg-gray-50 border-none pl-10 pr-4 py-2 text-xs focus:ring-1 focus:ring-gold outline-none w-64"
                />
              </div>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors">
                <Sliders size={16} /> Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGems.map((gem) => (
              <GemCard key={gem.id} {...gem} />
            ))}
          </div>

          {filteredGems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">No gemstones found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

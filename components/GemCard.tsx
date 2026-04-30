import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GemCardProps {
  id: string;
  name: string;
  type: string;
  weight: string;
  image: string;
  priceRange?: string;
}

const GemCard = ({ id, name, type, weight, image }: GemCardProps) => {
  return (
    <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Editorial internal frame on hover */}
        <div className="absolute inset-4 border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2">{type}</p>
        <h3 className="text-xl mb-3 group-hover:text-gold transition-colors">{name}</h3>
        
        <div className="flex justify-between items-end border-t border-gray-100 pt-4">
          <div className="text-xs text-gray-500 uppercase tracking-widest">
            <span className="block mb-1">Weight</span>
            <span className="font-bold text-primary">{weight}</span>
          </div>
          <Link 
            href={`/collections/${id}`}
            className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-primary hover:text-gold transition-colors"
          >
            Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GemCard;

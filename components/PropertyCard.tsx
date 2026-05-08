import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  badge?: string;
  showButton?: boolean;
}

export default function PropertyCard({ image, title, location, price, beds, baths, sqft, badge, showButton }: PropertyProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1">
      {/* Image Header */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {badge && (
            <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        {/* Favorite */}
        <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-primary transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors tracking-tight">{title}</h3>
        <p className="text-gray-500 text-sm font-medium mb-4 flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </p>
        <p className="text-2xl font-black text-primary mb-6 tracking-tight">{price}</p>

        {/* Stats */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-50 text-gray-500 font-bold text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
            </svg>
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.67 3 4 3.67 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H9Z" />
              <path d="M7 11h8" /><path d="M7 15h8" />
            </svg>
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 3v18h18" /><path d="M3 21l18-18" />
            </svg>
            <span>{sqft.toLocaleString()} Sqft</span>
          </div>
        </div>

        {/* View Details Button */}
        {showButton && (
          <div className="mt-6">
            <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-200">
              View Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function SavedPropertiesPage() {
  const savedItems = [
    { id: 1, title: "Villa Azure", location: "Malibu, CA", price: "$4,500,000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", beds: 4, baths: 3 },
    { id: 2, title: "Pinecrest Estate", location: "Aspen, CO", price: "$3,250,000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", beds: 5, baths: 4 },
    { id: 3, title: "Modernist Retreat", location: "Greenwich, CT", price: "$2,800,000", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", beds: 3, baths: 3 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Saved Properties</h2>
        <span className="bg-primary/10 text-primary text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
          {savedItems.length} Items Saved
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {savedItems.map((item) => (
          <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
            <div className="h-56 relative overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <button className="absolute top-4 right-4 h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-red-500 shadow-xl border border-gray-100 hover:scale-110 active:scale-95 transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-black text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-6 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                {item.location}
              </p>
              
              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-1 text-xs font-bold text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  {item.beds} Beds
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 20h20" /><path d="M7 33v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" /></svg>
                  {item.baths} Baths
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-primary">{item.price}</span>
                <button className="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

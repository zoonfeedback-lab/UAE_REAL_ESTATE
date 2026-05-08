"use client";

import React, { useRef } from "react";

interface FiltersProps {
  filters: {
    location: string;
    types: string[];
    priceRange: [number, number];
    bedrooms: string;
    minArea: string;
    maxArea: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    location: string;
    types: string[];
    priceRange: [number, number];
    bedrooms: string;
    minArea: string;
    maxArea: string;
  }>>;
  onApply: () => void;
  onReset: () => void;
}

export default function FiltersSidebar({ filters, setFilters, onApply, onReset }: FiltersProps) {
  const toggleType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type]
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setFilters(prev => ({
      ...prev,
      priceRange: [prev.priceRange[0], value]
    }));
  };

  return (
    <aside className="w-full lg:w-80 space-y-8 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm h-fit sticky top-24">
      {/* Location */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Location</h4>
        <input
          type="text"
          placeholder="New York, NY"
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
          className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all hover:bg-white"
        />
      </div>

      {/* Property Type */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Property Type</h4>
        <div className="space-y-3">
          {["Apartment", "Villa", "Mansion", "Townhouse"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group w-fit">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={filters.types.includes(type)}
                  onChange={() => toggleType(type)}
                  className="peer w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary transition-all cursor-pointer"
                />
              </div>
              <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Max Price</h4>
          <span className="text-xs font-black text-primary">
            Up to ${(filters.priceRange[1]/1000000).toFixed(1)}M
          </span>
        </div>
        <div className="relative pt-2 group/slider">
          <input
            type="range"
            min="0"
            max="20000000"
            step="100000"
            value={filters.priceRange[1]}
            onInput={handlePriceChange}
            style={{
              background: `linear-gradient(to right, #0052cc ${(filters.priceRange[1] / 20000000) * 100}%, #f3f4f6 ${(filters.priceRange[1] / 20000000) * 100}%)`,
            }}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer transition-all accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:transition-all"
          />
          <div className="flex justify-between mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span>$0M</span>
            <span>$20M</span>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Bedrooms</h4>
        <div className="grid grid-cols-4 gap-2">
          {["Any", "3+", "4+", "5+"].map((count) => (
            <button
              key={count}
              onClick={() => setFilters(prev => ({ ...prev, bedrooms: count }))}
              className={`py-3 text-xs font-bold rounded-xl border-2 transition-all active:scale-90 ${
                filters.bedrooms === count
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white border-gray-100 text-gray-600 hover:border-primary hover:text-primary hover:shadow-md"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Area */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Area (SQ FT)</h4>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Min"
            value={filters.minArea}
            onChange={(e) => setFilters(prev => ({ ...prev, minArea: e.target.value }))}
            className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all hover:bg-white"
          />
          <input
            type="text"
            placeholder="Max"
            value={filters.maxArea}
            onChange={(e) => setFilters(prev => ({ ...prev, maxArea: e.target.value }))}
            className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/5 transition-all hover:bg-white"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 space-y-4">
        <button 
          onClick={onApply}
          className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 cursor-pointer"
        >
          Apply Filters
        </button>
        <button 
          onClick={onReset}
          className="w-full py-4 text-gray-500 font-bold hover:text-primary hover:bg-primary/5 rounded-xl transition-all active:scale-95 cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

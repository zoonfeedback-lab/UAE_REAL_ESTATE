"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FiltersSidebar from "@/components/FiltersSidebar";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import { properties, Property } from "@/lib/data";

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest First");
  const [filters, setFilters] = useState({
    location: "",
    types: [] as string[],
    priceRange: [0, 20000000] as [number, number],
    bedrooms: "Any",
    minArea: "",
    maxArea: "",
  });

  const [activeFilters, setActiveFilters] = useState(filters);

  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        // Search query
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.location.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Types
        const matchesType = activeFilters.types.length === 0 || activeFilters.types.includes(p.type);
        
        // Price
        const matchesPrice = p.price >= activeFilters.priceRange[0] && p.price <= activeFilters.priceRange[1];
        
        // Bedrooms
        let matchesBeds = true;
        if (activeFilters.bedrooms !== "Any") {
          const minBeds = parseInt(activeFilters.bedrooms);
          matchesBeds = p.beds >= minBeds;
        }

        // Area
        const minArea = activeFilters.minArea ? parseInt(activeFilters.minArea) : 0;
        const maxArea = activeFilters.maxArea ? parseInt(activeFilters.maxArea) : Infinity;
        const matchesArea = p.sqft >= minArea && p.sqft <= maxArea;

        return matchesSearch && matchesType && matchesPrice && matchesBeds && matchesArea;
      })
      .sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        return 0; // Default: Newest First (or no sort)
      });
  }, [searchQuery, sortBy, activeFilters]);

  const handleApplyFilters = () => {
    setActiveFilters(filters);
  };

  const handleResetFilters = () => {
    const initialFilters = {
      location: "",
      types: [],
      priceRange: [0, 20000000] as [number, number],
      bedrooms: "Any",
      minArea: "",
      maxArea: "",
    };
    setFilters(initialFilters);
    setActiveFilters(initialFilters);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFF]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Properties</h1>
            <p className="text-gray-500 font-medium">Showing {filteredProperties.length} properties</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-80 group">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/5 transition-all text-sm font-medium hover:border-gray-200"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-48 hidden lg:block group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/5 transition-all text-sm font-bold appearance-none cursor-pointer hover:border-gray-200"
              >
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <FiltersSidebar 
            filters={filters} 
            setFilters={setFilters} 
            onApply={handleApplyFilters} 
            onReset={handleResetFilters} 
          />

          {/* Results Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    price={`$${property.price.toLocaleString()}`}
                    showButton
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200">
                <div className="bg-gray-50 p-6 rounded-full mb-6">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-500 font-medium">Try adjusting your filters or search query.</p>
                <button 
                  onClick={handleResetFilters}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProperties.length > 0 && <Pagination />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

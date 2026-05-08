import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FiltersSidebar from "@/components/FiltersSidebar";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFF]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">Properties in New York</h1>
            <p className="text-gray-500 font-medium">Showing 24 properties in New York, NY</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-80">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search by neighborhood..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:border-primary transition-all text-sm font-medium"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-48 hidden lg:block">
              <select className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm focus:outline-none focus:border-primary transition-all text-sm font-bold appearance-none cursor-pointer">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <FiltersSidebar />

          {/* Results Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              <PropertyCard
                image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
                title="Modern Glass Villa"
                location="Upper East Side, NY"
                price="$4,250,000"
                beds={4}
                baths={3}
                sqft={3200}
                badge="For Sale"
                showButton
              />
              <PropertyCard
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                title="The Skyline Penthouse"
                location="Tribeca, NY"
                price="$8,900,000"
                beds={5}
                baths={4}
                sqft={5400}
                badge="New"
                showButton
              />
              <PropertyCard
                image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                title="Urban Oasis Townhouse"
                location="Chelsea, NY"
                price="$3,750,000"
                beds={3}
                baths={3}
                sqft={2800}
                badge="For Sale"
                showButton
              />
              <PropertyCard
                image="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop"
                title="Luxury Loft Suite"
                location="SoHo, NY"
                price="$2,100,000"
                beds={2}
                baths={2}
                sqft={1800}
                badge="New"
                showButton
              />
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

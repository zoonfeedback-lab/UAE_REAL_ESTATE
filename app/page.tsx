import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              alt="Luxury Villa"
              fill
              className="object-cover"
              priority
              
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Find Your Dream Property
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-medium">
              Discover premium listings in the most sought-after locations. Buy, sell, or rent with confidence.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-2xl p-4 rounded-[2.5rem] border border-white/20 shadow-2xl max-w-5xl mx-auto">
              <div className="bg-white rounded-[2rem] p-2 flex flex-col md:flex-row items-center gap-2">
                {/* Location */}
                <div className="flex-1 w-full px-6 py-3 border-r border-gray-100 text-left group cursor-pointer">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Location</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">New York, NY</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400 group-hover:text-primary transition-colors">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* Property Type */}
                <div className="flex-1 w-full px-6 py-3 border-r border-gray-100 text-left group cursor-pointer">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Property Type</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">Modern Villa</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400 group-hover:text-primary transition-colors">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* Price Range */}
                <div className="flex-1 w-full px-6 py-3 text-left group cursor-pointer">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Price Range</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$1M - $5M</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-400 group-hover:text-primary transition-colors">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
                {/* Search Button */}
                <button className="bg-primary hover:bg-primary-hover text-white font-bold px-12 py-5 rounded-[1.5rem] transition-all shadow-xl shadow-primary/30 active:scale-95 whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
          {/* <h1>debugging here mat</h1> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Apartments", label: "Apartments", svg: <path d="M3 21h18M9 21V9a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v14M15 21V5a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v16M21 21v-8a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v10" /> },
              { icon: "Villas", label: "Villas", svg: <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
              { icon: "Mansions", label: "Mansions", svg: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
              { icon: "Townhouses", label: "Townhouses", svg: <path d="M3 12h18M3 6h18M3 18h18" /> }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center gap-4 cursor-pointer">
                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {cat.svg}
                  </svg>
                </div>
                <span className="font-bold text-gray-900 group-hover:text-primary transition-colors">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Featured Listings</h2>
              <p className="text-gray-500 font-medium text-lg">Hand-picked premium properties for elite living.</p>
            </div>
            <Link href="#" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All Properties
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
              title="Villa Azure"
              location="Malibu, CA"
              price="$4,500,000"
              beds={4}
              baths={3}
              sqft={4200}
              badge="For Sale"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              title="Pinecrest Estate"
              location="Aspen, CO"
              price="$3,250,000"
              beds={5}
              baths={4}
              sqft={4800}
              badge="For Sale"
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              title="Modernist Retreat"
              location="Greenwich, CT"
              price="$2,800,000"
              beds={3}
              baths={3}
              sqft={2800}
              badge="New Listing"
            />
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-white py-32 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose EstateHub</h2>
            <p className="text-gray-500 font-medium text-lg mb-20 max-w-2xl mx-auto">The gold standard for property management and acquisition.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Verified Listings", desc: "Every property undergoes a rigorous 50-point inspection to ensure authenticity and premium quality.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
                { title: "Expert Agents", desc: "Our agents are seasoned professionals with deep insights into high-value market trends and negotiations.", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
                { title: "Best Prices", desc: "We offer exclusive access to off-market properties and the most competitive rates in the luxury sector.", icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="bg-primary/5 p-6 rounded-3xl text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 py-24 px-12 text-center text-white">
            <div className="absolute inset-0 z-0 opacity-40">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl font-bold mb-6 leading-tight">List your property today</h2>
              <p className="text-xl text-white/70 mb-10 font-medium">
                Join our network of elite sellers and reach thousands of high-intent buyers across the globe.
              </p>
              <button className="bg-primary hover:bg-primary-hover text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-primary/40">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-7xl mx-auto px-4 pb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jonathan Reeves", role: "Home Buyer", text: "EstateHub made the process of finding our dream beach house seamless. Their attention to detail is unmatched.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
              { name: "Sarah Mitchell", role: "Property Seller", text: "As a seller, I felt completely supported. My property was listed and sold within two weeks at a great price.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
              { name: "Marcus Thorne", role: "Real Estate Investor", text: "The quality of listings on EstateHub is superior to any other platform I've used. Highly recommended for luxury search.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#0052cc" className="text-primary">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs font-black uppercase tracking-widest text-primary/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

export default function BuyerDashboard() {
  const savedProperties = [
    { id: 1, title: "Villa Azure", location: "Malibu, CA", price: "$4,500,000", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" },
    { id: 2, title: "Pinecrest Estate", location: "Aspen, CO", price: "$3,250,000", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* Saved Properties */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-gray-900">Saved for Later</h3>
              <button className="text-primary font-bold text-sm">View Map</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedProperties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="h-48 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${prop.image}')` }}
                    ></div>
                    <button className="absolute top-4 right-4 h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-1">{prop.title}</h4>
                    <p className="text-xs text-gray-500 mb-4">{prop.location}</p>
                    <p className="text-lg font-black text-primary">{prop.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-6">Market Trends for You</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
                  </div>
                  <span className="font-bold text-gray-900">Malibu Average Price</span>
                </div>
                <span className="text-emerald-600 font-black">+4.2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiries & Tools */}
        <div className="space-y-8">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/30">
            <h3 className="text-xl font-bold mb-4">Mortgage Ready?</h3>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">Get pre-approved in minutes and strengthen your buying power.</p>
            <button className="w-full bg-white text-primary font-bold py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
              Check Eligibility
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6">Recent Inquiries</h3>
            <div className="space-y-6">
              {[
                { title: "Pinecrest Estate", status: "Waiting for Agent", date: "Today" },
                { title: "Modernist Retreat", status: "Viewing Scheduled", date: "Yesterday" }
              ].map((inq, i) => (
                <div key={i} className="border-l-4 border-primary pl-4 py-1">
                  <p className="font-bold text-gray-900 text-sm">{inq.title}</p>
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest">{inq.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

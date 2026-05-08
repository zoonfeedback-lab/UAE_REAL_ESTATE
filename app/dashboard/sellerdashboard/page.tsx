"use client";

import Link from "next/link";

export default function SellerDashboard() {
  const listings = [
    { id: 1, title: "Modernist Retreat", location: "Greenwich, CT", price: "$2,800,000", status: "Active", views: 1240 },
    { id: 2, title: "Villa Azure", location: "Malibu, CA", price: "$4,500,000", status: "Pending", views: 856 },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Manage Your Properties</h2>
          <p className="text-gray-500 font-medium">You have {listings.length} active listings this month.</p>
        </div>
        <Link href="/dashboard/sellerdashboard/add" className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add Listing
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Listings Table */}
        <div className="lg:col-span-2 space-y-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-6">
                <div className="h-24 w-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full ${
                      item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium flex items-center gap-1 mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {item.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-black text-primary">{item.price}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                        {item.views} Views
                      </span>
                      <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Stats */}
        <div className="space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-black text-gray-900 mb-8">Lead Activity</h3>
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full border-4 border-primary border-t-transparent animate-spin-slow">
                <span className="text-2xl font-black text-primary animate-none">84%</span>
              </div>
              <p className="text-gray-500 font-medium">Response Rate is excellent this week!</p>
              <div className="pt-6 border-t border-gray-50 grid grid-cols-2">
                <div>
                  <p className="text-xl font-black text-gray-900">12</p>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">New Leads</p>
                </div>
                <div>
                  <p className="text-xl font-black text-gray-900">4</p>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Viewings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

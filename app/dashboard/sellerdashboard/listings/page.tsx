"use client";

import Image from "next/image";

export default function SellerListingsPage() {
  const listings = [
    { id: 1, title: "Modernist Retreat", location: "Greenwich, CT", price: "$2,800,000", status: "Active", views: 1240, inquiries: 12 },
    { id: 2, title: "Villa Azure", location: "Malibu, CA", price: "$4,500,000", status: "Under Review", views: 856, inquiries: 4 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your Portfolio</h2>
        <span className="text-xs font-black uppercase tracking-widest text-gray-400">{listings.length} Properties Total</span>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50/50 border-b border-gray-50">
            <tr>
              <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Property</th>
              <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Performance</th>
              <th className="px-8 py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Value</th>
              <th className="px-8 py-6 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {listings.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-8 py-8">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gray-100 overflow-hidden shrink-0">
                      <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500 font-medium">{item.location}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                    item.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-8">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm font-black text-gray-900">{item.views}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Views</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900">{item.inquiries}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Inquiries</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8 text-lg font-black text-primary">
                  {item.price}
                </td>
                <td className="px-8 py-8 text-right">
                  <button className="p-3 bg-gray-100 rounded-xl text-gray-500 hover:bg-primary hover:text-white transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

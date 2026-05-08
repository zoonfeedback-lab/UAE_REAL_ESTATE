"use client";

import Image from "next/image";

export default function AdminApprovalPage() {
  const pending = [
    { id: 1, title: "Ocean Edge Villa", seller: "Marcus Thorne", price: "$3,200,000", date: "Today" },
    { id: 2, title: "Lakeside Lodge", seller: "Sarah Mitchell", price: "$1,850,000", date: "Yesterday" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Pending Approvals</h2>
        <p className="text-xs font-black uppercase tracking-widest text-amber-500 bg-amber-50 px-4 py-2 rounded-full">
          {pending.length} Submissions Waiting
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {pending.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm flex gap-8 items-center group hover:shadow-2xl transition-all">
            <div className="h-32 w-48 rounded-[2rem] bg-gray-100 overflow-hidden shrink-0 shadow-inner">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-xl font-black text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  Seller: <span className="text-primary">{item.seller}</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-black text-gray-900">{item.price}</p>
                <div className="flex gap-3">
                  <button className="h-12 w-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </button>
                  <button className="px-8 h-12 rounded-2xl bg-emerald-50 text-emerald-600 font-black uppercase tracking-widest text-[10px] hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                    Approve Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

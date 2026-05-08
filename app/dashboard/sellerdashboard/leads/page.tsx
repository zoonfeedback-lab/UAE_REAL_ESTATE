"use client";

export default function SellerLeadsPage() {
  const leads = [
    { id: 1, name: "Alice Thompson", property: "Villa Azure", email: "alice@example.com", date: "2 hours ago", budget: "$4.5M", type: "Buyer" },
    { id: 2, name: "Robert Fox", property: "Modernist Retreat", email: "robert.f@example.com", date: "Yesterday", budget: "$2.8M", type: "Buyer" },
    { id: 3, name: "Eleanor Rigby", property: "Villa Azure", email: "eleanor@sky.com", date: "2 days ago", budget: "$4.0M", type: "Investor" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">Recent Leads</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-[4rem] transition-all group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {lead.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{lead.name}</h3>
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest">{lead.type}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold">Interest</span>
                  <span className="text-gray-900 font-black">{lead.property}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold">Budget Cap</span>
                  <span className="text-emerald-600 font-black">{lead.budget}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-primary transition-colors text-sm">
                  Email Client
                </button>
                <button className="h-14 w-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </button>
              </div>
            </div>
            
            <p className="mt-6 pt-6 border-t border-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
              Received {lead.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

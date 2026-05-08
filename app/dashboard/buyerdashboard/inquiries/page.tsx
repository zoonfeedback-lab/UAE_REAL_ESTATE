"use client";

export default function InquiriesPage() {
  const inquiries = [
    { id: 1, property: "Villa Azure", agent: "Sarah Johnson", status: "Awaiting Response", date: "May 8, 2026", message: "Is the price negotiable?" },
    { id: 2, property: "Pinecrest Estate", agent: "Michael Chen", status: "Viewing Scheduled", date: "May 7, 2026", message: "I'd like to schedule a tour for Sunday." },
    { id: 3, property: "Modernist Retreat", agent: "David Wilson", status: "Closed", date: "May 5, 2026", message: "Thank you for the information." },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">My Inquiries</h2>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">Communication History</p>
          <button className="text-primary font-bold text-sm">Mark all as read</button>
        </div>
        <div className="divide-y divide-gray-50">
          {inquiries.map((inq) => (
            <div key={inq.id} className="p-8 hover:bg-gray-50 transition-colors group cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{inq.property}</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Agent: {inq.agent}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                    inq.status === 'Awaiting Response' ? 'bg-amber-50 text-amber-600' :
                    inq.status === 'Viewing Scheduled' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {inq.status}
                  </span>
                  <p className="text-[10px] text-gray-400 font-bold mt-2">{inq.date}</p>
                </div>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed pl-16 italic">
                "{inq.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

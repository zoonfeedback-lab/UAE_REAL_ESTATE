"use client";

export default function AdminAnalyticsPage() {
  const metrics = [
    { label: "Total Volume", value: "$428.5M", growth: "+24%", color: "primary" },
    { label: "Platform Fees", value: "$12.4M", growth: "+15%", color: "emerald" },
    { label: "Active Users", value: "12,402", growth: "+8%", color: "indigo" },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">Market Intelligence</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
            <div className={`h-12 w-12 rounded-2xl mb-8 flex items-center justify-center transition-all ${
              m.color === 'primary' ? 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white' :
              m.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
              'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
            }`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">{m.label}</p>
            <div className="flex items-baseline justify-between">
              <h3 className="text-4xl font-black text-gray-900 tracking-tighter">{m.value}</h3>
              <span className="text-xs font-black text-emerald-500">{m.growth}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-gray-100 p-12 shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-black text-gray-900">Regional Performance</h3>
            <p className="text-sm text-gray-500 font-medium">Monthly transactional volume by territory.</p>
          </div>
          <select className="bg-gray-50 px-6 py-3 rounded-xl border border-transparent outline-none focus:border-primary/20 font-bold text-sm">
            <option>Last 30 Days</option>
            <option>Last 6 Months</option>
          </select>
        </div>
        
        <div className="space-y-8">
          {[
            { region: "North America", progress: 85, value: "$240M" },
            { region: "Europe", progress: 62, value: "$120M" },
            { region: "Middle East", progress: 45, value: "$68M" },
          ].map((r, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-end text-sm font-black uppercase tracking-widest">
                <span className="text-gray-400">{r.region}</span>
                <span className="text-gray-900">{r.value}</span>
              </div>
              <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${r.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

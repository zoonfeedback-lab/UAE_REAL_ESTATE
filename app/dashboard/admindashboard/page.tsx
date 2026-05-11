"use client";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,284", change: "+12%", color: "blue" },
    { label: "Pending Approvals", value: "24", change: "Action Required", color: "amber" },
    { label: "Total Revenue", value: "$42.5k", change: "+18%", color: "emerald" },
    { label: "Active Listings", value: "542", change: "+5%", color: "indigo" },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                stat.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                'bg-indigo-50 text-indigo-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-gray-900">Recent User Registrations</h3>
            <button className="text-primary font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { name: "Marcus Thorne", email: "marcus@example.com", role: "Seller", date: "2 mins ago" },
              { name: "Sarah Mitchell", email: "sarah@example.com", role: "Buyer", date: "15 mins ago" },
              { name: "Jonathan Reeves", email: "j.reeves@example.com", role: "Buyer", date: "1 hour ago" },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">{user.role}</p>
                  <p className="text-[10px] text-gray-400 font-bold">{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary/30">
            <h3 className="text-xl font-bold mb-4">Admin Controls</h3>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">System-wide maintenance and audit tools are ready for your review.</p>
            <button className="w-full bg-white text-primary font-bold py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
              Generate Report
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-lg font-black text-gray-900 mb-6">System Health</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-bold">Server Status</span>
                <span className="text-emerald-500 font-black uppercase tracking-widest text-[10px]">Optimal</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 w-[98%] h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function AdminUserManagementPage() {
  const users = [
    { id: "1", name: "Marcus Thorne", email: "marcus@example.com", role: "Seller", status: "Active", joinDate: "May 1, 2026" },
    { id: "2", name: "Sarah Mitchell", email: "sarah@example.com", role: "Buyer", status: "Active", joinDate: "May 3, 2026" },
    { id: "3", name: "Jonathan Reeves", email: "j.reeves@example.com", role: "Buyer", status: "Suspended", joinDate: "May 4, 2026" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">User Directory</h2>
        <div className="flex gap-4">
          <input type="text" placeholder="Search users..." className="px-6 py-3 rounded-xl bg-white border border-gray-100 shadow-sm outline-none focus:border-primary/30 font-bold text-sm w-64" />
          <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-primary/20">Add User</button>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-50">
            <tr>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">User Details</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Account Type</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Join Date</th>
              <th className="px-8 py-6 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50/30 transition-all group">
                <td className="px-8 py-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {u.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{u.name}</p>
                      <p className="text-xs text-gray-500 font-medium">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-8">
                  <span className="text-xs font-black uppercase tracking-tighter text-gray-700">{u.role}</span>
                </td>
                <td className="px-8 py-8">
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                    u.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-8 py-8 text-sm font-bold text-gray-500">
                  {u.joinDate}
                </td>
                <td className="px-8 py-8 text-right">
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
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

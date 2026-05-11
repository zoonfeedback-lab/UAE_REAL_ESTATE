"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface DashboardSidebarProps {
  onLogoutClick?: () => void;
}

export default function DashboardSidebar({ onLogoutClick }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();


  const role = user?.role || "buyer";

  const getLinks = () => {
    const commonLinks = [
      { name: "Overview", href: `/dashboard/${role}dashboard`, icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
      { name: "Profile", href: "/profile", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
    ];

    const roleLinks: Record<string, any[]> = {
      admin: [
        { name: "User Management", href: "/dashboard/admindashboard/users", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
        { name: "Property Approval", href: "/dashboard/admindashboard/approvals", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
        { name: "Market Analytics", href: "/dashboard/admindashboard/analytics", icon: "M18 20V10M12 20V4M6 20v-6" },
      ],
      seller: [
        { name: "My Listings", href: "/dashboard/sellerdashboard/listings", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" },
        { name: "Add Property", href: "/dashboard/sellerdashboard/add", icon: "M12 5v14M5 12h14" },
        { name: "Leads", href: "/dashboard/sellerdashboard/leads", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
      ],
      buyer: [
        { name: "Saved Properties", href: "/dashboard/buyerdashboard/saved", icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
        { name: "My Inquiries", href: "/dashboard/buyerdashboard/inquiries", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" },
        { name: "Mortgage Calculator", href: "/dashboard/buyerdashboard/mortgage", icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" },
      ],
    };

    return [...commonLinks, ...(roleLinks[role] || [])];
  };

  const links = getLinks();

  return (
    <aside className="w-80 h-screen sticky top-0 bg-white border-r border-gray-100 flex flex-col justify-between py-10 px-6">
      <div>
        {/* Logo */}
        <div className="mb-12 px-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" /><path d="M9 21V9a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v14" /><path d="M15 21V5a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v16" /><path d="M21 21v-8a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v10" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-primary">EstateHub</span>
          </Link>
        </div>

        {/* User Info Card */}
        <div className="bg-primary/5 rounded-[2rem] p-6 mb-10 border border-primary/10">
          <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-2">Current Session</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {user?.name?.[0] || "U"}
            </div>
            <div>
              <p className="font-bold text-gray-900 truncate max-w-[150px]">{user?.name}</p>
              <p className="text-xs font-bold text-primary uppercase tracking-tighter">{role} Account</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold ${
                  isActive 
                    ? "bg-primary text-white shadow-xl shadow-primary/30" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={link.icon} />
                </svg>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={onLogoutClick}
        className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-red-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-200"
      >



        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
        </svg>
        <span>Logout Session</span>
      </button>
    </aside>
  );
}

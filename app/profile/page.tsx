"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-4 py-24">
        <div className="bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-primary/5 p-12 text-center border-b border-gray-50">
            <div className="h-32 w-32 rounded-[2.5rem] bg-white p-2 shadow-2xl mx-auto mb-8">
              <div className="h-full w-full rounded-2xl bg-primary text-white flex items-center justify-center">
                <span className="text-4xl font-black">{user.name?.[0]}</span>
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Account Profile</h1>
            <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">{user.role} Dashboard Access</p>
          </div>

          {/* Details */}
          <div className="p-16 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 ml-2">Full Name</label>
                <div className="px-8 py-5 bg-gray-50 rounded-[1.5rem] font-bold text-gray-900 border border-transparent">
                  {user.name}
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 ml-2">Email Address</label>
                <div className="px-8 py-5 bg-gray-50 rounded-[1.5rem] font-bold text-gray-900 border border-transparent">
                  {user.email}
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-50 flex justify-center">
              <button className="px-12 py-5 rounded-2xl bg-gray-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 transition-transform active:scale-95">
                Update Account Information
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

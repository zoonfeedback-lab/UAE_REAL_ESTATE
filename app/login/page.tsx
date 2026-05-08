"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/AuthService";
import { useAuth } from "@/context/AuthContext";


export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const result = await login({ email, password });
      
      if (result.success && result.user) {
        /* NOTE: Temporarily disconnecting the dashboard routing.
           Users are redirected to the homepage for now.
        const role = result.user.role;
        const dashboardMap: Record<string, string> = {
          admin: "/dashboard/admindashboard",
          seller: "/dashboard/sellerdashboard",
          buyer: "/dashboard/buyerdashboard",
        };
        
        const target = dashboardMap[role] || "/dashboard/buyerdashboard";
        router.refresh();
        router.push(target);
        */
        
        router.refresh();
        router.push("/");

      } else {
        setError(result.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsPending(false);
    }
  };


  return (
    <main className="flex min-h-screen">
      {/* Left Side: Login Form */}
      <div className="flex w-full flex-col px-6 py-12 md:w-1/2 lg:px-24 xl:px-32 justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M9 21V9a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v14" />
                  <path d="M15 21V5a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v16" />
                  <path d="M21 21v-8a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v10" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">EstateHub</span>
            </Link>
          </div>

          {/* Welcome Text */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back</h1>
            <p className="text-gray-500 text-lg">Please enter your details to access your dashboard.</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-4 rounded-xl border border-input-border bg-input-bg text-foreground transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="password" aria-label="Password" className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-4 rounded-xl border border-input-border bg-input-bg text-foreground transition-all duration-200"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="w-5 h-5 rounded border-input-border text-primary focus:ring-primary cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm font-medium text-foreground cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link href="#" className="text-sm font-bold text-primary hover:underline transition-all">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary/20 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  Sign in to account
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {/* Divider */}
           

            {/* Google Login */}
            
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-500 font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-bold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Hero Image Placeholder */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        {/* Overlay Content */}
        <div className="absolute bottom-24 left-12 right-12 z-20 text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">EstateHub Premium Partner</span>
          </div>

          <h2 className="text-6xl font-bold leading-tight mb-6">
            Elevating the Art of <br /> Modern Living
          </h2>
          <p className="text-xl text-white/80 max-w-lg mb-12 font-medium">
            Access the world&apos;s most exclusive property listings and professional management tools in one seamless interface.
          </p>

          <div className="grid grid-cols-2 gap-12 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-bold mb-1">12.5k+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest font-black">Properties Managed</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">98%</p>
              <p className="text-white/60 text-sm uppercase tracking-widest font-black">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

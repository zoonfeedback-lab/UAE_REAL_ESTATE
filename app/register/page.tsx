"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/AuthService";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "seller">("buyer");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    try {
      const name = `${firstName} ${lastName}`;
      const result = await AuthService.register({ name, email, password, role });
      
      if (result.success) {
        router.push("/login");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsPending(false);
    }
  };


  return (
    <main className="flex min-h-screen">
      {/* Left Side: Registration Form */}
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Create an account</h1>
            <p className="text-gray-500 text-lg">Join the most exclusive real estate network.</p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-4 py-4 rounded-xl border border-input-border bg-input-bg text-foreground transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-4 rounded-xl border border-input-border bg-input-bg text-foreground transition-all duration-200"
                  required
                />
              </div>
            </div>
            
            {/* Role Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Choose Account Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                    role === "buyer"
                      ? "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/5"
                      : "border-gray-100 bg-white text-gray-400 hover:border-primary/30"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${role === "buyer" ? "bg-primary text-white" : "bg-gray-100"}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <span className="font-bold">Buyer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("seller")}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-300 ${
                    role === "seller"
                      ? "border-primary bg-primary/5 text-primary shadow-lg shadow-primary/5"
                      : "border-gray-100 bg-white text-gray-400 hover:border-primary/30"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${role === "seller" ? "bg-primary text-white" : "bg-gray-100"}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <span className="font-bold">Seller</span>
                </button>
              </div>
            </div>



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
                  Register Account
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

            Divider
            {/* <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200"></span>
              </div>
              <div className="relative flex justify-center text-sm uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-gray-400">Or sign up with</span>
              </div>
            </div> */}

            {/* Google Signup */}
            {/* <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-foreground font-bold py-4 rounded-xl transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign up with Google
            </button> */}
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-500 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline transition-all">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Hero Image Placeholder */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

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
            Join the World&apos;s <br /> Elite Property Network
          </h2>
          <p className="text-xl text-white/80 max-w-lg mb-12 font-medium">
            Register today and get early access to off-market luxury listings in Dubai and London.
          </p>

          <div className="grid grid-cols-2 gap-12 border-t border-white/20 pt-8">
            <div>
              <p className="text-3xl font-bold mb-1">5.2k+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest font-black">Agents Registered</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">Top 1%</p>
              <p className="text-white/60 text-sm uppercase tracking-widest font-black">Global Network</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

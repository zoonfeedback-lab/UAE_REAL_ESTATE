"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/app/actions";
import { useActionState } from "react";

export default function LoginPage() {
  const [state, action, isPending] = useActionState(signIn, null);

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
          <form action={action} className="space-y-6">
            {state?.error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                {state.error}
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
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200"></span>
              </div>
              <div className="relative flex justify-center text-sm uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-foreground font-bold py-4 rounded-xl transition-all duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.67l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
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

"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ToastType = "success" | "error" | "info" | "warning" | "loading";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Global Toast Manager to allow calls from non-React files (like axios.ts)
let globalShowToast: (message: string, type: ToastType) => void = () => {};

export const toast = {
  success: (msg: string) => globalShowToast(msg, "success"),
  error: (msg: string) => globalShowToast(msg, "error"),
  info: (msg: string) => globalShowToast(msg, "info"),
  warning: (msg: string) => globalShowToast(msg, "warning"),
  loading: (msg: string) => globalShowToast(msg, "loading"),
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto-remove after 4 seconds (except for loading)
    if (type !== "loading") {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    }
  }, []);

  // Expose to global manager
  useEffect(() => {
    globalShowToast = showToast;
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`
              pointer-events-auto
              flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl
              animate-in slide-in-from-right fade-in duration-300
              backdrop-blur-xl border border-white/20
              ${t.type === "success" ? "bg-emerald-500 text-white" : ""}
              ${t.type === "error" ? "bg-red-500 text-white" : ""}
              ${t.type === "info" ? "bg-primary text-white" : ""}
              ${t.type === "warning" ? "bg-amber-500 text-white" : ""}
              ${t.type === "loading" ? "bg-slate-800 text-white" : ""}
            `}
          >
            {/* Icons */}
            {t.type === "loading" && (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {t.type === "success" && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
            )}
            {t.type === "error" && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
            )}

            <span className="font-bold text-sm tracking-tight">{t.message}</span>
            
            <button 
              onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
              className="ml-2 hover:opacity-70 transition-opacity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

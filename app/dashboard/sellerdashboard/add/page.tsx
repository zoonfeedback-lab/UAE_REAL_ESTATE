"use client";

import { useState } from "react";

export default function AddPropertyPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex justify-between items-center bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">List New Property</h2>
          <p className="text-gray-500 font-medium">Step {step} of 3: Property Details</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-2 w-8 rounded-full ${s <= step ? "bg-primary" : "bg-gray-100"}`}></div>
          ))}
        </div>
      </div>

      <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Property Title</label>
            <input type="text" placeholder="e.g. Skyline Penthouse" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Price ($)</label>
            <input type="number" placeholder="5,000,000" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Description</label>
          <textarea rows={4} placeholder="Describe the luxury features..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold resize-none"></textarea>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {["Bedrooms", "Bathrooms", "Area (sqft)"].map((label) => (
            <div key={label} className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{label}</label>
              <input type="number" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white outline-none transition-all font-bold" />
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-50 flex justify-end gap-4">
          <button className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition-all">Cancel</button>
          <button onClick={() => setStep(2)} className="bg-primary hover:bg-primary-hover text-white font-bold px-12 py-4 rounded-2xl shadow-xl shadow-primary/30 transition-all active:scale-95">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

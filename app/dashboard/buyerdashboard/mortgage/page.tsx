"use client";

import { useState } from "react";

export default function MortgageCalculatorPage() {
  const [amount, setAmount] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(30);

  // Simple monthly payment calculation
  const p = amount - downPayment;
  const r = rate / 100 / 12;
  const n = years * 12;
  const monthlyPayment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">Mortgage Calculator</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-primary mb-4">Property Price ($)</label>
            <input 
              type="range" min="100000" max="5000000" step="10000"
              value={amount} onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="mt-2 text-2xl font-black text-gray-900">${amount.toLocaleString()}</div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-primary mb-4">Down Payment ($)</label>
            <input 
              type="range" min="10000" max={amount} step="5000"
              value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="mt-2 text-2xl font-black text-gray-900">${downPayment.toLocaleString()}</div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-primary mb-2">Interest Rate (%)</label>
              <input 
                type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-primary mb-2">Loan Term (Years)</label>
              <select 
                value={years} onChange={(e) => setYears(Number(e.target.value))}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold focus:outline-none focus:border-primary"
              >
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="bg-primary p-12 rounded-[2.5rem] text-white shadow-2xl shadow-primary/30 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold opacity-80 mb-2">Estimated Monthly Payment</h3>
            <div className="text-6xl font-black mb-10 tracking-tighter">
              ${Math.round(monthlyPayment).toLocaleString()}
              <span className="text-xl opacity-60 ml-2">/mo</span>
            </div>
            
            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex justify-between items-center">
                <span className="font-bold opacity-70">Loan Amount</span>
                <span className="font-black">${p.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold opacity-70">Total Interest</span>
                <span className="font-black">${Math.round((monthlyPayment * n) - p).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-white text-primary font-bold py-5 rounded-[1.5rem] mt-12 hover:scale-105 active:scale-95 transition-all shadow-xl">
            Get Pre-Approved Now
          </button>
        </div>
      </div>
    </div>
  );
}

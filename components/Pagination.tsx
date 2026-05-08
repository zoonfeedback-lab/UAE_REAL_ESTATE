export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 py-12">
      <button className="p-3 border-2 border-gray-100 rounded-xl text-gray-400 hover:border-primary hover:text-primary transition-all active:scale-90 hover:shadow-md cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-90 cursor-pointer">1</button>
      <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 text-gray-600 font-bold rounded-xl hover:border-primary hover:text-primary transition-all active:scale-90 hover:shadow-md cursor-pointer">2</button>
      <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 text-gray-600 font-bold rounded-xl hover:border-primary hover:text-primary transition-all active:scale-90 hover:shadow-md cursor-pointer">3</button>
      
      <span className="px-2 text-gray-400 font-bold">...</span>
      
      <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 text-gray-600 font-bold rounded-xl hover:border-primary hover:text-primary transition-all active:scale-90 hover:shadow-md cursor-pointer">12</button>

      <button className="p-3 border-2 border-gray-100 rounded-xl text-gray-400 hover:border-primary hover:text-primary transition-all active:scale-90 hover:shadow-md cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

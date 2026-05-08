export default function FiltersSidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-8 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm h-fit sticky top-24">
      {/* Location */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Location</h4>
        <input
          type="text"
          defaultValue="New York, NY"
          className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary transition-all"
        />
      </div>

      {/* Property Type */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Property Type</h4>
        <div className="space-y-3">
          {["Apartment", "Villa", "Mansion", "Townhouse"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked={type === "Apartment"}
                className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary transition-all"
              />
              <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900">Price Range</h4>
          <span className="text-xs font-black text-primary">$1M - $10M</span>
        </div>
        <div className="relative pt-2">
          <div className="h-1.5 bg-gray-100 rounded-full w-full">
            <div className="absolute h-1.5 bg-primary rounded-full left-0 right-1/4"></div>
          </div>
          <div className="absolute -top-1 left-3/4 w-4 h-4 bg-primary rounded-full shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>
          <div className="flex justify-between mt-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span>$1M</span>
            <span>$20M</span>
          </div>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Bedrooms</h4>
        <div className="grid grid-cols-4 gap-2">
          {["Any", "3+", "4+", "5+"].map((count) => (
            <button
              key={count}
              className={`py-3 text-xs font-bold rounded-xl border-2 transition-all ${
                count === "3+"
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-gray-100 text-gray-600 hover:border-primary hover:text-primary"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* Area */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Area (SQ FT)</h4>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Min"
            className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary transition-all"
          />
          <input
            type="text"
            placeholder="Max"
            className="w-full px-4 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-900 font-medium focus:outline-none focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 space-y-4">
        <button className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
          Apply Filters
        </button>
        <button className="w-full py-4 text-gray-500 font-bold hover:text-gray-900 transition-all">
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

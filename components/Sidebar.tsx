"use client";

interface SidebarProps {
  onTypeChange: (type: string) => void;
  activeType: string;
}

export default function Sidebar({ onTypeChange, activeType }: SidebarProps) {
  const categories = ["Tất cả", "SUV", "Sedan", "Pickup", "Hatchback", "MPV", "Coupe"];
  
  return (
    <div className="w-full mb-8">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-red-600 rounded-full"></span>
        Dòng xe phổ biến
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => onTypeChange(cat)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm hover:shadow-md border ${
              activeType === cat 
                ? "bg-red-600 text-white border-red-600" 
                : "bg-white text-gray-700 border-gray-200 hover:border-red-600 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
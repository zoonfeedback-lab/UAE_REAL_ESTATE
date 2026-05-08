"use client";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-start justify-end p-6 pointer-events-none">
      {/* Backdrop - lighter so we can still see the dashboard */}
      <div 
        className="fixed inset-0 bg-gray-900/40 pointer-events-auto animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Small Compact Modal */}
      <div className="relative w-80 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 pointer-events-auto animate-in slide-in-from-top-4 duration-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-red-50 p-2 rounded-xl text-red-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            </div>
            <h3 className="font-black text-gray-900">Logout?</h3>
          </div>
          
          <p className="text-sm text-gray-500 font-medium">Are you sure you wanna log out?</p>
          
          <div className="flex gap-2">
            <button 
              onClick={onConfirm}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-black py-3 rounded-xl transition-all active:scale-95 uppercase tracking-widest"
            >
              Yes
            </button>
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-500 text-xs font-black py-3 rounded-xl transition-all uppercase tracking-widest"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

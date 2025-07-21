

import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { MdDelete } from "react-icons/md";


export default function SearchOverlay({ isOpen, onClose, placeholder = "Search..." }) {

  const tips = [
  'Try "JHERS APRIL2024"',
  'Search "JHERS JAN2023"',
  'Look for "JHERS OCT2022"',
  'Example: "JHERS JULY2021"',
  'Try keywords like "JHERS DEC2020"',
];

const [tipIndex, setTipIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
  }, 2000); // change every 2 seconds

  return () => clearInterval(interval);
}, []);






  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClear = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-2xl mx-4 mt-16 sm:mt-24">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Search Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholder}
              className="flex-1 text-lg bg-transparent border-none outline-none placeholder:text-gray-400"
            />
            {searchValue && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Clear search"
              >
                <MdDelete className="h-4 w-4 text-gray-600 cursor-pointer transition-transform duration-300 hover:-translate-y-1" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-700 rounded-full transition-colors ml-2 cursor-pointer"
              aria-label="Close search"
            >
              <X className="h-5 w-5 text-gray-400 hover:opacity-70 " />
            </button>
          </div>

          {/* Search Content */}
          <div className="max-h-96 overflow-y-auto">
            {searchValue ? (
              <div className="p-6 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 font-IBMPlexSans">Search for "{searchValue}"</p>
                <p className="text-sm font-IBMPlexSans">Start typing to see results appear here</p>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 font-IBMPlexSans">Quick Search</p>
<p className="text-sm text-gray-600 font-medium transition-all duration-500 font-IBMPlexSans">
  {tips[tipIndex]}
</p>

                {/* Quick Actions */}
                <div className="mt-8 text-left">
                  <h3 className="text-sm font-medium text-gray-700 mb-3 font-IBMPlexSans">Quick Actions</h3>
                  <div className="space-y-2">
                    {['Recently Viewed Papers', 'Popular items', 'Trending topics'].map((action, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                        onClick={() => setSearchValue(action)}
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 bg-gray-50 text-xs text-gray-500 flex justify-between">
            <span>Press ESC to close</span>
            <span>Enter to search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

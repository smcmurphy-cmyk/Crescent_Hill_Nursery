import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  cartCount: number;
  onCartClick: () => void;
}

export const FloralFlourish = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 120" 
    className={`${className} text-white opacity-95 mr-2 -mt-1`}
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Main Crescent Vine */}
    <path d="M45 10 C 20 20, 10 60, 25 100" />
    <path d="M48 15 C 25 25, 15 65, 30 105" strokeWidth="0.8" />
    
    {/* Small Sketchy Flowers and Leaves along the vine */}
    <path d="M22 25 L 15 20 M22 25 L 28 22" /> {/* Top leaf */}
    <circle cx="22" cy="25" r="1.5" fill="currentColor" />
    
    <path d="M14 45 Q 8 40, 5 50 Q 12 55, 14 45" strokeWidth="0.8" /> {/* Flower petal 1 */}
    <circle cx="16" cy="48" r="1" fill="currentColor" />
    
    <path d="M12 70 L 4 75 M12 70 L 8 62" /> {/* Middle sprout */}
    
    <path d="M25 90 Q 30 110, 45 115" /> {/* Bottom curve */}
    
    {/* Tiny dots for that hand-drawn look */}
    <circle cx="35" cy="15" r="0.8" fill="currentColor" />
    <circle cx="10" cy="55" r="0.8" fill="currentColor" />
    <circle cx="15" cy="85" r="0.8" fill="currentColor" />
    <circle cx="40" cy="112" r="0.8" fill="currentColor" />
  </svg>
);

export const Logo = ({ size = "text-4xl" }: { size?: string }) => (
  <div className="flex items-center">
    <FloralFlourish className="h-12 w-12 sm:h-14 sm:w-14" />
    <span className={`font-script ${size} whitespace-nowrap logo-shadow leading-none pt-2`}>
      Crescent Hill Nursery
    </span>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Our Plants', value: Page.CATALOG },
    { label: 'Services', value: Page.SERVICES },
    { label: 'Newsletter', value: Page.NEWSLETTER },
    { label: 'About Us', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-crescent-green text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setPage(Page.HOME)}
          >
            <Logo size="text-3xl sm:text-5xl" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 hover:text-crescent-accent ${
                  currentPage === item.value ? 'text-crescent-accent border-b border-crescent-accent' : 'text-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Desktop Cart Button */}
            <button 
              onClick={onCartClick}
              className="relative p-2 ml-4 text-crescent-accent hover:text-white transition-colors group"
              aria-label="View shopping cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-crescent-light text-crescent-green text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions (Cart + Toggle) */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={onCartClick}
              className="relative p-3 text-crescent-accent hover:text-white focus:outline-none"
              aria-label="View shopping cart"
            >
              <ShoppingCart size={26} />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-crescent-light text-crescent-green text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-crescent-green/10">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-crescent-green border-t border-white/5 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 text-base font-medium transition-colors ${
                  currentPage === item.value ? 'text-crescent-accent bg-black/10' : 'text-white hover:bg-black/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
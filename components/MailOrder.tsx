import React from 'react';
import { 
  ChevronLeft, 
  CheckCircle, 
  Plus, 
  X as LucideX, 
  ShoppingCart, 
  Package, 
  ArrowRight 
} from 'lucide-react';
import { Page, FloralArrangement } from '../types';
import { FLORAL_ARRANGEMENTS } from '../constants';

interface MailOrderPageProps {
  setPage: (page: Page) => void;
  cart: FloralArrangement[];
  addToCart: (item: FloralArrangement) => void;
  removeFromCart: (index: number) => void;
  cartTotal: number;
  finalTotal: number;
  isMobileCartOpen: boolean;
  setIsMobileCartOpen: (isOpen: boolean) => void;
  lastAddedItem: string | null;
}

export const MailOrderPage: React.FC<MailOrderPageProps> = ({ 
  setPage, 
  cart, 
  addToCart, 
  removeFromCart, 
  cartTotal, 
  finalTotal, 
  isMobileCartOpen, 
  setIsMobileCartOpen, 
  lastAddedItem 
}) => (
    <div className="bg-stone-50 py-4 md:py-16">
      <div className="max-w-7xl mx-auto px-4 relative">
        <button onClick={() => setPage(Page.SERVICES)} className="flex items-center gap-2 text-stone-500 hover:text-crescent-green mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Services
        </button>
        
        {/* Added Notification Toast for feedback on mobile/desktop */}
        {lastAddedItem && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-crescent-green text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
            <CheckCircle size={20} className="text-crescent-accent" />
            <span className="text-sm font-bold">Added {lastAddedItem}</span>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 mb-8 md:mb-0">
          <div className="md:flex min-h-[500px] md:h-[750px] relative">
            
            {/* LEFT SIDE: Items (Scrollable) */}
            <div className={`w-full md:w-1/2 flex flex-col bg-stone-50 border-r border-stone-100 ${isMobileCartOpen ? 'hidden md:flex' : 'flex'}`}>
              <div className="p-6 md:p-8 bg-crescent-green text-white shrink-0">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-1 md:mb-2">Signature Arrangements</h2>
                <p className="text-emerald-100 text-xs md:text-sm opacity-80">Shipped fresh from our hill to your door.</p>
              </div>
              <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4">
                {FLORAL_ARRANGEMENTS.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex gap-4 group">
                    <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-lg overflow-hidden">
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-serif font-bold text-base md:text-lg text-gray-900">{item.name}</h3>
                        <span className="text-crescent-green font-bold text-xs md:text-sm bg-emerald-50 px-2 py-0.5 rounded">${item.price}</span>
                      </div>
                      <p className="text-[10px] md:text-xs text-stone-500 leading-relaxed line-clamp-2">{item.description}</p>
                      <button 
                        onClick={() => addToCart(item)}
                        className="mt-2 text-[10px] font-bold uppercase tracking-widest text-crescent-accent hover:text-crescent-green flex items-center gap-1 transition-colors"
                      >
                        <Plus size={10} /> Add to Selection
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Cart Drawer (Mobile slide-up or Desktop fixed side) */}
            <div className={`
              w-full md:w-1/2 p-6 md:p-10 bg-white flex flex-col
              fixed inset-0 z-50 md:relative md:z-auto md:translate-y-0
              ${isMobileCartOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
              transition-transform duration-300 ease-in-out
            `}>
              {/* Mobile Close Button */}
              <button 
                onClick={() => setIsMobileCartOpen(false)}
                className="md:hidden absolute top-6 right-6 p-2 bg-stone-100 rounded-full text-stone-500 hover:text-stone-900 transition-colors"
              >
                <LucideX size={24} />
              </button>

              <div className="mb-6 md:mb-8 flex items-center justify-between border-b border-stone-100 pb-4 pr-12 md:pr-0">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                  <ShoppingCart className="text-crescent-green" size={24} />
                  Your Selection
                </h2>
                <span className="bg-crescent-light text-crescent-green px-3 py-1 rounded-full text-xs font-bold">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>

              <div className="flex-grow overflow-y-auto pr-2 space-y-3 mb-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-stone-300 space-y-4">
                    <Package size={48} strokeWidth={1} />
                    <p className="text-sm font-light italic">Your box is currently empty...</p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex items-center justify-between group py-2 border-b border-stone-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-stone-100 overflow-hidden">
                          <img src={item.imageUrl} className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-stone-700">{item.name}</p>
                          <p className="text-[10px] text-stone-400 uppercase tracking-tighter">${item.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="p-1.5 text-stone-300 hover:text-red-400 transition-colors"
                      >
                        <LucideX size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-stone-50 rounded-2xl p-4 md:p-6 border border-stone-100 mt-auto">
                <div className="space-y-2 mb-4 md:mb-6 text-xs md:text-sm text-stone-500">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-stone-700">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-emerald-600 font-bold">{cartTotal > 150 ? 'FREE' : '$15.00'}</span>
                  </div>
                  <div className="border-t border-stone-200 pt-3 flex justify-between items-center">
                    <span className="text-stone-900 font-serif font-bold text-lg">Total</span>
                    <span className="text-crescent-green font-bold text-xl md:text-2xl">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button 
                    disabled={cart.length === 0}
                    onClick={() => setPage(Page.CHECKOUT)}
                    className="w-full bg-crescent-green text-white font-bold py-4 rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm tracking-widest"
                  >
                    Proceed to Checkout <ArrowRight size={18} />
                  </button>
                  <p className="text-[9px] md:text-[10px] text-center text-stone-400">Secure payments powered by Stripe & PayPal. Shipped with care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
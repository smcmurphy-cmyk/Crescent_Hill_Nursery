import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  CreditCard, 
  Loader2 
} from 'lucide-react';
import { Page, FloralArrangement } from '../types';
import { calculateShippingRates, ShippingRate } from '../services/shippingService';
import { processStripePayment } from '../services/paymentService';

interface CheckoutPageProps {
  cart: FloralArrangement[];
  cartTotal: number;
  finalTotal: number;
  checkoutStep: 'info' | 'payment' | 'success';
  setCheckoutStep: (step: 'info' | 'payment' | 'success') => void;
  isProcessing: boolean;
  // We keep this prop for the parent to clear cart/state, but we will wrap it
  handlePayment: () => void; 
  setPage: (page: Page) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
  cart, 
  cartTotal, 
  finalTotal, 
  checkoutStep, 
  setCheckoutStep, 
  isProcessing: parentIsProcessing, // Rename to avoid conflict with local state if needed
  handlePayment: onPaymentSuccess, // Rename for clarity: parent handles success state
  setPage 
}) => {
  // --- STATE (Must be inside the component) ---
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([]);
  const [zipCode, setZipCode] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [localProcessing, setLocalProcessing] = useState(false);

  // --- PHASE 2: SHIPPING LOGIC ---
  const handleZipBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const zip = e.target.value;
    setZipCode(zip);

    // Only fetch if zip is 5 digits
    if (zip.length === 5) {
      setIsCalculating(true);
      try {
        // Assuming a standard 5lb weight for this MVP
        const rates = await calculateShippingRates(zip, 5);
        setShippingRates(rates);
      } catch (err) {
        console.error("Failed to calculate rates", err);
      } finally {
        setIsCalculating(false);
      }
    }
  };

  // --- PHASE 3: PAYMENT LOGIC ---
  const handleStripeSubmit = async () => {
    setLocalProcessing(true);
    try {
      // 1. Call the secure service
      await processStripePayment("tok_demo", { 
        amount: finalTotal, 
        currency: 'usd' 
      });
      
      // 2. If successful, tell the parent App to clear cart & show success
      onPaymentSuccess();
      
    } catch (error) {
      alert("Payment failed. Please try again.");
      setLocalProcessing(false);
    }
  };

  // Use local processing state OR parent state
  const isBusy = localProcessing || parentIsProcessing;

  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {checkoutStep !== 'success' && (
          <button 
            onClick={() => setPage(Page.MAIL_ORDER)} 
            className="flex items-center gap-2 text-stone-500 hover:text-crescent-green mb-8 transition-colors"
          >
            <ChevronLeft size={20} /> Return to Shop
          </button>
        )}

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
          {checkoutStep === 'success' ? (
            <div className="p-16 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald-100 text-crescent-green rounded-full flex items-center justify-center mb-8 animate-bounce">
                <ShieldCheck size={48} />
              </div>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Order Confirmed!</h1>
              <p className="text-stone-600 mb-8 max-w-md leading-relaxed">
                Thank you for supporting Crescent Hill Nursery. Your order <span className="font-bold text-crescent-green">#CH-{Math.floor(Math.random() * 90000) + 10000}</span> has been received and our team is preparing your selection for transit.
              </p>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mb-10 w-full max-w-sm">
                 <div className="flex items-center gap-4 text-left">
                    <Sparkles className="text-crescent-accent" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Sage's Tip</p>
                      <p className="text-sm text-stone-600 italic">"Ensure your new arrivals have plenty of indirect light for the first 48 hours to recover from their journey."</p>
                    </div>
                 </div>
              </div>
              <button 
                onClick={() => setPage(Page.HOME)}
                className="bg-crescent-green text-white font-bold px-10 py-4 rounded-lg hover:bg-black transition-all flex items-center gap-2"
              >
                Back to Home <ArrowRight size={20} />
              </button>
            </div>
          ) : (
            <div className="md:flex">
              {/* LEFT COLUMN: FORMS */}
              <div className="md:w-2/3 p-10 border-r border-stone-100">
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${checkoutStep === 'info' ? 'bg-crescent-green text-white' : 'bg-emerald-100 text-crescent-green'}`}>1</div>
                  <div className={`h-1 flex-grow rounded-full ${checkoutStep === 'payment' ? 'bg-emerald-100' : 'bg-stone-100'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${checkoutStep === 'payment' ? 'bg-crescent-green text-white' : 'bg-stone-100 text-stone-400'}`}>2</div>
                </div>

                {checkoutStep === 'info' ? (
                  <div className="animate-in fade-in duration-500">
                    <h2 className="text-2xl font-serif font-bold mb-8">Shipping Information</h2>
                    <form className="space-y-6" onSubmit={e => { e.preventDefault(); setCheckoutStep('payment'); }}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">First Name</label>
                          <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                          <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Last Name</label>
                          <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Email Address</label>
                        <input required type="email" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Shipping Address</label>
                        <input required type="text" className="w-full bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20 mb-3" placeholder="Street Address" />
                        <div className="grid grid-cols-3 gap-3">
                           <input required type="text" className="col-span-1 bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" placeholder="City" />
                           <input required type="text" className="col-span-1 bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" placeholder="State" />
                           
                           {/* --- UPDATED ZIP INPUT --- */}
                           <input 
                             required 
                             type="text" 
                             className="col-span-1 bg-stone-50 border border-stone-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" 
                             placeholder="Zip" 
                             onBlur={handleZipBlur}
                           />
                        </div>
                      </div>

                      {/* --- SHIPPING RATES PREVIEW --- */}
                      {isCalculating && <p className="text-xs text-crescent-green animate-pulse">Calculated shipping rates...</p>}
                      {shippingRates.length > 0 && (
                        <div className="mt-4 p-4 bg-stone-50 rounded-lg border border-stone-200">
                          <p className="text-xs font-bold uppercase text-stone-400 mb-2">Available Options for {zipCode}</p>
                          {shippingRates.map(rate => (
                            <div key={rate.id} className="flex justify-between text-sm py-1">
                               <span>{rate.provider} {rate.serviceName} ({rate.estimatedDays} days)</span>
                               <span className="font-bold">${rate.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <button type="submit" className="w-full bg-crescent-green text-white font-bold py-4 rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg">
                        Continue to Payment <ArrowRight size={18} />
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="animate-in slide-in-from-right-10 duration-500">
                    <h2 className="text-2xl font-serif font-bold mb-2">Payment Details</h2>
                    <p className="text-xs text-stone-400 mb-8 uppercase tracking-widest flex items-center gap-2">
                       <Lock size={12} /> Secure encrypted checkout
                    </p>

                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl mb-8 flex items-center gap-4">
                       <div className="bg-amber-100 p-2 rounded-full text-amber-600"><Sparkles size={18} /></div>
                       <p className="text-xs text-amber-800 font-medium">Test Mode: You can use any dummy card details for this demonstration.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="p-6 border border-stone-200 rounded-xl bg-stone-50 relative overflow-hidden group">
                         <div className="flex justify-between items-center mb-6">
                            <CreditCard className="text-stone-300" size={32} />
                            <div className="flex gap-1">
                               <div className="w-6 h-4 bg-stone-200 rounded-sm"></div>
                               <div className="w-6 h-4 bg-stone-200 rounded-sm"></div>
                               <div className="w-6 h-4 bg-stone-200 rounded-sm"></div>
                            </div>
                         </div>
                         <div className="space-y-4">
                           <div>
                              <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Card Number</label>
                              <div className="bg-white border border-stone-200 p-3 rounded flex items-center gap-3">
                                <span className="text-stone-300"><CreditCard size={18} /></span>
                                <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-transparent outline-none text-sm tracking-widest" />
                              </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                             <div>
                               <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">Expiry Date</label>
                               <input type="text" placeholder="MM/YY" className="w-full bg-white border border-stone-200 p-3 rounded outline-none text-sm" />
                             </div>
                             <div>
                               <label className="block text-[10px] font-bold text-stone-400 uppercase mb-1">CVC</label>
                               <input type="text" placeholder="123" className="w-full bg-white border border-stone-200 p-3 rounded outline-none text-sm" />
                             </div>
                           </div>
                         </div>
                      </div>

                      <div className="pt-4 space-y-4">
                        {/* --- UPDATED PAYMENT BUTTON --- */}
                        <button 
                          onClick={handleStripeSubmit}
                          disabled={isBusy}
                          className="w-full bg-crescent-green text-white font-bold py-5 rounded-lg hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-75 disabled:cursor-not-allowed group"
                        >
                          {isBusy ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              Processing Payment...
                            </>
                          ) : (
                            <>
                              Complete Purchase — ${finalTotal.toFixed(2)}
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <button onClick={() => setCheckoutStep('info')} className="w-full text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-600 transition-colors">
                          Go Back
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: SUMMARY */}
              <div className="md:w-1/3 bg-stone-50 p-10">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-8 pb-4 border-b border-stone-200">Summary</h3>
                <div className="space-y-4 mb-10 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-sm">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-white rounded border border-stone-200 overflow-hidden shrink-0">
                          <img src={item.imageUrl} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-stone-800 line-clamp-1">{item.name}</p>
                          <p className="text-xs text-stone-400">Floral Arrangement</p>
                        </div>
                      </div>
                      <span className="font-bold text-stone-600">${item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 text-xs text-stone-500 font-medium">
                  <div className="flex justify-between">
                    <span>Merchandise Subtotal</span>
                    <span className="text-stone-800">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & Handling</span>
                    <span className={cartTotal > 150 ? "text-emerald-600 font-bold" : "text-stone-800"}>
                      {cartTotal > 150 ? 'FREE' : '$15.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax</span>
                    <span className="text-stone-800">$0.00</span>
                  </div>
                  <div className="border-t border-stone-200 pt-6 mt-4 flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Total Due</p>
                      <p className="text-3xl font-serif font-bold text-crescent-green">${finalTotal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-4 rounded-xl bg-white border border-stone-200">
                  <div className="flex items-center gap-3 text-emerald-600 mb-2">
                    <ShieldCheck size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Growth Guarantee</span>
                  </div>
                  <p className="text-[9px] leading-relaxed text-stone-400">
                    Your plants are covered by our 30-day health guarantee. If they don't thrive, we'll replace them at no cost.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
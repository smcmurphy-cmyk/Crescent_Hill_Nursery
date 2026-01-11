import React, { useState, useMemo, useEffect } from 'react';
import { Page, FloralArrangement } from './types';
import { Navbar, Logo } from './components/Navbar';
import { PlantCatalog } from './components/PlantCatalog';
import { AiConsultant } from './components/AiConsultant';
import { DroughtResistance } from './components/DroughtResistance';
import { PlantingCalendar } from './components/PlantingCalendar';
import { NativeSpeciesMap } from './components/NativeSpeciesMap';
import { SustainabilityPolicy } from './components/SustainabilityPolicy';
import { AvailabilityList } from './components/AvailabilityList';
import { SERVICES, NEWSLETTER_ARCHIVES } from './constants';
import { EventsCalendar } from './components/EventsCalendar';
import { CheckoutPage } from './components/Checkout';  
import { MailOrderPage } from './components/MailOrder';

import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  Music,
  Phone,
  FileText,
  Truck,
  Users,
  CheckCircle,
  CalendarDays,
  Sparkles,
  Send,
  ExternalLink,
  BookOpen,
  ChevronLeft,
  Camera // <--- ADDED THIS IMPORT
} from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setPage] = useState<Page>(Page.HOME);
  const [cart, setCart] = useState<FloralArrangement[]>([]);
  const [checkoutStep, setCheckoutStep] = useState<'info' | 'payment' | 'success'>('info');
  const [isProcessing, setIsProcessing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<string | null>(null);

  // Social Links
  const INSTAGRAM_URL = "https://www.instagram.com/crescent_hill_nursery_?igsh=NTc4MTIwNjQ2TQ==";
  const FACEBOOK_URL = "https://www.facebook.com/crescenthillnursery/";
  const TIKTOK_URL = "#"; 

  // Cart logic
  const addToCart = (item: FloralArrangement) => {
    setCart(prev => [...prev, item]);
    setLastAddedItem(item.name);
    setTimeout(() => setLastAddedItem(null), 2000);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    if (cart.length <= 1) setIsMobileCartOpen(false);
  };

  const handleCartIconClick = () => {
    if (currentPage !== Page.MAIL_ORDER) {
      setPage(Page.MAIL_ORDER);
      setTimeout(() => setIsMobileCartOpen(true), 100);
    } else {
      setIsMobileCartOpen(true);
    }
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  const finalTotal = useMemo(() => {
    return cartTotal + (cartTotal > 150 || cartTotal === 0 ? 0 : 15);
  }, [cartTotal]);

  // Handle simulated payment
  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutStep('success');
      setCart([]); 
    }, 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  useEffect(() => {
    if (currentPage !== Page.CHECKOUT) {
      setCheckoutStep('info');
    }
    window.scrollTo(0, 0);
    if (currentPage !== Page.MAIL_ORDER) {
      setIsMobileCartOpen(false);
    }
  }, [currentPage]);

  const renderServiceIcon = (iconName: string) => {
    const iconProps = { size: 32, strokeWidth: 1.5 };
    switch (iconName) {
      case 'Package': return <Truck {...iconProps} />; 
      case 'Truck': return <Truck {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      default: return null;
    }
  };

  // --- SUB-COMPONENTS FOR PAGES ---

  const Hero = () => (
    <div className="relative h-[650px] w-full bg-stone-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-[20s] hover:scale-105 transform origin-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-crescent-green/95 via-crescent-green/40 to-transparent"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <span className="text-crescent-accent font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up text-sm">Est. 1998</span>
        <h1 className="text-6xl md:text-8xl font-serif text-white font-bold mb-6 leading-[0.9] max-w-4xl drop-shadow-2xl">
          Bring the <br/> 
          <span className="text-emerald-100 italic">Wild</span> Home.
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 max-w-2xl leading-relaxed font-light">
          Crescent Hill Nursery specializes in rare mediterranean species, sustainable gardening, and creating backyard sanctuaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <button 
            onClick={() => setPage(Page.CATALOG)}
            className="px-10 py-5 bg-crescent-accent text-crescent-green font-bold text-lg rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center shadow-xl transform hover:-translate-y-1"
          >
            Browse Our Collection <ArrowRight className="ml-3 h-5 w-5" />
          </button>
          <button 
            onClick={() => setPage(Page.AVAILABILITY)}
            className="px-10 py-5 border border-white/50 text-white font-bold text-lg rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center group"
          >
            <FileText className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
            Availability List
          </button>
        </div>
      </div>
    </div>
  );

  const NewsletterSection = ({ isFullPage = false }: { isFullPage?: boolean }) => (
    <div className={`py-20 ${isFullPage ? 'bg-stone-50' : 'bg-stone-100 border-y border-stone-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden mb-16">
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
             <Logo size="text-[200px]" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-crescent-light text-crescent-green rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Seasonal Wisdom
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-crescent-green mb-6">The Crescent Hill News</h2>
            <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">
              The Crescent Hill Nursery e-newsletter is our show of gratitude to the loyal market customers at our many events around the Central Coast. It features seasonal updates, featured plants, the "ask a nurseryman" section, and more. Join us to stay connected with our knowledgeable garden community.
            </p>
          </div>

          <div className="w-full md:w-auto min-w-[320px] shrink-0">
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center animate-in zoom-in duration-300">
                <div className="w-12 h-12 bg-crescent-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-crescent-green mb-2">Welcome to the Hill!</h3>
                <p className="text-stone-600 text-sm">Check your inbox for a special welcome gift from Sage.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
                  <input 
                    required 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full pl-12 pr-4 py-5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-crescent-green/20 outline-none transition-all shadow-inner text-stone-800"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-crescent-green text-white font-bold py-5 rounded-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-lg group"
                >
                  Subscribe Now <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest font-bold">Privacy first. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>

        {isFullPage && (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-stone-200"></div>
              <h3 className="text-3xl font-serif font-bold text-crescent-green flex items-center gap-3">
                <BookOpen className="text-crescent-accent" />
                Newsletter Archives
              </h3>
              <div className="h-px flex-grow bg-stone-200"></div>
            </div>

            <div className="space-y-20">
              {NEWSLETTER_ARCHIVES.map((archive) => (
                <div key={archive.year} className="relative">
                  <div className="flex items-center gap-4 mb-10">
                      <div className="bg-crescent-green text-white px-6 py-2 rounded-full text-xl font-serif font-bold shadow-lg z-10">
                        {archive.year}
                      </div>
                      <div className="h-px flex-grow bg-stone-200"></div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {archive.issues.map((issue, idx) => (
                      <a 
                        key={`${archive.year}-${idx}`}
                        href={issue.url}
                        className="group bg-white p-7 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-crescent-accent transition-all relative flex flex-col h-full"
                      >
                        <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none transform group-hover:scale-125 transition-transform duration-500">
                           <CalendarDays size={120} />
                        </div>

                        <div className="flex justify-between items-start mb-6">
                           <div className="flex flex-col">
                             <div className="text-[10px] font-bold text-crescent-accent uppercase tracking-[0.3em] mb-1">
                               Archive Issue
                             </div>
                             <div className="flex items-baseline gap-2">
                               <span className="text-2xl font-serif font-bold text-gray-900 leading-none">
                                 {issue.month}
                               </span>
                               <span className="text-lg font-serif italic text-stone-400">
                                 {archive.year}
                               </span>
                             </div>
                           </div>
                           <div className="bg-stone-50 p-2.5 rounded-2xl group-hover:bg-crescent-light transition-colors shadow-inner">
                             <ExternalLink size={18} className="text-stone-300 group-hover:text-crescent-green transition-colors" />
                           </div>
                        </div>

                        <div className="flex-grow">
                           <h4 className="font-serif font-bold text-stone-700 group-hover:text-crescent-green transition-colors text-xl mb-4 leading-snug">
                             {issue.title}
                           </h4>
                        </div>
                        
                        <div className="flex items-center gap-3 text-[11px] font-bold text-stone-400 uppercase tracking-widest pt-6 mt-6 border-t border-stone-100">
                           <span className="bg-stone-100 px-2 py-1 rounded text-stone-500 group-hover:bg-crescent-green group-hover:text-white transition-colors">
                             PDF
                           </span>
                           <span className="group-hover:text-crescent-green transition-colors flex items-center gap-2">
                             View reference <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                           </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center p-12 bg-stone-100 rounded-3xl border border-dashed border-stone-300">
               <BookOpen size={40} className="mx-auto mb-4 text-stone-300" />
               <p className="text-stone-500 font-serif italic text-lg">Looking for an older issue? <br/><span className="not-italic text-stone-400 text-sm font-sans uppercase font-bold tracking-widest cursor-pointer hover:text-crescent-green transition-colors">Request a specific archive &rarr;</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-serif font-bold text-crescent-green mb-6">Our Services</h2>
          <div className="h-1 w-20 bg-crescent-accent mx-auto mb-8"></div>
          <p className="text-stone-600 text-lg max-w-3xl mx-auto leading-relaxed">Beyond our plant catalog, we offer professional expertise to help your garden thrive in the local climate.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-16">
          {SERVICES.map((service) => (
            <button 
              key={service.id} 
              onClick={() => setPage(service.page)}
              className="group flex flex-col items-center text-center focus:outline-none transition-transform hover:-translate-y-2"
            >
              <div className="h-24 w-24 bg-crescent-green text-crescent-accent rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:bg-crescent-accent group-hover:text-crescent-green transition-all duration-500 transform group-hover:rotate-12 border-4 border-white">
                {renderServiceIcon(service.iconName)}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-5 group-hover:text-crescent-green transition-colors">{service.title}</h3>
              <p className="text-stone-600 leading-loose mb-6">{service.description}</p>
              <span className="text-crescent-accent font-bold uppercase tracking-widest text-sm border-b-2 border-crescent-accent group-hover:text-crescent-green group-hover:border-crescent-green transition-all">Learn More &rarr;</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const WholesalePage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleWholesaleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const data = {
        "Company Name": formData.get('companyName'),
        "Contact Name": formData.get('contactName'), 
        "License ID": formData.get('licenseId'),     
        "Email": formData.get('email'),
        "Type": formData.get('businessType'),
        "Date": new Date().toLocaleString()
      };

      try {
        // REPLACE WITH YOUR ACTUAL DEPLOYED SCRIPT URL
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQ4wIVJktiZjjMPi7yCI_YU8dab4Md0ZMUtCy-tcgh0mmh9hd-W00hPAcKYGEJb15H/exec";

        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          body: JSON.stringify(data),
          mode: "no-cors"
        });

        alert("Application Received! We will review your license and contact you shortly.");
        form.reset();
      } catch (error) {
        console.error("Error!", error);
        alert("Something went wrong. Please call us directly.");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <button onClick={() => setPage(Page.SERVICES)} className="flex items-center gap-2 text-stone-500 hover:text-crescent-green mb-8 transition-colors">
            <ChevronLeft size={20} /> Back to Services
          </button>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-crescent-accent font-bold uppercase tracking-widest text-sm mb-4 block">For Professionals</span>
              <h1 className="text-5xl font-serif font-bold text-crescent-green mb-8">Wholesale & Trade</h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">Crescent Hill Nursery partners with landscape architects, designers, and retailers to provide bulk quantities of rare Mediterranean and native species.</p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center gap-6">
                   <div className="bg-crescent-green text-white p-4 rounded-full"><Users size={24} /></div>
                   <div>
                      <h3 className="font-bold text-xl">Designer Discounts</h3>
                      <p className="text-stone-500">Tiered pricing based on volume for registered trade pros.</p>
                   </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center gap-6">
                   <div className="bg-crescent-green text-white p-4 rounded-full"><Truck size={24} /></div>
                   <div>
                      <h3 className="font-bold text-xl">Direct Delivery</h3>
                      <p className="text-stone-500">On-site delivery for large-scale landscaping projects.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <h2 className="text-3xl font-serif font-bold mb-8">Apply for Wholesale</h2>
              <form className="space-y-6" onSubmit={handleWholesaleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Company Name</label>
                  <input required name="companyName" type="text" className="w-full bg-stone-50 border border-stone-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Contact Name</label>
                  <input required name="contactName" type="text" placeholder="Who should we ask for?" className="w-full bg-stone-50 border border-stone-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input required name="email" type="email" className="w-full bg-stone-50 border border-stone-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Trade License ID</label>
                  <input required name="licenseId" type="text" className="w-full bg-stone-50 border border-stone-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Primary Business Type</label>
                  <select name="businessType" className="w-full bg-stone-50 border border-stone-200 p-4 rounded-lg outline-none focus:ring-2 focus:ring-crescent-green/20">
                     <option value="Landscape Architecture">Landscape Architecture</option>
                     <option value="Garden Center">Garden Center</option>
                     <option value="Interior Styling">Interior Styling</option>
                     <option value="Event Planning">Event Planning</option>
                  </select>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-crescent-green text-white font-bold py-5 rounded-lg hover:bg-black transition-all disabled:opacity-50 disabled:cursor-wait"
                >
                  {isSubmitting ? 'Sending Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- ADDED THIS CONSTANT FOR YOUR NEW DESIGNS SECTION ---
  const designs = [
    {
      id: 1,
      title: 'The Coastal Respite',
      location: 'Big Sur, CA',
      description: 'A wind-swept bluff restoration using exclusively native succulents and grasses.',
      image: 'https://images.unsplash.com/photo-1558904541-e46c2ef80e68?auto=format&fit=crop&w=800&q=80',
      rotation: 'md:-rotate-6',
      translate: 'md:-translate-y-12 md:-translate-x-8',
    },
    {
      id: 2,
      title: 'Carmel Courtyard',
      location: 'Carmel Valley, CA',
      description: 'Drought-tolerant hardscaping meets soft english lavender and sage.',
      image: 'https://images.unsplash.com/photo-1598902168919-63a2386926f7?auto=format&fit=crop&w=800&q=80',
      rotation: 'md:rotate-3',
      translate: 'md:translate-y-8 z-10',
    },
    {
      id: 3,
      title: 'Modern Zen',
      location: 'Santa Cruz, CA',
      description: 'Clean lines and river stones framing ancient olive trees.',
      image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=800&q=80',
      rotation: 'md:-rotate-3',
      translate: 'md:translate-x-8 md:-translate-y-4',
    }
  ];

  const ConsultationPage = () => (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button onClick={() => setPage(Page.SERVICES)} className="flex items-center gap-2 text-stone-500 hover:text-crescent-green mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Services
        </button>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-12 text-center bg-crescent-green text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Garden Consultation</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">Expert eyes on your local soil. We help you choose the right plants for a lifelong garden.</p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-12 border-r border-stone-100">
               <h2 className="text-2xl font-serif font-bold mb-8">What we cover:</h2>
               <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                   <div className="bg-amber-100 text-amber-700 p-2 rounded-full mt-1"><CheckCircle size={18} /></div>
                   <div>
                     <span className="font-bold block">Soil Analysis</span>
                     <span className="text-stone-500">Testing pH and nutrients to ensure plant compatibility.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="bg-amber-100 text-amber-700 p-2 rounded-full mt-1"><CheckCircle size={18} /></div>
                   <div>
                     <span className="font-bold block">Microclimate Mapping</span>
                     <span className="text-stone-500">Identifying wind tunnels, sun traps, and frost pockets.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="bg-amber-100 text-amber-700 p-2 rounded-full mt-1"><CheckCircle size={18} /></div>
                   <div>
                     <span className="font-bold block">Species Selection</span>
                     <span className="text-stone-500">Curating a list of resilient, beautiful plants for your zone.</span>
                   </div>
                 </li>
               </ul>
            </div>
            <div className="p-12 bg-stone-50/50">
               <h2 className="text-2xl font-serif font-bold mb-8">Book a session</h2>
               <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-inner">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <Clock className="text-crescent-green" />
                       <span className="font-bold">Next available: Tuesday</span>
                    </div>
                    <span className="text-crescent-green font-bold">$250 / hr</span>
                  </div>
                  <button className="w-full bg-crescent-accent text-crescent-green font-bold py-4 rounded-lg hover:bg-white border-2 border-transparent hover:border-crescent-accent transition-all shadow-md">
                    Schedule In-Person Consultation
                  </button>
                  <p className="text-center mt-6 text-sm text-stone-400">Consultation fees are 25% refundable as store credit towards your first major plant purchase above 500$.</p>
               </div>
            </div>
          </div>
        </div>
        
        {/* New "Our Designs" Section */}
          <div className="py-20 border-t border-stone-200">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-crescent-light text-crescent-green rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Camera size={14} /> Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-crescent-green mb-4">Our Designs</h2>
              <p className="text-stone-500 max-w-xl mx-auto italic">Crafting ecological landscapes that honor the spirit of the Central Coast.</p>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-4 md:h-[500px]">
              {designs.map((design) => (
                <div 
                  key={design.id}
                  className={`
                    w-full md:w-[350px] bg-white p-4 shadow-2xl rounded-sm border border-stone-100
                    transition-all duration-500 ease-out cursor-pointer
                    md:absolute group hover:z-50 hover:scale-105 hover:rotate-0
                    ${design.rotation} ${design.translate}
                  `}
                >
                  <div className="aspect-[4/5] overflow-hidden mb-4 relative">
                    <img 
                      src={design.image} 
                      alt={design.title} 
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-xl text-gray-900">{design.title}</h3>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-crescent-accent flex items-center gap-1">
                        <MapPin size={10} /> {design.location}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed font-hand text-lg pt-2">{design.description}</p>
                  </div>
                  
                  {/* Interactive Seal/Badge on Hover */}
                  <div className="absolute -bottom-4 -right-4 bg-crescent-green text-white w-16 h-16 rounded-full flex flex-col items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 rotate-12 shadow-xl border-4 border-white">
                    <span className="text-[8px] font-bold leading-none uppercase">Project</span>
                    <span className="text-sm font-serif font-bold italic leading-none">Done</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 md:mt-12 text-center">
               <p className="text-stone-400 text-sm max-w-lg mx-auto leading-relaxed">
                 Every property tells a story. During our consultation, we'll discuss how to transform your specific landscape into a functional, sustainable work of art like those shown above.
               </p>
            </div>
          </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-crescent-light rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                 alt="Nursery grounds" 
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
          <div>
            <span className="text-crescent-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-5xl font-serif font-bold text-crescent-green mb-8">Rooted in the Rolling Hills</h2>
            <div className="prose prose-xl prose-stone text-stone-600 space-y-6">
              <p className="leading-relaxed">
                Founded in 1998, Crescent Hill Nursery began with a simple mission: to cultivate and share the resilient beauty of Mediterranean and native flora.
              </p>
              <p className="leading-relaxed">
                Our nursery is more than a marketplace; it's a living laboratory where we test varieties for drought tolerance, beauty, and ecological contribution. 
              </p>
              <p className="leading-relaxed">
                Whether you're a professional landscaper or a first-time gardener, we're here to provide the specimens and the knowledge you need to build a legacy in your own backyard.
              </p>
              <div className="pt-8 flex items-center gap-6">
                 <div className="h-px flex-1 bg-stone-200"></div>
                 <div className="font-script text-3xl text-crescent-green">The Krupa Family</div>
                 <div className="h-px flex-1 bg-stone-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="bg-stone-50 py-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <div className="bg-white rounded-sm shadow-2xl flex flex-col md:flex-row w-full overflow-hidden">
          <div className="md:w-5/12 p-12 bg-crescent-green text-white">
            <h2 className="text-4xl font-serif font-bold mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="mt-1 text-crescent-accent shrink-0" size={24} />
                <p className="text-stone-100 text-lg">1234 Green Valley Road<br/>Crescent Hill, CA 94000</p>
              </div>
              <div className="flex items-start gap-5">
                <Clock className="mt-1 text-crescent-accent shrink-0" size={24} />
                <div className="text-stone-100">
                  <p className="font-bold text-white mb-2">Visitor Hours:</p>
                  <p>By appointment only</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Phone className="mt-1 text-crescent-accent shrink-0" size={24} />
                <p className="text-stone-100 text-lg">(831) 246-1128</p>
              </div>
              <div className="flex items-start gap-5">
                <Mail className="mt-1 text-crescent-accent shrink-0" size={24} />
                <p className="text-stone-100 text-lg">nathan@crescenthill.com</p>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
               <div className="flex space-x-6">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
                    <Instagram />
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
                    <Facebook />
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
                    <Music size={24} />
                  </a>
               </div>
            </div>
          </div>
          
          <div className="md:w-7/12 p-12 bg-white">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-stone-50 rounded-sm border-stone-200 focus:ring-2 focus:ring-crescent-green/20 p-3 border outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-stone-50 rounded-sm border-stone-200 focus:ring-2 focus:ring-crescent-green/20 p-3 border outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-stone-50 rounded-sm border-stone-200 focus:ring-2 focus:ring-crescent-green/20 p-3 border outline-none">
                   <option>General Inquiry</option>
                   <option>Plant Availability</option>
                   <option>Landscaping Consultation</option>
                   <option>Wholesale Question</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full bg-stone-50 rounded-sm border-stone-200 focus:ring-2 focus:ring-crescent-green/20 p-3 border outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-crescent-green text-white font-bold py-4 rounded-sm hover:bg-black transition-all shadow-lg transform active:scale-95">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-stone-900 text-stone-500 py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div 
            className="flex items-center mb-6 cursor-pointer text-white" 
            onClick={() => setPage(Page.HOME)}
          >
            <Logo size="text-3xl" />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Cultivating community and nature since 1998. Your local source for rare mediterranean flora and expert garden wisdom.
          </p>
          <div className="flex space-x-5">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
              <Facebook size={18} />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-crescent-accent transition-colors">
              <Music size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setPage(Page.CATALOG)} className="hover:text-crescent-accent transition-colors">Plant Index</button></li>
            <li><button onClick={() => setPage(Page.SERVICES)} className="hover:text-crescent-accent transition-colors">Nursery Services</button></li>
            <li><button onClick={() => setPage(Page.ABOUT)} className="hover:text-crescent-accent transition-colors">Our History</button></li>
            <li><button onClick={() => setPage(Page.CONTACT)} className="hover:text-crescent-accent transition-colors">Wholesale Inquiry</button></li>
            <li><button onClick={() => setPage(Page.AVAILABILITY)} className="hover:text-crescent-accent transition-colors">Availability List</button></li>
            <li><button onClick={() => setPage(Page.EVENTS)} className="hover:text-crescent-accent transition-colors">Events Calendar</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Knowledge</h4>
          <ul className="space-y-3 text-sm">
            <li><button onClick={() => setPage(Page.DROUGHT_RESISTANCE)} className="hover:text-crescent-accent transition-colors">Drought Resistance Guide</button></li>
            <li><button onClick={() => setPage(Page.PLANTING_CALENDAR)} className="hover:text-crescent-accent transition-colors">Seasonal Planting Calendar</button></li>
            <li><button onClick={() => setPage(Page.NATIVE_SPECIES_MAP)} className="hover:text-crescent-accent transition-colors">Native Species Map</button></li>
            <li><button onClick={() => setPage(Page.SUSTAINABILITY_POLICY)} className="hover:text-crescent-accent transition-colors text-left">Sustainability Policy</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Stay Informed</h4>
          <p className="text-xs mb-4">Receive monthly tips from our horticulturists and notice of new seasonal inventory.</p>
          <form className="flex" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="bg-stone-800 border-none px-4 py-3 rounded-l-sm text-sm w-full outline-none focus:ring-1 focus:ring-crescent-accent" />
            <button className="bg-crescent-accent text-crescent-green px-4 py-3 rounded-r-sm font-bold text-sm hover:bg-white transition-colors">
              Join
            </button>
          </form>
          <p className="mt-8 text-[10px] uppercase tracking-widest">&copy; {new Date().getFullYear()} Crescent Hill Nursery.</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero />
            <div className="py-24 px-4 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <span className="text-crescent-accent font-bold uppercase tracking-widest text-sm mb-2 block">Featured Collections</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-crescent-green">Seasonal Highlights</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-10">
                 <div onClick={() => setPage(Page.CATALOG)} className="cursor-pointer group relative h-[450px] rounded-sm overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80" alt="Native Trees" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white text-3xl font-serif font-bold mb-2">Native Trees</h3>
                      <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ancient species for modern landscapes.</p>
                    </div>
                 </div>
                 <div onClick={() => setPage(Page.CATALOG)} className="cursor-pointer group relative h-[450px] rounded-sm overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1416870230247-3b4a33c47051?auto=format&fit=crop&w=800&q=80" alt="Resilient Shrubs" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white text-3xl font-serif font-bold mb-2">Resilient Shrubs</h3>
                      <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Foundation plants for year-round structure.</p>
                    </div>
                 </div>
                 <div onClick={() => setPage(Page.CATALOG)} className="cursor-pointer group relative h-[450px] rounded-sm overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=800&q=80" alt="Meadow Perennials" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-white text-3xl font-serif font-bold mb-2">Meadow Perennials</h3>
                      <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vibrant blooms that return season after season.</p>
                    </div>
                 </div>
              </div>
            </div>
            <NewsletterSection />
            <ServicesPage />
          </>
        );
      case Page.CATALOG:
        return <PlantCatalog />;
      case Page.SERVICES:
        return <ServicesPage />;
      case Page.NEWSLETTER:
        return <NewsletterSection isFullPage={true} />;
      case Page.DROUGHT_RESISTANCE:
        return <DroughtResistance />;
      case Page.PLANTING_CALENDAR:
        return <PlantingCalendar />;
      case Page.NATIVE_SPECIES_MAP:
        return <NativeSpeciesMap />;
      case Page.SUSTAINABILITY_POLICY:
        return <SustainabilityPolicy />;
      case Page.AVAILABILITY:
        return <AvailabilityList onBack={() => setPage(Page.HOME)} />;
      case Page.MAIL_ORDER:
        // IMPORTANT: We now use the new component and pass the required props
        return (
          <MailOrderPage 
            setPage={setPage}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartTotal={cartTotal}
            finalTotal={finalTotal}
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
            lastAddedItem={lastAddedItem}
          />
        );
      case Page.WHOLESALE:
        return <WholesalePage />;
      case Page.CONSULTATION:
        return <ConsultationPage />;
      case Page.ABOUT:
        return <AboutPage />;
      case Page.CONTACT:
        return <ContactPage />;
      case Page.EVENTS:
      return <EventsCalendar onBack={() => setPage(Page.HOME)} />;
      case Page.CHECKOUT:
        // IMPORTANT: We now use the new component and pass the required props
        return (
          <CheckoutPage 
            cart={cart}
            cartTotal={cartTotal}
            finalTotal={finalTotal}
            checkoutStep={checkoutStep}
            setCheckoutStep={setCheckoutStep}
            isProcessing={isProcessing}
            handlePayment={handlePayment}
            setPage={setPage}
          />
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-crescent-accent selection:text-crescent-green">
      <Navbar 
        currentPage={currentPage} 
        setPage={setPage} 
        cartCount={cart.length} 
        onCartClick={handleCartIconClick}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <AiConsultant />
      <Footer />
    </div>
  );
};

export default App;
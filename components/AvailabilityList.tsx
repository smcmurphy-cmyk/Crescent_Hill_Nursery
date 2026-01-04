import React, { useState } from 'react';
import { AvailabilityItem } from '../types';
import { Search, Printer, Calendar, ArrowLeft, Download } from 'lucide-react';

const AVAILABILITY_DATA: AvailabilityItem[] = [
  { name: "Abutilon 'Crouching Tiger' stk.", price1g: "$6.75", price2g: "$17.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon 'Frieda' stk.", price1g: "$6.75", price2g: "$17.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon megapotamicum stk.", price1g: "$6.75", price2g: "$17.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon 'Nabob' stk.", price1g: "$6.75", condition: "medium-full, buds, some blm" },
  { name: "Abutilon pictum 'Mardi Gras' stk.", price1g: "$6.75", price2g: "$17.75", condition: "*full, buds/blm" },
  { name: "Abutilon pictum 'Thompsonii' stk.", price1g: "$6.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon 'Red Dragon' NEW 2022 CHN Intro", price1g: "$6.75", price2g: "$17.75", condition: "*full, buds/blm" },
  { name: "Abutilon 'Rip Van Periwinkle' NEW 2023 CHN Intro", price1g: "$6.75", price2g: "$17.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon 'Strawberry Ice' NEW 2023 CHN Intro", price1g: "$6.75", condition: "*medium-full, buds/blm" },
  { name: "Abutilon 'Tiger Eye' stk.", price1g: "$6.75", price2g: "$17.75", condition: "*full, buds/blm" },
  { name: "Abutilon 'Savitzii' stk.", price1g: "$6.75", condition: "medium, bright" },
  { name: "Abutilon 'Victor Reiter' stk.", price2g: "$17.75", condition: "medium-full, buds/blm" },
  { name: "Abutilon 'Voodoo' stk.", price1g: "$6.75", condition: "medium-full, buds/blm" },
  { name: "Acacia cognata 'Cousin Itt' PPAF", price1g: "$9.95", price2g: "$24.95", price5g: "$59.95 (15g)", condition: "medium" },
  { name: "Acacia c. 'Purple Rain' NEW 2023 CHN Intro", price5g: "$29.95", condition: "*full, nice foliage" },
  { name: "Acacia c. 'Wavy Gravy' NEW 2023 CHN Intro", price1g: "$10.95", price5g: "$29.95", condition: "medium, nice foliage" },
  { name: "Acacia covenyi stk.", price1g: "$9.95", price2g: "$24.95", condition: "medium" },
  { name: "Acacia vestita stk.", price5g: "$22.95", condition: "medium" },
  { name: "Aeonium simsii", price1g: "$6.95", condition: "full, some buds" },
  { name: "Agave attenuata", price1g: "$7.95", price5g: "$20.95", condition: "*full" },
  { name: "Agave attenuata 'Ray of Light' PP21,854", price1g: "$10.45", condition: "*prime, big" },
  { name: "Agave 'Blue Flame'", price1g: "$8.25", price2g: "$5.95 (6\")", condition: "*medium-full" },
  { name: "Agave 'Blue Glow'", price1g: "$10.45", price2g: "$6.25 (6\")", condition: "*medium-full" },
  { name: "Agave 'Snow Glow' variegated NEW 2025", price1g: "$14.95", price2g: "$24.95", condition: "*medium-full, bright" },
  { name: "Anigozanthos 'Bush Dawn'", price5g: "$19.95", condition: "medium-full" },
  { name: "Anigozanthos 'Kanga Burgundy'", price1g: "$8.95", price5g: "$19.95", condition: "**full, buds/blm" },
  { name: "Arctostaphylos manzanita 'Dr. Hurd'", price1g: "$7.95", condition: "small" },
  { name: "Asplenium antiquum 'Victoria'", price1g: "$7.25", condition: "full, great foliage" },
  { name: "Beschorneria yuccoides 'Flamingo Glow'", price1g: "$10.45", price2g: "$20.95", price5g: "$23.95", condition: "full, variegated" },
  { name: "Choisya ternata 'Sundance'", price1g: "$6.95", price5g: "$21.95", condition: "*full, great color" },
  { name: "Cordyline australis 'Charlie Boy' PP20,139", price5g: "$24.95", condition: "medium, nice color" },
  { name: "Grevillea 'Peaches and Cream' PP#18,035", price2g: "$79.95 (15g)", condition: "*full, some buds" },
  { name: "Leucadendron 'Ebony' PP 23,258", price5g: "$32.95", condition: "small-medium" },
  { name: "Mangave 'Praying Hands' PP34,508", price1g: "$14.95", price5g: "$34.95", condition: "*full, wow#100" },
  { name: "Protea cynaroides 'Mini King'", price5g: "$36.95", condition: "*medium, buds, some blm" },
  { name: "Yucca aloifolia 'Magenta Magic'", price1g: "$8.95", price2g: "$19.95", price5g: "$24.95", condition: "medium-full, purple" },
];

export const AvailabilityList: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = AVAILABILITY_DATA.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-stone-100 pb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500"
              aria-label="Back to Home"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-crescent-green">Nursery Availability</h1>
              <div className="flex items-center gap-2 text-stone-400 text-sm mt-1 uppercase tracking-widest font-bold">
                <Calendar size={14} /> Last Updated: 12/15/25
              </div>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <input
                type="text"
                placeholder="Filter by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-crescent-green/20 outline-none text-sm transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-stone-400" size={16} />
            </div>
            <button 
              onClick={() => window.print()}
              className="p-2 border border-stone-200 rounded-lg text-stone-500 hover:bg-stone-50 transition-colors"
              title="Print List"
            >
              <Printer size={20} />
            </button>
            <button 
              className="p-2 bg-crescent-green text-white rounded-lg hover:bg-emerald-800 transition-colors"
              title="Download PDF"
            >
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-8 flex items-start gap-4">
          <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg">
             <Calendar size={20} />
          </div>
          <div className="text-sm text-emerald-800">
            <p className="font-bold">Inventory Note:</p>
            <p className="opacity-90">Stock levels change daily. Please call <strong>(831) 246-1128</strong> to confirm availability before visiting. Wholesale customers must provide a valid resale certificate.</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200 text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
                <th className="px-6 py-4">Scientific Name</th>
                <th className="px-6 py-4">1gal Price</th>
                <th className="px-6 py-4">2gal Price</th>
                <th className="px-6 py-4">5gal Price</th>
                <th className="px-6 py-4">Condition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredData.map((item, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-stone-800 font-serif text-lg group-hover:text-crescent-green transition-colors">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-stone-500 font-medium">
                    {item.price1g || '—'}
                  </td>
                  <td className="px-6 py-4 text-stone-500 font-medium">
                    {item.price2g || '—'}
                  </td>
                  <td className="px-6 py-4 text-stone-500 font-medium">
                    {item.price5g || '—'}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-1 bg-stone-100 text-stone-500 rounded-md font-medium">
                      {item.condition}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-stone-400 italic">
                    No items found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-stone-400 text-xs flex flex-col items-center gap-4">
          <p className="max-w-md">Crescent Hill Nursery Inc. • Watsonville, CA • Ph. 831-246-1128 • www.crescenthillnursery.com</p>
          <div className="h-px w-24 bg-stone-200"></div>
          <p className="uppercase tracking-widest font-bold">Bringing the Wild Home since 1998</p>
        </div>
      </div>
    </div>
  );
};
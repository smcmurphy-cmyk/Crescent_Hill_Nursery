import React, { useState, useMemo } from 'react';
import { Plant } from '../types';
import { MOCK_PLANTS } from '../constants';
import { Search, Sun, Droplets, X } from 'lucide-react';

export const PlantCatalog: React.FC = () => {
  // Initialize filter as empty string to show all plants by default
  const [filter, setFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredPlants = useMemo(() => {
    return MOCK_PLANTS.filter(plant => {
      // If no letter filter is active (empty string), show all that match search
      const matchesLetter = filter === '' || plant.name.toUpperCase().startsWith(filter);
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            plant.botanicalName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLetter && matchesSearch;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [filter, searchTerm]);

  const handleLetterClick = (letter: string) => {
    // Toggle filter: if same letter is clicked, clear the filter
    setFilter(prev => prev === letter ? '' : letter);
  };

  return (
    <div className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-crescent-green mb-4">Our Collection</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Browse our plant index alphabetically or search for specific species below.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Alphabet Grid - Wrapping enabled to avoid scrollbar */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 w-full max-w-2xl">
            {ALPHABET.map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`px-2 py-1.5 min-w-[2.2rem] rounded-md text-xs font-bold transition-all ${
                  filter === letter 
                    ? 'bg-crescent-green text-white shadow-md transform scale-110 z-10' 
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-stone-300 bg-crescent-light text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-crescent-green focus:border-transparent transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-3.5 text-crescent-green h-5 w-5" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3.5 text-stone-400 hover:text-stone-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* List View */}
        <div className="space-y-4">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900">{plant.name}</h3>
                    <p className="text-sm text-stone-500 italic">{plant.botanicalName}</p>
                  </div>
                  
                  <p className="text-stone-600 text-sm mb-3 line-clamp-2">{plant.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-stone-500">
                    <div className="flex items-center gap-1">
                      <Sun size={14} className="text-amber-500" />
                      <span>{plant.sunNeeds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Droplets size={14} className="text-blue-400" />
                      <span>{plant.waterNeeds} Water</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2 shrink-0">
                   <button 
                     onClick={() => setSelectedPlant(plant)}
                     className="relative w-24 h-24 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:ring-2 hover:ring-crescent-green transition-all group"
                     aria-label={`View details for ${plant.name}`}
                   >
                     <img 
                       src={plant.imageUrl} 
                       alt={plant.name} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                   </button>
                   <span className="text-xs font-semibold text-crescent-green tracking-wide cursor-pointer hover:underline" onClick={() => setSelectedPlant(plant)}>
                     VIEW DETAILS
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-stone-100 border-dashed">
            <p className="text-xl text-stone-500 font-serif">
              {filter ? `No plants found starting with "${filter}".` : "No plants match your search."}
            </p>
            <button 
              onClick={() => {setFilter(''); setSearchTerm('');}}
              className="mt-4 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full font-bold transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Plant Details Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setSelectedPlant(null)}>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-600 hover:text-stone-900 hover:bg-white transition-colors z-10 shadow-sm"
            >
              <X size={24} />
            </button>
            
            <div className="h-72 sm:h-96 w-full relative">
              <img 
                src={selectedPlant.imageUrl} 
                alt={selectedPlant.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                 <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">{selectedPlant.name}</h2>
                 <p className="text-emerald-200 italic text-xl">{selectedPlant.botanicalName}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full flex items-center gap-2 text-sm font-semibold border border-amber-100">
                    <Sun size={16} /> {selectedPlant.sunNeeds}
                </span>
                 <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full flex items-center gap-2 text-sm font-semibold border border-blue-100">
                    <Droplets size={16} /> {selectedPlant.waterNeeds} Water
                </span>
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold border border-emerald-100">
                    {selectedPlant.category}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-3 font-serif">About this plant</h3>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {selectedPlant.description}
                  </p>
                </div>
                
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 flex items-center justify-between">
                   <div>
                      <p className="text-sm text-stone-500 mb-1">Price per unit</p>
                      <div className="text-3xl font-bold text-crescent-green">
                          ${selectedPlant.price.toFixed(2)}
                      </div>
                   </div>
                   <button className="px-8 py-3 bg-crescent-green text-white rounded-lg font-bold hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20">
                      Add to Wishlist
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
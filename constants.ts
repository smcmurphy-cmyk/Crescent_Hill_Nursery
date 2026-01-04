import { Plant, PlantCategory, Service, Page, FloralArrangement, NewsletterArchive } from './types';

export const FLORAL_ARRANGEMENTS: FloralArrangement[] = [
  {
    id: 'fa1',
    name: 'Desert Dawn',
    price: 85,
    description: 'A striking mix of Proteas, structural succulents, and silvery eucalyptus foliage.',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa2',
    name: 'Rolling Hills Meadow',
    price: 65,
    description: 'Vibrant native wildflowers and delicate grasses inspired by our local landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1596541230113-68f44d852a4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa3',
    name: 'Crescent Moon White',
    price: 95,
    description: 'Elegant white lilies, moon-white roses, and deep green bay laurel leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa4',
    name: 'Mediterranean Mist',
    price: 75,
    description: 'Fragrant French lavender, dried olive branches, and pale blue thistle.',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa5',
    name: 'California Poppy Glow',
    price: 55,
    description: 'A cheerful sun-drenched bunch of seasonal orange and yellow native blooms.',
    imageUrl: 'https://images.unsplash.com/photo-1591886111029-7c858b2913e2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa6',
    name: 'The Heirloom Garden',
    price: 110,
    description: 'Our most lush selection: antique roses, heavy-headed peonies, and trailing ivy.',
    imageUrl: 'https://images.unsplash.com/photo-1464306311820-53247f482c3d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa7',
    name: 'Sage & Stone',
    price: 45,
    description: 'A minimalist architectural piece featuring air plants, river stones, and sage stems.',
    imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa8',
    name: 'Wildwood Whimsy',
    price: 80,
    description: 'Woodland ferns, moss-covered branches, and delicate white starflowers.',
    imageUrl: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa9',
    name: 'Protea Power',
    price: 125,
    description: 'A grand centerpiece featuring three King Proteas and dramatic native foliage.',
    imageUrl: 'https://images.unsplash.com/photo-1595131838586-4447bc79f539?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fa10',
    name: 'Coastal Breeze',
    price: 60,
    description: 'Sea-blue flax lily berries, salt-tolerant grasses, and driftwood accents.',
    imageUrl: 'https://images.unsplash.com/photo-1563241527-3004b7be0fab?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOCK_PLANTS: Plant[] = [
  // ABUTILON
  { id: 'abutilon-crouching-tiger', name: "Abutilon 'Crouching Tiger'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 24, description: 'Striking variegated foliage with pendulous orange-red lantern flowers.', imageUrl: 'https://picsum.photos/seed/ab-ct/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'abutilon-frieda', name: "Abutilon 'Frieda'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 24, description: 'Lovely flowering maple with soft pink-apricot blooms.', imageUrl: 'https://picsum.photos/seed/ab-f/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-megapotamicum', name: 'Abutilon megapotamicum', botanicalName: 'Abutilon megapotamicum', category: PlantCategory.SHRUBS, price: 22, description: 'Trailing flowering maple with unusual red and yellow bell-shaped flowers.', imageUrl: 'https://picsum.photos/seed/ab-m/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-nabob', name: "Abutilon 'Nabob'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 26, description: 'One of the darkest flowering maples, featuring deep crimson flowers.', imageUrl: 'https://picsum.photos/seed/ab-n/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-mardi-gras', name: "Abutilon pictum 'Mardi Gras'", botanicalName: 'Abutilon pictum', category: PlantCategory.SHRUBS, price: 25, description: 'Vibrant variegated foliage with orange-veined flowers.', imageUrl: 'https://picsum.photos/seed/ab-mg/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-thompsonii', name: "Abutilon pictum 'Thompsonii'", botanicalName: 'Abutilon pictum', category: PlantCategory.SHRUBS, price: 25, description: 'Yellow-mottled leaves and salmon-colored bell flowers.', imageUrl: 'https://picsum.photos/seed/ab-th/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-red-dragon', name: "Abutilon 'Red Dragon'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 24, description: 'Large, fiery red flowers on a robust, upright shrub.', imageUrl: 'https://picsum.photos/seed/ab-rd/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-rip-van-periwinkle', name: "Abutilon 'Rip Van Periwinkle'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 26, description: 'Unique double-flowered variety with ruffled petals.', imageUrl: 'https://picsum.photos/seed/ab-rvp/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-strawberry-ice', name: "Abutilon 'Strawberry Ice'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 24, description: 'Soft pink flowers that fade to white, resembling a summer treat.', imageUrl: 'https://picsum.photos/seed/ab-si/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-tiger-eye', name: "Abutilon 'Tiger Eye'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 28, description: 'Incredible veining on orange-yellow petals, like a glowing eye.', imageUrl: 'https://picsum.photos/seed/ab-te/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-savitzii', name: "Abutilon 'Savitzii'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 26, description: 'Most famous for its nearly white variegated foliage.', imageUrl: 'https://picsum.photos/seed/ab-sv/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-victor-reiter', name: "Abutilon 'Victor Reiter'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 27, description: 'Giant orange bell flowers on a vigorous grower.', imageUrl: 'https://picsum.photos/seed/ab-vr/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'abutilon-voodoo', name: "Abutilon 'Voodoo'", botanicalName: 'Abutilon hybridum', category: PlantCategory.SHRUBS, price: 26, description: 'Intense dark red blooms and dark stems.', imageUrl: 'https://picsum.photos/seed/ab-vd/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },

  // ACACIA
  { id: 'acacia-cousin-itt', name: "Acacia cognata 'Cousin Itt'", botanicalName: 'Acacia cognata', category: PlantCategory.SHRUBS, price: 38, description: 'Iconic low-mounding foliage, perfect for modern gardens.', imageUrl: 'https://picsum.photos/seed/ac-itt/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'acacia-purple-rain', name: "Acacia 'Purple Rain'", botanicalName: 'Acacia hybrid', category: PlantCategory.SHRUBS, price: 42, description: 'New growth emerges with a distinct purple hue.', imageUrl: 'https://picsum.photos/seed/ac-pr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'acacia-wavy-gravy', name: "Acacia 'Wavy Gravy'", botanicalName: 'Acacia cognata', category: PlantCategory.SHRUBS, price: 38, description: 'Compact shrub with unique rippled, wavy leaf textures.', imageUrl: 'https://picsum.photos/seed/ac-wg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'acacia-covenyi', name: 'Acacia covenyi', botanicalName: 'Acacia covenyi', category: PlantCategory.TREES, price: 45, description: 'Blue Bush Acacia with striking silvery-blue foliage.', imageUrl: 'https://picsum.photos/seed/ac-cov/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'acacia-vestita', name: 'Acacia vestita', botanicalName: 'Acacia vestita', category: PlantCategory.SHRUBS, price: 35, description: 'Hairy Wattle with weeping branches and soft gray foliage.', imageUrl: 'https://picsum.photos/seed/ac-ves/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // AGAVE & SUCCULENTS
  { id: 'aeonium-simsii', name: 'Aeonium simsii', botanicalName: 'Aeonium simsii', category: PlantCategory.PERENNIALS, price: 15, description: 'Small clustering succulent with ciliate leaf margins.', imageUrl: 'https://picsum.photos/seed/ae-sim/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'agapanthus-dwarf-purple', name: 'Agapanthus dwarf dark purple', botanicalName: 'Agapanthus hybrid', category: PlantCategory.PERENNIALS, price: 18, description: 'Compact variety with intense deep purple flower clusters.', imageUrl: 'https://picsum.photos/seed/ag-dp/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'agave-ray-of-light', name: "Agave attenuata 'Ray of light'", botanicalName: 'Agave attenuata', category: PlantCategory.PERENNIALS, price: 45, description: 'Variegated Fox Tail Agave with white borders.', imageUrl: 'https://picsum.photos/seed/ag-rol/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'agave-blue-flame', name: "Agave 'Blue Flame'", botanicalName: 'Agave hybrid', category: PlantCategory.PERENNIALS, price: 45, description: 'Graceful blue-green leaves that curve like a flame.', imageUrl: 'https://picsum.photos/seed/ag-bf/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-snow-glow', name: "Agave 'Snow Glow'", botanicalName: 'Agave hybrid', category: PlantCategory.PERENNIALS, price: 55, description: 'Rare variety with a white glow on leaf edges.', imageUrl: 'https://picsum.photos/seed/ag-sg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-blue-waves', name: "Agave 'Blue Waves'", botanicalName: 'Agave hybrid', category: PlantCategory.PERENNIALS, price: 48, description: 'Ruffled blue leaves with a unique sculptural form.', imageUrl: 'https://picsum.photos/seed/ag-bw/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-confederate-rose', name: "Agave 'Confederate Rose'", botanicalName: 'Agave hybrid', category: PlantCategory.PERENNIALS, price: 42, description: 'Symmetrical rosette with broad blue-gray leaves.', imageUrl: 'https://picsum.photos/seed/ag-cr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-guadalajarana', name: 'Agave guadalajarana', botanicalName: 'Agave guadalajarana', category: PlantCategory.PERENNIALS, price: 40, description: 'Compact blue-gray agave with distinct terminal spines.', imageUrl: 'https://picsum.photos/seed/ag-guad/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-parryi', name: 'Agave parryi', botanicalName: 'Agave parryi', category: PlantCategory.PERENNIALS, price: 35, description: 'Classic Artichoke Agave with incredible cold hardiness.', imageUrl: 'https://picsum.photos/seed/ag-par/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-kichiokan', name: "Agave potatorum 'Kichiokan'", botanicalName: 'Agave potatorum', category: PlantCategory.PERENNIALS, price: 65, description: 'Japanese selection with beautiful variegation.', imageUrl: 'https://picsum.photos/seed/ag-kic/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-royal-flush', name: "Agave schidigera 'Royal Flush'", botanicalName: 'Agave schidigera', category: PlantCategory.PERENNIALS, price: 48, description: 'Striking filaments along variegated leaf edges.', imageUrl: 'https://picsum.photos/seed/ag-rf/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-snaggle-tooth', name: "Agave titanota 'Snaggle Tooth'", botanicalName: 'Agave titanota', category: PlantCategory.PERENNIALS, price: 85, description: 'Highly sought after variegated form of Titanota.', imageUrl: 'https://picsum.photos/seed/ag-st/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'agave-victoriae-reginae', name: 'Agave victoriae-reginae', botanicalName: 'Agave victoriae-reginae', category: PlantCategory.PERENNIALS, price: 45, description: 'Queen Victoria Agave with white geometric markings.', imageUrl: 'https://picsum.photos/seed/ag-vr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'aloe-delta-lights', name: "Aloe 'Delta Lights'", botanicalName: 'Aloe hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Broad, zigzag patterned leaves in gray-green.', imageUrl: 'https://picsum.photos/seed/al-dl/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'aloe-juvenna', name: 'Aloe juvenna', botanicalName: 'Aloe juvenna', category: PlantCategory.PERENNIALS, price: 12, description: 'Tiger Tooth Aloe with spiked, triangular leaves.', imageUrl: 'https://picsum.photos/seed/al-juv/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // ANIGOZANTHOS (KANGAROO PAW)
  { id: 'kp-bush-dawn', name: "Anigozanthos 'Bush Dawn'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 20, description: 'Golden yellow flowers on tall, sturdy stems.', imageUrl: 'https://picsum.photos/seed/kp-bd/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-bush-sunset', name: "Anigozanthos 'Bush Sunset'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 20, description: 'Brilliant red flowers that attract hummingbirds.', imageUrl: 'https://picsum.photos/seed/kp-bs/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-celebrations-carnivale', name: "Anigozanthos 'Celebrations Carnivale'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Purple and green flowers for a festive garden look.', imageUrl: 'https://picsum.photos/seed/kp-cc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-dwarf-pink', name: "Anigozanthos 'Dwarf Pink'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 18, description: 'Compact variety with soft pink velvety flowers.', imageUrl: 'https://picsum.photos/seed/kp-dp/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-joe-joe-yellow', name: "Anigozanthos 'Joe Joe Yellow'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 18, description: 'Cheery yellow flowers on a dwarf-sized plant.', imageUrl: 'https://picsum.photos/seed/kp-jjy/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-kanga-burgundy', name: "Anigozanthos 'Kanga Burgundy'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 19, description: 'Rich burgundy wine-colored flower clusters.', imageUrl: 'https://picsum.photos/seed/kp-kb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-kanga-cherry', name: "Anigozanthos 'Kanga Cherry'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 19, description: 'Vivid cherry-red flowers on compact foliage.', imageUrl: 'https://picsum.photos/seed/kp-kc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-kanga-pink', name: "Anigozanthos 'Kanga Pink'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 19, description: 'Pastel pink blooms perfect for smaller spaces.', imageUrl: 'https://picsum.photos/seed/kp-kp/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-kanga-yellow', name: "Anigozanthos 'Kanga Yellow'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 19, description: 'Bright yellow flowers that glow in the sunlight.', imageUrl: 'https://picsum.photos/seed/kp-ky/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-landscape-lilac', name: "Anigozanthos 'Landscape Lilac'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 24, description: 'Tall lilac flowers ideal for border plantings.', imageUrl: 'https://picsum.photos/seed/kp-ll/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-landscape-tall-rosie', name: "Anigozanthos 'Landscape Tall Rosie Red'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 24, description: 'Stately tall red spikes for dramatic height.', imageUrl: 'https://picsum.photos/seed/kp-ltr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-regal-velvet', name: "Anigozanthos 'Regal Velvet'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Green and red flowers with a velvet-like texture.', imageUrl: 'https://picsum.photos/seed/kp-rv/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-ruby-velvet', name: "Anigozanthos 'Ruby Velvet'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Deep ruby red flowers on disease-resistant plants.', imageUrl: 'https://picsum.photos/seed/kp-rub/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-tenacity', name: "Anigozanthos 'Tenacity'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 20, description: 'Hardy variety with beautiful yellow-gold flowers.', imageUrl: 'https://picsum.photos/seed/kp-ten/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-tequila-sunrise', name: "Anigozanthos 'Tequila Sunrise'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Bicolor orange and yellow flowers.', imageUrl: 'https://picsum.photos/seed/kp-ts/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kp-yellow-gem', name: "Anigozanthos 'Yellow Gem'", botanicalName: 'Anigozanthos hybrid', category: PlantCategory.PERENNIALS, price: 22, description: 'Reliable yellow flowers that bloom for months.', imageUrl: 'https://picsum.photos/seed/kp-yg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },

  // ARCTOSTAPHYLOS (MANZANITA)
  { id: 'man-carmel-sur', name: "Arctostaphylos edmundsii 'Carmel Sur'", botanicalName: 'Arctostaphylos edmundsii', category: PlantCategory.NATIVES, price: 28, description: 'Groundcover manzanita with small, clean leaves.', imageUrl: 'https://picsum.photos/seed/man-cs/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'man-dr-hurd', name: "Arctostaphylos manzanita 'Dr.Hurd'", botanicalName: 'Arctostaphylos manzanita', category: PlantCategory.NATIVES, price: 55, description: 'A large, architectural manzanita with mahogany bark.', imageUrl: 'https://picsum.photos/seed/man-dh/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'man-vancouver-jade', name: "Arctostaphylos uva-ursi 'Vancouver Jade'", botanicalName: 'Arctostaphylos uva-ursi', category: PlantCategory.NATIVES, price: 24, description: 'Disease-resistant Kinnikinnick groundcover.', imageUrl: 'https://picsum.photos/seed/man-vj/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'man-uva-ursi', name: 'Arctostaphylos uva-ursi', botanicalName: 'Arctostaphylos uva-ursi', category: PlantCategory.NATIVES, price: 22, description: 'Traditional Kinnikinnick with red berries in fall.', imageUrl: 'https://picsum.photos/seed/man-uu/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'man-emerald-carpet', name: "Arctostaphylos 'Emerald Carpet'", botanicalName: 'Arctostaphylos hybrid', category: PlantCategory.NATIVES, price: 26, description: 'Lush green groundcover that thrives in coastal gardens.', imageUrl: 'https://picsum.photos/seed/man-ec/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },

  // FERNS
  { id: 'fern-hurricane', name: "Asplenium antiquem 'Hurricane'", botanicalName: 'Asplenium antiquem', category: PlantCategory.PERENNIALS, price: 22, description: 'Bird\'s Nest Fern with a unique spiral growth habit.', imageUrl: 'https://picsum.photos/seed/fern-h/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'fern-victoria', name: "Asplenium antiquem 'Victoria'", botanicalName: 'Asplenium antiquem', category: PlantCategory.PERENNIALS, price: 22, description: 'Bird\'s Nest Fern with wavy leaf margins.', imageUrl: 'https://picsum.photos/seed/fern-v/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'fern-scolopendrium', name: 'Asplenium scolopendrium', botanicalName: 'Asplenium scolopendrium', category: PlantCategory.PERENNIALS, price: 18, description: 'Hart\'s Tongue Fern with strap-like undivided fronds.', imageUrl: 'https://picsum.photos/seed/fern-s/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'fern-angustifolia', name: 'Asplenium scolopendrium Angustifolia', botanicalName: 'Asplenium scolopendrium', category: PlantCategory.PERENNIALS, price: 20, description: 'Narrow-leaved Hart\'s Tongue Fern.', imageUrl: 'https://picsum.photos/seed/fern-sa/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'fern-lady-red', name: "Athyrium filix-femina 'Lady in Red'", botanicalName: 'Athyrium filix-femina', category: PlantCategory.PERENNIALS, price: 18, description: 'Delicate fern with striking red stems.', imageUrl: 'https://picsum.photos/seed/fern-lir/800/800', sunNeeds: 'Shade', waterNeeds: 'High' },
  { id: 'fern-dwarf-tree', name: 'Blechnum brasiliensis "Dwarf tree fern"', botanicalName: 'Blechnum brasiliensis', category: PlantCategory.SHRUBS, price: 32, description: 'Red emerging fronds that turn green as they age.', imageUrl: 'https://picsum.photos/seed/fern-dtf/800/800', sunNeeds: 'Part Shade', waterNeeds: 'High' },
  { id: 'fern-gibbum', name: 'Blechnum gibbum', botanicalName: 'Blechnum gibbum', category: PlantCategory.SHRUBS, price: 28, description: 'Silver Lady Fern with a neat palm-like appearance.', imageUrl: 'https://picsum.photos/seed/fern-bg/800/800', sunNeeds: 'Part Shade', waterNeeds: 'High' },
  { id: 'fern-spicant', name: 'Blechnum spicant', botanicalName: 'Blechnum spicant', category: PlantCategory.PERENNIALS, price: 18, description: 'Deer Fern, native to the Pacific Northwest.', imageUrl: 'https://picsum.photos/seed/fern-spic/800/800', sunNeeds: 'Shade', waterNeeds: 'High' },

  // MORE PLANTS...
  { id: 'astelia-banksii', name: 'Astelia banksii', botanicalName: 'Astelia banksii', category: PlantCategory.PERENNIALS, price: 32, description: 'Coastal Astelia with silver-green arching foliage.', imageUrl: 'https://picsum.photos/seed/ast-b/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'astelia-silver-spear', name: "Astelia chathamica 'Silver Spear'", botanicalName: 'Astelia chathamica', category: PlantCategory.PERENNIALS, price: 38, description: 'Architectural plant with stunning metallic silver leaves.', imageUrl: 'https://picsum.photos/seed/ast-ss/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'athanasia-pinnata', name: 'Athanasia pinnata', botanicalName: 'Athanasia pinnata', category: PlantCategory.SHRUBS, price: 24, description: 'Couture Bush with fine foliage and yellow button flowers.', imageUrl: 'https://picsum.photos/seed/ath-p/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'beschorneria-septentrionalis', name: 'Beschorneria septentrionalis', botanicalName: 'Beschorneria septentrionalis', category: PlantCategory.PERENNIALS, price: 28, description: 'False Red Yucca with soft green leaves.', imageUrl: 'https://picsum.photos/seed/bes-sep/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'beschorneria-flamingo-glow', name: "Beschorneria yuccoides 'Flamingo Glow'", botanicalName: 'Beschorneria yuccoides', category: PlantCategory.PERENNIALS, price: 45, description: 'Variegated foliage with neon pink flower stalks.', imageUrl: 'https://picsum.photos/seed/bes-fg/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'calandrinia-spectabilis', name: 'Calandrinia spectabilis', botanicalName: 'Calandrinia spectabilis', category: PlantCategory.PERENNIALS, price: 16, description: 'Cistanthe with succulent leaves and magenta flowers.', imageUrl: 'https://picsum.photos/seed/cal-spec/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'cannomois-grandis', name: 'Cannomois grandis', botanicalName: 'Cannomois grandis', category: PlantCategory.TREES, price: 55, description: 'Bellreed Restion with bamboo-like stalks.', imageUrl: 'https://picsum.photos/seed/can-g/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'carex-evergold', name: "Carex oshimensis 'Evergold'", botanicalName: 'Carex oshimensis', category: PlantCategory.PERENNIALS, price: 14, description: 'Popular variegated sedge for bright shade.', imageUrl: 'https://picsum.photos/seed/car-eg/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'carex-everillo', name: "Carex oshimensis 'Everillo'", botanicalName: 'Carex oshimensis', category: PlantCategory.PERENNIALS, price: 14, description: 'Bright lime-yellow foliage that lights up dark corners.', imageUrl: 'https://picsum.photos/seed/car-ei/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'carex-eversheen', name: "Carex oshimensis 'Eversheen'", botanicalName: 'Carex oshimensis', category: PlantCategory.PERENNIALS, price: 14, description: 'Deep green edges with a lime center.', imageUrl: 'https://picsum.photos/seed/car-es/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'carex-prairie-fire', name: "Carex testacea 'Prairie Fire'", botanicalName: 'Carex testacea', category: PlantCategory.PERENNIALS, price: 14, description: 'Orange-tipped foliage that looks like fire.', imageUrl: 'https://picsum.photos/seed/car-pf/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'ceanothus-dark-star', name: "Ceanothus 'Dark Star'", botanicalName: 'Ceanothus hybrid', category: PlantCategory.NATIVES, price: 32, description: 'Intense cobalt blue flowers on dark green foliage.', imageUrl: 'https://picsum.photos/seed/cea-ds/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'ceanothus-anchor-bay', name: "Ceanothus gloriosus 'Anchor Bay'", botanicalName: 'Ceanothus gloriosus', category: PlantCategory.NATIVES, price: 28, description: 'Sturdy groundcover with holly-like leaves.', imageUrl: 'https://picsum.photos/seed/cea-ab/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'ceanothus-diamond-heights', name: "Ceanothus griseus var. horizontalis 'Diamond Heights'", botanicalName: 'Ceanothus griseus', category: PlantCategory.NATIVES, price: 30, description: 'Stunning lime and dark green variegated groundcover.', imageUrl: 'https://picsum.photos/seed/cea-dh/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'ceanothus-hearstiorum', name: 'Ceanothus hearstiorum', botanicalName: 'Ceanothus hearstiorum', category: PlantCategory.NATIVES, price: 28, description: 'Flat-growing wild lilac with crinkled leaves.', imageUrl: 'https://picsum.photos/seed/cea-he/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'choisya-ternata', name: 'Choisya ternata', botanicalName: 'Choisya ternata', category: PlantCategory.SHRUBS, price: 22, description: 'Mexican Orange Blossom with fragrant white flowers.', imageUrl: 'https://picsum.photos/seed/cho-ter/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'choisya-sundance', name: "Choisya ternata 'Sundance'", botanicalName: 'Choisya ternata', category: PlantCategory.SHRUBS, price: 26, description: 'Golden-leaved variety of Mexican Orange.', imageUrl: 'https://picsum.photos/seed/cho-sun/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'chondropetalum-elephantinum', name: 'Chondropetalum elephantinum', botanicalName: 'Chondropetalum elephantinum', category: PlantCategory.PERENNIALS, price: 35, description: 'Large Cape Rush with dark banded stems.', imageUrl: 'https://picsum.photos/seed/chon-el/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'chondropetalum-tectorum', name: 'Chondropetalum tectorum', botanicalName: 'Chondropetalum tectorum', category: PlantCategory.PERENNIALS, price: 28, description: 'Small Cape Rush, ideal for smaller gardens.', imageUrl: 'https://picsum.photos/seed/chon-tec/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'chondropetalum-tectorum-dwarf', name: 'Chondropetalum tectorum dwarf form', botanicalName: 'Chondropetalum tectorum', category: PlantCategory.PERENNIALS, price: 30, description: 'A miniature version of the classic Cape Rush.', imageUrl: 'https://picsum.photos/seed/chon-td/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'chondropetalum-tectorum-red', name: 'Chondropetalum tectorum red bract form', botanicalName: 'Chondropetalum tectorum', category: PlantCategory.PERENNIALS, price: 32, description: 'Features beautiful red bracts at the joints.', imageUrl: 'https://picsum.photos/seed/chon-tr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'chorizema-bush-flame', name: "Chorizema 'Bush Flame'", botanicalName: 'Chorizema hybrid', category: PlantCategory.SHRUBS, price: 24, description: 'Neon orange and pink flowers on a small shrub.', imageUrl: 'https://picsum.photos/seed/chor-bf/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'chrysocephalum-silver-gold', name: "Chrysocephalum apiculatum 'Silver and Gold'", botanicalName: 'Chrysocephalum apiculatum', category: PlantCategory.PERENNIALS, price: 16, description: 'Silver foliage with golden button flowers.', imageUrl: 'https://picsum.photos/seed/chry-sg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // CORDYLINE
  { id: 'cordyline-cha-cha', name: "Cordyline 'Cha Cha'", botanicalName: 'Cordyline hybrid', category: PlantCategory.PERENNIALS, price: 28, description: 'Apricot-tinted foliage that changes with the light.', imageUrl: 'https://picsum.photos/seed/cord-cc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-charlie-boy', name: "Cordyline australis 'Charlie Boy'", botanicalName: 'Cordyline australis', category: PlantCategory.PERENNIALS, price: 32, description: 'Stunning purple and pink variegated Cordyline.', imageUrl: 'https://picsum.photos/seed/cord-cb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-coral', name: "Cordyline australis 'Coral'", botanicalName: 'Cordyline australis', category: PlantCategory.PERENNIALS, price: 30, description: 'Coral-pink striped leaves.', imageUrl: 'https://picsum.photos/seed/cord-cor/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-jive', name: "Cordyline australis 'Jive'", botanicalName: 'Cordyline australis', category: PlantCategory.PERENNIALS, price: 30, description: 'Yellow and green striped architectural plant.', imageUrl: 'https://picsum.photos/seed/cord-jiv/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-paso-doble', name: "Cordyline australis 'Paso Doble'", botanicalName: 'Cordyline australis', category: PlantCategory.PERENNIALS, price: 32, description: 'Intense purple and pink stripes.', imageUrl: 'https://picsum.photos/seed/cord-pd/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-torbay-dazzler', name: "Cordyline australis 'Torbay Dazzler'", botanicalName: 'Cordyline australis', category: PlantCategory.PERENNIALS, price: 28, description: 'Classic cream and green striped Cabbage Tree.', imageUrl: 'https://picsum.photos/seed/cord-td/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-electric-pink', name: "Cordyline banksii 'Electric Pink'", botanicalName: 'Cordyline banksii', category: PlantCategory.PERENNIALS, price: 28, description: 'Bright pink stripes on a low-growing Cordyline.', imageUrl: 'https://picsum.photos/seed/cord-ep/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'cordyline-electric-flash', name: "Cordyline 'Electric Flash'", botanicalName: 'Cordyline hybrid', category: PlantCategory.PERENNIALS, price: 28, description: 'Cream and chocolate striped foliage.', imageUrl: 'https://picsum.photos/seed/cord-ef/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },

  // CORREA, CRASSULA, ETC.
  { id: 'correa-pink-eyre', name: "Correa pulchella 'Pink Eyre'", botanicalName: 'Correa pulchella', category: PlantCategory.SHRUBS, price: 22, description: 'Australian Fuchsia with soft pink bells.', imageUrl: 'https://picsum.photos/seed/corr-pe/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'crassula-corymbulosa', name: 'Crassula corymbulosa', botanicalName: 'Crassula corymbulosa', category: PlantCategory.PERENNIALS, price: 12, description: 'Shark\'s Tooth Crassula with stacking red-tipped leaves.', imageUrl: 'https://picsum.photos/seed/cras-cor/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'crassula-perforata', name: 'Crassula perforata', botanicalName: 'Crassula perforata', category: PlantCategory.PERENNIALS, price: 12, description: 'String of Buttons succulent.', imageUrl: 'https://picsum.photos/seed/cras-per/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'crowea-pink-star', name: "Crowea 'Pink Star'", botanicalName: 'Crowea hybrid', category: PlantCategory.SHRUBS, price: 22, description: 'Star-shaped pink flowers on a compact Australian shrub.', imageUrl: 'https://picsum.photos/seed/cro-ps/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'ctenanthe-tricolour', name: "Ctenanthe oppenheimiana 'Tricolour'", botanicalName: 'Ctenanthe oppenheimiana', category: PlantCategory.PERENNIALS, price: 24, description: 'Never-Never Plant with bold cream, green, and red markings.', imageUrl: 'https://picsum.photos/seed/cten-tri/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },

  // DELOSPERMA (ICE PLANT)
  { id: 'del-fire-spinner', name: "Delosperma 'Fire Spinner'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Neon orange and pink ice plant.', imageUrl: 'https://picsum.photos/seed/del-fs/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-candystone', name: "Delosperma 'Jewel of Desert Candystone'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Bright candy-pink flowers on a succulent groundcover.', imageUrl: 'https://picsum.photos/seed/del-cs/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-grenade', name: "Delosperma 'Jewel of Desert Grenade'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Brilliant orange-red flowers.', imageUrl: 'https://picsum.photos/seed/del-gre/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-peridot', name: "Delosperma 'Jewel of Desert Peridot'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Lime-yellow flowers with a white center.', imageUrl: 'https://picsum.photos/seed/del-per/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-orange-glow', name: "Delosperma 'Ocean Orange Glow'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Vibrant orange petals with a soft glow.', imageUrl: 'https://picsum.photos/seed/del-oog/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-orange-vibe', name: "Delosperma 'Ocean Orange Vibe'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Deep electric orange flowers.', imageUrl: 'https://picsum.photos/seed/del-oov/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'del-violet', name: "Delosperma 'Ocean Sunset Violet'", botanicalName: 'Delosperma hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Large violet-pink flowers.', imageUrl: 'https://picsum.photos/seed/del-osv/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // DIANELLA
  { id: 'dia-little-becca', name: "Dianella caerulea 'Little Becca'", botanicalName: 'Dianella caerulea', category: PlantCategory.PERENNIALS, price: 18, description: 'Compact blue flax lily with a clumping habit.', imageUrl: 'https://picsum.photos/seed/dia-lb/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'dia-sterling', name: "Dianella ensifolia 'Sterling'", botanicalName: 'Dianella ensifolia', category: PlantCategory.PERENNIALS, price: 22, description: 'Silver-white variegated flax lily.', imageUrl: 'https://picsum.photos/seed/dia-ster/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'dia-destiny', name: "Dianella tasmanica 'Destiny'", botanicalName: 'Dianella tasmanica', category: PlantCategory.PERENNIALS, price: 22, description: 'Cream variegated Tasmanian flax lily.', imageUrl: 'https://picsum.photos/seed/dia-des/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'dia-wyeena', name: "Dianella tasmanica 'Wyeena'", botanicalName: 'Dianella tasmanica', category: PlantCategory.PERENNIALS, price: 22, description: 'Bold white-striped foliage.', imageUrl: 'https://picsum.photos/seed/dia-wye/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },

  // MISC...
  { id: 'dichroa-febrifuga', name: 'Dichroa febrifuga', botanicalName: 'Dichroa febrifuga', category: PlantCategory.SHRUBS, price: 25, description: 'Evergreen Hydrangea with metallic blue berries.', imageUrl: 'https://picsum.photos/seed/dich-feb/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'doodia-media', name: 'Doodia media', botanicalName: 'Doodia media', category: PlantCategory.PERENNIALS, price: 18, description: 'Rasp Fern with red new growth.', imageUrl: 'https://picsum.photos/seed/dood-med/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'echeveria-hybrid', name: 'Echeveria runyonii hybrid', botanicalName: 'Echeveria runyonii', category: PlantCategory.PERENNIALS, price: 12, description: 'Succulent rosette with unique leaf shapes.', imageUrl: 'https://picsum.photos/seed/ech-run/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'elegia-capensis', name: 'Elegia capensis', botanicalName: 'Elegia capensis', category: PlantCategory.PERENNIALS, price: 35, description: 'Broom Reed with feathery, architectural fronds.', imageUrl: 'https://picsum.photos/seed/ele-cap/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'elegia-ginnys-giant', name: "Elegia capensis 'Ginny's Giant'", botanicalName: 'Elegia capensis', category: PlantCategory.PERENNIALS, price: 42, description: 'A larger, more robust selection of Broom Reed.', imageUrl: 'https://picsum.photos/seed/ele-gg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'elegia-thyrsoidea', name: 'Elegia thyrsoidea', botanicalName: 'Elegia thyrsoidea', category: PlantCategory.PERENNIALS, price: 32, description: 'Upright stalks with golden flower heads.', imageUrl: 'https://picsum.photos/seed/ele-thy/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'eucalyptus-moon-lagoon', name: "Eucalyptus 'Moon Lagoon'", botanicalName: 'Eucalyptus hybrid', category: PlantCategory.TREES, price: 45, description: 'Blue-leaved eucalyptus with fine texture.', imageUrl: 'https://picsum.photos/seed/euc-ml/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'fascicularia-pitcairnifolia', name: 'Fascicularia pitcairnifolia', botanicalName: 'Fascicularia pitcairnifolia', category: PlantCategory.PERENNIALS, price: 32, description: 'Hardy bromeliad with electric blue flowers.', imageUrl: 'https://picsum.photos/seed/fasc-pit/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'festuca-beyond-blue', name: "Festuca glauca 'Beyond Blue'", botanicalName: 'Festuca glauca', category: PlantCategory.PERENNIALS, price: 12, description: 'Intense blue ornamental grass.', imageUrl: 'https://picsum.photos/seed/fes-bb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'festuca-boulder-blue', name: "Festuca glauca 'Boulder Blue'", botanicalName: 'Festuca glauca', category: PlantCategory.PERENNIALS, price: 12, description: 'Compact blue fescue grass.', imageUrl: 'https://picsum.photos/seed/fes-bob/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'fuchsia-denticulata', name: 'Fuchsia denticulata', botanicalName: 'Fuchsia denticulata', category: PlantCategory.SHRUBS, price: 24, description: 'Stunning species fuchsia with long orange-pink tubes.', imageUrl: 'https://picsum.photos/seed/fuc-den/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'furcraea-foetida', name: 'Furcraea foetida', botanicalName: 'Furcraea foetida', category: PlantCategory.PERENNIALS, price: 48, description: 'Giant False Agave with spineless leaves.', imageUrl: 'https://picsum.photos/seed/fur-foe/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },

  // GREVILLEA
  { id: 'gre-fanfare', name: "Grevillea 'Austraflora Fanfare'", botanicalName: 'Grevillea hybrid', category: PlantCategory.NATIVES, price: 28, description: 'Groundcover with toothbrush-like red flowers.', imageUrl: 'https://picsum.photos/seed/gre-fan/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'gre-mt-tamboritha', name: "Grevillea lanigera 'Mt Tamboritha'", botanicalName: 'Grevillea lanigera', category: PlantCategory.NATIVES, price: 24, description: 'Woolly Grevillea with pink and cream flowers.', imageUrl: 'https://picsum.photos/seed/gre-mt/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'gre-peaches-cream', name: "Grevillea 'Peaches and Cream'", botanicalName: 'Grevillea hybrid', category: PlantCategory.NATIVES, price: 34, description: 'Stunning bicolor flowers in peach and cream.', imageUrl: 'https://picsum.photos/seed/gre-pc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // HAKONECHLOA & HEUCHERA
  { id: 'hak-all-gold', name: "Hakonechloa macra 'All Gold'", botanicalName: 'Hakonechloa macra', category: PlantCategory.PERENNIALS, price: 18, description: 'Bright yellow Japanese Forest Grass.', imageUrl: 'https://picsum.photos/seed/hak-ag/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'hak-aureola', name: "Hakonechloa macra 'Aureola'", botanicalName: 'Hakonechloa macra', category: PlantCategory.PERENNIALS, price: 18, description: 'Variegated golden forest grass.', imageUrl: 'https://picsum.photos/seed/hak-aur/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'hal-merrist-wood', name: "Halimiocistus wintonensis 'Merrist Wood Cream'", botanicalName: 'Halimiocistus wintonensis', category: PlantCategory.SHRUBS, price: 24, description: 'Creamy flowers with dark maroon centers.', imageUrl: 'https://picsum.photos/seed/hal-mwc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'heu-fire-alarm', name: "Heuchera 'Fire Alarm'", botanicalName: 'Heuchera hybrid', category: PlantCategory.PERENNIALS, price: 16, description: 'The brightest red Coral Bells available.', imageUrl: 'https://picsum.photos/seed/heu-fa/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'heu-grande-amethyst', name: "Heuchera 'Grande Amethyst'", botanicalName: 'Heuchera hybrid', category: PlantCategory.PERENNIALS, price: 18, description: 'Large purple leaves with a velvety texture.', imageUrl: 'https://picsum.photos/seed/heu-ga/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'heu-lime-marmalade', name: "Heuchera 'Lime Marmalade'", botanicalName: 'Heuchera hybrid', category: PlantCategory.PERENNIALS, price: 16, description: 'Ruffled lime-green foliage.', imageUrl: 'https://picsum.photos/seed/heu-lm/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'heu-marmalade', name: "Heuchera 'Marmalade'", botanicalName: 'Heuchera hybrid', category: PlantCategory.PERENNIALS, price: 16, description: 'Amber and peach ruffled foliage.', imageUrl: 'https://picsum.photos/seed/heu-mar/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },

  // ISCHYROLEPIS, KALANCHOE
  { id: 'isc-subverticillata', name: 'Ischyrolepis subverticillata', botanicalName: 'Ischyrolepis subverticillata', category: PlantCategory.PERENNIALS, price: 32, description: 'Restio with gracefully arching, fine stems.', imageUrl: 'https://picsum.photos/seed/isc-sub/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'kal-marmorata', name: 'Kalanchoe marmorata', botanicalName: 'Kalanchoe marmorata', category: PlantCategory.PERENNIALS, price: 14, description: 'Penwiper Plant with spotted succulent leaves.', imageUrl: 'https://picsum.photos/seed/kal-mar/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'kal-orgyalis', name: 'Kalanchoe orgyalis', botanicalName: 'Kalanchoe orgyalis', category: PlantCategory.PERENNIALS, price: 18, description: 'Copper Spoons succulent.', imageUrl: 'https://picsum.photos/seed/kal-org/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'kal-sexangularis', name: 'Kalanchoe sexangularis', botanicalName: 'Kalanchoe sexangularis', category: PlantCategory.PERENNIALS, price: 14, description: 'Six-angled Kalanchoe that turns red in sun.', imageUrl: 'https://picsum.photos/seed/kal-sex/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'kal-chocolate-soldier', name: "Kalanchoe tomentosa 'Chocolate Soldier'", botanicalName: 'Kalanchoe tomentosa', category: PlantCategory.PERENNIALS, price: 12, description: 'Panda Plant with fuzzy brown-edged leaves.', imageUrl: 'https://picsum.photos/seed/kal-cs/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },

  // LEUCADENDRON
  { id: 'leu-argenteum', name: 'Leucadendron argenteum', botanicalName: 'Leucadendron argenteum', category: PlantCategory.TREES, price: 65, description: 'Famous Silvertree with shimmering metallic leaves.', imageUrl: 'https://picsum.photos/seed/leu-arg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'leu-chief-mike', name: "Leucadendron 'Chief Mike'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 38, description: 'Large red flower heads on a robust bush.', imageUrl: 'https://picsum.photos/seed/leu-cm/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-ebony', name: "Leucadendron 'Ebony'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 42, description: 'Darkest purple, almost black foliage.', imageUrl: 'https://picsum.photos/seed/leu-eb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-jester', name: "Leucadendron 'Jester'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 42, description: 'Variegated pink and green foliage.', imageUrl: 'https://picsum.photos/seed/leu-jes/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-inca-gold', name: "Leucadendron 'Inca Gold'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 36, description: 'Golden yellow bracts.', imageUrl: 'https://picsum.photos/seed/leu-ig/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-maui-sunset', name: "Leucadendron 'Maui Sunset'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 38, description: 'Bicolor yellow and orange bracts.', imageUrl: 'https://picsum.photos/seed/leu-ms/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-red-gem', name: "Leucadendron 'Red Gem'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 36, description: 'Reliable red-tipped variety.', imageUrl: 'https://picsum.photos/seed/leu-rg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-safari-goldstrike', name: "Leucadendron 'Safari Goldstrike'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 36, description: 'Excellent cut flower variety with yellow bracts.', imageUrl: 'https://picsum.photos/seed/leu-sg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-safari-sunset', name: "Leucadendron 'Safari Sunset'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 36, description: 'Deep red bracts on a vigorous shrub.', imageUrl: 'https://picsum.photos/seed/leu-ss/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-blush', name: "Leucadendron salignum 'Blush'", botanicalName: 'Leucadendron salignum', category: PlantCategory.SHRUBS, price: 34, description: 'Soft red-blushed bracts.', imageUrl: 'https://picsum.photos/seed/leu-blu/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-candles', name: "Leucadendron salignum 'Candles'", botanicalName: 'Leucadendron salignum', category: PlantCategory.SHRUBS, price: 34, description: 'Narrow leaves with upright red flowers.', imageUrl: 'https://picsum.photos/seed/leu-can/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-golden-tip', name: "Leucadendron salignum 'Golden Tip'", botanicalName: 'Leucadendron salignum', category: PlantCategory.SHRUBS, price: 34, description: 'Classic yellow-tipped variety.', imageUrl: 'https://picsum.photos/seed/leu-gt/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-summer-red', name: "Leucadendron salignum 'Summer Red'", botanicalName: 'Leucadendron salignum', category: PlantCategory.SHRUBS, price: 34, description: 'Maintains red color through the summer.', imageUrl: 'https://picsum.photos/seed/leu-sr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-winter-red', name: "Leucadendron salignum 'Winter Red'", botanicalName: 'Leucadendron salignum', category: PlantCategory.SHRUBS, price: 34, description: 'Brightest red color in the winter months.', imageUrl: 'https://picsum.photos/seed/leu-wr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-silvan-red', name: "Leucadendron 'Silvan Red'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 38, description: 'Stunning deep red autumn color.', imageUrl: 'https://picsum.photos/seed/leu-slr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-wilsons-wonder', name: "Leucadendron 'Wilson's Wonder'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 38, description: 'Broad yellow bracts with red edges.', imageUrl: 'https://picsum.photos/seed/leu-ww/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'leu-yaeli', name: "Leucadendron 'Yaeli'", botanicalName: 'Leucadendron hybrid', category: PlantCategory.SHRUBS, price: 38, description: 'Unique cone shape and yellow bracts.', imageUrl: 'https://picsum.photos/seed/leu-yae/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // LEUCOSPERMUM & LOMANDRA
  { id: 'lcs-cuneiforme', name: 'Leucospermum cuneiforme', botanicalName: 'Leucospermum cuneiforme', category: PlantCategory.SHRUBS, price: 42, description: 'Pincushion Protea with yellow flower heads.', imageUrl: 'https://picsum.photos/seed/lcs-cun/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lcs-sunrise', name: "Leucospermum 'Sunrise'", botanicalName: 'Leucospermum hybrid', category: PlantCategory.SHRUBS, price: 45, description: 'Early-blooming orange pincushion.', imageUrl: 'https://picsum.photos/seed/lcs-sun/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lom-del-sol', name: "Lomandra confertifolia 'Del Sol'", botanicalName: 'Lomandra confertifolia', category: PlantCategory.PERENNIALS, price: 18, description: 'Golden fine-leaved grass.', imageUrl: 'https://picsum.photos/seed/lom-ds/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lom-pacific-sky', name: "Lomandra confertifolia 'Pacific Sky'", botanicalName: 'Lomandra confertifolia', category: PlantCategory.PERENNIALS, price: 18, description: 'Blue-green fine-leaved grass.', imageUrl: 'https://picsum.photos/seed/lom-ps/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' },
  { id: 'lom-shorty', name: "Lomandra confertifolia 'Shorty'", botanicalName: 'Lomandra confertifolia', category: PlantCategory.PERENNIALS, price: 18, description: 'Very compact mound-forming grass.', imageUrl: 'https://picsum.photos/seed/lom-sho/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lom-arctic-frost', name: "Lomandra longifolia 'Arctic Frost'", botanicalName: 'Lomandra longifolia', category: PlantCategory.PERENNIALS, price: 20, description: 'White variegated long-leaf grass.', imageUrl: 'https://picsum.photos/seed/lom-af/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lom-miners-gold', name: "Lomandra longifolia 'Miner's Gold'", botanicalName: 'Lomandra longifolia', category: PlantCategory.PERENNIALS, price: 20, description: 'Golden variegated variety.', imageUrl: 'https://picsum.photos/seed/lom-mg/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'lom-platinum-beauty', name: "Lomandra 'Platinum Beauty'", botanicalName: 'Lomandra hybrid', category: PlantCategory.PERENNIALS, price: 24, description: 'Incredibly popular silver-white variegated Lomandra.', imageUrl: 'https://picsum.photos/seed/lom-pb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // MANFREDA & MANGAVE
  { id: 'man-cherry-cc', name: "Manfreda undulata 'Cherry Chocolate Chip'", botanicalName: 'Manfreda undulata', category: PlantCategory.PERENNIALS, price: 32, description: 'Spotted undulating leaves with chocolate tones.', imageUrl: 'https://picsum.photos/seed/man-ccc/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-aztec-king', name: "Mangave 'Aztec King'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 42, description: 'Stately succulent with red spotting.', imageUrl: 'https://picsum.photos/seed/mga-ak/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-desert-dragon', name: "Mangave 'Desert Dragon'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 38, description: 'Arching leaves with heavy spotting.', imageUrl: 'https://picsum.photos/seed/mga-dd/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-falling-waters', name: "Mangave 'Falling Waters'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 45, description: 'Blue-green leaves that cascade downwards.', imageUrl: 'https://picsum.photos/seed/mga-fw/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-kellys-lavender', name: "Mangave 'Kelly's Lavender'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 42, description: 'Soft lavender-grey tones with purple dots.', imageUrl: 'https://picsum.photos/seed/mga-kl/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-mission-to-mars', name: "Mangave 'Mission to Mars'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 42, description: 'Intensely spotted red leaves.', imageUrl: 'https://picsum.photos/seed/mga-mtm/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-pineapple-express', name: "Mangave 'Pineapple Express'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 40, description: 'Rosette looks like the top of a pineapple.', imageUrl: 'https://picsum.photos/seed/mga-pe/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-praying-hands', name: "Mangave 'Praying Hands'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 48, description: 'Upright leaves like hands in prayer.', imageUrl: 'https://picsum.photos/seed/mga-ph/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-silver-fox', name: "Mangave 'Silver Fox'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 45, description: 'Stunning white-wax covered blue leaves.', imageUrl: 'https://picsum.photos/seed/mga-sf/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-snow-leopard', name: "Mangave 'Snow Leopard'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 48, description: 'Variegated white edges with cherry spots.', imageUrl: 'https://picsum.photos/seed/mga-sl/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mga-tooth-fairy', name: "Mangave 'Tooth Fairy'", botanicalName: 'Mangave hybrid', category: PlantCategory.PERENNIALS, price: 42, description: 'Features colorful "teeth" along leaf edges.', imageUrl: 'https://picsum.photos/seed/mga-tf/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // REMAINING...
  { id: 'mel-diosmifolia', name: 'Melaleuca diosmifolia', botanicalName: 'Melaleuca diosmifolia', category: PlantCategory.SHRUBS, price: 28, description: 'Green Honey Myrtle with bottle-brush flowers.', imageUrl: 'https://picsum.photos/seed/mel-dio/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'mel-comosus', name: 'Melianthus comosus', botanicalName: 'Melianthus comosus', category: PlantCategory.SHRUBS, price: 32, description: 'Small Honey Flower with architectural serrated leaves.', imageUrl: 'https://picsum.photos/seed/mel-com/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'ori-kent-beauty', name: "Origanum 'Kent Beauty'", botanicalName: 'Origanum hybrid', category: PlantCategory.PERENNIALS, price: 15, description: 'Ornamental oregano with cascading pink bracts.', imageUrl: 'https://picsum.photos/seed/ori-kb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'osm-claytoniana', name: 'Osmunda claytoniana', botanicalName: 'Osmunda claytoniana', category: PlantCategory.PERENNIALS, price: 24, description: 'Interrupted Fern, unique fertile frond placement.', imageUrl: 'https://picsum.photos/seed/osm-cla/800/800', sunNeeds: 'Shade', waterNeeds: 'High' },
  { id: 'osc-deltoides', name: 'Oscularia deltoides', botanicalName: 'Oscularia deltoides', category: PlantCategory.PERENNIALS, price: 12, description: 'Tooth-leaved succulent with pink flowers.', imageUrl: 'https://picsum.photos/seed/osc-del/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'ozo-dark-pink', name: "Ozothamnus diosmifolius 'Dark Pink'", botanicalName: 'Ozothamnus diosmifolius', category: PlantCategory.SHRUBS, price: 22, description: 'Rice Flower with clusters of dark pink buds.', imageUrl: 'https://picsum.photos/seed/ozo-dp/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'pel-button-fern', name: "Pellaea rotundifolia 'Button Fern'", botanicalName: 'Pellaea rotundifolia', category: PlantCategory.PERENNIALS, price: 15, description: 'Charming fern with small round leaflets.', imageUrl: 'https://picsum.photos/seed/pel-bf/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'phi-profusion', name: "Philotheca myoporoides 'Profusion'", botanicalName: 'Philotheca myoporoides', category: PlantCategory.SHRUBS, price: 28, description: 'Wax Flower covered in white star flowers.', imageUrl: 'https://picsum.photos/seed/phi-pro/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'phl-mandaianum', name: "Phlebodium aureum 'Mandaianum'", botanicalName: 'Phlebodium aureum', category: PlantCategory.PERENNIALS, price: 24, description: 'Blue Star Fern with ruffled fronds.', imageUrl: 'https://picsum.photos/seed/phl-man/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'phl-nic-dia', name: "Phlebosia 'Nicolas Diamond'", botanicalName: 'Phlebosia hybrid', category: PlantCategory.PERENNIALS, price: 26, description: 'Unique hybrid fern with textured fronds.', imageUrl: 'https://picsum.photos/seed/phl-nd/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'ple-mona-lavender', name: "Plectranthus 'Mona Lavender'", botanicalName: 'Plectranthus hybrid', category: PlantCategory.PERENNIALS, price: 14, description: 'Purple-stemmed beauty with lavender spikes.', imageUrl: 'https://picsum.photos/seed/ple-ml/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'pol-dalmaisiana', name: 'Polygala dalmaisiana', botanicalName: 'Polygala dalmaisiana', category: PlantCategory.SHRUBS, price: 22, description: 'Sweet Pea Shrub with purple butterfly-like flowers.', imageUrl: 'https://picsum.photos/seed/pol-dal/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'pol-petite-butterfly', name: "Polygala fruticosa 'Petite Butterfly'", botanicalName: 'Polygala fruticosa', category: PlantCategory.SHRUBS, price: 24, description: 'Compact Sweet Pea Shrub.', imageUrl: 'https://picsum.photos/seed/pol-pb/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'pol-munitum', name: 'Polystichum munitum', botanicalName: 'Polystichum munitum', category: PlantCategory.NATIVES, price: 20, description: 'Western Sword Fern, iconic evergreen native.', imageUrl: 'https://picsum.photos/seed/pol-mun/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'pol-polyblepharum', name: 'Polystichum polyblepharum', botanicalName: 'Polystichum polyblepharum', category: PlantCategory.PERENNIALS, price: 22, description: 'Japanese Tassel Fern with shiny fronds.', imageUrl: 'https://picsum.photos/seed/pol-pol/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'pri-vialii', name: 'Primula vialii', botanicalName: 'Primula vialii', category: PlantCategory.PERENNIALS, price: 16, description: 'Orchid Primrose with unique red and purple spikes.', imageUrl: 'https://picsum.photos/seed/pri-via/800/800', sunNeeds: 'Part Shade', waterNeeds: 'High' },

  // PROTEA
  { id: 'pro-cynaroides', name: 'Protea cynaroides', botanicalName: 'Protea cynaroides', category: PlantCategory.SHRUBS, price: 55, description: 'King Protea, the largest of all protea flowers.', imageUrl: 'https://picsum.photos/seed/pro-cyn/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'pro-mini-king', name: "Protea cynaroides 'Mini King'", botanicalName: 'Protea cynaroides', category: PlantCategory.SHRUBS, price: 52, description: 'A more compact version of the King Protea.', imageUrl: 'https://picsum.photos/seed/pro-mk/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'pro-pink-ice', name: "Protea 'Pink Ice'", botanicalName: 'Protea hybrid', category: PlantCategory.SHRUBS, price: 52, description: 'Most reliable and hardy protea for local gardens.', imageUrl: 'https://picsum.photos/seed/pro-pi/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'pro-susara', name: "Protea 'Susara'", botanicalName: 'Protea hybrid', category: PlantCategory.SHRUBS, price: 52, description: 'Creamy pink and green flowers.', imageUrl: 'https://picsum.photos/seed/pro-sus/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'pro-sylvia', name: "Protea 'Sylvia'", botanicalName: 'Protea hybrid', category: PlantCategory.SHRUBS, price: 52, description: 'Dark pink to red bracts.', imageUrl: 'https://picsum.photos/seed/pro-syl/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },

  // FINAL BATCH
  { id: 'pte-evergemiensis', name: "Pteris ensiformis 'Evergemiensis'", botanicalName: 'Pteris ensiformis', category: PlantCategory.PERENNIALS, price: 15, description: 'Silver Lace Fern.', imageUrl: 'https://picsum.photos/seed/pte-eve/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'rao-australis', name: 'Raoulia australis', botanicalName: 'Raoulia australis', category: PlantCategory.PERENNIALS, price: 14, description: 'Silver Scabweed, flat silver groundcover.', imageUrl: 'https://picsum.photos/seed/rao-aus/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'rho-capensis', name: 'Rhodocoma capensis', botanicalName: 'Rhodocoma capensis', category: PlantCategory.PERENNIALS, price: 35, description: 'Stately Restio with nodding seed heads.', imageUrl: 'https://picsum.photos/seed/rho-cap/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'rus-nana', name: "Ruschia lineolata 'Nana'", botanicalName: 'Ruschia lineolata', category: PlantCategory.PERENNIALS, price: 12, description: 'Carpet of stars succulent groundcover.', imageUrl: 'https://picsum.photos/seed/rus-nan/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'scl-biflorus', name: 'Scleranthus biflorus', botanicalName: 'Scleranthus biflorus', category: PlantCategory.PERENNIALS, price: 16, description: 'Australian Cushion Moss.', imageUrl: 'https://picsum.photos/seed/scl-bif/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'sed-ogon', name: "Sedum makinoi 'Ogon'", botanicalName: 'Sedum makinoi', category: PlantCategory.PERENNIALS, price: 10, description: 'Golden Japanese Stonecrop.', imageUrl: 'https://picsum.photos/seed/sed-ogo/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'sem-arachnoideum', name: 'Sempervivum arachnoideum', botanicalName: 'Sempervivum arachnoideum', category: PlantCategory.PERENNIALS, price: 10, description: 'Cobweb Houseleek.', imageUrl: 'https://picsum.photos/seed/sem-ara/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-atlanticum', name: 'Sempervivum atlanticum', botanicalName: 'Sempervivum atlanticum', category: PlantCategory.PERENNIALS, price: 10, description: 'Atlas Mountain Houseleek.', imageUrl: 'https://picsum.photos/seed/sem-atl/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-gold-nugget', name: "Sempervivum 'Gold Nugget'", botanicalName: 'Sempervivum hybrid', category: PlantCategory.PERENNIALS, price: 12, description: 'Winter gold color.', imageUrl: 'https://picsum.photos/seed/sem-gn/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-jade-rose', name: "Sempervivum 'Jade Rose'", botanicalName: 'Sempervivum hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Green and purple rosettes.', imageUrl: 'https://picsum.photos/seed/sem-jr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-red-heart', name: "Sempervivum 'Red Heart'", botanicalName: 'Sempervivum hybrid', category: PlantCategory.PERENNIALS, price: 10, description: 'Green leaves with a dark red center.', imageUrl: 'https://picsum.photos/seed/sem-rh/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-sp-red', name: 'Sempervivum sp. Red', botanicalName: 'Sempervivum sp.', category: PlantCategory.PERENNIALS, price: 10, description: 'Consistent red foliage variety.', imageUrl: 'https://picsum.photos/seed/sem-spr/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sem-greenii', name: "Sempervivum tectorum 'Greenii'", botanicalName: 'Sempervivum tectorum', category: PlantCategory.PERENNIALS, price: 10, description: 'Classic green hens and chicks.', imageUrl: 'https://picsum.photos/seed/sem-gre/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sen-crassissimus', name: 'Senecio crassissimus', botanicalName: 'Senecio crassissimus', category: PlantCategory.PERENNIALS, price: 15, description: 'Vertical Leaf Senecio.', imageUrl: 'https://picsum.photos/seed/sen-cra/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'sen-mandraliscae', name: 'Senecio mandraliscae', botanicalName: 'Senecio mandraliscae', category: PlantCategory.PERENNIALS, price: 12, description: 'Blue Chalksticks succulent.', imageUrl: 'https://picsum.photos/seed/sen-man/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'str-sanguinea', name: 'Stromanthe sanguinea', botanicalName: 'Stromanthe sanguinea', category: PlantCategory.PERENNIALS, price: 26, description: 'Triostar Stromanthe with colorful foliage.', imageUrl: 'https://picsum.photos/seed/str-san/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'tet-amethyst-eyes', name: "Tetratheca 'Amethyst Eyes'", botanicalName: 'Tetratheca hybrid', category: PlantCategory.SHRUBS, price: 24, description: 'Australian heath with purple star flowers.', imageUrl: 'https://picsum.photos/seed/tet-ae/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Moderate' },
  { id: 'tha-insignis', name: 'Thamonchortus insignis', botanicalName: 'Thamonchortus insignis', category: PlantCategory.PERENNIALS, price: 35, description: 'Albertinia Thatch Reed.', imageUrl: 'https://picsum.photos/seed/tha-ins/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Moderate' },
  { id: 'tri-taipei-silk', name: "Tricyrtis 'Taipei Silk'", botanicalName: 'Tricyrtis hybrid', category: PlantCategory.PERENNIALS, price: 18, description: 'Toad Lily with orchid-like flowers.', imageUrl: 'https://picsum.photos/seed/tri-ts/800/800', sunNeeds: 'Shade', waterNeeds: 'Moderate' },
  { id: 'yuc-magenta-magic', name: "Yucca aloifolia 'Magenta Magic'", botanicalName: 'Yucca aloifolia', category: PlantCategory.SHRUBS, price: 48, description: 'Dark purple architectural plant.', imageUrl: 'https://picsum.photos/seed/yuc-mm/800/800', sunNeeds: 'Full Sun', waterNeeds: 'Low' },
  { id: 'yuc-blue-boy', name: "Yucca desmetiana 'Blue Boy'", botanicalName: 'Yucca desmetiana', category: PlantCategory.SHRUBS, price: 45, description: 'Soft-leaved yucca that turns purple in sun.', imageUrl: 'https://picsum.photos/seed/yuc-bb/800/800', sunNeeds: 'Part Shade', waterNeeds: 'Low' }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Mail Order Items',
    description: 'We ship a curated selection of our best plants and arrangements nationwide. Visit the link for the full collection of mail order items and order online.',
    iconName: 'Package',
    page: Page.MAIL_ORDER
  },
  {
    id: 's2',
    title: 'Wholesale Plants and Cut Flowers',
    description: 'Have a wholesale license? Complete the wholesaler application in the link to get started working with Crescent Hill Nursery.',
    iconName: 'Truck',
    page: Page.WHOLESALE
  },
  {
    id: 's3',
    title: 'Garden Consultation',
    description: 'Let our experts visit your site to suggest the best plant selections for your specific soil and light conditions.',
    iconName: 'Users',
    page: Page.CONSULTATION
  }
];

export const NEWSLETTER_ARCHIVES: NewsletterArchive[] = [
  {
    year: 2024,
    issues: [
      { month: 'May', title: 'Late Spring Bloomers & Water Savings', url: '#' },
      { month: 'April', title: 'Planting for Pollinators', url: '#' },
      { month: 'March', title: 'The Equinox Garden Prep', url: '#' },
      { month: 'February', title: 'Native Hedges for Privacy', url: '#' },
      { month: 'January', title: 'Winter Pruning Masterclass', url: '#' },
    ]
  },
  {
    year: 2023,
    issues: [
      { month: 'December', title: 'Holiday Greens & Local Gifting', url: '#' },
      { month: 'November', title: 'The Gift of Soil Health', url: '#' },
      { month: 'October', title: 'Falling for Natives', url: '#' },
      { month: 'September', title: 'Planning the Perfect Plot', url: '#' },
      { month: 'August', title: 'Drought Survival Tips', url: '#' },
      { month: 'July', title: 'Midsummer Mediterranean Magic', url: '#' },
    ]
  },
  {
    year: 2022,
    issues: [
      { month: 'December', title: 'Reflections and Winter Blooms', url: '#' },
      { month: 'June', title: 'Summer Solstice Celebrations', url: '#' },
    ]
  }
];
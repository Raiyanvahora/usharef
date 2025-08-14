// Define types inline to avoid import issues
interface ProductModel {
  name: string;
  brand?: string;
  image: string;
  altText?: string;
  price: string;
  originalPrice?: string;
  capacity?: string;
  category?: string;
  sourceDoc?: string;
  description?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  isNew?: boolean;
  isBestseller?: boolean;
  type?: string;
  doorType?: string;
  size?: string;
  starRating?: string;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  models: ProductModel[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'freezers',
    name: 'Freezers',
    description: 'Premium commercial freezers including convertible, combi, glass top, eutectic, scooping, vertical, and freezer on wheels. Perfect for ice cream parlours, supermarkets, and commercial establishments.',
    image: '/PRD/DEEP FREEZER/main images/D300-Double-dOOR-1-300x300.png',
    backgroundImage: '/PRD/DEEP FREEZER/assets_task_01jz91qtt4ec78qfrj1b2e738q_1751576837_img_0.webp',
    models: [
      // Convertible Freezers
      { 
        name: 'D150H164', 
        image: '/PRD/DEEP FREEZER/main images/D150-300x300.png', 
        price: '₹15,999', 
        originalPrice: '₹18,999',
        type: 'Convertible',
        description: '150 Liter single door deep freezer with convertible technology. Made with anodised stucco aluminium for heavy durability and protection from rust and corrosion. Perfect for storing up to 75 kg of food material and ideal for ice cream parlours, retail stores, and home use.',
        features: [
          'Convertible Technology (Freezer & Cooler mode)',
          'Single door top-opening chest design',
          'Anodised stucco aluminium construction',
          '70mm PUF insulation for energy efficiency',
          'R600 Eco-friendly refrigerant',
          'Temperature range: -24°C to +8°C',
          'Built-in lock with defrost drain',
          'Castor wheels for easy movement',
          'Removable wire storage basket'
        ],
        specifications: {
          'Gross Capacity': '150 Liters',
          'Net Capacity': '142 Liters',
          'Storage Capacity': '75 kg food material',
          'Temperature Range': '-24°C to +8°C',
          'Power Supply': '230V/50Hz/1Ph',
          'Refrigerant': 'R600 (Eco-friendly)',
          'Insulation': '70mm PUF (Polyurethane Foam)',
          'Construction': 'Anodised Stucco Aluminium',
          'Door Type': 'Single Door Top Opening',
          'Features': 'Lock & Key, Defrost Drain, Castor Wheels',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D225H122', 
        image: '/PRD/DEEP FREEZER/main images/D225-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        type: 'Convertible',
        description: '225 Liter single door deep freezer with convertible technology similar to Blue Star CF4-225DSW model. Features robust construction with anodised stucco aluminium body for durability and rust protection. Ideal for medium-scale commercial establishments like restaurants, cafes, and retail stores.',
        features: [
          'Convertible Technology (Freezer & Cooler mode)',
          'Single door chest freezer design',
          'Anodised stucco aluminium construction', 
          '70mm PUF insulation for energy savings',
          'CFC-Free eco-friendly refrigerant',
          'Wire storage baskets included',
          'Built-in lock and key security',
          'Manual defrost with drain system',
          'Temperature range: -24°C to +8°C',
          'Suitable for frozen foods, ice cream, vegetables'
        ],
        specifications: {
          'Gross Capacity': '225 Liters',
          'Net Capacity': '192 Liters',
          'Power Supply': '230V/50Hz/1Ph',
          'Construction': 'Anodised Stucco Aluminium',
          'Insulation': '70mm PUF',
          'Refrigerant': 'CFC-Free',
          'Temperature Range': '-24°C to +8°C',
          'Door Type': 'Single Door Top Opening',
          'Applications': 'Commercial & Domestic Use',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D300H224', 
        image: '/PRD/DEEP FREEZER/main images/D300-Double-dOOR-1-300x300.png', 
        price: '₹35,999', 
        originalPrice: '₹39,999',
        type: 'Convertible',
        description: '300 Liter double door deep freezer with convertible technology similar to Blue Star CHFDD300DGSW model. Features robust construction with tank made of anodised stucco aluminium for durability and rust protection. Includes 1 storage basket and uses R290A refrigerant that minimizes environmental risks.',
        features: [
          'Convertible Technology (Freezer & Cooler mode)',
          'Double door design for organized storage',
          'Tank made of Anodised Stucco Aluminium',
          '60mm PUF insulation prevents cooling loss',
          'R290A eco-friendly refrigerant',
          '1 storage basket included',
          'Reduces power consumption significantly',
          'Ideal for frozen foods, meat, ice cream, vegetables',
          'Built-in lock and key security',
          'Manual defrost system'
        ],
        specifications: {
          'Gross Capacity': '300 Liters',
          'Net Capacity': '284 Liters',
          'Dimensions': '111.6 x 67.8 x 84.5 cm',
          'Power Supply': '230V/50Hz/1Ph',
          'Construction': 'Anodised Stucco Aluminium Tank',
          'Insulation': '60mm PUF',
          'Refrigerant': 'R290A (Eco-friendly)',
          'Storage Baskets': '1 nos',
          'Door Type': 'Double Door Top Opening',
          'Applications': 'Commercial establishments, supermarkets, ice cream parlors',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      // Additional models
      { name: 'D325H223', image: '/PRD/DEEP FREEZER/main images/D325-H223-300x300.png', price: '₹32,999', originalPrice: '₹36,999', type: 'Combi' },
      { name: 'D475', image: '/PRD/DEEP FREEZER/main images/D475-300x300.png', price: '₹47,999', originalPrice: '₹52,999', type: 'Vertical' },
      { name: 'D525', image: '/PRD/DEEP FREEZER/main images/D525-300x300.png', price: '₹52,999', originalPrice: '₹57,999', type: 'Glass Top' },
      { name: 'G200H120', image: '/PRD/DEEP FREEZER/main images/G200H120ECINGMXWHX_left-Angle-300x300.png', price: '₹38,999', originalPrice: '₹42,999', type: 'Glass Top' },
      { name: 'E325-LT', image: '/PRD/DEEP FREEZER/main images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹65,999', originalPrice: '₹72,999', type: 'Eutectic' },
      { name: 'F250GL', image: '/PRD/DEEP FREEZER/main images/F250GL-300x300.png', price: '₹45,999', originalPrice: '₹49,999', type: 'Scooping' },
      { name: 'F325GC24', image: '/PRD/DEEP FREEZER/main images/F325GC24-300x300.png', price: '₹55,999', originalPrice: '₹59,999', type: 'Scooping' },
      { name: 'FOW-300', image: '/PRD/DEEP FREEZER/main images/F325GC24-300x300.png', price: '₹38,999', originalPrice: '₹42,999', type: 'Mobile' }
    ]
  },
  {
    id: 'coolers',
    name: 'Coolers',
    description: 'Visi coolers and vertical/supermarket coolers with single, double, and triple door options.',
    image: '/PRD/VISI COOLER/mainimagesvisi/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    backgroundImage: '/PRD/VISI COOLER/assets_task_01jz928z7tf5kbvrem9tr2bn43_1751577397_img_1.webp',
    models: [
      // Single Door Coolers
      { 
        name: 'SRC380HC-GL', 
        image: '/PRD/VISI COOLER/mainimagesvisi/0709091_SRC380HC-GL_Left-Angle-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        doorType: 'Single',
        description: '380 Liter single door visi cooler with generous storage capacity for a variety of products.',
        features: [
          'Clear double-pane glass door for maximum visibility',
          'Generous 380L storage capacity',
          'Advanced compressor and cooling system',
          'Adjustable thermostat for precise temperature management',
          'LED lighting illuminates interior products',
          'Adjustable shelves for flexible product layout'
        ]
      },
      { name: 'SRC-250', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-250-300x300.png', price: '₹22,999', originalPrice: '₹24,999', doorType: 'Single' },
      { name: 'SRC-280', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-250-300x300.png', price: '₹25,999', originalPrice: '₹29,999', doorType: 'Single' },
      { name: 'SRC-60', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', price: '₹16,999', originalPrice: '₹19,999', doorType: 'Single' },
      // Double Door Coolers
      { name: 'SRC500HC', image: '/PRD/VISI COOLER/mainimagesvisi/SRC500HC-Front-Angle-With-Stock-300x300.png', price: '₹50,999', originalPrice: '₹54,999', doorType: 'Double' },
      { name: 'SRC572HC', image: '/PRD/VISI COOLER/mainimagesvisi/SRC572HC-Front-Angle-With-Stock-300x300.png', price: '₹57,999', originalPrice: '₹62,999', doorType: 'Double' },
      // Triple Door Coolers
      { name: 'SRC752HC', image: '/PRD/VISI COOLER/mainimagesvisi/SRC752HC-Front-Angle-With-Stock-300x300.png', price: '₹75,999', originalPrice: '₹82,999', doorType: 'Triple' },
      { name: 'SRC950', image: '/PRD/VISI COOLER/mainimagesvisi/SRC950-Front-Angle-With-Stock-300x300.png', price: '₹95,999', originalPrice: '₹102,999', doorType: 'Triple' }
    ]
  },
  {
    id: 'pastry-display-counters',
    name: 'Pastry & Display Counters',
    description: 'Elegant display counters for bakeries, cafes, and pastry shops.',
    image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png',
    backgroundImage: '/PRD/PASTRY COUNTER/assets_task_01jz931a3zefas9y7hmkgr1ze3_1751578188_img_0.webp',
    models: [
      { 
        name: 'PC-1200', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹85,999', 
        originalPrice: '₹92,999',
        description: '1200mm pastry display counter with curved glass and LED lighting.'
      },
      { name: 'PC-1500', image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', price: '₹105,999', originalPrice: '₹115,999' },
      { name: 'PC-900', image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', price: '₹65,999', originalPrice: '₹72,999' },
      { name: 'PC-1800', image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', price: '₹125,999', originalPrice: '₹135,999' }
    ]
  },
  {
    id: 'back-bar-units',
    name: 'Back Bar Units',
    description: 'Compact cooling solutions for bars, restaurants, and commercial kitchens.',
    image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png',
    backgroundImage: '/PRD/VISI COOLER/assets_task_01jz928z7tf5kbvrem9tr2bn43_1751577397_img_1.webp',
    models: [
      { 
        name: 'BBU-200', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', 
        price: '₹28,999', 
        originalPrice: '₹32,999',
        description: 'Double door back bar cooler with glass doors.'
      },
      { name: 'BBU-300', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', price: '₹38,999', originalPrice: '₹42,999' },
      { name: 'BBU-100', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', price: '₹18,999', originalPrice: '₹22,999' }
    ]
  },
  {
    id: 'ice-machines',
    name: 'Ice Machines',
    description: 'Commercial ice makers for restaurants, hotels, and bars.',
    image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD/WATER COOLER/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'IM-50', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹65,999', 
        originalPrice: '₹72,999',
        description: '50kg/day ice making capacity machine.'
      },
      { name: 'IM-100', image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', price: '₹95,999', originalPrice: '₹105,999' },
      { name: 'IM-150', image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', price: '₹125,999', originalPrice: '₹135,999' }
    ]
  },
  {
    id: 'water-coolers',
    name: 'Water Coolers',
    description: 'Commercial water coolers for offices, schools, and public spaces.',
    image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD/WATER COOLER/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'PWC-40/80/120', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        description: 'Commercial water cooler available in multiple configurations: 40L cooling/80L storage, 60L cooling/80L storage, and 60L cooling/120L storage.'
      },
      { name: 'SS 20/20', image: '/PRD/WATER COOLER/mainimageswater/SS-2020-2-300x300.png', price: '₹22,999', originalPrice: '₹25,999' },
      { name: 'SS 40/40', image: '/PRD/WATER COOLER/mainimageswater/SS-4040-2-300x300.png', price: '₹32,999', originalPrice: '₹35,999' },
      { name: 'SS 60/60', image: '/PRD/WATER COOLER/mainimageswater/SS-6060-300x300.png', price: '₹42,999', originalPrice: '₹45,999' },
      { name: 'SS 80/80', image: '/PRD/WATER COOLER/mainimageswater/SS-8080-300x300.png', price: '₹52,999', originalPrice: '₹55,999' },
      { name: 'SS 150/150', image: '/PRD/WATER COOLER/mainimageswater/SS-150150-1-300x300.png', price: '₹72,999', originalPrice: '₹78,999' }
    ]
  },
  {
    id: 'water-dispensers',
    name: 'Water Dispensers',
    description: 'Premium water dispensers with hot, cold, and normal water options for offices and homes.',
    image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg',
    backgroundImage: '/PRD/WATER COOLER/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'WD-3FMCGA', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg', 
        price: '₹8,999', 
        originalPrice: '₹10,999',
        description: 'Hot, Cold & Normal water dispenser with child safety lock.',
        features: [
          'Three temperature options (Hot/Cold/Normal)',
          'Child safety lock on hot tap',
          'Removable drip tray',
          'LED indicators',
          'Energy saving mode',
          'Storage cabinet'
        ]
      },
      { 
        name: 'Table Top Dispenser', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/table-top-hot-cold-normal-water-dispenser-resized.jpg', 
        price: '₹6,999', 
        originalPrice: '₹8,999',
        description: 'Compact table top water dispenser for home and small office use.'
      }
    ]
  }
];
// Define types inline to avoid import issues
interface ProductModel {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  description?: string;
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
  type?: string; // For filtering by type within categories
  doorType?: string; // For filtering coolers by door type
  capacity?: string; // For filtering by capacity
  starRating?: string; // For filtering by energy star rating
  size?: string; // For filtering by size (Small/Medium/Large)
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
    image: '/PRD-NEW/FREEZERS/images/D300-Double-dOOR-1-300x300.png',
    backgroundImage: '/PRD-NEW/FREEZERS/assets/assets_task_01jz91qtt4ec78qfrj1b2e738q_1751576837_img_0.webp',
    models: [
      // Convertible Freezers
      { 
        name: 'D150H164', 
        image: '/PRD-NEW/FREEZERS/images/D150-300x300.png', 
        price: '₹15,999', 
        originalPrice: '₹18,999',
        type: 'Convertible',
        capacity: '150L',
        starRating: '3 Star',
        size: 'Small',
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
        image: '/PRD-NEW/FREEZERS/images/D225-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        type: 'Convertible',
        capacity: '225L',
        starRating: '3 Star',
        size: 'Medium',
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
        image: '/PRD-NEW/FREEZERS/images/D300-Double-dOOR-1-300x300.png', 
        price: '₹35,999', 
        originalPrice: '₹39,999',
        type: 'Convertible',
        capacity: '300L',
        starRating: '4 Star',
        size: 'Large',
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
      // Combi Freezer/Cooler
      { 
        name: 'D325H223', 
        image: '/PRD-NEW/FREEZERS/images/D325-H223-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        type: 'Combi',
        capacity: '325L',
        starRating: '3 Star',
        size: 'Large',
        description: '325 Liter combination unit with separate freezer and cooler compartments with solid top. Perfect for establishments requiring both freezing and cooling capabilities in one unit.'
      },
      // Glass Top Freezers
      { 
        name: 'D525', 
        image: '/PRD-NEW/FREEZERS/images/D525-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹57,999',
        type: 'Glass Top',
        capacity: '525L',
        starRating: '4 Star',
        size: 'Large',
        description: '525 Liter deep freezer with sliding glass top for easy access and product visibility. Ideal for supermarkets and ice cream parlours.'
      },
      // Eutectic Freezers
      { 
        name: 'E325-LT', 
        image: '/PRD-NEW/FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', 
        price: '₹65,999', 
        originalPrice: '₹72,999',
        type: 'Eutectic',
        capacity: '325L',
        starRating: '5 Star',
        size: 'Large',
        description: '325 Liter energy-efficient freezer using eutectic technology for consistent temperature control with minimal power consumption.'
      },
      // Scooping Parlour Freezers
      { 
        name: 'F250GL', 
        image: '/PRD-NEW/FREEZERS/images/F250GL-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        type: 'Scooping',
        capacity: '250L',
        starRating: '3 Star',
        size: 'Medium',
        description: '250 Liter specialized freezer designed for ice cream parlours and scooping stations with curved glass top.'
      },
      // Vertical Freezers
      { 
        name: 'D475', 
        image: '/PRD-NEW/FREEZERS/images/D475-300x300.png', 
        price: '₹47,999', 
        originalPrice: '₹52,999',
        type: 'Vertical',
        capacity: '475L',
        starRating: '4 Star',
        size: 'Large',
        description: '475 Liter space-efficient upright freezer perfect for commercial and home use with multiple shelves.'
      },
      // Freezer on Wheels
      { 
        name: 'FOW-300', 
        image: '/PRD-NEW/FREEZERS/images/F325GC24-300x300.png', 
        price: '₹55,999', 
        originalPrice: '₹59,999',
        type: 'Freezer on Wheels',
        capacity: '300L',
        starRating: '3 Star',
        size: 'Large',
        description: '300 Liter mobile freezer with wheels for easy transportation and flexible placement. Perfect for outdoor events and catering.'
      }
    ]
  },
  {
    id: 'coolers',
    name: 'Coolers',
    description: 'Professional visi coolers and vertical/supermarket coolers with single, double, and triple door options. Perfect for beverage display, retail stores, and supermarkets.',
    image: '/PRD-NEW/COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    backgroundImage: '/PRD-NEW/COOLERS/assets/assets_task_01jz928z7tf5kbvrem9tr2bn43_1751577397_img_1.webp',
    models: [
      // Single Door Coolers
      { 
        name: 'SRC-60', 
        image: '/PRD-NEW/COOLERS/images/SRC-60-Front-Angle-300x300.png', 
        price: '₹16,999', 
        originalPrice: '₹19,999',
        doorType: 'Single',
        capacity: '60L',
        type: 'Visi Cooler',
        description: '60 Liter single door visi cooler with transparent glass door for optimal product visibility. Compact design perfect for small retail spaces, convenience stores, and counter-top display. Features adjustable shelves and LED lighting to attract customers.',
        features: [
          'Clear double-pane glass door for maximum visibility',
          'Advanced compressor and cooling system',
          'Adjustable thermostat for precise temperature control',
          'LED lighting illuminates interior products',
          'Adjustable shelves for flexible product arrangement',
          'Sleek and modern design',
          'Energy-saving features with CFC-Free refrigerant',
          'Easy cleaning and maintenance',
          'Suitable for cold drinks, beverages, dairy products'
        ],
        specifications: {
          'Storage Capacity': '60 Liters',
          'Door Type': 'Single Glass Door',
          'Shelves': 'Adjustable',
          'Temperature Control': 'Adjustable Thermostat',
          'Lighting': 'LED Interior Lighting',
          'Refrigerant': 'CFC-Free Environment Friendly',
          'Power Supply': '230V/50Hz/1Ph',
          'Applications': 'Convenience stores, small retail outlets, counter display',
          'Suitable For': 'Cold drinks, beverages, dairy products',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'SRC-250', 
        image: '/PRD-NEW/COOLERS/images/SRC-250-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹24,999',
        doorType: 'Single',
        capacity: '250L',
        type: 'Visi Cooler',
        description: '250 Liter single door visi cooler perfect for medium-sized retail spaces. Features clear glass door allowing customers to easily view contents without opening the cooler, enhancing visibility and helping attract customers. Suitable for convenience stores and small supermarkets.',
        features: [
          'Clear single glass door for product visibility',
          'Medium capacity ideal for retail spaces',
          'Advanced cooling system for consistent temperature',
          'Adjustable thermostat for temperature control',
          'LED interior lighting for product attraction',
          'Adjustable shelves for different product sizes',
          'Energy-efficient design',
          'CFC-Free refrigerant for environmental compliance',
          'Easy maintenance and cleaning',
          'Suitable for beverages and dairy products'
        ],
        specifications: {
          'Storage Capacity': '250 Liters',
          'Door Type': 'Single Glass Door',
          'Shelves': '3-4 Adjustable Shelves',
          'Temperature Control': 'Adjustable Thermostat',
          'Lighting': 'LED Interior Lighting',
          'Refrigerant': 'CFC-Free Environment Friendly',
          'Power Supply': '230V/50Hz/1Ph',
          'Applications': 'Convenience stores, small supermarkets, retail outlets',
          'Suitable For': 'Cold beverages, dairy products, packaged foods',
          'Construction': 'Commercial-grade durable build',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'SRC380HC-GL', 
        image: '/PRD-NEW/COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        doorType: 'Single',
        capacity: '380L',
        type: 'Visi Cooler',
        description: '380 Liter single door visi cooler with generous storage capacity for a variety of products. High-quality commercial refrigeration solution designed for demanding needs in food and beverage industry. Features sleek transparent glass door for optimal product visibility and customer attraction.',
        features: [
          'Clear double-pane glass door for maximum visibility',
          'Generous 380L storage capacity',
          'Advanced compressor and cooling system',
          'Adjustable thermostat for precise temperature management',
          'LED lighting illuminates interior products',
          'Adjustable shelves for flexible product layout',
          'Robust construction for commercial use',
          'Energy-saving features with CFC-Free refrigerant',
          'Easy cleaning and maintenance design',
          'Magnetic door seal for energy efficiency'
        ],
        specifications: {
          'Storage Capacity': '380 Liters',
          'Door Type': 'Single Glass Door',
          'Shelves': '4-5 Adjustable Shelves',
          'Temperature Control': 'Adjustable Thermostat',
          'Lighting': 'LED Interior Lighting',
          'Refrigerant': 'CFC-Free Environment Friendly',
          'Power Supply': '230V/50Hz/1Ph',
          'Applications': 'Supermarkets, convenience stores, bakeries, retail establishments',
          'Suitable For': 'Cold drinks, beverages, dairy products, packaged foods',
          'Construction': 'Durable commercial-grade build',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      // Double Door Coolers
      { 
        name: 'SRC500HC', 
        image: '/PRD-NEW/COOLERS/images/SRC500HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹50,999', 
        originalPrice: '₹54,999',
        doorType: 'Double',
        capacity: '500L',
        type: 'Visi Cooler',
        description: '500 Liter double door visi cooler for larger retail spaces and supermarkets.'
      },
      { 
        name: 'SRC572HC', 
        image: '/PRD-NEW/COOLERS/images/SRC572HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹57,999', 
        originalPrice: '₹62,999',
        doorType: 'Double',
        capacity: '572L',
        type: 'Visi Cooler',
        description: '572 Liter high capacity double door cooler for supermarkets and large retail establishments.'
      },
      // Triple Door Coolers
      { 
        name: 'SRC752HC', 
        image: '/PRD-NEW/COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹75,999', 
        originalPrice: '₹82,999',
        doorType: 'Triple',
        capacity: '752L',
        type: 'Visi Cooler',
        description: '752 Liter triple door visi cooler for large retail establishments and supermarkets.'
      },
      { 
        name: 'SRC950', 
        image: '/PRD-NEW/COOLERS/images/SRC950-Front-Angle-With-Stock-300x300.png', 
        price: '₹95,999', 
        originalPrice: '₹102,999',
        doorType: 'Triple',
        capacity: '950L',
        type: 'Visi Cooler',
        description: '950 Liter premium triple door cooler with maximum display capacity for large supermarkets.'
      }
    ]
  },
  {
    id: 'display-pastry-counters',
    name: 'Display & Pastry Counters',
    description: 'Elegant display counters and pastry showcases for bakeries, cafes, pastry shops, and restaurants. Perfect for showcasing desserts, cakes, and prepared foods.',
    image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-1-300x300.png',
    backgroundImage: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/assets/assets_task_01jz931a3zefas9y7hmkgr1ze3_1751578188_img_0.webp',
    models: [
      { 
        name: 'PC-4FT Straight Glass', 
        image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹85,999', 
        originalPrice: '₹95,999',
        type: 'Pastry Counter',
        capacity: '200L',
        description: '4 feet straight glass pastry counter for bakeries and cafes. Perfect for displaying cakes, pastries, and desserts.'
      },
      { 
        name: 'PC-6FT Curved Glass', 
        image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹125,999', 
        originalPrice: '₹135,999',
        type: 'Pastry Counter',
        capacity: '300L',
        description: '6 feet curved glass pastry counter with premium finish for upscale bakeries and restaurants.'
      },
      { 
        name: 'SC-Showcase Counter', 
        image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹95,999', 
        originalPrice: '₹105,999',
        type: 'Showcase Counter',
        capacity: '250L',
        description: 'Multi-tier showcase counter for displaying various food items and prepared foods.'
      }
    ]
  },
  {
    id: 'ice-back-bar-solutions',
    name: 'Ice & Back Bar Solutions',
    description: 'Complete ice machines and back bar cooling solutions for hospitality, restaurants, bars, and hotels. Compact and efficient cooling for professional kitchens.',
    image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD-NEW/WATER-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'ICE-150', 
        image: '/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/ICE-150-300x300.png', 
        price: '₹75,999', 
        originalPrice: '₹82,999',
        type: 'Ice Machine',
        capacity: '150kg/day',
        description: '150kg/day commercial ice machine for restaurants and bars. Produces crystal clear ice cubes.'
      },
      { 
        name: 'BB-60L Back Bar', 
        image: '/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/BB-60L-300x300.png', 
        price: '₹35,999', 
        originalPrice: '₹39,999',
        type: 'Back Bar Unit',
        capacity: '60L',
        description: '60 Liter back bar cooler unit perfect for bars and restaurants. Compact design fits under counters.'
      },
      { 
        name: 'BB-120L Back Bar', 
        image: '/PRD-NEW/ICE-BACK-BAR-SOLUTIONS/images/BB-120L-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        type: 'Back Bar Unit',
        capacity: '120L',
        description: '120 Liter back bar cooling unit for larger bars and commercial kitchens.'
      }
    ]
  },
  {
    id: 'water-solutions',
    name: 'Water Solutions',
    description: 'Commercial water coolers and dispensers for offices, schools, hospitals, and public spaces. High-capacity cooling with stainless steel construction.',
    image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD-NEW/WATER-SOLUTIONS/assets/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'PWC-40/80/120', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        type: 'Water Cooler',
        capacity: '40LPH/80L Storage',
        description: 'Commercial water cooler available in multiple configurations: 40L cooling/80L storage, 60L cooling/80L storage, and 60L cooling/120L storage. Fully stainless steel SS-304 construction for inner tank and outer body. Designed for high-demand applications in schools, colleges, offices, factories, and public places.',
        features: [
          'Food-grade SS-304 stainless steel construction',
          'Multiple capacity configurations available',
          'High cooling efficiency with minimal electricity use',
          'R134a refrigerant drawing only 2 Amps current',
          'Multiple taps for high-volume usage',
          '230V/50Hz/1Ph power supply',
          'Built for industrial setups and institutions',
          'Durable construction for commercial use',
          'Easy cleaning and maintenance',
          'Energy-efficient design saves money'
        ],
        specifications: {
          'Cooling Capacity Options': '40LPH / 60LPH / 80LPH',
          'Storage Capacity Options': '80L / 120L',
          'Construction': 'SS-304 Stainless Steel (Inner tank & Outer body)',
          'Power Supply': '230V/50Hz/1Ph',
          'Refrigerant': 'R134a',
          'Current Draw': '2 Amps only',
          'Number of Taps': '2-3 nos',
          'Applications': 'Schools, colleges, offices, factories, public places',
          'Suitable For': 'High-volume water cooling requirements',
          'Installation': 'Floor standing unit',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'SS 20/20', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SS-2020-2-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        type: 'Water Cooler',
        capacity: '20LPH/20L Storage',
        description: 'Compact 20 LPH stainless steel water cooler perfect for small offices and shops.'
      },
      { 
        name: 'WD-7L Top Loading', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SRC WDTS -7L-Top-300x300.png', 
        price: '₹18,999', 
        originalPrice: '₹21,999',
        type: 'Water Dispenser',
        capacity: '7L',
        description: '7 Liter top loading water dispenser for home and small office use with hot and cold water options.'
      }
    ]
  }
];
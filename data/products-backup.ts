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
      // Combi Freezer/Cooler
      { 
        name: 'D325H223', 
        image: '/PRD/DEEP FREEZER/main images/D325-H223-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        type: 'Combi',
        description: 'Combination unit with separate freezer and cooler compartments with solid top.'
      },
      // Vertical Freezers
      { 
        name: 'D475', 
        image: '/PRD/DEEP FREEZER/main images/D475-300x300.png', 
        price: '₹47,999', 
        originalPrice: '₹52,999',
        type: 'Vertical',
        description: 'Space-efficient upright freezer perfect for commercial and home use.'
      },
      // Glass Top Freezers
      { 
        name: 'D525', 
        image: '/PRD/DEEP FREEZER/main images/D525-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹57,999',
        type: 'Glass Top',
        description: 'Deep freezer with sliding glass top for easy access and product visibility.'
      },
      { 
        name: 'G200H120', 
        image: '/PRD/DEEP FREEZER/main images/G200H120ECINGMXWHX_left-Angle-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        type: 'Glass Top',
        description: 'Premium glass top freezer with excellent visibility.'
      },
      // Eutectic Freezers
      { 
        name: 'E325-LT', 
        image: '/PRD/DEEP FREEZER/main images/E325-LT-SIDE-ISO-VIEW-300x300.png', 
        price: '₹65,999', 
        originalPrice: '₹72,999',
        type: 'Eutectic',
        description: 'Energy-efficient freezer using eutectic technology for consistent temperature control.'
      },
      // Scooping Parlour Freezers
      { 
        name: 'F250GL', 
        image: '/PRD/DEEP FREEZER/main images/F250GL-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        type: 'Scooping',
        description: 'Specialized freezer designed for ice cream parlours and scooping stations.'
      },
      { 
        name: 'F325GC24', 
        image: '/PRD/DEEP FREEZER/main images/F325GC24-300x300.png', 
        price: '₹55,999', 
        originalPrice: '₹59,999',
        type: 'Scooping',
        description: 'Large capacity scooping parlour freezer for commercial ice cream service.'
      },
      // Freezer on Wheels
      { 
        name: 'FOW-300', 
        image: '/PRD/DEEP FREEZER/main images/F325GC24-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        type: 'Mobile',
        description: 'Mobile freezer with wheels for easy transportation and flexible placement.'
      },
      // Additional models
      { name: 'B325', image: '/PRD/DEEP FREEZER/main images/B325-300x300.png', price: '₹32,999', originalPrice: '₹36,999', type: 'Standard' },
      { name: 'B425', image: '/PRD/DEEP FREEZER/main images/B425-300x300.png', price: '₹42,999', originalPrice: '₹46,999', type: 'Standard' },
      { name: 'B525', image: '/PRD/DEEP FREEZER/main images/B525-300x300.png', price: '₹52,999', originalPrice: '₹56,999', type: 'Standard' },
      { name: 'D300 Single Door', image: '/PRD/DEEP FREEZER/main images/D300-Single-Door-300x300.png', price: '₹30,999', originalPrice: '₹34,999', type: 'Standard' }
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
      { 
        name: 'SRC-250', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-250-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹24,999',
        doorType: 'Single',
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
        name: 'SRC-280', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-250-300x300.png', 
        price: '₹25,999', 
        originalPrice: '₹29,999',
        doorType: 'Single',
        description: 'Mid-size visi cooler with enhanced cooling performance.'
      },
      { 
        name: 'SRC-60', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', 
        price: '₹16,999', 
        originalPrice: '₹19,999',
        doorType: 'Single',
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
      // Double Door Coolers
      { 
        name: 'SRC500HC', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC500HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹50,999', 
        originalPrice: '₹54,999',
        doorType: 'Double',
        description: 'Double door visi cooler for larger retail spaces.'
      },
      { 
        name: 'SRC572HC', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC572HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹57,999', 
        originalPrice: '₹62,999',
        doorType: 'Double',
        description: 'High capacity double door cooler for supermarkets.'
      },
      // Triple Door Coolers
      { 
        name: 'SRC752HC', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC752HC-Front-Angle-With-Stock-300x300.png', 
        price: '₹75,999', 
        originalPrice: '₹82,999',
        doorType: 'Triple',
        description: 'Triple door visi cooler for large retail establishments.'
      },
      { 
        name: 'SRC950', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC950-Front-Angle-With-Stock-300x300.png', 
        price: '₹95,999', 
        originalPrice: '₹102,999',
        doorType: 'Triple',
        description: 'Premium triple door cooler with maximum display capacity.'
      },
      // Additional models
      { name: 'SRC-501 Side View', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-501-Side-View-300x300.png', price: '₹50,999', originalPrice: '₹54,999', doorType: 'Double' },
      { name: 'SRC30 White', image: '/PRD/VISI COOLER/mainimagesvisi/SRC30_white-300x300.png', price: '₹13,999', originalPrice: '₹16,999', doorType: 'Single' },
      { name: 'SRC-25 Left Angle', image: '/PRD/VISI COOLER/mainimagesvisi/src-25-Left-Angle-300x300.png', price: '₹12,999', originalPrice: '₹15,999', doorType: 'Single' },
      { name: 'SRC281', image: '/PRD/VISI COOLER/mainimagesvisi/src281-1-300x300.png', price: '₹28,999', originalPrice: '₹32,999', doorType: 'Single' },
      { name: 'SRC502', image: '/PRD/VISI COOLER/mainimagesvisi/src502-2-300x300.png', price: '₹50,999', originalPrice: '₹54,999', doorType: 'Double' },
      { name: 'SRC505', image: '/PRD/VISI COOLER/mainimagesvisi/src505-300x300.png', price: '₹50,999', originalPrice: '₹54,999', doorType: 'Double' }
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
        description: '1200mm pastry display counter with curved glass and LED lighting.',
        features: [
          'Curved tempered glass display',
          'LED strip lighting on each shelf',
          'Digital temperature control (2°C to 8°C)',
          'Stainless steel base and interior',
          'Adjustable glass shelves',
          'Rear sliding doors for easy access'
        ],
        specifications: {
          'External Dimensions (mm)': '1200 (W) x 740 (D) x 1350 (H)',
          'Display Area': '3 Shelves',
          'Temperature Range': '2°C to 8°C',
          'Glass Type': 'Curved Tempered Glass',
          'Lighting': 'LED Strip on Each Shelf',
          'Material': 'Stainless Steel',
          'Voltage': '230V/50Hz'
        }
      },
      { 
        name: 'PC-1500', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹105,999', 
        originalPrice: '₹115,999',
        description: '1500mm premium pastry display counter with enhanced features.'
      },
      { 
        name: 'PC-900', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹65,999', 
        originalPrice: '₹72,999',
        description: '900mm compact pastry counter for small cafes and bakeries.'
      },
      { 
        name: 'PC-1800', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹125,999', 
        originalPrice: '₹135,999',
        description: '1800mm large pastry display counter for high-volume establishments.'
      }
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
        description: 'Double door back bar cooler with glass doors.',
        features: [
          'Double glass doors',
          'LED interior lighting',
          'Digital temperature display',
          'Adjustable wire shelves',
          'Self-closing doors',
          'Lock and key facility'
        ],
        specifications: {
          'External Dimensions (mm)': '900 (W) x 520 (D) x 900 (H)',
          'Capacity': '200 Liters',
          'Temperature Range': '2°C to 8°C',
          'Number of Doors': '2',
          'Shelves': '2 per door',
          'Voltage': '230V/50Hz'
        }
      },
      { 
        name: 'BBU-300', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        description: 'Triple door back bar unit for large bars.'
      },
      { 
        name: 'BBU-100', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', 
        price: '₹18,999', 
        originalPrice: '₹22,999',
        description: 'Single door compact back bar cooler.'
      }
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
        description: '50kg/day ice making capacity machine.',
        features: [
          '50kg daily ice production',
          'Cube ice type',
          'Built-in storage bin',
          'Automatic operation',
          'Energy efficient compressor',
          'Stainless steel construction'
        ],
        specifications: {
          'Production Capacity': '50kg/24hrs',
          'Storage Capacity': '25kg',
          'Ice Type': 'Cube',
          'Dimensions': '500 x 580 x 850 mm',
          'Power Consumption': '380W',
          'Voltage': '230V/50Hz',
          'Water Connection': '3/4 inch'
        }
      },
      { 
        name: 'IM-100', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹95,999', 
        originalPrice: '₹105,999',
        description: '100kg/day high capacity ice maker.'
      },
      { 
        name: 'IM-150', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹125,999', 
        originalPrice: '₹135,999',
        description: '150kg/day commercial ice machine for hotels.'
      }
    ]
  },
  {
    id: 'water-coolers',
    name: 'Water Coolers',
    description: 'Water coolers and dispensers for offices, schools, and public spaces.',
    image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD/WATER COOLER/assets_task_01jz91f8s2e6a9vbs40kxg5asy_1751576549_img_0.webp',
    models: [
      { 
        name: 'PWC-40/80/120', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
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
        image: '/PRD/WATER COOLER/mainimageswater/SS-2020-2-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        description: 'Compact stainless steel water cooler 20 LPH.'
      },
      { 
        name: 'SS 40/40', 
        image: '/PRD/WATER COOLER/mainimageswater/SS-4040-2-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹35,999',
        description: 'Medium capacity water cooler 40 LPH.'
      },
      { 
        name: 'SS 60/60', 
        image: '/PRD/WATER COOLER/mainimageswater/SS-6060-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹45,999',
        description: 'Large capacity water cooler 60 LPH.'
      },
      { 
        name: 'SS 80/80', 
        image: '/PRD/WATER COOLER/mainimageswater/SS-8080-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹55,999',
        description: 'Extra large water cooler 80 LPH.'
      },
      { 
        name: 'SS 150/150', 
        image: '/PRD/WATER COOLER/mainimageswater/SS-150150-1-300x300.png', 
        price: '₹72,999', 
        originalPrice: '₹78,999',
        description: 'Industrial water cooler 150 LPH.'
      },
      // Water Dispensers
      { 
        name: 'WD-3FMCGA', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg', 
        price: '₹8,999', 
        originalPrice: '₹10,999',
        description: 'Hot, Cold & Normal water dispenser.',
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
        description: 'Compact table top water dispenser.'
      }
    ]
  }
];
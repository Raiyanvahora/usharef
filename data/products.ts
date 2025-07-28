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
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  models: ProductModel[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'visi-cooler',
    name: 'Visi Cooler',
    description: 'Energy-efficient coolers for beverages and perishables.',
    image: '/PRD/VISI COOLER/mainimagesvisi/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    models: [
      { 
        name: 'SRC380HC-GL', 
        image: '/PRD/VISI COOLER/mainimagesvisi/0709091_SRC380HC-GL_Left-Angle-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        description: 'Commercial glass door visi cooler for beverage display. Features heavy-duty construction and energy-efficient cooling for retail establishments.',
        features: [
          'Glass door with magnetic seal',
          'LED interior lighting',
          'Digital temperature control',
          'Adjustable wire shelves',
          'Lock and key for security',
          'Low noise operation'
        ],
        specifications: {
          'External Dimensions (mm)': '573 (W) x 655 (D) x 1740 (H)',
          'Gross Volume': '340 Liters',
          'Temperature Range': '1°C to 10°C',
          'Number of Shelves': '4',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Single Glass Door Visi Cooler',
          'Application': 'Beverage Display Cooler'
        }
      },
      { name: '1050 Front View', image: '/PRD/VISI COOLER/mainimagesvisi/1050-Front-View-with-Products-300x300.png', price: '₹105,999', originalPrice: '₹115,999' },
      { name: 'Front Angle With Stock Premium', image: '/PRD/VISI COOLER/mainimagesvisi/Front-Angle-With-Stock-300x300 (1).png', price: '₹45,999', originalPrice: '₹49,999' },
      { name: 'Front Angle With Stock Standard', image: '/PRD/VISI COOLER/mainimagesvisi/Front-Angle-With-Stock-300x300.png', price: '₹42,999', originalPrice: '₹46,999' },
      { name: 'Front Angle Closed Door Premium', image: '/PRD/VISI COOLER/mainimagesvisi/Front-Angle-with-stock-closed-door-300x300 (1).png', price: '₹48,999', originalPrice: '₹52,999' },
      { name: 'Front Angle Closed Door Standard', image: '/PRD/VISI COOLER/mainimagesvisi/Front-Angle-with-stock-closed-door-300x300.png', price: '₹45,999', originalPrice: '₹49,999' },
      { name: 'Front View With Product', image: '/PRD/VISI COOLER/mainimagesvisi/Front-View-With-Product-300x300.png', price: '₹38,999', originalPrice: '₹42,999' },
      { name: 'New Project 10', image: '/PRD/VISI COOLER/mainimagesvisi/New-Project-10-300x300.png', price: '₹32,999', originalPrice: '₹36,999' },
      { name: 'New Project 15', image: '/PRD/VISI COOLER/mainimagesvisi/New-Project-15-300x300.png', price: '₹35,999', originalPrice: '₹39,999' },
      { name: 'New Project 19', image: '/PRD/VISI COOLER/mainimagesvisi/New-Project-19-300x300.png', price: '₹39,999', originalPrice: '₹43,999' },
      { name: 'New Project 41', image: '/PRD/VISI COOLER/mainimagesvisi/New-Project-41-300x300.png', price: '₹41,999', originalPrice: '₹45,999' },
      { 
        name: 'SRC-200', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-200-300x300.png', 
        price: '₹20,999', 
        originalPrice: '₹24,999',
        description: 'Compact visi cooler perfect for small retail spaces. Energy-efficient design with excellent visibility for beverage display.',
        features: [
          'Single glass door design',
          'LED strip lighting',
          'Mechanical temperature control',
          'Wire shelves with plastic coating',
          'Compact footprint',
          'Easy maintenance'
        ],
        specifications: {
          'External Dimensions (mm)': '514 (W) x 549 (D) x 1265 (H)',
          'Gross Volume': '167 Liters',
          'Temperature Range': '1°C to 10°C',
          'Number of Shelves': '3',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Single Glass Door Visi Cooler',
          'Application': 'Small Retail Display'
        }
      },
      { 
        name: 'SRC-280', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-250-300x300.png', 
        price: '₹25,999', 
        originalPrice: '₹29,999',
        description: 'Mid-size visi cooler with enhanced cooling performance. Ideal for convenience stores and small supermarkets.',
        features: [
          'Single glass door design',
          'Bright LED lighting system',
          'Digital thermostat control',
          'Heavy-duty wire shelves',
          'Self-closing door mechanism',
          'Energy-saving compressor'
        ],
        specifications: {
          'External Dimensions (mm)': '514 (W) x 549 (D) x 1515 (H)',
          'Gross Volume': '216 Liters',
          'Temperature Range': '1°C to 10°C',
          'Number of Shelves': '4',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Single Glass Door Visi Cooler',
          'Application': 'Medium Retail Display'
        }
      },
      { name: 'SRC-501 Side View', image: '/PRD/VISI COOLER/mainimagesvisi/SRC-501-Side-View-300x300.png', price: '₹50,999', originalPrice: '₹54,999' },
      { 
        name: 'SRC-60', 
        image: '/PRD/VISI COOLER/mainimagesvisi/SRC-60-Front-Angle-300x300.png', 
        price: '₹16,999', 
        originalPrice: '₹19,999',
        description: 'Compact counter-top visi cooler ideal for small retail spaces. Perfect for beverage display in cafes and small shops.',
        features: [
          'Counter-top design',
          'Glass door with magnetic seal',
          'LED interior lighting',
          'Adjustable wire shelves',
          'Compact footprint',
          'Energy efficient'
        ],
        specifications: {
          'External Dimensions (mm)': '462 (W) x 474 (D) x 664 (H)',
          'Gross Volume': '59 Liters',
          'Temperature Range': '<22°C @ (35°C ambient & 65% RH)',
          'Number of Shelves': '2',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Counter Top Visi Cooler',
          'Application': 'Small Space Display'
        }
      },
      { name: 'SRC30 White', image: '/PRD/VISI COOLER/mainimagesvisi/SRC30_white-300x300.png', price: '₹13,999', originalPrice: '₹16,999' },
      { name: 'SRC500HC Front Angle', image: '/PRD/VISI COOLER/mainimagesvisi/SRC500HC-Front-Angle-With-Stock-300x300.png', price: '₹50,999', originalPrice: '₹54,999' },
      { name: 'SRC572HC Front Angle', image: '/PRD/VISI COOLER/mainimagesvisi/SRC572HC-Front-Angle-With-Stock-300x300.png', price: '₹57,999', originalPrice: '₹62,999' },
      { name: 'SRC752HC Front Angle', image: '/PRD/VISI COOLER/mainimagesvisi/SRC752HC-Front-Angle-With-Stock-300x300.png', price: '₹75,999', originalPrice: '₹82,999' },
      { name: 'SRC950 Front Angle', image: '/PRD/VISI COOLER/mainimagesvisi/SRC950-Front-Angle-With-Stock-300x300.png', price: '₹95,999', originalPrice: '₹102,999' },
      { name: 'Untitled Design 22', image: '/PRD/VISI COOLER/mainimagesvisi/Untitled-design-22-300x300.png', price: '₹28,999', originalPrice: '₹32,999' },
      { name: 'SRC-25 Left Angle', image: '/PRD/VISI COOLER/mainimagesvisi/src-25-Left-Angle-300x300.png', price: '₹12,999', originalPrice: '₹15,999' },
      { name: 'SRC281', image: '/PRD/VISI COOLER/mainimagesvisi/src281-1-300x300.png', price: '₹28,999', originalPrice: '₹32,999' },
      { name: 'SRC502', image: '/PRD/VISI COOLER/mainimagesvisi/src502-2-300x300.png', price: '₹50,999', originalPrice: '₹54,999' },
      { name: 'SRC505', image: '/PRD/VISI COOLER/mainimagesvisi/src505-300x300.png', price: '₹50,999', originalPrice: '₹54,999' },
    ],
  },
  {
    id: 'deep-freezer',
    name: 'Deep Freezer',
    description: 'Reliable deep freezers for commercial and home use.',
    image: '/PRD/DEEP FREEZER/main images/D300-Double-dOOR-1-300x300.png',
    models: [
      { name: 'B325', image: '/PRD/DEEP FREEZER/main images/B325-300x300.png', price: '₹32,999', originalPrice: '₹36,999' },
      { name: 'B425', image: '/PRD/DEEP FREEZER/main images/B425-300x300.png', price: '₹42,999', originalPrice: '₹46,999' },
      { name: 'B525', image: '/PRD/DEEP FREEZER/main images/B525-300x300.png', price: '₹52,999', originalPrice: '₹56,999' },
      { 
        name: 'D150H164', 
        image: '/PRD/DEEP FREEZER/main images/D150-300x300.png', 
        price: '₹15,999', 
        originalPrice: '₹18,999',
        description: 'Compact deep freezer with convertible technology. Can function as both freezer and cooler. Ideal for small shops and home use.',
        features: [
          'Convertible Technology (Freezer & Cooler)',
          'Single door top-opening design',
          'Energy Star Rating: 1 Star',
          'Lock and key facility',
          'Removable storage basket',
          'Manual defrost system'
        ],
        specifications: {
          'External Dimensions (mm)': '635 (W) x 540 (D) x 885 (H)',
          'Gross Volume': '105 Liters',
          'Temperature Range': 'Freezer: < -17°C | Cooler: < 10°C',
          'Number of Baskets': '1',
          'Energy Star Rating': '1 Star',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D225H122', 
        image: '/PRD/DEEP FREEZER/main images/D225-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        description: 'Medium capacity deep freezer with convertible technology. Perfect for retail stores and restaurants with flexible cooling options.',
        features: [
          'Convertible Technology (Freezer & Cooler)',
          'Single door chest freezer',
          'Energy efficient operation',
          'Wire storage basket',
          'Lock and key facility',
          'Manual defrost system'
        ],
        specifications: {
          'External Dimensions (mm)': '760 (W) x 695 (D) x 840 (H)',
          'Gross Volume': '190 Liters',
          'Temperature Range': 'Freezer: < -17°C | Cooler: < 10°C',
          'Number of Baskets': '1',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Convertible Hard Top',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D300H224', 
        image: '/PRD/DEEP FREEZER/main images/D300-Double-dOOR-1-300x300.png', 
        price: '₹35,999', 
        originalPrice: '₹39,999',
        description: 'Double door deep freezer with convertible technology. Ideal for ice cream parlors and supermarkets with organized storage compartments.',
        features: [
          'Convertible Technology (Freezer & Cooler)',
          'Double door hard top design',
          'Robust 70mm Polyurethane insulation',
          'Multiple storage baskets',
          'Lock and key facility',
          'Manual defrost system'
        ],
        specifications: {
          'External Dimensions (mm)': '933 (W) x 612 (D) x 890 (H)',
          'Gross Volume': '224 Liters',
          'Temperature Range': 'Freezer: < -17°C | Cooler: < 10°C',
          'Number of Baskets': '1',
          'Insulation': '70mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Convertible Double Door Hard Top',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D300 Single Door', 
        image: '/PRD/DEEP FREEZER/main images/D300-Single-Door-300x300.png', 
        price: '₹30,999', 
        originalPrice: '₹34,999',
        description: 'Large capacity 300L single door deep freezer. Perfect for commercial use with excellent temperature retention.',
        features: [
          'Single door chest design',
          'Digital temperature control',
          'High-density PUF insulation',
          'Wire baskets included',
          'Drain plug for easy cleaning',
          'Lockable lid with key'
        ],
        specifications: {
          'Capacity': '300 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '195W',
          'Dimensions': '1125 x 560 x 845 mm',
          'Weight': '52 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '22 kg/24hrs'
        }
      },
      { 
        name: 'D325H223', 
        image: '/PRD/DEEP FREEZER/main images/D325-H223-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        description: 'High-performance deep freezer with convertible technology. Designed for heavy commercial use with enhanced cooling efficiency.',
        features: [
          'Convertible Technology (Freezer & Cooler)',
          'High-efficiency compressor',
          'Enhanced insulation walls',
          'Multiple storage baskets',
          'Lock and key facility',
          'Manual defrost system'
        ],
        specifications: {
          'External Dimensions (mm)': '1185 (W) x 622 (D) x 890 (H)',
          'Gross Volume': '325 Liters',
          'Temperature Range': 'Freezer: < -17°C | Cooler: < 10°C',
          'Number of Baskets': '2',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Convertible Hard Top',
          'Warranty': '1 Year Comprehensive + 3 Year Compressor'
        }
      },
      { 
        name: 'D350', 
        image: '/PRD/DEEP FREEZER/main images/D350-300x300.png', 
        price: '₹34,999', 
        originalPrice: '₹38,999',
        description: 'Spacious 350L deep freezer with superior cooling performance. Ideal for supermarkets and large retail stores.',
        features: [
          'Extra-large storage capacity',
          'Tropicalized design',
          'Digital thermostat',
          'Organized wire baskets',
          'Low noise operation',
          'Eco-friendly refrigerant'
        ],
        specifications: {
          'Capacity': '350 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '265W',
          'Dimensions': '1280 x 600 x 845 mm',
          'Weight': '65 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '30 kg/24hrs'
        }
      },
      { 
        name: 'D375', 
        image: '/PRD/DEEP FREEZER/main images/D375-300x300.png', 
        price: '₹37,999', 
        originalPrice: '₹41,999',
        description: 'Premium 375L deep freezer with advanced features. Built for demanding commercial environments.',
        features: [
          'Heavy-duty construction',
          'Fast freeze function',
          'Digital control panel',
          'Multiple compartments',
          'Energy-saving technology',
          'Extended warranty coverage'
        ],
        specifications: {
          'Capacity': '375 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '285W',
          'Dimensions': '1350 x 600 x 845 mm',
          'Weight': '68 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '32 kg/24hrs'
        }
      },
      { 
        name: 'D475', 
        image: '/PRD/DEEP FREEZER/main images/D475-300x300.png', 
        price: '₹47,999', 
        originalPrice: '₹51,999',
        description: 'High-capacity 475L deep freezer for large-scale storage needs. Perfect for restaurants and catering businesses.',
        features: [
          'Extra-large chest freezer',
          'Dual cooling system',
          'LED interior lighting',
          'Heavy-duty wire baskets',
          'Adjustable temperature control',
          'Reinforced hinges'
        ],
        specifications: {
          'Capacity': '475 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '340W',
          'Dimensions': '1500 x 650 x 845 mm',
          'Weight': '78 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '38 kg/24hrs'
        }
      },
      { 
        name: 'D525', 
        image: '/PRD/DEEP FREEZER/main images/D525-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹56,999',
        description: 'Professional 525L deep freezer with maximum storage capacity. Engineered for heavy-duty commercial use.',
        features: [
          'Maximum storage capacity',
          'Industrial-grade compressor',
          'Digital temperature monitoring',
          'Multiple basket system',
          'Anti-bacterial inner lining',
          'Low power consumption design'
        ],
        specifications: {
          'Capacity': '525 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '380W',
          'Dimensions': '1650 x 650 x 845 mm',
          'Weight': '85 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '42 kg/24hrs'
        }
      },
      { 
        name: 'D550', 
        image: '/PRD/DEEP FREEZER/main images/D550-300x300.png', 
        price: '₹54,999', 
        originalPrice: '₹58,999',
        description: 'Extra-large 550L deep freezer with premium features. Designed for supermarkets and wholesale businesses.',
        features: [
          'Jumbo storage capacity',
          'High-performance cooling',
          'Smart temperature control',
          'Organized storage system',
          'Durable aluminum interior',
          'Safety lock mechanism'
        ],
        specifications: {
          'Capacity': '550 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '400W',
          'Dimensions': '1720 x 650 x 845 mm',
          'Weight': '88 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '45 kg/24hrs'
        }
      },
      { 
        name: 'D070H161', 
        image: '/PRD/DEEP FREEZER/main images/D70-300x300.png', 
        price: '₹7,999', 
        originalPrice: '₹9,999',
        description: 'Compact deep freezer with convertible technology. Perfect for small spaces with space-saving design for home and small shops.',
        features: [
          'Convertible Technology (Freezer & Cooler)',
          'Space-saving compact design',
          'Energy Star Rating: 1 Star',
          'Single storage basket',
          'Lock and key facility',
          'Manual defrost system'
        ],
        specifications: {
          'External Dimensions (mm)': '535 (W) x 518 (D) x 841 (H)',
          'Gross Volume': '72 Liters',
          'Temperature Range': 'Freezer: < -17°C | Cooler: < 10°C',
          'Number of Baskets': '1',
          'Energy Star Rating': '1 Star',
          'Insulation': '60mm Polyurethane',
          'Voltage': '230V/50Hz',
          'Type': 'Convertible Hard Top'
        }
      },
      { 
        name: 'D875', 
        image: '/PRD/DEEP FREEZER/main images/D875-2-300x300.png', 
        price: '₹87,999', 
        originalPrice: '₹91,999',
        description: 'Ultra-large 875L commercial deep freezer. The ultimate solution for large-scale frozen storage requirements.',
        features: [
          'Massive storage capacity',
          'Twin cooling system',
          'Professional-grade construction',
          'Multiple compartment design',
          'Advanced temperature management',
          'Heavy-duty commercial build'
        ],
        specifications: {
          'Capacity': '875 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '620W',
          'Dimensions': '2200 x 750 x 900 mm',
          'Weight': '125 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '70 kg/24hrs'
        }
      },
      { 
        name: 'E325 LT', 
        image: '/PRD/DEEP FREEZER/main images/E325-LT-SIDE-ISO-VIEW-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        description: 'Energy-efficient 325L deep freezer with low temperature technology. Designed for optimal performance in high ambient conditions.',
        features: [
          'Low temperature technology',
          'Side ISO view design',
          'Energy-efficient compressor',
          'Thick foam insulation',
          'Corrosion-resistant body',
          'Precise temperature control'
        ],
        specifications: {
          'Capacity': '325 Liters',
          'Temperature Range': '-18°C to -26°C',
          'Power Consumption': '235W',
          'Dimensions': '1180 x 580 x 850 mm',
          'Weight': '60 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Climate Class': 'T (Tropical)'
        }
      },
      { 
        name: 'E425 D220', 
        image: '/PRD/DEEP FREEZER/main images/E425D220-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹46,999',
        description: 'High-capacity 425L deep freezer with D220 cooling technology. Perfect for commercial storage needs.',
        features: [
          'D220 cooling system',
          'Large storage capacity',
          'Digital temperature control',
          'Heavy-duty construction',
          'Multiple storage zones',
          'Energy-saving mode'
        ],
        specifications: {
          'Capacity': '425 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '315W',
          'Dimensions': '1420 x 620 x 850 mm',
          'Weight': '72 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Freezing Capacity': '35 kg/24hrs'
        }
      },
      { 
        name: 'E425 GT20', 
        image: '/PRD/DEEP FREEZER/main images/E425GT20-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹46,999',
        description: 'GT20 series 425L deep freezer with enhanced cooling performance. Built for reliable commercial operation.',
        features: [
          'GT20 series technology',
          'Superior cooling performance',
          'Robust construction',
          'Easy-access storage',
          'Low maintenance design',
          'Extended durability'
        ],
        specifications: {
          'Capacity': '425 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '310W',
          'Dimensions': '1400 x 620 x 850 mm',
          'Weight': '70 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Warranty': '3 years comprehensive'
        }
      },
      { 
        name: 'E425H LT', 
        image: '/PRD/DEEP FREEZER/main images/E425H-LT-SIDE-ISO-VIEW-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹46,999',
        description: 'High-performance E425H with low temperature technology. Premium freezer for demanding commercial applications.',
        features: [
          'High-performance cooling',
          'Low temperature capability',
          'Side ISO view access',
          'Professional-grade build',
          'Advanced insulation',
          'Digital monitoring system'
        ],
        specifications: {
          'Capacity': '425 Liters',
          'Temperature Range': '-18°C to -26°C',
          'Power Consumption': '320W',
          'Dimensions': '1380 x 620 x 850 mm',
          'Weight': '74 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Operating Temperature': 'Up to 43°C ambient'
        }
      },
      { 
        name: 'E525H3 LT', 
        image: '/PRD/DEEP FREEZER/main images/E525H3-LT-SIDE-ISO-VIEW--300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹56,999',
        description: 'Premium E525H3 deep freezer with advanced low temperature technology. Ultimate performance for large-scale operations.',
        features: [
          'H3 series advanced technology',
          'Ultra-low temperature capability',
          'Side ISO access design',
          'Triple-layer insulation',
          'Smart control system',
          'Commercial-grade reliability'
        ],
        specifications: {
          'Capacity': '525 Liters',
          'Temperature Range': '-18°C to -28°C',
          'Power Consumption': '375W',
          'Dimensions': '1620 x 650 x 850 mm',
          'Weight': '82 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Special Features': 'Extreme temperature stability'
        }
      },
      { 
        name: 'F250GL', 
        image: '/PRD/DEEP FREEZER/main images/F250GL-300x300.png', 
        price: '₹25,999', 
        originalPrice: '₹29,999',
        description: 'Glass lid 250L deep freezer with excellent visibility. Perfect for showcasing frozen products in retail stores.',
        features: [
          'Transparent glass lid',
          'LED interior lighting',
          'Excellent product visibility',
          'Sliding glass door',
          'Wire storage baskets',
          'Low noise operation'
        ],
        specifications: {
          'Capacity': '250 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '175W',
          'Dimensions': '970 x 580 x 850 mm',
          'Weight': '48 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Glass Type': 'Tempered safety glass'
        }
      },
      { 
        name: 'F325GC24', 
        image: '/PRD/DEEP FREEZER/main images/F325GC24-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        description: 'Glass cover 325L deep freezer with GC24 technology. Combines display functionality with powerful cooling.',
        features: [
          'Glass cover design',
          'GC24 cooling technology',
          'Enhanced display visibility',
          'Temperature alarm system',
          'Adjustable storage baskets',
          'Anti-frost glass coating'
        ],
        specifications: {
          'Capacity': '325 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '240W',
          'Dimensions': '1160 x 600 x 850 mm',
          'Weight': '58 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Display Features': 'LED lighting system'
        }
      },
      { 
        name: 'F425GC', 
        image: '/PRD/DEEP FREEZER/main images/F425GC-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹46,999',
        description: 'Large glass cover 425L deep freezer ideal for supermarkets. Superior cooling with maximum product visibility.',
        features: [
          'Large glass cover',
          'Supermarket-grade design',
          'Maximum product visibility',
          'Heavy-duty glass hinges',
          'Multiple lighting zones',
          'Commercial-grade cooling'
        ],
        specifications: {
          'Capacity': '425 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '305W',
          'Dimensions': '1380 x 620 x 850 mm',
          'Weight': '68 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Usage': 'Heavy commercial use'
        }
      },
      { 
        name: 'F450GL25', 
        image: '/PRD/DEEP FREEZER/main images/F450GL-1-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        description: 'Premium glass top deep freezer with excellent product visibility. Perfect for supermarkets and retail display applications.',
        features: [
          'Glass Top design for product visibility',
          'Energy Star Rating: 5 Star',
          'High efficiency cooling system',
          'Multiple storage baskets',
          'Sliding glass lid',
          'Superior temperature control'
        ],
        specifications: {
          'External Dimensions (mm)': '1360 (W) x 695 (D) x 882 (H)',
          'Gross Volume': '422 Liters',
          'Temperature Range': '< -17°C',
          'Number of Baskets': '3',
          'Energy Star Rating': '5 Star',
          'Type': 'Glass Top',
          'Voltage': '230V/50Hz',
          'Application': 'Commercial Display Freezer'
        }
      },
      { 
        name: 'F550GL', 
        image: '/PRD/DEEP FREEZER/main images/F550GL-300x300.png', 
        price: '₹54,999', 
        originalPrice: '₹58,999',
        description: 'Extra-large 550L glass lid freezer for maximum storage and visibility. Ultimate solution for large retail stores.',
        features: [
          'Extra-large glass lid',
          'Maximum storage capacity',
          'Superior product visibility',
          'Heavy-duty construction',
          'Advanced cooling technology',
          'Professional display quality'
        ],
        specifications: {
          'Capacity': '550 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '390W',
          'Dimensions': '1680 x 650 x 850 mm',
          'Weight': '85 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Commercial Grade': 'Heavy-duty retail use'
        }
      },
      { 
        name: 'FC350GL', 
        image: '/PRD/DEEP FREEZER/main images/FC350GL-300x300.png', 
        price: '₹35,999', 
        originalPrice: '₹39,999',
        description: 'Curved glass lid 350L deep freezer with modern design. Combines aesthetic appeal with excellent cooling performance.',
        features: [
          'Curved glass lid design',
          'Modern aesthetic appeal',
          'Excellent cooling performance',
          'Easy-clean interior',
          'Smooth sliding mechanism',
          'Energy-efficient operation'
        ],
        specifications: {
          'Capacity': '350 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '255W',
          'Dimensions': '1250 x 610 x 850 mm',
          'Weight': '62 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Design': 'Contemporary curved glass'
        }
      },
      { 
        name: 'G200H120', 
        image: '/PRD/DEEP FREEZER/main images/G200H120ECINGMXWHX_left-Angle-300x300.png', 
        price: '₹20,999', 
        originalPrice: '₹24,999',
        description: 'Compact G200H120 deep freezer with energy-efficient design. Perfect for small businesses and home use.',
        features: [
          'Compact energy-efficient design',
          'H120 cooling technology',
          'Left-angle optimized access',
          'Eco-friendly operation',
          'Space-saving footprint',
          'Quiet performance'
        ],
        specifications: {
          'Capacity': '200 Liters',
          'Temperature Range': '-18°C to -22°C',
          'Power Consumption': '145W',
          'Dimensions': '850 x 560 x 840 mm',
          'Weight': '42 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Energy Rating': '4-star efficiency'
        }
      },
      { 
        name: 'G250H120', 
        image: '/PRD/DEEP FREEZER/main images/G250H120ECINGMXWHX_left-Angle-300x300.png', 
        price: '₹25,999', 
        originalPrice: '₹29,999',
        description: 'Mid-size G250H120 deep freezer with advanced cooling. Ideal for medium-scale commercial operations.',
        features: [
          'Mid-size capacity',
          'Advanced H120 cooling',
          'Left-angle access design',
          'Commercial-grade build',
          'Energy-saving technology',
          'Reliable temperature control'
        ],
        specifications: {
          'Capacity': '250 Liters',
          'Temperature Range': '-18°C to -22°C',
          'Power Consumption': '165W',
          'Dimensions': '980 x 580 x 840 mm',
          'Weight': '48 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Efficiency': 'High energy efficiency'
        }
      },
      { 
        name: 'G300H', 
        image: '/PRD/DEEP FREEZER/main images/G300H-300x300.png', 
        price: '₹30,999', 
        originalPrice: '₹34,999',
        description: 'G300H series deep freezer with high-performance cooling. Reliable solution for consistent temperature maintenance.',
        features: [
          'G300H series technology',
          'High-performance cooling',
          'Consistent temperature maintenance',
          'Durable construction',
          'Easy maintenance access',
          'Professional reliability'
        ],
        specifications: {
          'Capacity': '300 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '210W',
          'Dimensions': '1120 x 580 x 840 mm',
          'Weight': '55 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Performance': 'Consistent cooling reliability'
        }
      },
      { 
        name: 'ILR-525', 
        image: '/PRD/DEEP FREEZER/main images/ILR-525-Front-2-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹56,999',
        description: 'ILR-525 medical/laboratory grade deep freezer with precise temperature control. Perfect for scientific and pharmaceutical storage.',
        features: [
          'Medical/laboratory grade',
          'Ultra-precise temperature control',
          'Digital temperature display',
          'Alarm system for temperature deviation',
          'Lockable door for security',
          'Backup power compatibility'
        ],
        specifications: {
          'Capacity': '525 Liters',
          'Temperature Range': '-18°C to -30°C',
          'Power Consumption': '395W',
          'Dimensions': '1650 x 650 x 850 mm',
          'Weight': '88 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Special Use': 'Medical/Laboratory grade'
        }
      },
      { 
        name: 'New Project 33', 
        image: '/PRD/DEEP FREEZER/main images/New-Project-33-1-300x300.png', 
        price: '₹33,999', 
        originalPrice: '₹37,999',
        description: 'Latest design deep freezer with modern features and energy efficiency. Perfect balance of performance and affordability.',
        features: [
          'Latest modern design',
          'Energy-efficient operation',
          'User-friendly controls',
          'Optimized storage layout',
          'Durable construction',
          'Cost-effective solution'
        ],
        specifications: {
          'Capacity': '330 Liters',
          'Temperature Range': '-18°C to -24°C',
          'Power Consumption': '250W',
          'Dimensions': '1200 x 600 x 850 mm',
          'Weight': '60 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Design': 'Contemporary modern style'
        }
      },
    ],
  },
  {
    id: 'water-dispenser',
    name: 'Water Dispenser',
    description: 'Convenient water dispensers for home and office.',
    image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg',
    models: [
      { 
        name: 'BWD3FMCGA', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmcga-bwd-mi-01-resized.jpg', 
        price: '₹18,999', 
        originalPrice: '₹21,999',
        description: 'Compact bottle water dispenser with hot and cold water facility. Perfect for small offices and homes with efficient cooling and heating.',
        features: [
          'Hot, cold and normal water dispensing',
          'Floor-standing design with storage cabinet',
          'Energy-efficient cooling and heating',
          'Child safety lock for hot water',
          'LED display indicators',
          'Removable drip tray'
        ],
        specifications: {
          'External Dimensions (mm)': '310 (W) x 345 (D) x 940 (H)',
          'Storage Capacity': '15 Liters',
          'Cold Water Capacity': '3.5 Liters',
          'Hot Water Capacity': '1.5 Liters',
          'Power Consumption': 'Cooling: 120W | Heating: 500W',
          'Temperature Range': 'Cold: 6-10°C | Hot: 85-95°C',
          'Type': 'Floor Standing Bottle Water Dispenser',
          'Voltage': '230V/50Hz'
        }
      },
      { 
        name: 'BWD3FMRGA-B', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmrga-b-bwd-mi-01-resized.jpg', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        description: 'Premium blue bottle water dispenser with enhanced features and temperature control. Stylish design with superior performance.',
        features: [
          'Premium blue finish design',
          'Hot, cold and normal water dispensing',
          'Digital temperature display',
          'LED indicator lights',
          'Enhanced cooling and heating performance',
          'Modern aesthetic design'
        ],
        specifications: {
          'External Dimensions (mm)': '320 (W) x 360 (D) x 980 (H)',
          'Storage Capacity': '18 Liters',
          'Cold Water Capacity': '4.0 Liters',
          'Hot Water Capacity': '2.0 Liters',
          'Power Consumption': 'Cooling: 140W | Heating: 550W',
          'Temperature Range': 'Cold: 5-10°C | Hot: 85-95°C',
          'Type': 'Floor Standing Bottle Water Dispenser',
          'Voltage': '230V/50Hz'
        }
      },
      { 
        name: 'BWD3FMRGA', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3fmrga-bwd-mi-01-resized.jpg', 
        price: '₹20,999', 
        originalPrice: '₹23,999',
        description: 'Standard bottle water dispenser with reliable hot and cold water supply. Excellent value for money with consistent performance.',
        features: [
          'Standard white finish',
          'Hot, cold and normal water dispensing',
          'Simple push-button operation',
          'Safety features included',
          'Easy maintenance design',
          'Cost-effective solution'
        ],
        specifications: {
          'External Dimensions (mm)': '310 (W) x 345 (D) x 940 (H)',
          'Storage Capacity': '15 Liters',
          'Cold Water Capacity': '3.5 Liters',
          'Hot Water Capacity': '1.8 Liters',
          'Power Consumption': 'Cooling: 120W | Heating: 500W',
          'Temperature Range': 'Cold: 6-10°C | Hot: 85-95°C',
          'Type': 'Floor Standing Bottle Water Dispenser',
          'Voltage': '230V/50Hz'
        }
      },
      { 
        name: 'BWD3TTGA', 
        image: '/PRD/WATER DISPENSER/mainimagesdis/bwd3ttga-bwd-mi-01_1_.jpg', 
        price: '₹25,999', 
        originalPrice: '₹28,999',
        description: 'Premium tabletop water dispenser with triple temperature control. Compact design with ambient water option for maximum convenience.',
        features: [
          'Tabletop compact design',
          'Hot, cold, and ambient water',
          'Premium construction quality',
          'Advanced safety features',
          'High-capacity storage tanks',
          'Professional-grade reliability'
        ],
        specifications: {
          'External Dimensions (mm)': '320 (W) x 380 (D) x 450 (H)',
          'Storage Capacity': '20 Liters',
          'Cold Water Capacity': '4.5 Liters',
          'Hot Water Capacity': '2.5 Liters',
          'Power Consumption': 'Cooling: 150W | Heating: 550W',
          'Temperature Range': 'Cold: 4-8°C | Hot: 85-95°C',
          'Type': 'Tabletop Bottle Water Dispenser',
          'Voltage': '230V/50Hz'
        }
      },
    ],
  },
  {
    id: 'water-cooler',
    name: 'Water Cooler',
    description: 'High-capacity water coolers for every need.',
    image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png',
    models: [
      { 
        name: 'PWC6080', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC-40806080-1-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹36,999',
        description: 'Premium precoated water cooler with storage capacity. Designed for high-traffic areas like offices, schools, and public spaces.',
        features: [
          'Storage Type Water Cooler',
          'Stainless steel body construction',
          'Push cock faucet system',
          'Energy-efficient compressor',
          'High cooling capacity',
          'Environmentally friendly HC refrigerant'
        ],
        specifications: {
          'External Dimensions (mm)': '640 (W) x 676 (D) x 1241 (H)',
          'Water Storage Capacity': '80 Liters',
          'Cooling Capacity': '60 Liters per Hour',
          'Faucet Type': 'Push Cock',
          'Number of Faucets': '2 (Cold)',
          'Body Material': 'Stainless Steel',
          'Voltage': '230V/50Hz',
          'Type': 'Precoated Storage Water Cooler'
        }
      },
      { 
        name: 'PWC80120 Deluxe', 
        image: '/PRD/WATER COOLER/mainimageswater/PWC80120-1-300x300.png', 
        price: '₹45,999', 
        originalPrice: '₹49,999',
        description: 'Deluxe high-capacity water cooler with 80/120 LPH cooling. Perfect for large institutions and commercial establishments.',
        features: [
          'Dual cooling system for maximum efficiency',
          'Heavy-duty stainless steel construction',
          'Multiple dispensing points',
          'Integrated RO water purification',
          'Large storage tank capacity',
          'Digital temperature display'
        ],
        specifications: {
          'Cooling Capacity': '80/120 LPH',
          'Storage Capacity': '120 Liters',
          'Power Consumption': '650W',
          'Dimensions': '1400 x 700 x 1400 mm',
          'Weight': '110 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Compressor': 'Heavy-duty hermetic'
        }
      },
      { 
        name: 'SWC150150', 
        image: '/PRD/WATER COOLER/mainimageswater/SWC-150150-300x300.png', 
        price: '₹28,999', 
        originalPrice: '₹32,999',
        description: 'Large capacity storage water cooler with high cooling capacity. Reliable and efficient cooling solution for high-traffic establishments.',
        features: [
          'Storage Type Water Cooler',
          'High cooling capacity rating',
          'Multiple push cock faucets',
          'Stainless steel construction',
          'Energy-efficient operation',
          'Heavy-duty compressor'
        ],
        specifications: {
          'External Dimensions (mm)': '800 (W) x 821 (D) x 1241 (H)',
          'Water Storage Capacity': '150 Liters',
          'Cooling Capacity': '120 Liters per Hour',
          'Faucet Type': 'Push Cock',
          'Number of Faucets': '3',
          'Body Material': 'Stainless Steel',
          'Voltage': '230V/50Hz',
          'Type': 'Storage Water Cooler'
        }
      },
      { 
        name: 'SWC4080HC', 
        image: '/PRD/WATER COOLER/mainimageswater/SWC-4080-6080-1-300x300.png', 
        price: '₹38,999', 
        originalPrice: '₹42,999',
        description: 'Commercial-grade storage water cooler with medium capacity. Suitable for offices, restaurants, and medium establishments.',
        features: [
          'Storage Type Water Cooler',
          'Heavy-duty commercial construction',
          'Push cock faucet system',
          'Stainless steel construction',
          'Energy-efficient compressor',
          'HC refrigerant technology'
        ],
        specifications: {
          'External Dimensions (mm)': '640 (W) x 676 (D) x 1241 (H)',
          'Water Storage Capacity': '80 Liters',
          'Cooling Capacity': '40 Liters per Hour',
          'Faucet Type': 'Push Cock',
          'Number of Faucets': '2',
          'Body Material': 'Stainless Steel',
          'Voltage': '230V/50Hz',
          'Type': 'Storage Water Cooler'
        }
      },
      { 
        name: 'SWC-80120 Professional', 
        image: '/PRD/WATER COOLER/mainimageswater/SWC-80120-1-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹46,999',
        description: 'Professional water cooler with 80/120 LPH capacity. Engineered for continuous heavy-duty use in commercial environments.',
        features: [
          'High-efficiency cooling system',
          'Premium stainless steel finish',
          'Multi-stage water filtration',
          'Digital control panel',
          'Energy-saving mode',
          'Low maintenance design'
        ],
        specifications: {
          'Cooling Capacity': '80/120 LPH',
          'Storage Capacity': '100 Liters',
          'Power Consumption': '580W',
          'Dimensions': '1350 x 650 x 1380 mm',
          'Weight': '105 kg',
          'Voltage': '220-240V, 50Hz',
          'Refrigerant': 'R-134a',
          'Warranty': '2 years on compressor'
        }
      },
    ],
  },
  {
    id: 'pastry-counter',
    name: 'Pastry Counter',
    description: 'Elegant pastry counters for bakeries and cafes.',
    image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png',
    models: [
      { 
        name: 'PTW15PHC-SBX', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-1-300x300.png', 
        price: '₹65,999', 
        originalPrice: '₹72,999',
        description: 'Premium 5-foot pastry display cabinet with enhanced visibility and storage. Perfect for showcasing delicate pastries, cakes, and bakery items.',
        features: [
          'Advanced cooling technology',
          'LED lighting system for each shelf',
          'Digital temperature control',
          'Front heated glass',
          'All side glass view',
          'Energy efficient operation'
        ],
        specifications: {
          'External Dimensions (mm)': '1500 (W) x 665 (D) x 1235 (H)',
          'Gross Volume': '625 Liters',
          'Net Volume': '540 Liters',
          'Temperature Range': '2°C to 10°C',
          'Number of Shelves': 'Base + 3 Shelves',
          'Refrigerant': 'R134a',
          'Type': '5 ft Pastry Display Cabinet',
          'Application': 'Commercial Pastry Display'
        }
      },
      { 
        name: 'PTW12HC', 
        image: '/PRD/PASTRY COUNTER/mainimages/Right-Angle-With-Stock-300x300.png', 
        price: '₹58,999', 
        originalPrice: '₹65,999',
        description: 'Standard 4-foot pastry display cabinet with excellent visibility and reliable cooling performance. Ideal for medium-sized bakeries and cafes.',
        features: [
          'Advanced cooling technology',
          'LED lighting system for each shelf',
          'Digital temperature control',
          'Front heated glass',
          'All side glass view',
          'Sliding door access'
        ],
        specifications: {
          'External Dimensions (mm)': '1200 (W) x 665 (D) x 1235 (H)',
          'Gross Volume': '500 Liters',
          'Net Volume': '435 Liters',
          'Temperature Range': '2°C to 10°C',
          'Number of Shelves': 'Base + 3 Shelves',
          'Refrigerant': 'R134a',
          'Type': '4 ft Pastry Display Cabinet',
          'Application': 'Commercial Pastry Display'
        }
      },
      { 
        name: 'PTW09HC', 
        image: '/PRD/PASTRY COUNTER/mainimages/With-Stock-1-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹58,999',
        description: 'Compact 3-foot pastry display cabinet with storage compartment. Combines display excellence with practical storage solutions for busy establishments.',
        features: [
          'Advanced cooling technology',
          'LED lighting system for each shelf',
          'Digital temperature control',
          'Front heated glass',
          'All side glass view',
          'Compact footprint design'
        ],
        specifications: {
          'External Dimensions (mm)': '900 (W) x 665 (D) x 1235 (H)',
          'Gross Volume': '360 Liters',
          'Net Volume': '320 Liters',
          'Temperature Range': '2°C to 10°C',
          'Number of Shelves': 'Base + 3 Shelves',
          'Refrigerant': 'R134a',
          'Type': '3 ft Pastry Display Cabinet',
          'Application': 'Small Commercial Display'
        }
      },
      { 
        name: 'PTW15HC', 
        image: '/PRD/PASTRY COUNTER/mainimages/With-Stock-2-300x300.png', 
        price: '₹55,999', 
        originalPrice: '₹62,999',
        description: 'Enhanced 5-foot pastry display cabinet with additional storage. Features improved insulation and energy efficiency for cost-effective operation.',
        features: [
          'Advanced cooling technology',
          'LED lighting system for each shelf',
          'Digital temperature control',
          'Front heated glass',
          'All side glass view',
          'Durable construction'
        ],
        specifications: {
          'External Dimensions (mm)': '1500 (W) x 665 (D) x 1235 (H)',
          'Gross Volume': '625 Liters',
          'Net Volume': '540 Liters',
          'Temperature Range': '2°C to 10°C',
          'Number of Shelves': 'Base + 3 Shelves',
          'Refrigerant': 'R134a',
          'Type': '5 ft Pastry Display Cabinet',
          'Application': 'Large Commercial Display'
        }
      },
      { 
        name: 'PTW06HC', 
        image: '/PRD/PASTRY COUNTER/mainimages/With-Stock-300x300.png', 
        price: '₹48,999', 
        originalPrice: '₹54,999',
        description: 'Compact 2-foot pastry display cabinet with integrated storage. Perfect entry-level solution for small bakeries and dessert shops.',
        features: [
          'Advanced cooling technology',
          'LED lighting system for each shelf',
          'Digital temperature control',
          'Front heated glass',
          'All side glass view',
          'Space-efficient design'
        ],
        specifications: {
          'External Dimensions (mm)': '600 (W) x 665 (D) x 1235 (H)',
          'Gross Volume': '240 Liters',
          'Net Volume': '210 Liters',
          'Temperature Range': '2°C to 10°C',
          'Number of Shelves': 'Base + 3 Shelves',
          'Refrigerant': 'R134a',
          'Type': '2 ft Pastry Display Cabinet',
          'Application': 'Small Commercial Display'
        }
      },
    ],
  },
]; 
// Define types inline to avoid import issues
interface ProductModel {
  id: string; // Unique product ID
  name: string;
  image: string;
  images?: string[]; // Multiple product images
  mrp?: string; // Maximum Retail Price
  price?: string; // Deprecated - use mrp instead
  originalPrice?: string; // Deprecated - use mrp instead
  description?: string;
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  dimensions?: {
    external?: string;
    internal?: string;
  };
  technicalSpecs?: {
    grossVolume?: string;
    netVolume?: string;
    temperatureRange?: string;
    powerConsumption?: string;
    energyRating?: string;
    refrigerant?: string;
    compressor?: string;
    noOfBaskets?: string;
    noOfDoors?: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
  type?: string; // For filtering by type within categories (Convertible, Combi, Glass Top, Eutectic, Scooping, Mobile, SRC, IMVC, Frigoglass, Vertical)
  doorType?: string; // For filtering coolers by door type (Single, Double, Triple, Multi)
  capacity?: string; // For filtering by capacity (liters)
  starRating?: string; // For filtering by energy star rating
  size?: string; // For filtering by size (Small/Medium/Large)
  application?: string; // For filtering by application
  warranty?: string; // Warranty information
  deliveryTerms?: string; // Delivery terms
  brand?: string; // Brand (Western, Icemake, Frigoglass)
  brochureUrl?: string; // PDF brochure download link
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  backgroundImage?: string;
  models: ProductModel[];
  warranty?: string; // Category-specific warranty info
  deliveryInfo?: string; // Delivery information
  brands?: string[]; // Available brands in this category
  filterOptions?: {
    types?: string[];
    capacities?: string[];
    doorTypes?: string[];
    applications?: string[];
    sizes?: string[];
  };
}

export const productCategories: ProductCategory[] = [
  {
    id: 'freezers',
    name: 'Deep Freezers',
    description: 'Premium commercial freezers including convertible, combi, glass top, eutectic, scooping parlours, and mobile freezers. 4-year warranty on deep freezers.',
    image: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png',
    backgroundImage: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png',
    warranty: '4 years for deep freezers',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western', 'Icemake'],
    filterOptions: {
      types: ['Convertible', 'Combi', 'Glass Top', 'Eutectic', 'Scooping', 'Mobile'],
      capacities: ['70L', '100L', '150L', '200L', '210L', '225L', '250L', '300L', '305L', '325L', '350L', '375L', '380L', '400L', '405L', '425L', '450L', '475L', '495L', '500L', '505L', '525L', '550L', '600L', '625L', '875L'],
      applications: ['Ice Cream Parlours', 'Retail Stores', 'Supermarkets', 'Commercial Establishments']
    },
    models: [
      // Convertible Freezers & Coolers
      { 
        id: 'D070H161',
        name: 'D070H161', 
        image: '/PRD-NEW/DEEP FREEZERS/images/D70-300x300.png',
        images: ['/PRD-NEW/DEEP FREEZERS/images/D70-300x300.png'],
        mrp: '₹18,050', 
        type: 'Convertible', 
        capacity: '72L', 
        warranty: '4 years for deep freezers', 
        brand: 'Western', 
        description: '72L convertible freezer/cooler with dual functionality.',
        specifications: {
          'Model': 'D070H161',
          'Capacity': '72 Liters',
          'Type': 'Convertible Freezer/Cooler',
          'External Dimensions': '525 x 460 x 845 mm',
          'Temperature Range': '-18°C to +10°C',
          'Power Consumption': '0.5 kWh/24h',
          'Voltage': '220-240V / 50Hz',
          'Refrigerant': 'R600a',
          'Defrosting': 'Manual',
          'Number of Baskets': '1',
          'Net Weight': '25 kg'
        },
        features: [
          'Dual function - works as freezer and cooler',
          'Energy efficient compressor',
          'CFC-free refrigerant',
          'Sturdy construction with powder coated finish',
          'Lock and key facility',
          'Interior LED light'
        ]
      },
      { id: 'D150H164', name: 'D150H164', image: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png', mrp: '₹20,890', type: 'Convertible', capacity: '106L', warranty: '4 years for deep freezers', brand: 'Western', description: '106L convertible freezer/cooler with hard top cover.' },
      { id: 'D300H124', name: 'D300H124', image: '/PRD-NEW/DEEP FREEZERS/images/D300-Single-Door-300x300.png', mrp: '₹27,610', type: 'Convertible', capacity: '220L', warranty: '4 years for deep freezers', brand: 'Western', description: '220L convertible freezer with double door design.' },
      { id: 'D350H225', name: 'D350H225', image: '/PRD-NEW/DEEP FREEZERS/images/D350-300x300.png', mrp: '₹31,660', type: 'Convertible', capacity: '282L', warranty: '4 years for deep freezers', brand: 'Western', description: '282L high capacity convertible freezer.' },
      { id: 'D375H225', name: 'D375H225', image: '/PRD-NEW/DEEP FREEZERS/images/D375-300x300.png', mrp: '₹33,280', type: 'Convertible', capacity: '306L', warranty: '4 years for deep freezers', brand: 'Western', description: '306L premium convertible freezer/cooler.' },
      { id: 'D475H224', name: 'D475H224', image: '/PRD-NEW/DEEP FREEZERS/images/D475-300x300.png', mrp: '₹37,170', type: 'Convertible', capacity: '444L', warranty: '4 years for deep freezers', brand: 'Western', description: '444L large convertible freezer for commercial use.' },
      { id: 'D525H224', name: 'D525H224', image: '/PRD-NEW/DEEP FREEZERS/images/D525-300x300.png', mrp: '₹41,060', type: 'Convertible', capacity: '505L', warranty: '4 years for deep freezers', brand: 'Western', description: '505L extra large convertible freezer.' },
      { id: 'D550H225', name: 'D550H225', image: '/PRD-NEW/DEEP FREEZERS/images/D550-300x300.png', mrp: '₹42,215', type: 'Convertible', capacity: '527L', warranty: '4 years for deep freezers', brand: 'Western', description: '527L premium convertible freezer with advanced features.' },
      { id: 'D625H225', name: 'D625H225', image: '/PRD-NEW/DEEP FREEZERS/images/D525-300x300.png', mrp: '₹43,190', type: 'Convertible', capacity: '565L', warranty: '4 years for deep freezers', brand: 'Western', description: '565L largest convertible freezer for heavy commercial use.' },
      { id: 'NWHF875H', name: 'NWHF875H', image: '/PRD-NEW/DEEP FREEZERS/images/D875-2-300x300.png', mrp: '₹66,200', type: 'Convertible', capacity: '722L', warranty: '4 years for deep freezers', brand: 'Western', description: '722L industrial convertible freezer with premium features.' },
      // Combi Freezer/Cooler
      { id: 'B325H220', name: 'B325H220', image: '/PRD-NEW/DEEP FREEZERS/images/B325-300x300.png', mrp: '₹39,999', type: 'Combi', capacity: '325L', brand: 'Western', description: '325L combination freezer/cooler with separate compartments.' },
      { id: 'B425H220', name: 'B425H220', image: '/PRD-NEW/DEEP FREEZERS/images/B425-300x300.png', mrp: '₹49,999', type: 'Combi', capacity: '425L', brand: 'Western', description: '425L combi unit with dual temperature zones.' },
      { id: 'B525H220', name: 'B525H220', image: '/PRD-NEW/DEEP FREEZERS/images/B525-300x300.png', mrp: '₹59,999', type: 'Combi', capacity: '525L', brand: 'Western', description: '525L large combi freezer/cooler for commercial use.' },
      // Glass Top Deep Freezers
      { id: 'F250GL25', name: 'F250GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', mrp: '₹32,999', type: 'Glass Top', capacity: '250L', brand: 'Western', description: '250L glass top deep freezer with curved glass lid.' },
      { id: 'F350GL25', name: 'F350GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', mrp: '₹42,999', type: 'Glass Top', capacity: '350L', brand: 'Western', description: '350L glass top freezer with enhanced visibility.' },
      { id: 'F450GL25', name: 'F450GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', mrp: '₹52,999', type: 'Glass Top', capacity: '422L', brand: 'Western', description: '422L (gross) large glass top freezer for retail display.' },
      { id: 'F550GL25', name: 'F550GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', mrp: '₹62,999', type: 'Glass Top', capacity: '550L', brand: 'Western', description: '550L premium glass top freezer with LED lighting.' },
      // Eutectic Freezers
      { id: 'E325H220', name: 'E325H220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', mrp: '₹75,999', type: 'Eutectic', capacity: '325L', brand: 'Western', description: '325L eutectic freezer with energy-efficient cooling plates.' },
      { id: 'E425H220', name: 'E425H220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', mrp: '₹85,999', type: 'Eutectic', capacity: '425L', brand: 'Western', description: '425L eutectic freezer with hard top cover.' },
      { id: 'E425D220', name: 'E425D220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', mrp: '₹89,999', type: 'Eutectic', capacity: '425L', brand: 'Western', description: '425L eutectic freezer with dual compartments.' },
      { id: 'E425GT20', name: 'E425GT20', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', mrp: '₹92,999', type: 'Eutectic', capacity: '474L', brand: 'Western', description: '474L eutectic scooping-style freezer with glass top display.' },
      { id: 'E525D320', name: 'E525D320', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', mrp: '₹105,999', type: 'Eutectic', capacity: '393L', brand: 'Western', description: '393L eutectic freezer with dual zone cooling.' },
      // Scooping Parlours
      { id: 'F450GT25AAINGMXWHS', name: 'F450GT25AAINGMXWHS', image: '/PRD-NEW/DEEP FREEZERS/images/F325GC24-300x300.png', mrp: '₹135,999', type: 'Scooping', capacity: '422L', brand: 'Western', description: '422L scooping parlour with glass top and multiple tubs.' },
      { id: 'F550GT25AAINGMXWHS', name: 'F550GT25AAINGMXWHS', image: '/PRD-NEW/DEEP FREEZERS/images/F325GC24-300x300.png', mrp: '₹155,999', type: 'Scooping', capacity: '536L', brand: 'Western', description: '536L premium scooping parlour for ice cream shops.' },
      // Freezer on Wheel
      { id: 'G200H120', name: 'G200H120', image: '/PRD-NEW/DEEP FREEZERS/images/G200H120ECINGMXWHX_left-Angle-300x300.png', mrp: '₹46,999', type: 'Mobile', capacity: '117L', brand: 'Western', description: '117L mobile freezer with wheels for easy movement.' },
      { id: 'G300H120', name: 'G300H120', image: '/PRD-NEW/DEEP FREEZERS/images/G200H120ECINGMXWHX_left-Angle-300x300.png', mrp: '₹56,999', type: 'Mobile', capacity: '200L', brand: 'Western', description: '200L single-tank mobile freezer with enhanced portability.' },
      // Icemake Combi Freezer/Cooler
      {
        id: 'ICEMAKE_IFC425',
        name: 'Icemake IFC425 – 380 L Combi Freezer & Cooler',
        image: '/PRD-NEW/DEEP FREEZERS/images/61EnGYeMNyL._SL1500_-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/61EnGYeMNyL._SL1500_-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Combi',
        capacity: '380L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Dual-zone chest (freezer + cooler) with thick PUF insulation, copper condenser, and lockable lids—reliable for daily retail use.',
        specifications: {
          'Model': 'IFC425',
          'Capacity': '380 Liters',
          'Type': 'Combi Freezer/Cooler',
          'Brand': 'Icemake'
        },
        features: ['Dual-zone storage', 'Thick PUF insulation', 'Copper condenser', 'Lockable lids', 'Reliable for retail use'],
        isNew: true
      },
      {
        id: 'ICEMAKE_IFC525',
        name: 'Icemake IFC525 – 495 L Combi Freezer & Cooler',
        image: '/PRD-NEW/DEEP FREEZERS/images/51WkWRK0qL._SL1500_-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/51WkWRK0qL._SL1500_-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Combi',
        capacity: '495L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Higher-capacity dual-zone storage with rugged build, efficient holdover, and easy service access for supermarkets and bulk use.',
        specifications: {
          'Model': 'IFC525',
          'Capacity': '495 Liters',
          'Type': 'Combi Freezer/Cooler',
          'Brand': 'Icemake'
        },
        features: ['Higher capacity dual-zone', 'Rugged build', 'Efficient holdover', 'Easy service access', 'Ideal for supermarkets'],
        isNew: true
      },
      // Icemake Glass Top Deep Freezers
      {
        id: 'ICEMAKE_IGT350',
        name: 'Icemake IGT350 – 300 L Glass Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/51Ru3-x9ldL._SL1080_-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/51Ru3-x9ldL._SL1080_-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Glass Top',
        capacity: '300L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Sliding glass-top display freezer with 70 mm PUF insulation—ideal for frozen foods and ice cream.',
        specifications: {
          'Model': 'IGT350',
          'Capacity': '300 Liters',
          'Type': 'Glass Top Deep Freezer',
          'Insulation': '70 mm PUF',
          'Brand': 'Icemake'
        },
        features: ['Sliding glass-top display', '70 mm PUF insulation', 'Ideal for frozen foods', 'Perfect for ice cream display'],
        isNew: true
      },
      {
        id: 'ICEMAKE_IGT450',
        name: 'Icemake IGT450 – 400 L Glass Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/whatsapp-image-2025-01-17-at-5-13-50-pm-1000x1000-1-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/whatsapp-image-2025-01-17-at-5-13-50-pm-1000x1000-1-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Glass Top',
        capacity: '400L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Mid-size glass-top with wide display area and efficient cooling for high-turnover outlets.',
        specifications: {
          'Model': 'IGT450',
          'Capacity': '400 Liters',
          'Type': 'Glass Top Deep Freezer',
          'Brand': 'Icemake'
        },
        features: ['Mid-size glass-top', 'Wide display area', 'Efficient cooling', 'High-turnover design'],
        isNew: true
      },
      {
        id: 'ICEMAKE_IGT550',
        name: 'Icemake IGT550 – 500 L Glass Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Glass Top',
        capacity: '500L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Large capacity with deep baskets and thick PUF for long holdover during outages.',
        specifications: {
          'Model': 'IGT550',
          'Capacity': '500 Liters',
          'Type': 'Glass Top Deep Freezer',
          'Brand': 'Icemake'
        },
        features: ['Large capacity', 'Deep baskets', 'Thick PUF insulation', 'Long holdover during outages'],
        isNew: true
      },
      // Icemake Hard Top Deep Freezers
      {
        id: 'ICEMAKE_IHT175_SD',
        name: 'Icemake IHT175 SD – 100 L Hard Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/DIFFER1-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/DIFFER1-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Convertible',
        capacity: '100L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Compact convertible chest (+3° to −25°C) with lock and anti-bacterial gasket—perfect for tight spaces.',
        specifications: {
          'Model': 'IHT175 SD',
          'Capacity': '100 Liters',
          'Type': 'Hard Top Deep Freezer',
          'Temperature Range': '+3°C to -25°C',
          'Brand': 'Icemake'
        },
        features: ['Compact convertible chest', 'Temperature range +3° to -25°C', 'Lock included', 'Anti-bacterial gasket', 'Perfect for tight spaces'],
        isNew: true
      },
      {
        id: 'ICEMAKE_IHT250',
        name: 'Icemake IHT250 – 210 L Hard Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-1-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-1-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Convertible',
        capacity: '210L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Versatile hard top deep freezer with convertible temperature settings for flexible storage needs.',
        specifications: {
          'Model': 'IHT250',
          'Capacity': '210 Liters',
          'Type': 'Hard Top Deep Freezer',
          'Brand': 'Icemake'
        },
        features: ['Versatile hard top design', 'Convertible temperature settings', 'Flexible storage', 'Commercial grade'],
        isNew: true
      },
      {
        id: 'ICEMAKE_IHT550',
        name: 'Icemake IHT550 – 505 L Hard Top Deep Freezer',
        image: '/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-2-264x264.jpg',
        images: ['/PRD-NEW/DEEP FREEZERS/images/Difference-between-3-Star-4-Star-and-5-Star-Electrical-appliances-2-264x264.jpg'],
        mrp: 'Contact for MRP',
        type: 'Convertible',
        capacity: '505L',
        warranty: '4 years for deep freezers',
        brand: 'Icemake',
        description: 'Large capacity hard top deep freezer with superior insulation and energy efficiency for commercial use.',
        specifications: {
          'Model': 'IHT550',
          'Capacity': '505 Liters',
          'Type': 'Hard Top Deep Freezer',
          'Brand': 'Icemake'
        },
        features: ['Large capacity', 'Superior insulation', 'Energy efficient', 'Commercial grade', 'Heavy duty construction'],
        isNew: true
      }
    ]
  },
  {
    id: 'coolers',
    name: 'Visi Coolers',
    description: 'Comprehensive range of visi coolers including SRC, IMVC, and Frigoglass models, plus vertical coolers and supermarket coolers. 1-year warranty on all visi coolers.',
    image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    backgroundImage: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    warranty: '1 year for Visi Coolers',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western', 'Icemake', 'Frigoglass'],
    filterOptions: {
      types: ['SRC', 'IMVC', 'Frigoglass', 'Vertical'],
      doorTypes: ['Single', 'Double', 'Triple', 'Multi'],
      capacities: ['30L', '60L', '200L', '201L', '250L', '280L', '281L', '295L', '300L', '333L', '360L', '370L', '380L', '381L', '400L', '450L', '457L', '500L', '501L', '550L', '569L', '600L', '650L', '752L', '800L', '810L', '900L', '950L', '1000L', '1009L', '1050L', '1200L', '1800L'],
      applications: ['Convenience Stores', 'Supermarkets', 'Retail Outlets', 'Commercial Use']
    },
    models: [
      // Visi Coolers (SRC Models)
      { id: 'SRC200HCF-GL', name: 'SRC200HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', mrp: '₹29,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '167L', description: '167L single door visi cooler with frost-free technology.' },
      { id: 'SRC201HCF-GL', name: 'SRC201HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', mrp: '₹30,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '167L', description: '167L single door enhanced visi cooler with improved efficiency.' },
      { id: 'SRC280HCF-GL', name: 'SRC280HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/New-Project-15-300x300.png', mrp: '₹36,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '216L', description: '216L single door mid-size visi cooler with frost-free operation.' },
      { id: 'SRC281HC-GL', name: 'SRC281HC-GL', image: '/PRD-NEW/VISI COOLERS/images/src281-1-300x300.png', mrp: '₹37,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '281L', description: '281L visi cooler with hard cooling system.' },
      { id: 'SRC360HCF-GL', name: 'SRC360HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', mrp: '₹44,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '302L', description: '302L single door visi cooler with frost-free cooling.' },
      { id: 'SRC380HCF-GL', name: 'SRC380HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', mrp: '₹46,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '380L', description: '380L frost-free visi cooler with premium features.' },
      { id: 'SRC381HC-GL', name: 'SRC381HC-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', mrp: '₹47,999', doorType: 'Single', brand: 'Western', type: 'SRC', capacity: '340L', description: '340L single door advanced visi cooler with hard cooling.' },
      { id: 'SRC501HC-GL', name: 'SRC501HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-501-Side-View-300x300.png', mrp: '₹60,999', doorType: 'Double', brand: 'Western', type: 'SRC', capacity: '405L', description: '405L double door visi cooler for large retail spaces.' },
      { id: 'SRC752HC-GL', name: 'SRC752HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', mrp: '₹84,999', doorType: 'Triple', brand: 'Western', type: 'SRC', capacity: '585L', description: '585L triple door visi cooler for supermarkets.' },
      { id: 'SRC810HC-GL', name: 'SRC810HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC950-Front-Angle-With-Stock-300x300.png', mrp: '₹92,999', doorType: 'Triple', brand: 'Western', type: 'SRC', capacity: '810L', description: '810L large triple door visi cooler.' },
      { id: 'SRC950HC-GL', name: 'SRC950HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC950-Front-Angle-With-Stock-300x300.png', mrp: '₹105,999', doorType: 'Triple', brand: 'Western', type: 'SRC', capacity: '807L', description: '807L premium triple door visi cooler.' },
      { id: 'SRC1050HC-GL', name: 'SRC1050HC-GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', mrp: '₹115,999', doorType: 'Triple', brand: 'Western', type: 'SRC', capacity: '908L', description: '908L extra large triple door visi cooler.' },
      { id: 'SRC1800-GL', name: 'SRC1800-GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', mrp: '₹168,999', doorType: 'Triple', brand: 'Western', type: 'SRC', capacity: '1882L', description: '1882L triple door industrial visi cooler for large establishments.' },


      // Visi Coolers (Frigoglass Models)
      {
        id: 'FRIGOGLASS_VG333',
        name: 'Frigoglass VG333 – 333L Visi Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.227105563_1723466712391.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.227105563_1723466712391.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '333L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Premium European single-door visi cooler with fog-free glass, adjustable shelves, and energy-efficient cooling.',
        specifications: {
          'Model': 'VG333',
          'Capacity': '333 Liters',
          'Type': 'Single Door Visi Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Fog-free tempered glass',
          'Temperature Range': '2°C to 8°C',
          'Shelves': '4-5 adjustable wire shelves'
        },
        features: ['European technology', 'Fog-free tempered glass door', 'Adjustable wire shelving', 'Energy efficient operation', 'LED interior lighting', 'Digital temperature control'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG400',
        name: 'Frigoglass VG400 – 400L Visi Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.927105592_1723466719909.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.927105592_1723466719909.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '400L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Professional beverage cooler with black frame design, perfect for retail environments and commercial establishments.',
        specifications: {
          'Model': 'VG400',
          'Capacity': '400 Liters',
          'Type': 'Single Door Beverage Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Double-glazed glass',
          'Temperature Range': '2°C to 8°C',
          'Frame': 'Black powder-coated frame'
        },
        features: ['Professional black frame', 'Double-glazed glass door', 'Optimized for beverages', 'Energy Star rated', 'Adjustable shelving', 'Easy maintenance'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG450',
        name: 'Frigoglass VG450 – 450L Visi Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.432932633_1747388019892.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.432932633_1747388019892.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '450L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Large capacity single-door visi cooler with premium merchandising features and bright LED lighting for optimal product display.',
        specifications: {
          'Model': 'VG450',
          'Capacity': '450 Liters',
          'Type': 'Single Door Merchandising Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Anti-reflective glass',
          'Temperature Range': '2°C to 8°C',
          'Lighting': 'LED merchandising lighting'
        },
        features: ['Premium merchandising design', 'Anti-reflective glass door', 'LED product lighting', 'Multiple shelf configurations', 'European build quality', 'Optimal product visibility'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG500',
        name: 'Frigoglass VG500 – 500L Visi Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.232932658_1747388025053.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.232932658_1747388025053.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '500L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'High-capacity single-door visi cooler with advanced LED lighting system and multiple adjustable shelves for maximum product display.',
        specifications: {
          'Model': 'VG500',
          'Capacity': '500 Liters',
          'Type': 'Single Door Premium Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Low-E glass with anti-fog',
          'Temperature Range': '2°C to 8°C',
          'Shelves': '6-7 adjustable shelves'
        },
        features: ['Low-E glass technology', 'Anti-fog coating', 'Advanced LED lighting', '6-7 adjustable shelves', 'Premium European design', 'Energy efficient cooling'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG380',
        name: 'Frigoglass VG380 – 380L Multi-Purpose Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.432932665_1747388025801.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.432932665_1747388025801.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '380L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Versatile single-door cooler perfect for mixed merchandise display including snacks, dairy, and beverages.',
        specifications: {
          'Model': 'VG380',
          'Capacity': '380 Liters',
          'Type': 'Multi-Purpose Display Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear tempered glass',
          'Temperature Range': '2°C to 8°C',
          'Shelves': '5 adjustable shelves'
        },
        features: ['Multi-purpose design', 'Clear tempered glass', 'Versatile shelving', 'Mixed merchandise display', 'European engineering', 'Energy efficient'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG400_DAIRY',
        name: 'Frigoglass VG400 – 400L Dairy Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.627105570_1723466735702.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.627105570_1723466735702.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '400L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Specialized dairy cooler with optimal temperature control for yogurt, milk, and dairy products display.',
        specifications: {
          'Model': 'VG400 Dairy',
          'Capacity': '400 Liters',
          'Type': 'Dairy Display Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Anti-fog glass',
          'Temperature Range': '2°C to 6°C',
          'Specialization': 'Dairy products'
        },
        features: ['Dairy specialized cooling', 'Anti-fog glass door', 'Precise temperature control', 'Optimal humidity levels', 'European dairy technology', 'Food-safe materials'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG600_BEV',
        name: 'Frigoglass VG600 – 600L Beverage Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/FUR.VIS.632932625_1747388023676.webp',
        images: ['/PRD-NEW/VISI COOLERS/images/FUR.VIS.632932625_1747388023676.webp'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '600L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Large capacity beverage cooler with black frame design, optimized for soft drinks and bottled beverages.',
        specifications: {
          'Model': 'VG600 Beverage',
          'Capacity': '600 Liters',
          'Type': 'Beverage Display Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Double-glazed with black frame',
          'Temperature Range': '2°C to 8°C',
          'Specialization': 'Beverages'
        },
        features: ['Large 600L capacity', 'Black professional frame', 'Beverage optimized', 'Double-glazed door', 'Multiple shelf levels', 'Commercial grade'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG350_SLIM',
        name: 'Frigoglass VG350 – 350L Slim Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/8C587AYGhspxE-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/8C587AYGhspxE-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '350L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Slim profile single-door cooler with black frame, perfect for space-constrained retail environments.',
        specifications: {
          'Model': 'VG350 Slim',
          'Capacity': '350 Liters',
          'Type': 'Slim Profile Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass with black frame',
          'Temperature Range': '2°C to 8°C',
          'Design': 'Space-saving slim profile'
        },
        features: ['Slim space-saving design', 'Black professional frame', 'Clear glass door', 'Compact footprint', 'Energy efficient', 'Easy maintenance'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG400_BLUE',
        name: 'Frigoglass VG400 – 400L Blue Series',
        image: '/PRD-NEW/VISI COOLERS/images/EQawetE4lTRXV-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/EQawetE4lTRXV-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '400L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Blue series single-door cooler with vibrant design and premium cooling performance.',
        specifications: {
          'Model': 'VG400 Blue',
          'Capacity': '400 Liters',
          'Type': 'Blue Series Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass',
          'Temperature Range': '2°C to 8°C',
          'Series': 'Blue Series Design'
        },
        features: ['Vibrant blue design', 'Premium cooling', 'Clear glass visibility', 'European styling', 'Energy Star rated', 'Commercial durability'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG380_COMPACT',
        name: 'Frigoglass VG380 – 380L Compact Series',
        image: '/PRD-NEW/VISI COOLERS/images/ESNXifHXSzDB7-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/ESNXifHXSzDB7-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '380L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Compact series cooler with blue accent design, ideal for medium-sized retail spaces.',
        specifications: {
          'Model': 'VG380 Compact',
          'Capacity': '380 Liters',
          'Type': 'Compact Series Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass',
          'Temperature Range': '2°C to 8°C',
          'Series': 'Compact Series'
        },
        features: ['Compact series design', 'Blue accent styling', 'Medium capacity', 'Clear visibility', 'Space efficient', 'Reliable cooling'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG420_PREMIUM',
        name: 'Frigoglass VG420 – 420L Premium Series',
        image: '/PRD-NEW/VISI COOLERS/images/cPeK1m5xNm2Fv-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/cPeK1m5xNm2Fv-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '420L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Premium series single-door cooler with advanced features and superior build quality.',
        specifications: {
          'Model': 'VG420 Premium',
          'Capacity': '420 Liters',
          'Type': 'Premium Series Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Premium clear glass',
          'Temperature Range': '2°C to 8°C',
          'Series': 'Premium Series'
        },
        features: ['Premium series quality', 'Advanced cooling system', 'Superior build', 'Premium glass door', 'Enhanced efficiency', 'Commercial grade'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG800_DOUBLE',
        name: 'Frigoglass VG800 – 800L Double Door Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/dSoAiv6YfPIQF-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/dSoAiv6YfPIQF-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Double',
        type: 'Frigoglass',
        capacity: '800L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Large capacity double-door cooler with black frame design for high-volume retail environments.',
        specifications: {
          'Model': 'VG800 Double',
          'Capacity': '800 Liters',
          'Type': 'Double Door Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Dual glass doors with black frame',
          'Temperature Range': '2°C to 8°C',
          'Doors': '2 independent doors'
        },
        features: ['Large 800L capacity', 'Double door access', 'Black professional frame', 'Independent door operation', 'High-volume retail', 'Energy efficient'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG300_BASIC',
        name: 'Frigoglass VG300 – 300L Basic Series',
        image: '/PRD-NEW/VISI COOLERS/images/nUno5ykxvI1Ep-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/nUno5ykxvI1Ep-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '300L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Basic series single-door cooler with black frame, perfect for small to medium retail spaces.',
        specifications: {
          'Model': 'VG300 Basic',
          'Capacity': '300 Liters',
          'Type': 'Basic Series Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass with black frame',
          'Temperature Range': '2°C to 8°C',
          'Series': 'Basic Series'
        },
        features: ['Basic series reliability', 'Black frame design', 'Clear glass door', 'Compact size', 'Cost-effective', 'Easy maintenance'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG280_MINI',
        name: 'Frigoglass VG280 – 280L Mini Cooler',
        image: '/PRD-NEW/VISI COOLERS/images/v0056hTiMjjIh-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/v0056hTiMjjIh-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '280L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Compact mini cooler with blue design, ideal for small retail spaces and convenience stores.',
        specifications: {
          'Model': 'VG280 Mini',
          'Capacity': '280 Liters',
          'Type': 'Mini Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass',
          'Temperature Range': '2°C to 8°C',
          'Design': 'Compact mini size'
        },
        features: ['Compact mini design', 'Blue styling', 'Small footprint', 'Clear visibility', 'Space-saving', 'Energy efficient'],
        isNew: true
      },
      {
        id: 'FRIGOGLASS_VG450_AQUA',
        name: 'Frigoglass VG450 – 450L Aqua Series',
        image: '/PRD-NEW/VISI COOLERS/images/xIwO5wXVicLZU-large.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/xIwO5wXVicLZU-large.jpg'],
        mrp: 'Contact for MRP',
        doorType: 'Single',
        type: 'Frigoglass',
        capacity: '450L',
        warranty: '1 year for Visi Coolers',
        brand: 'Frigoglass',
        description: 'Aqua series cooler with blue design, specialized for water and beverage display with optimal cooling.',
        specifications: {
          'Model': 'VG450 Aqua',
          'Capacity': '450 Liters',
          'Type': 'Aqua Series Cooler',
          'Brand': 'Frigoglass',
          'Door Type': 'Clear glass',
          'Temperature Range': '2°C to 8°C',
          'Series': 'Aqua Series'
        },
        features: ['Aqua series design', 'Water/beverage optimized', 'Blue styling', 'Large capacity', 'Clear visibility', 'Premium cooling'],
        isNew: true
      },

      // Vertical Coolers / Supermarket Coolers
      { id: 'SMR 12 GL', name: 'SMR 12 GL', image: '/PRD-NEW/VISI COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', mrp: '₹155,999', doorType: 'Multi', type: 'Vertical', capacity: '1200L', brand: 'Western', description: '1200L vertical supermarket cooler with 12 glass doors.' },
      { id: 'SMR 18 GL', name: 'SMR 18 GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', mrp: '₹195,999', doorType: 'Multi', type: 'Vertical', capacity: '1800L', brand: 'Western', description: '1800L large vertical supermarket cooler with 18 glass doors.' },

      // IceMake Visi Coolers - IMVC Series
      { 
        id: 'ICEMAKE_IMVC300',
        name: 'Icemake IMVC300 – 333 L Visi Cooler', 
        image: '/PRD-NEW/VISI COOLERS/images/product-1000x1000_-264x264.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/product-1000x1000_-264x264.jpg'],
        mrp: 'Contact for MRP', 
        type: 'IMVC', 
        doorType: 'Single',
        capacity: '333L', 
        warranty: '1 year for Visi Coolers', 
        brand: 'Icemake', 
        description: 'Single-door visi cooler with fog-free toughened glass, adjustable shelves, and vertical LED lighting.',
        specifications: {
          'Model': 'IMVC300',
          'Capacity': '333 Liters',
          'Type': 'Single Door Visi Cooler',
          'Brand': 'Icemake',
          'Door Type': 'Fog-free toughened glass',
          'Temperature Range': '2°C to 8°C'
        },
        features: ['Fog-free toughened glass door', 'Adjustable shelves', 'Vertical LED lighting', 'Energy efficient cooling', 'Commercial grade construction'],
        isNew: true
      },
      { 
        id: 'ICEMAKE_IMVC450',
        name: 'Icemake IMVC450 – 457 L Visi Cooler', 
        image: '/PRD-NEW/VISI COOLERS/images/product-jpeg-1000x1000_02-1-2-264x264.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/product-jpeg-1000x1000_02-1-2-264x264.jpg'],
        mrp: 'Contact for MRP', 
        type: 'IMVC', 
        doorType: 'Single',
        capacity: '457L', 
        warranty: '1 year for Visi Coolers', 
        brand: 'Icemake', 
        description: 'Single-door visi cooler (~450–457 L) with bright LED lighting and sturdy locking door.',
        specifications: {
          'Model': 'IMVC450',
          'Capacity': '457 Liters',
          'Type': 'Single Door Visi Cooler',
          'Brand': 'Icemake',
          'Door Type': 'Glass Door with Lock',
          'Temperature Range': '2°C to 8°C'
        },
        features: ['Bright LED lighting', 'Sturdy locking door', 'Energy efficient operation', 'Digital temperature control', 'Clear product visibility'],
        isNew: true
      },
      { 
        id: 'ICEMAKE_IMVC550',
        name: 'Icemake IMVC550 – 569 L Visi Cooler', 
        image: '/PRD-NEW/VISI COOLERS/images/product-jpeg-1000x1000_02-1-1-264x264.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/product-jpeg-1000x1000_02-1-1-264x264.jpg'],
        mrp: 'Contact for MRP', 
        type: 'IMVC', 
        doorType: 'Single',
        capacity: '569L', 
        warranty: '1 year for Visi Coolers', 
        brand: 'Icemake', 
        description: 'Single-door visi cooler (~550–569 L) with adjustable shelves and fog-free display.',
        specifications: {
          'Model': 'IMVC550',
          'Capacity': '569 Liters',
          'Type': 'Single Door Visi Cooler',
          'Brand': 'Icemake',
          'Door Type': 'Fog-free Glass Door',
          'Temperature Range': '2°C to 8°C'
        },
        features: ['Fog-free display', 'Adjustable shelves', 'Energy efficient design', 'Large 569L capacity', 'Professional grade cooling'],
        isNew: true
      },
      { 
        id: 'ICEMAKE_IMVC900',
        name: 'Icemake IMVC900 – 1009 L Visi Cooler', 
        image: '/PRD-NEW/VISI COOLERS/images/product-1000x1000_-264x264.jpg',
        images: ['/PRD-NEW/VISI COOLERS/images/product-1000x1000_-264x264.jpg'],
        mrp: 'Contact for MRP', 
        type: 'IMVC', 
        doorType: 'Double',
        capacity: '1009L', 
        warranty: '1 year for Visi Coolers', 
        brand: 'Icemake', 
        description: 'Double-door visi cooler (~900–1009 L) with eight shelves and bright LED merchandising.',
        specifications: {
          'Model': 'IMVC900',
          'Capacity': '1009 Liters',
          'Type': 'Double Door Visi Cooler',
          'Brand': 'Icemake',
          'Door Type': 'Dual Glass Doors',
          'Temperature Range': '2°C to 8°C',
          'Shelves': '8 adjustable shelves'
        },
        features: ['Eight adjustable shelves', 'Bright LED merchandising lighting', 'Double door design', 'Maximum 1009L capacity', 'Commercial grade construction'],
        isNew: true
      }
    ]
  },
  {
    id: 'pastry-counters',
    name: 'Pastry Counters / Confectionery Cabinets',
    description: 'Elegant display counters and confectionery cabinets for bakeries, cafes, and pastry shops with temperature-controlled environments.',
    image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-1-300x300.png',
    backgroundImage: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-1-300x300.png',
    warranty: '2 years comprehensive warranty',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western'],
    filterOptions: {
      types: ['Counter'],
      sizes: ['600mm', '900mm', '1200mm'],
      applications: ['Bakeries', 'Cafes', 'Pastry Shops']
    },
    models: [
      { id: 'PTW06', name: 'PTW06', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-1-300x300.png', mrp: '₹72,999', type: 'Counter', size: '600mm', capacity: '232L', dimensions: { external: '600×665×1235mm' }, brand: 'Western', description: '232L pastry counter (600×665×1235mm) with curved glass display, base + 3 shelves.' },
      { id: 'PTW09', name: 'PTW09', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-2-300x300.png', mrp: '₹92,999', type: 'Counter', size: '900mm', capacity: '360L', dimensions: { external: '900×665×1235mm' }, brand: 'Western', description: '360L pastry counter (900×665×1235mm) with LED lighting, base + 3 shelves.' },
      { id: 'PTW12', name: 'PTW12', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-300x300.png', mrp: '₹115,999', type: 'Counter', size: '1200mm', capacity: '500L', dimensions: { external: '1200×665×1235mm' }, brand: 'Western', description: '500L pastry counter (1200×665×1235mm) with multi-shelf display, base + 3 shelves.' }
    ]
  },
  {
    id: 'water-coolers',
    name: 'Water Coolers',
    description: 'Water coolers and dispensers for offices, schools, and public spaces.',
    image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png',
    backgroundImage: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png',
    models: [
      { 
        id: 'PWC-40-80',
        name: 'PWC 40/80', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png', 
        mrp: '₹49,999',
        capacity: '40 LPH cooling / 80L storage',
        brand: 'Western',
        description: 'Commercial water cooler with 40 LPH cooling capacity and 80L storage tank. Fully stainless steel SS-304 construction for inner tank and outer body. Designed for high-demand applications in schools, colleges, offices, factories, and public places.',
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
        id: 'PWC-60-80',
        name: 'PWC 60/80', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png', 
        mrp: '₹54,999',
        capacity: '60 LPH cooling / 80L storage',
        brand: 'Western',
        description: 'Commercial water cooler with 60 LPH cooling capacity and 80L storage tank.'
      },
      { 
        id: 'PWC-60-120',
        name: 'PWC 60/120', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png', 
        mrp: '₹59,999',
        capacity: '60 LPH cooling / 120L storage',
        brand: 'Western',
        description: 'Commercial water cooler with 60 LPH cooling capacity and 120L storage tank.'
      },
      { 
        id: 'SWC-60-60',
        name: 'SWC 60/60', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-80120-1-300x300.png', 
        mrp: '₹45,999',
        capacity: '60 LPH cooling / 60L storage',
        brand: 'Western',
        description: 'Large capacity water cooler with 60 LPH cooling and 60L storage.'
      },
      { 
        id: 'SWC-80-80',
        name: 'SWC 80/80', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-80120-1-300x300.png', 
        mrp: '₹55,999',
        capacity: '80 LPH cooling / 80L storage',
        brand: 'Western',
        description: 'Extra large water cooler with 80 LPH cooling and 80L storage.'
      },
      { 
        id: 'SWC-150-150',
        name: 'SWC 150/150', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-150150-300x300.png', 
        mrp: '₹78,999',
        capacity: '150 LPH cooling / 150L storage',
        brand: 'Western',
        description: 'Industrial water cooler with 150 LPH cooling and 150L storage.'
      },
      {
        id: 'VOLTAS_15_20_FSS',
        name: 'Voltas 15/20 FSS – 20L Water Cooler',
        image: '/PRD-NEW/WATER-SOLUTIONS/images/0_0003_UGLVLT_1057_062a3545-c3d2-434a-934d-066f533d4704-264x264.jpg',
        images: ['/PRD-NEW/WATER-SOLUTIONS/images/0_0003_UGLVLT_1057_062a3545-c3d2-434a-934d-066f533d4704-264x264.jpg'],
        mrp: '₹24,000',
        originalPrice: '₹31,990',
        capacity: '15 LPH cooling / 20L storage',
        warranty: '1 year',
        brand: 'Voltas',
        description: 'Compact stainless steel water cooler with 15 LPH cooling capacity and 20L storage tank. Fully stainless steel body with silver finish.',
        specifications: {
          'Model': 'Voltas 15/20 FSS',
          'Cooling Capacity': '15 Liters per hour',
          'Storage Capacity': '20 Liters',
          'Body Material': 'Fully Stainless Steel',
          'Color': 'Silver',
          'Brand': 'Voltas',
          'Type': 'Floor Standing'
        },
        features: ['Fully stainless steel body', 'Compact design', 'Energy efficient', 'Silver finish', 'Reliable cooling', 'Easy maintenance'],
        isNew: true
      },
      {
        id: 'VOLTAS_15_40_FSS',
        name: 'Voltas 15/40 FSS – 40L Water Cooler',
        image: '/PRD-NEW/WATER-SOLUTIONS/images/1_02459ffe-2ad8-45f6-95a1-48c9ba546218-264x264.jpg',
        images: ['/PRD-NEW/WATER-SOLUTIONS/images/1_02459ffe-2ad8-45f6-95a1-48c9ba546218-264x264.jpg'],
        mrp: '₹28,500',
        originalPrice: '₹35,990',
        capacity: '15 LPH cooling / 40L storage',
        warranty: '1 year',
        brand: 'Voltas',
        description: 'Medium capacity stainless steel water cooler with 15 LPH cooling and 40L storage. Fully stainless steel construction with premium finish.',
        specifications: {
          'Model': 'Voltas 15/40 FSS',
          'Cooling Capacity': '15 Liters per hour',
          'Storage Capacity': '40 Liters',
          'Body Material': 'Fully Stainless Steel',
          'Color': 'Silver',
          'Brand': 'Voltas',
          'Type': 'Floor Standing'
        },
        features: ['40L large storage', 'Fully stainless steel body', 'Energy efficient cooling', 'Premium finish', 'Durable construction', 'Commercial grade'],
        isNew: true
      },
      {
        id: 'VOLTAS_40_80_FSS',
        name: 'Voltas 40/80 FSS – 80L Water Cooler',
        image: '/PRD-NEW/WATER-SOLUTIONS/images/31ypTBj1ikS-264x264.jpg',
        images: ['/PRD-NEW/WATER-SOLUTIONS/images/31ypTBj1ikS-264x264.jpg'],
        mrp: '₹35,500',
        originalPrice: '₹43,990',
        capacity: '40 LPH cooling / 80L storage',
        warranty: '1 year',
        brand: 'Voltas',
        description: 'High capacity water cooler with 40 LPH cooling and 80L storage. Fully stainless steel body ideal for offices and commercial spaces.',
        specifications: {
          'Model': 'Voltas 40/80 FSS',
          'Cooling Capacity': '40 Liters per hour',
          'Storage Capacity': '80 Liters',
          'Body Material': 'Fully Stainless Steel',
          'Color': 'Silver',
          'Brand': 'Voltas',
          'Type': 'Floor Standing Commercial'
        },
        features: ['High 40 LPH cooling', '80L large storage', 'Commercial grade', 'Stainless steel construction', 'Energy efficient', 'Heavy duty design'],
        isNew: true
      },
      {
        id: 'BLUE_STAR_WC_100',
        name: 'Blue Star Water Cooler – 100L Commercial',
        image: '/PRD-NEW/WATER-SOLUTIONS/images/6108KUB8UZL.jpg',
        images: ['/PRD-NEW/WATER-SOLUTIONS/images/6108KUB8UZL.jpg'],
        mrp: 'Contact for MRP',
        capacity: 'High capacity cooling / 100L+ storage',
        warranty: '2 years',
        brand: 'Blue Star',
        description: 'Large commercial water cooler with Blue Star branding. Floor-standing design with high capacity cooling for institutional and commercial use.',
        specifications: {
          'Model': 'Blue Star Commercial',
          'Cooling Capacity': 'High capacity',
          'Storage Capacity': '100+ Liters',
          'Body Material': 'Stainless Steel',
          'Color': 'Silver',
          'Brand': 'Blue Star',
          'Type': 'Commercial Floor Standing'
        },
        features: ['Blue Star technology', 'Commercial grade', 'Large capacity', 'Institutional use', 'Heavy duty construction', 'Reliable performance'],
        isNew: true
      },
      {
        id: 'VOLTAS_60_120_FSS',
        name: 'Voltas 60/120 FSS – 120L Water Cooler',
        image: '/PRD-NEW/WATER-SOLUTIONS/images/fss-20-40-np-water-cooler-1000x1000-1-264x264.jpg',
        images: ['/PRD-NEW/WATER-SOLUTIONS/images/fss-20-40-np-water-cooler-1000x1000-1-264x264.jpg'],
        mrp: '₹46,000',
        originalPrice: '₹54,990',
        capacity: '60 LPH cooling / 120L storage',
        warranty: '1 year',
        brand: 'Voltas',
        description: 'Premium high-capacity water cooler with 60 LPH cooling and 120L storage. Fully stainless steel construction with two taps for high-demand environments.',
        specifications: {
          'Model': 'Voltas 60/120 FSS',
          'Cooling Capacity': '60 Liters per hour',
          'Storage Capacity': '120 Liters',
          'Body Material': 'Fully Stainless Steel',
          'Taps': 'Two Taps',
          'Brand': 'Voltas',
          'Type': 'Premium Commercial'
        },
        features: ['Premium 60 LPH cooling', 'Large 120L storage', 'Two taps design', 'Fully stainless steel', 'High-demand capacity', 'Commercial grade construction'],
        isNew: true
      }
    ]
  },
  {
    id: 'water-dispensers',
    name: 'Water Dispensers',
    description: 'Hot, cold, and normal water dispensers for offices, homes, and commercial spaces.',
    image: '/PRD-NEW/Water Dispenser/bwd3fmcga-bwd-mi-01-resized.jpg',
    backgroundImage: '/PRD-NEW/Water Dispenser/bwd3fmcga-bwd-mi-01-resized.jpg',
    models: [
      { 
        id: 'BWD-3FMCGA',
        name: 'BWD-3FMCGA', 
        image: '/PRD-NEW/Water Dispenser/bwd3fmcga-bwd-mi-01-resized.jpg', 
        mrp: '₹10,999',
        brand: 'Blue Star',
        capacity: '2.5 LPH cooling / 5 LPH heating',
        description: 'Blue Star 3-tap floor standing water dispenser with refrigerator. Hot, Cold & Normal water with child safety lock.',
        features: [
          'Three temperature options (Hot/Cold/Normal)',
          'Child safety lock on hot tap',
          'Removable drip tray',
          'LED indicators',
          'Energy saving mode',
          'Storage cabinet'
        ],
        specifications: {
          'Model': 'BWD-3FMCGA',
          'Cooling/Heating': '2.5 LPH cooling / 5 LPH heating',
          'Temperature Options': 'Hot, Cold, Normal (3-tap)',
          'Refrigerant': 'R134a',
          'Power Supply': '230V/50Hz',
          'Features': 'Child Safety Lock, LED Indicators, With Refrigerator',
          'Type': 'Floor Standing',
          'Warranty': '1 Year'
        }
      },
      { 
        id: 'BWD-3FMRGA-B',
        name: 'BWD-3FMRGA-B', 
        image: '/PRD-NEW/Water Dispenser/bwd3fmrga-b-bwd-mi-01-resized.jpg', 
        mrp: '₹9,499',
        brand: 'Blue Star',
        capacity: '2.5 LPH cooling / 5 LPH heating',
        description: 'Blue Star 3-tap water dispenser with bottom loading. Hot, Cold & Normal water with refrigerator.',
        features: [
          'Three temperature options (Hot/Cold/Normal)',
          'Bottom loading design',
          'Child safety lock on hot tap',
          'LED indicators',
          'Energy efficient operation',
          'Compact design'
        ]
      },
      { 
        id: 'BWD-3FMRGA',
        name: 'BWD-3FMRGA', 
        image: '/PRD-NEW/Water Dispenser/bwd3fmrga-bwd-mi-01-resized.jpg', 
        mrp: '₹8,999',
        brand: 'Blue Star',
        capacity: '2.5 LPH cooling / 5 LPH heating',
        description: 'Blue Star 3-tap standard water dispenser. Hot, Cold & Normal water with refrigerator.',
        features: [
          'Three temperature options',
          'Easy bottle loading',
          'Safety features',
          'LED display',
          'Energy saving mode'
        ]
      },
      { 
        id: 'BWD-3TTGA',
        name: 'BWD-3TTGA', 
        image: '/PRD-NEW/Water Dispenser/bwd3ttga-bwd-mi-01_1_.jpg', 
        mrp: '₹8,499',
        brand: 'Blue Star',
        capacity: '2.5 LPH cooling / 5 LPH heating',
        description: 'Blue Star 3-tap table top water dispenser. Hot, Cold & Normal water for compact spaces.',
        features: [
          'Table top design',
          'Hot and cold water',
          'Compact size',
          'Easy installation',
          'Child safety lock'
        ]
      },
      {
        id: 'WD-HC-01',
        name: 'Premium Hot & Cold Dispenser',
        image: '/PRD-NEW/Water Dispenser/37h6pgpYr9KH3-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Premium hot and cold water dispenser with advanced purification system.',
        features: [
          'Hot water (85-95°C) and Cold water (5-10°C)',
          'Compressor cooling system',
          'Stainless steel hot and cold tanks',
          '3-5 gallon bottle compatible',
          'Child safety lock on hot water tap',
          'LED indicators for power and heating/cooling',
          'Removable drip tray',
          'Storage cabinet at bottom'
        ],
        specifications: {
          'Hot Water Capacity': '5L/hour at 85-95°C',
          'Cold Water Capacity': '2L/hour at 5-10°C',
          'Power Consumption': '550W (heating), 85W (cooling)',
          'Voltage': '220-240V / 50Hz',
          'Dimensions': '310 x 310 x 960mm',
          'Weight': '15 kg',
          'Tank Material': 'Food-grade stainless steel',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-HCN-02',
        name: 'Triple Temperature Dispenser',
        image: '/PRD-NEW/Water Dispenser/9bxwqCslkCKVl-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Advanced water dispenser with hot, cold, and normal temperature options.',
        features: [
          'Three temperature settings (Hot/Cold/Normal)',
          'Bottom loading design available',
          'UV sterilization system',
          'Energy-saving ECO mode',
          'Night light feature',
          'Leak-proof water system',
          'Anti-bacterial coating',
          'Touch panel controls'
        ],
        specifications: {
          'Hot Water Temperature': '85-95°C',
          'Cold Water Temperature': '5-10°C',
          'Heating Power': '500W',
          'Cooling Power': '90W',
          'Storage Capacity': '3.2L (hot), 2L (cold)',
          'Refrigerant': 'R134a',
          'Dimensions': '340 x 340 x 1050mm',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-COMP-03',
        name: 'Compressor Cooling Dispenser',
        image: '/PRD-NEW/Water Dispenser/AegRpGIpgIjsX-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Heavy-duty water dispenser with compressor cooling for commercial use.',
        features: [
          'Powerful compressor cooling system',
          'High capacity for commercial use',
          'Dual safety protection',
          'Anti-dust design',
          'High-efficiency cooling',
          'Suitable for 20L bottles',
          'Sturdy construction',
          'Easy maintenance design'
        ],
        specifications: {
          'Cooling Type': 'Compressor',
          'Cooling Capacity': '3L/hour',
          'Hot Water Output': '7L/hour',
          'Power Rating': '620W total',
          'Refrigerant': 'R134a (CFC-free)',
          'Noise Level': '<45dB',
          'Dimensions': '350 x 350 x 1100mm',
          'Weight': '18 kg'
        }
      },
      {
        id: 'WD-SLIM-04',
        name: 'Slim Design Water Dispenser',
        image: '/PRD-NEW/Water Dispenser/E1yrbWTtNuxyu-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Space-saving slim design water dispenser perfect for offices and homes.',
        features: [
          'Ultra-slim design saves space',
          'Hot and cold water options',
          'Push-button taps',
          'Removable drip tray',
          'Cabinet storage',
          'Low noise operation',
          'Energy efficient',
          'Modern aesthetic design'
        ],
        specifications: {
          'Width': '260mm (slim design)',
          'Hot Water': '5L/hour at 85-92°C',
          'Cold Water': '2L/hour at 10-15°C',
          'Power': '420W (heating), 75W (cooling)',
          'Tank Capacity': '1L (hot), 3.5L (cold)',
          'Dimensions': '260 x 360 x 960mm',
          'Weight': '13 kg',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-SS-05',
        name: 'Stainless Steel Premium Dispenser',
        image: '/PRD-NEW/Water Dispenser/HGV7zTwlW7Nj5-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Premium stainless steel water dispenser with advanced features.',
        features: [
          'Full stainless steel body',
          'Rust-proof and durable',
          'Digital temperature display',
          'Adjustable temperature settings',
          'Self-cleaning function',
          'Ozone sterilization',
          'High/Low cooling modes',
          'Premium build quality'
        ],
        specifications: {
          'Body Material': 'SS-304 Stainless Steel',
          'Hot Water': '85-100°C adjustable',
          'Cold Water': '3-10°C adjustable',
          'Heating Power': '550W',
          'Cooling Power': '112W',
          'Ozone Output': '10mg/hour',
          'Dimensions': '330 x 330 x 1020mm',
          'Warranty': '2 Years'
        }
      },
      {
        id: 'WD-BL-06',
        name: 'Bottom Loading Dispenser',
        image: '/PRD-NEW/Water Dispenser/NVrECxTcnAGrQ-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Convenient bottom loading water dispenser with no heavy lifting required.',
        features: [
          'Bottom loading design - no lifting',
          'Hidden bottle compartment',
          'Empty bottle indicator',
          'Pump system for water delivery',
          'Three temperature options',
          'LED night light',
          'Quiet operation pump',
          'Modern sleek design'
        ],
        specifications: {
          'Loading Type': 'Bottom Loading',
          'Pump Power': '20W',
          'Hot Water': '5L/hour at 85-95°C',
          'Cold Water': '2.5L/hour at 5-10°C',
          'Total Power': '550W',
          'Bottle Size': '10-20L compatible',
          'Dimensions': '320 x 340 x 1040mm',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-TT-07',
        name: 'Countertop Mini Dispenser',
        image: '/PRD-NEW/Water Dispenser/XCWxIuTRwvej0-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Compact countertop water dispenser ideal for small spaces.',
        features: [
          'Compact tabletop design',
          'Hot and normal water',
          'Perfect for small offices',
          'Easy bottle loading',
          'Safety lock feature',
          'Low power consumption',
          'Lightweight and portable',
          'Simple maintenance'
        ],
        specifications: {
          'Type': 'Tabletop/Countertop',
          'Hot Water': '5L/hour at 85-92°C',
          'Power': '420W',
          'Tank Capacity': '0.8L (hot)',
          'Compatible Bottles': '5-20L',
          'Dimensions': '270 x 250 x 420mm',
          'Weight': '5.5 kg',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-RO-08',
        name: 'RO Purifier Dispenser',
        image: '/PRD-NEW/Water Dispenser/iOX8k1VoBk7UA-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Water dispenser with built-in RO purification system.',
        features: [
          'Built-in RO+UV+UF purification',
          'Direct water line connection',
          'No bottle required',
          'TDS controller',
          'Mineral cartridge',
          'Hot, cold, and normal water',
          'Digital display panel',
          'Filter change indicators'
        ],
        specifications: {
          'Purification': 'RO+UV+UF+TDS',
          'Purification Capacity': '15L/hour',
          'Storage Tank': '8L purified water',
          'Hot Water': '3L at 85-92°C',
          'Cold Water': '2L at 8-10°C',
          'Power': '650W total',
          'Dimensions': '400 x 350 x 1200mm',
          'Warranty': '1 Year + 3 Years on RO'
        }
      },
      {
        id: 'WD-FLOOR-09',
        name: 'Floor Standing Classic',
        image: '/PRD-NEW/Water Dispenser/l1cJm6rPdOz5j-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Classic floor standing water dispenser with reliable performance.',
        features: [
          'Traditional top loading design',
          'Proven reliability',
          'Hot and cold water taps',
          'Storage cabinet',
          'Child safety lock',
          'Pilot light indicators',
          'Removable drip tray',
          'Durable construction'
        ],
        specifications: {
          'Type': 'Floor Standing',
          'Hot Water': '5L/hour at 85-90°C',
          'Cold Water': '2L/hour at 10-15°C',
          'Heating Power': '500W',
          'Cooling Power': '85W',
          'Dimensions': '310 x 310 x 980mm',
          'Weight': '14 kg',
          'Warranty': '1 Year'
        }
      },
      {
        id: 'WD-DIGITAL-10',
        name: 'Digital Control Dispenser',
        image: '/PRD-NEW/Water Dispenser/roAi8jMOQK9cN-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Advanced digital control water dispenser with smart features.',
        features: [
          'Digital temperature control',
          'LCD display panel',
          'Timer function',
          'Energy saving mode',
          'Temperature memory',
          'Auto cleaning reminder',
          'Precise temperature control',
          'Modern touch controls'
        ],
        specifications: {
          'Control Type': 'Digital with LCD',
          'Temperature Range': 'Adjustable 5-95°C',
          'Hot Water': '6L/hour',
          'Cold Water': '3L/hour',
          'Power Modes': 'Normal/ECO/Sleep',
          'Power': '580W max',
          'Dimensions': '350 x 350 x 1050mm',
          'Warranty': '2 Years'
        }
      },
      {
        id: 'WD-OFFICE-11',
        name: 'Office Pro Dispenser',
        image: '/PRD-NEW/Water Dispenser/sCJQDrGF6FWJm-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'High-capacity water dispenser designed for office environments.',
        features: [
          'High capacity for office use',
          'Fast heating and cooling',
          'Cup holder attachment',
          'Paper cup dispenser option',
          'Dual tap design',
          'Heavy-duty construction',
          'Low maintenance design',
          'Commercial grade components'
        ],
        specifications: {
          'Capacity': 'Suitable for 50+ users',
          'Hot Water Output': '10L/hour',
          'Cold Water Output': '5L/hour',
          'Power': '650W (heating), 112W (cooling)',
          'Tank Size': '3.5L (hot), 4L (cold)',
          'Cooling Type': 'Compressor',
          'Dimensions': '380 x 380 x 1100mm',
          'Warranty': '1 Year commercial'
        }
      },
      {
        id: 'WD-LUXURY-12',
        name: 'Luxury Premium Dispenser',
        image: '/PRD-NEW/Water Dispenser/xqGXC3pvCsooV-large.jpg',
        mrp: 'Contact for MRP',
        brand: 'Blue Star',
        originalPrice: '',
        description: 'Luxury water dispenser with premium features and elegant design.',
        features: [
          'Premium glass panel design',
          'Soft touch dispensing',
          'Ambient LED lighting',
          'Whisper quiet operation',
          'Advanced filtration system',
          'Ice-cold water option',
          'Hot water boost function',
          'Premium materials throughout'
        ],
        specifications: {
          'Design': 'Premium with glass panel',
          'Hot Water': '85-98°C adjustable',
          'Ice-Cold Water': '2-5°C',
          'Filtration': 'Multi-stage carbon',
          'Noise Level': '<40dB',
          'Power': '600W total',
          'Dimensions': '360 x 360 x 1080mm',
          'Warranty': '3 Years'
        }
      }
    ]
  },
  {
    id: 'back-bar-refrigerators',
    name: 'Back Bar Refrigerators',
    description: 'Compact under-counter back bar refrigerators perfect for bars, restaurants, and commercial establishments. Easy-access glass tops for quick beverage service.',
    image: '/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-135-300x300.png',
    backgroundImage: '/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-135-300x300.png',
    warranty: '2 years comprehensive warranty',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western', 'Icemake'],
    filterOptions: {
      types: ['Under Counter', 'Back Bar', 'Glass Top'],
      capacities: ['230L', '384L'],
      applications: ['Bars', 'Restaurants', 'Hotels', 'Commercial Kitchens']
    },
    models: [
      {
        id: 'RBWH195',
        name: 'Western Back Bar RBWH195',
        image: '/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-95-300x300.png',
        images: ['/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-95-300x300.png'],
        mrp: 'Contact for MRP',
        type: 'Under Counter',
        capacity: '230L',
        warranty: '2 years comprehensive warranty',
        brand: 'Western',
        isNew: true,
        description: 'Western Back Bar RBWH195 with 230L capacity and 153 PET bottle loading capacity. Perfect for commercial establishments.',
        features: [
          'Thermostat temperature control',
          '153 PET bottle loading capacity',
          'Energy efficient R600a refrigerant',
          'Temperature range +0 to +10°C',
          'Commercial grade construction',
          '220W compressor capacity',
          'Under-counter design',
          'Easy maintenance access'
        ],
        specifications: {
          'Model': 'RBWH195',
          'Gross Volume': '230 Litres',
          'Net Weight': '89 kg',
          'External Dimensions': '900 × 545 × 900 mm',
          'Internal Dimensions': '828 × 435 × 728 mm',
          'Temperature Range': '+0 to +10°C',
          'Refrigerant': 'R-600a / 45 gms',
          'Power Supply': '220V AC / 50Hz',
          'Compressor Capacity': '220 W',
          'Temperature Control': 'Thermostat',
          'Bottle Loading': '153 PET bottles',
          'Type': 'Back Bar Under Counter Refrigerator',
          'Warranty': '2 Years Comprehensive'
        },
        technicalSpecs: {
          'grossVolume': '230L',
          'netWeight': '89kg',
          'temperatureRange': '+0 to +10°C',
          'compressorCapacity': '220W',
          'energyRating': '4 Star',
          'refrigerant': 'R600a',
          'compressor': 'Reciprocating',
          'bottleCapacity': '153',
          'noOfDoors': '1'
        }
      },
      {
        id: 'RBWH135',
        name: 'Western Back Bar RBWH135',
        image: '/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-135-300x300.png',
        images: ['/PRD-NEW/ICE-BACK-BAR/images/Back-Bar-135-300x300.png'],
        mrp: 'Contact for MRP',
        type: 'Under Counter',
        capacity: '384L',
        warranty: '2 years comprehensive warranty',
        brand: 'Western',
        isBestseller: true,
        description: 'Western Back Bar RBWH135 with 384L capacity and 288 PET bottle loading capacity. Ideal for high-volume commercial establishments.',
        features: [
          'Thermostat temperature control',
          '288 PET bottle loading capacity',
          'Energy efficient R600a refrigerant',
          'Temperature range +0 to +10°C',
          'Heavy-duty commercial construction',
          '220W compressor capacity',
          'Large capacity design',
          'Professional grade performance'
        ],
        specifications: {
          'Model': 'RBWH135',
          'Gross Volume': '384 Litres',
          'Net Weight': '119 kg',
          'External Dimensions': '1350 × 545 × 900 mm',
          'Internal Dimensions': '1278 × 435 × 728 mm',
          'Temperature Range': '+0 to +10°C',
          'Refrigerant': 'R-600a / 65 gms',
          'Power Supply': '220V AC / 50Hz',
          'Compressor Capacity': '220 W',
          'Temperature Control': 'Thermostat',
          'Bottle Loading': '288 PET bottles',
          'Type': 'Back Bar Under Counter Refrigerator',
          'Warranty': '2 Years Comprehensive'
        },
        technicalSpecs: {
          'grossVolume': '384L',
          'netWeight': '119kg',
          'temperatureRange': '+0 to +10°C',
          'compressorCapacity': '220W',
          'energyRating': '4 Star',
          'refrigerant': 'R600a',
          'compressor': 'Reciprocating',
          'bottleCapacity': '288',
          'noOfDoors': '1'
        }
      }
    ]
  }
];

// Export categories as an alias for backwards compatibility
export const categories = productCategories;

// Helper function to get category by slug/id
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(category => category.id === slug);
}

// Helper function to get product by slug within a category
export function getProductBySlug(categorySlug: string, productSlug: string): ProductModel | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  
  return category.models.find(product => 
    product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === productSlug ||
    product.name.toLowerCase().replace(/\s+/g, '-') === productSlug ||
    product.name === productSlug
  );
}
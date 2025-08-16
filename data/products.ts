// Define types inline to avoid import issues
interface ProductModel {
  id: string; // Unique product ID
  name: string;
  image: string;
  images?: string[]; // Multiple product images
  price: string;
  originalPrice?: string;
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
    name: 'Freezers',
    description: 'Premium commercial freezers including convertible, combi, glass top, eutectic, scooping parlours, and mobile freezers. 4-year warranty on deep freezers.',
    image: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png',
    backgroundImage: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png',
    warranty: '4 years for deep freezers',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western', 'Icemake'],
    filterOptions: {
      types: ['Convertible', 'Combi', 'Glass Top', 'Eutectic', 'Scooping', 'Mobile'],
      capacities: ['70L', '150L', '200L', '225L', '250L', '300L', '325L', '350L', '375L', '425L', '450L', '475L', '525L', '550L', '625L', '875L'],
      applications: ['Ice Cream Parlours', 'Retail Stores', 'Supermarkets', 'Commercial Establishments']
    },
    models: [
      // Convertible Freezers & Coolers
      { 
        id: 'D070H161',
        name: 'D070H161', 
        image: '/PRD-NEW/DEEP FREEZERS/images/D70-300x300.png',
        images: ['/PRD-NEW/DEEP FREEZERS/images/D70-300x300.png'],
        price: '₹15,898', 
        originalPrice: '₹18,050', 
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
      { id: 'D150H-HC', name: 'D150H-HC', image: '/PRD-NEW/DEEP FREEZERS/images/D150-300x300.png', price: '₹18,392', originalPrice: '₹20,890', type: 'Convertible', capacity: '105L', warranty: '4 years for deep freezers', brand: 'Western', description: '105L convertible freezer/cooler with hard top cover.' },
      { id: 'D300H124', name: 'D300H124', image: '/PRD-NEW/DEEP FREEZERS/images/D300-Single-Door-300x300.png', price: '₹24,316', originalPrice: '₹27,610', type: 'Convertible', capacity: '218L', warranty: '4 years for deep freezers', brand: 'Western', description: '218L convertible freezer with double door design.' },
      { id: 'D350H225', name: 'D350H225', image: '/PRD-NEW/DEEP FREEZERS/images/D350-300x300.png', price: '₹27,589', originalPrice: '₹31,660', type: 'Convertible', capacity: '282L', warranty: '4 years for deep freezers', brand: 'Western', description: '282L high capacity convertible freezer.' },
      { id: 'D375H225', name: 'D375H225', image: '/PRD-NEW/DEEP FREEZERS/images/D375-300x300.png', price: '₹28,083', originalPrice: '₹33,280', type: 'Convertible', capacity: '306L', warranty: '4 years for deep freezers', brand: 'Western', description: '306L premium convertible freezer/cooler.' },
      { id: 'D475H224', name: 'D475H224', image: '/PRD-NEW/DEEP FREEZERS/images/D475-300x300.png', price: '₹31,369', originalPrice: '₹37,170', type: 'Convertible', capacity: '444L', warranty: '4 years for deep freezers', brand: 'Western', description: '444L large convertible freezer for commercial use.' },
      { id: 'D525H224', name: 'D525H224', image: '/PRD-NEW/DEEP FREEZERS/images/D525-300x300.png', price: '₹34,656', originalPrice: '₹41,060', type: 'Convertible', capacity: '505L', warranty: '4 years for deep freezers', brand: 'Western', description: '505L extra large convertible freezer.' },
      { id: 'D550H225', name: 'D550H225', image: '/PRD-NEW/DEEP FREEZERS/images/D550-300x300.png', price: '₹35,851', originalPrice: '₹42,215', type: 'Convertible', capacity: '527L', warranty: '4 years for deep freezers', brand: 'Western', description: '527L premium convertible freezer with advanced features.' },
      { id: 'D625H225', name: 'D625H225', image: '/PRD-NEW/DEEP FREEZERS/images/D525-300x300.png', price: '₹36,448', originalPrice: '₹43,190', type: 'Convertible', capacity: '565L', warranty: '4 years for deep freezers', brand: 'Western', description: '565L largest convertible freezer for heavy commercial use.' },
      { id: 'NWHF875H', name: 'NWHF875H', image: '/PRD-NEW/DEEP FREEZERS/images/D875-2-300x300.png', price: '₹54,896', originalPrice: '₹66,200', type: 'Convertible', capacity: '722L', warranty: '4 years for deep freezers', brand: 'Western', description: '722L industrial convertible freezer with premium features.' },
      // Combi Freezer/Cooler
      { id: 'B325H220', name: 'B325H220', image: '/PRD-NEW/DEEP FREEZERS/images/B325-300x300.png', price: '₹35,999', originalPrice: '₹39,999', type: 'Combi', capacity: '325L', description: '325L combination freezer/cooler with separate compartments.' },
      { id: 'B425H220', name: 'B425H220', image: '/PRD-NEW/DEEP FREEZERS/images/B425-300x300.png', price: '₹45,999', originalPrice: '₹49,999', type: 'Combi', capacity: '425L', description: '425L combi unit with dual temperature zones.' },
      { id: 'B525H220', name: 'B525H220', image: '/PRD-NEW/DEEP FREEZERS/images/B525-300x300.png', price: '₹55,999', originalPrice: '₹59,999', type: 'Combi', capacity: '525L', description: '525L large combi freezer/cooler for commercial use.' },
      // Glass Top Deep Freezers
      { id: 'F250GL25', name: 'F250GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', price: '₹28,999', originalPrice: '₹32,999', type: 'Glass Top', capacity: '250L', description: '250L glass top deep freezer with curved glass lid.' },
      { id: 'F350GL25', name: 'F350GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', price: '₹38,999', originalPrice: '₹42,999', type: 'Glass Top', capacity: '350L', description: '350L glass top freezer with enhanced visibility.' },
      { id: 'F450GL25', name: 'F450GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', price: '₹48,999', originalPrice: '₹52,999', type: 'Glass Top', capacity: '450L', description: '450L large glass top freezer for retail display.' },
      { id: 'F550GL25', name: 'F550GL25', image: '/PRD-NEW/DEEP FREEZERS/images/F250GL-300x300.png', price: '₹58,999', originalPrice: '₹62,999', type: 'Glass Top', capacity: '550L', description: '550L premium glass top freezer with LED lighting.' },
      // Eutectic Freezers
      { id: 'E325H220', name: 'E325H220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹68,999', originalPrice: '₹75,999', type: 'Eutectic', capacity: '325L', description: '325L eutectic freezer with energy-efficient cooling plates.' },
      { id: 'E425H220', name: 'E425H220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹78,999', originalPrice: '₹85,999', type: 'Eutectic', capacity: '425L', description: '425L eutectic freezer with hard top cover.' },
      { id: 'E425D220', name: 'E425D220', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹82,999', originalPrice: '₹89,999', type: 'Eutectic', capacity: '425L', description: '425L eutectic freezer with dual compartments.' },
      { id: 'E425GT20', name: 'E425GT20', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹85,999', originalPrice: '₹92,999', type: 'Eutectic', capacity: '425L', description: '425L eutectic freezer with glass top display.' },
      { id: 'E525D320', name: 'E525D320', image: '/PRD-NEW/DEEP FREEZERS/images/E325-LT-SIDE-ISO-VIEW-300x300.png', price: '₹95,999', originalPrice: '₹105,999', type: 'Eutectic', capacity: '525L', description: '525L large eutectic freezer with dual zone cooling.' },
      // Scooping Parlours
      { id: 'F450GT25AAINGMXWHS', name: 'F450GT25AAINGMXWHS', image: '/PRD-NEW/DEEP FREEZERS/images/F325GC24-300x300.png', price: '₹125,999', originalPrice: '₹135,999', type: 'Scooping', capacity: '450L', description: '450L scooping parlour with glass top and multiple tubs.' },
      { id: 'F550GT25AAINGMXWHS', name: 'F550GT25AAINGMXWHS', image: '/PRD-NEW/DEEP FREEZERS/images/F325GC24-300x300.png', price: '₹145,999', originalPrice: '₹155,999', type: 'Scooping', capacity: '550L', description: '550L premium scooping parlour for ice cream shops.' },
      // Freezer on Wheel
      { id: 'G200H120', name: 'G200H120', image: '/PRD-NEW/DEEP FREEZERS/images/G200H120ECINGMXWHX_left-Angle-300x300.png', price: '₹42,999', originalPrice: '₹46,999', type: 'Mobile', capacity: '200L', description: '200L mobile freezer with wheels for easy movement.' },
      { id: 'G300H120', name: 'G300H120', image: '/PRD-NEW/DEEP FREEZERS/images/G200H120ECINGMXWHX_left-Angle-300x300.png', price: '₹52,999', originalPrice: '₹56,999', type: 'Mobile', capacity: '300L', description: '300L mobile freezer with enhanced portability.' }
    ]
  },
  {
    id: 'coolers',
    name: 'Coolers',
    description: 'Comprehensive range of visi coolers including SRC, IMVC, and Frigoglass models, plus vertical coolers and supermarket coolers. 1-year warranty on all visi coolers.',
    image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    backgroundImage: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png',
    warranty: '1 year for Visi Coolers',
    deliveryInfo: 'Free delivery in Gujarat, paid delivery outside Gujarat',
    brands: ['Western', 'Icemake', 'Frigoglass'],
    filterOptions: {
      types: ['SRC', 'IMVC', 'Frigoglass', 'Vertical'],
      doorTypes: ['Single', 'Double', 'Triple', 'Multi'],
      capacities: ['30L', '60L', '200L', '201L', '250L', '280L', '281L', '295L', '300L', '360L', '370L', '380L', '381L', '450L', '501L', '550L', '600L', '650L', '675L', '752L', '810L', '900L', '950L', '1000L', '1050L', '1100L', '1200L', '1800L'],
      applications: ['Convenience Stores', 'Supermarkets', 'Retail Outlets', 'Commercial Use']
    },
    models: [
      // Visi Coolers (SRC Models)
      { id: 'SRC200HCF-GL', name: 'SRC200HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹25,999', originalPrice: '₹29,999', doorType: 'Single', type: 'SRC', capacity: '200L', description: '200L visi cooler with frost-free technology.' },
      { id: 'SRC201HCF-GL', name: 'SRC201HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹26,999', originalPrice: '₹30,999', doorType: 'Single', type: 'SRC', capacity: '201L', description: '201L enhanced visi cooler with improved efficiency.' },
      { id: 'SRC280HCF-GL', name: 'SRC280HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/New-Project-15-300x300.png', price: '₹32,999', originalPrice: '₹36,999', doorType: 'Single', type: 'SRC', capacity: '280L', description: '280L mid-size visi cooler with frost-free operation.' },
      { id: 'SRC281HC-GL', name: 'SRC281HC-GL', image: '/PRD-NEW/VISI COOLERS/images/src281-1-300x300.png', price: '₹33,999', originalPrice: '₹37,999', doorType: 'Single', type: 'SRC', capacity: '281L', description: '281L visi cooler with hard cooling system.' },
      { id: 'SRC360HC-GL', name: 'SRC360HC-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹40,999', originalPrice: '₹44,999', doorType: 'Single', type: 'SRC', capacity: '360L', description: '360L large capacity single door visi cooler.' },
      { id: 'SRC380HCF-GL', name: 'SRC380HCF-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹42,999', originalPrice: '₹46,999', doorType: 'Single', type: 'SRC', capacity: '380L', description: '380L frost-free visi cooler with premium features.' },
      { id: 'SRC381HC-GL', name: 'SRC381HC-GL', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹43,999', originalPrice: '₹47,999', doorType: 'Single', type: 'SRC', capacity: '381L', description: '381L advanced visi cooler with hard cooling.' },
      { id: 'SRC501HC-GL', name: 'SRC501HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC-501-Side-View-300x300.png', price: '₹55,999', originalPrice: '₹60,999', doorType: 'Double', type: 'SRC', capacity: '501L', description: '501L double door visi cooler for large retail spaces.' },
      { id: 'SRC752HC-GL', name: 'SRC752HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', price: '₹78,999', originalPrice: '₹84,999', doorType: 'Triple', type: 'SRC', capacity: '752L', description: '752L triple door visi cooler for supermarkets.' },
      { id: 'SRC810HC-GL', name: 'SRC810HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC950-Front-Angle-With-Stock-300x300.png', price: '₹85,999', originalPrice: '₹92,999', doorType: 'Triple', type: 'SRC', capacity: '810L', description: '810L large triple door visi cooler.' },
      { id: 'SRC950HC-GL', name: 'SRC950HC-GL', image: '/PRD-NEW/VISI COOLERS/images/SRC950-Front-Angle-With-Stock-300x300.png', price: '₹98,999', originalPrice: '₹105,999', doorType: 'Triple', type: 'SRC', capacity: '950L', description: '950L premium triple door visi cooler.' },
      { id: 'SRC1050HC-GL', name: 'SRC1050HC-GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', price: '₹108,999', originalPrice: '₹115,999', doorType: 'Triple', type: 'SRC', capacity: '1050L', description: '1050L extra large triple door visi cooler.' },
      { id: 'SRC1800-GL', name: 'SRC1800-GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', price: '₹158,999', originalPrice: '₹168,999', doorType: 'Multi', type: 'SRC', capacity: '1800L', description: '1800L industrial visi cooler for large establishments.' },

      // Visi Coolers (IMVC Models)
      { id: 'IMVC300', name: 'IMVC300', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹45,999', originalPrice: '₹50,999', doorType: 'Single', type: 'IMVC', capacity: '300L', description: '300L IMVC series visi cooler with advanced features.' },
      { id: 'IMVC450', name: 'IMVC450', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹58,999', originalPrice: '₹64,999', doorType: 'Single', type: 'IMVC', capacity: '450L', description: '450L IMVC series with enhanced cooling performance.' },
      { id: 'IMVC550', name: 'IMVC550', image: '/PRD-NEW/VISI COOLERS/images/SRC500HC-Front-Angle-With-Stock-300x300.png', price: '₹65,999', originalPrice: '₹71,999', doorType: 'Double', type: 'IMVC', capacity: '550L', description: '550L IMVC double door cooler for commercial use.' },
      { id: 'IMVC675', name: 'IMVC675', image: '/PRD-NEW/VISI COOLERS/images/SRC572HC-Front-Angle-With-Stock-300x300.png', price: '₹75,999', originalPrice: '₹82,999', doorType: 'Double', type: 'IMVC', capacity: '675L', description: '675L IMVC high capacity double door cooler.' },
      { id: 'IMVC900', name: 'IMVC900', image: '/PRD-NEW/VISI COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', price: '₹95,999', originalPrice: '₹102,999', doorType: 'Triple', type: 'IMVC', capacity: '900L', description: '900L IMVC triple door cooler for large retail spaces.' },
      { id: 'IMVC1100', name: 'IMVC1100', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', price: '₹115,999', originalPrice: '₹125,999', doorType: 'Triple', type: 'IMVC', capacity: '1100L', description: '1100L IMVC premium triple door cooler.' },

      // Visi Coolers (Frigoglass Models)
      { id: 'VG-200', name: 'VG-200', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹52,999', originalPrice: '₹58,999', doorType: 'Single', type: 'Frigoglass', capacity: '200L', warranty: '1 year for Visi Coolers', brand: 'Frigoglass', description: '200L Frigoglass visi cooler with European technology.' },
      { id: 'VG-250', name: 'VG-250', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹58,999', originalPrice: '₹64,999', doorType: 'Single', type: 'Frigoglass', capacity: '250L', description: '250L Frigoglass cooler with premium build quality.' },
      { id: 'VG1D295', name: 'VG1D295', image: '/PRD-NEW/VISI COOLERS/images/SRC-250-300x300.png', price: '₹62,999', originalPrice: '₹68,999', doorType: 'Single', type: 'Frigoglass', capacity: '295L', description: '295L Frigoglass single door cooler with advanced cooling.' },
      { id: 'VG1D370', name: 'VG1D370', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹68,999', originalPrice: '₹74,999', doorType: 'Single', type: 'Frigoglass', capacity: '370L', description: '370L Frigoglass cooler with energy-efficient operation.' },
      { id: 'VG1D450', name: 'VG1D450', image: '/PRD-NEW/VISI COOLERS/images/0709091_SRC380HC-GL_Left-Angle-300x300.png', price: '₹75,999', originalPrice: '₹82,999', doorType: 'Single', type: 'Frigoglass', capacity: '450L', description: '450L Frigoglass large single door cooler.' },
      { id: 'VG-550', name: 'VG-550', image: '/PRD-NEW/VISI COOLERS/images/SRC500HC-Front-Angle-With-Stock-300x300.png', price: '₹82,999', originalPrice: '₹88,999', doorType: 'Double', type: 'Frigoglass', capacity: '550L', description: '550L Frigoglass double door cooler with premium features.' },
      { id: 'VG1D600', name: 'VG1D600', image: '/PRD-NEW/VISI COOLERS/images/SRC500HC-Front-Angle-With-Stock-300x300.png', price: '₹85,999', originalPrice: '₹92,999', doorType: 'Double', type: 'Frigoglass', capacity: '600L', description: '600L Frigoglass double door with enhanced capacity.' },
      { id: 'VG-650', name: 'VG-650', image: '/PRD-NEW/VISI COOLERS/images/SRC572HC-Front-Angle-With-Stock-300x300.png', price: '₹88,999', originalPrice: '₹95,999', doorType: 'Double', type: 'Frigoglass', capacity: '650L', description: '650L Frigoglass high-capacity double door cooler.' },
      { id: 'VG2D1000', name: 'VG2D1000', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', price: '₹125,999', originalPrice: '₹135,999', doorType: 'Triple', type: 'Frigoglass', capacity: '1000L', description: '1000L Frigoglass triple door cooler for large commercial use.' },

      // Vertical Coolers / Supermarket Coolers
      { id: 'SMR 12 GL', name: 'SMR 12 GL', image: '/PRD-NEW/VISI COOLERS/images/SRC752HC-Front-Angle-With-Stock-300x300.png', price: '₹145,999', originalPrice: '₹155,999', doorType: 'Multi', type: 'Vertical', capacity: '1200L', description: '1200L vertical supermarket cooler with 12 glass doors.' },
      { id: 'SMR 18 GL', name: 'SMR 18 GL', image: '/PRD-NEW/VISI COOLERS/images/1050-Front-View-with-Products-300x300.png', price: '₹185,999', originalPrice: '₹195,999', doorType: 'Multi', type: 'Vertical', capacity: '1800L', description: '1800L large vertical supermarket cooler with 18 glass doors.' }
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
      { id: 'PTW06', name: 'PTW06', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-1-300x300.png', price: '₹65,999', originalPrice: '₹72,999', type: 'Counter', size: '600mm', description: '600mm compact pastry counter with curved glass display.' },
      { id: 'PTW09', name: 'PTW09', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/With-Stock-2-300x300.png', price: '₹85,999', originalPrice: '₹92,999', type: 'Counter', size: '900mm', description: '900mm pastry display counter with LED lighting and temperature control.' },
      { id: 'PTW12', name: 'PTW12', image: '/PRD-NEW/DISPLAY-PASTRY-COUNTERS/images/Right-Angle-With-Stock-300x300.png', price: '₹105,999', originalPrice: '₹115,999', type: 'Counter', size: '1200mm', description: '1200mm large pastry counter with multi-shelf display and premium features.' }
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
        id: 'PWC-40-80-120',
        name: 'PWC-40/80/120', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/PWC-40806080-1-300x300.png', 
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
        id: 'SS-20-20',
        name: 'SS 20/20', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-4080-6080-1-300x300.png', 
        price: '₹22,999', 
        originalPrice: '₹25,999',
        description: 'Compact stainless steel water cooler 20 LPH.'
      },
      { 
        id: 'SS-40-40',
        name: 'SS 40/40', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-4080-6080-1-300x300.png', 
        price: '₹32,999', 
        originalPrice: '₹35,999',
        description: 'Medium capacity water cooler 40 LPH.'
      },
      { 
        id: 'SS-60-60',
        name: 'SS 60/60', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-80120-1-300x300.png', 
        price: '₹42,999', 
        originalPrice: '₹45,999',
        description: 'Large capacity water cooler 60 LPH.'
      },
      { 
        id: 'SS-80-80',
        name: 'SS 80/80', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-80120-1-300x300.png', 
        price: '₹52,999', 
        originalPrice: '₹55,999',
        description: 'Extra large water cooler 80 LPH.'
      },
      { 
        id: 'SS-150-150',
        name: 'SS 150/150', 
        image: '/PRD-NEW/WATER-SOLUTIONS/images/SWC-150150-300x300.png', 
        price: '₹72,999', 
        originalPrice: '₹78,999',
        description: 'Industrial water cooler 150 LPH.'
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
        ],
        specifications: {
          'Model': 'BWD-3FMCGA',
          'Temperature Options': 'Hot, Cold, Normal',
          'Power Supply': '230V/50Hz',
          'Features': 'Child Safety Lock, LED Indicators',
          'Type': 'Floor Standing',
          'Warranty': '1 Year'
        }
      },
      { 
        id: 'BWD-3FMRGA-B',
        name: 'BWD-3FMRGA-B', 
        image: '/PRD-NEW/Water Dispenser/bwd3fmrga-b-bwd-mi-01-resized.jpg', 
        price: '₹7,999', 
        originalPrice: '₹9,499',
        description: 'Hot, Cold & Normal water dispenser with bottom loading.',
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
        price: '₹7,499', 
        originalPrice: '₹8,999',
        description: 'Standard hot, cold & normal water dispenser.',
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
        price: '₹6,999', 
        originalPrice: '₹8,499',
        description: 'Table top water dispenser for compact spaces.',
        features: [
          'Table top design',
          'Hot and cold water',
          'Compact size',
          'Easy installation',
          'Child safety lock'
        ]
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
export interface Product {
  id: string;
  model: string;
  name: string;
  slug: string;
  images: string[];
  imageUrl: string;
  imageAlt?: string;
  capacity?: string;
  rating?: string;
  dimensions?: {
    width: string;
    depth: string;
    height: string;
  };
  price?: {
    mrp: number;
    selling: number;
  };
  features?: string[];
  specifications?: Record<string, string>;
  brand?: string;
  manufacturer?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    "id": "convertible-freezer--cooler",
    "name": "Convertible Freezer & Cooler",
    "slug": "convertible-freezer--cooler",
    "description": "Western Convertible Freezer & Cooler - Premium quality equipment",
    "products": [
      {
        "id": "d070h161",
        "model": "D070H161",
        "name": "Convertible freezer & Cooler ( Single door )",
        "slug": "d070h161",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D070H161.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D070H161.jpg",
        "imageAlt": "",
        "capacity": "72",
        "rating": "1*",
        "dimensions": {
          "width": "21.06",
          "depth": "22.75",
          "height": "33.11"
        },
        "price": {
          "mrp": 18050,
          "selling": 15898
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d150h-hc",
        "model": "D150H-HC",
        "name": "Convertible freezer & Cooler ( Single door )",
        "slug": "d150h-hc",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D150H-HC.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D150H-HC.jpg",
        "imageAlt": "",
        "capacity": "105",
        "rating": "4*",
        "dimensions": {
          "width": "25.0",
          "depth": "21.25",
          "height": "34.84"
        },
        "price": {
          "mrp": 20890,
          "selling": 18392
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d300h124",
        "model": "D300H124",
        "name": "Convertible freezer & Cooler ( Single door )",
        "slug": "d300h124",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D300H124.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D300H124.jpg",
        "imageAlt": "",
        "capacity": "218",
        "rating": "4*",
        "dimensions": {
          "width": "36.73",
          "depth": "24.09",
          "height": "34.04"
        },
        "price": {
          "mrp": 27610,
          "selling": 24316
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d350h225",
        "model": "D350H225",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d350h225",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D350H225.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D350H225.jpg",
        "imageAlt": "",
        "capacity": "282",
        "rating": "3*",
        "dimensions": {
          "width": "42.33",
          "depth": "27.76",
          "height": "33.55"
        },
        "price": {
          "mrp": 31660,
          "selling": 27589
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d375h225",
        "model": "D375H225",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d375h225",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D375H225.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D375H225.jpg",
        "imageAlt": "",
        "capacity": "306",
        "rating": "5*",
        "dimensions": {
          "width": "49.21",
          "depth": "24.09",
          "height": "35.03"
        },
        "price": {
          "mrp": 33280,
          "selling": 28083
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d475h224",
        "model": "D475H224",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d475h224",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D475H224.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D475H224.jpg",
        "imageAlt": "",
        "capacity": "444",
        "rating": "4*",
        "dimensions": {
          "width": "53.54",
          "depth": "27.36",
          "height": "35.03"
        },
        "price": {
          "mrp": 37170,
          "selling": 31369
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d525h224",
        "model": "D525H224",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d525h224",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D525H224.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D525H224.jpg",
        "imageAlt": "",
        "capacity": "505",
        "rating": "4*",
        "dimensions": {
          "width": "63.22",
          "depth": "27.36",
          "height": "33.07"
        },
        "price": {
          "mrp": 41060,
          "selling": 34656
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d550h225",
        "model": "D550H225",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d550h225",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D550H225.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D550H225.jpg",
        "imageAlt": "",
        "capacity": "527",
        "rating": "5*",
        "dimensions": {
          "width": "65.59",
          "depth": "27.36",
          "height": "33.38"
        },
        "price": {
          "mrp": 42215,
          "selling": 35851
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "d625h225",
        "model": "D625H225",
        "name": "Convertible freezer & Cooler ( Double door )",
        "slug": "d625h225",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/D625H225.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/D625H225.jpg",
        "imageAlt": "",
        "capacity": "565",
        "rating": "5*",
        "dimensions": {
          "width": "65.59",
          "depth": "27.36",
          "height": "35.43"
        },
        "price": {
          "mrp": 43190,
          "selling": 36448
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "nwhf875h",
        "model": "NWHF875H",
        "name": "Convertible freezer & Cooler ( Triple door )",
        "slug": "nwhf875h",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/NWHF875H.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/NWHF875H.jpg",
        "imageAlt": "",
        "capacity": "722",
        "rating": "5*",
        "dimensions": {
          "width": "73.22",
          "depth": "30.7",
          "height": "35.74"
        },
        "price": {
          "mrp": 66200,
          "selling": 54896
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "combi-freezercooler",
    "name": "Combi Freezer/Cooler",
    "slug": "combi-freezercooler",
    "description": "Western Combi Freezer/Cooler - Premium quality equipment",
    "products": [
      {
        "id": "b325h220",
        "model": "B325H220",
        "name": "Double Door Hard Top Combi Freezer/Cooler",
        "slug": "b325h220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/B325H220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/B325H220.jpg",
        "imageAlt": "",
        "capacity": "162-123",
        "rating": "",
        "dimensions": {
          "width": "42.33",
          "depth": "27.76",
          "height": "33.55"
        },
        "price": {
          "mrp": 39290,
          "selling": 33161
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "b425h220",
        "model": "B425H220",
        "name": "Double Door Hard Top Combi Freezer/Cooler",
        "slug": "b425h220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/B425H220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/B425H220.jpg",
        "imageAlt": "",
        "capacity": "162-205",
        "rating": "",
        "dimensions": {
          "width": "54.31",
          "depth": "27.76",
          "height": "33.54"
        },
        "price": {
          "mrp": 43900,
          "selling": 37046
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "b525h220",
        "model": "B525H220",
        "name": "Double Door Hard Top Combi Freezer/Cooler",
        "slug": "b525h220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/B525H220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/B525H220.jpg",
        "imageAlt": "",
        "capacity": "215-258",
        "rating": "",
        "dimensions": {
          "width": "64.14",
          "depth": "27.76",
          "height": "33.55"
        },
        "price": {
          "mrp": 51330,
          "selling": 43319
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "hrfw-77ms4",
        "model": "HRFW-77MS4",
        "name": "2 Half Door Combination Chiller Freezer",
        "slug": "hrfw-77ms4",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/HRFW-77MS4.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/HRFW-77MS4.jpg",
        "imageAlt": "",
        "capacity": "305-305",
        "rating": "",
        "dimensions": {
          "width": "27.55",
          "depth": "32.2",
          "height": "80.7"
        },
        "price": {
          "mrp": 148751,
          "selling": 137057
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "hrfw127ms4",
        "model": "HRFW127MS4",
        "name": "4 Half Door Combination Chiller Freezer",
        "slug": "hrfw127ms4",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/HRFW127MS4.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/HRFW127MS4.jpg",
        "imageAlt": "",
        "capacity": "509-509",
        "rating": "",
        "dimensions": {
          "width": "47.24",
          "depth": "32.2",
          "height": "80.7"
        },
        "price": {
          "mrp": 202332,
          "selling": 184552
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "vertical-freezer",
    "name": "Vertical Freezer",
    "slug": "vertical-freezer",
    "description": "Western Vertical Freezer - Premium quality equipment",
    "products": [
      {
        "id": "srf206hc-ergl",
        "model": "SRF206HC-ERGL",
        "name": "Vertical Freezer Single Door",
        "slug": "srf206hc-ergl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRF206HC-ERGL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRF206HC-ERGL.jpg",
        "imageAlt": "",
        "capacity": "138",
        "rating": "",
        "dimensions": {
          "width": "20.23",
          "depth": "21.61",
          "height": "49.8"
        },
        "price": {
          "mrp": 90285,
          "selling": 77225
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "srf350hc1-gli",
        "model": "SRF350HC1-GLI",
        "name": "Vertical Freezer Single Door",
        "slug": "srf350hc1-gli",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRF350HC1-GLI.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRF350HC1-GLI.jpg",
        "imageAlt": "",
        "capacity": "341",
        "rating": "",
        "dimensions": {
          "width": "24.48",
          "depth": "28.19",
          "height": "71.49"
        },
        "price": {
          "mrp": 105490,
          "selling": 89895
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "srf550hc-gli",
        "model": "SRF550HC-GLI",
        "name": "Vertical Freezer Single Door",
        "slug": "srf550hc-gli",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRF550HC-GLI.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRF550HC-GLI.jpg",
        "imageAlt": "",
        "capacity": "500",
        "rating": "",
        "dimensions": {
          "width": "24.88",
          "depth": "29.95",
          "height": "83.43"
        },
        "price": {
          "mrp": 138060,
          "selling": 117647
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "srf900-hc-gl",
        "model": "SRF900-HC-GL",
        "name": "Vertical Freezer Double Door",
        "slug": "srf900-hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRF900-HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRF900-HC-GL.jpg",
        "imageAlt": "",
        "capacity": "762",
        "rating": "",
        "dimensions": {
          "width": "36.22",
          "depth": "30.7",
          "height": "83.77"
        },
        "price": {
          "mrp": 186910,
          "selling": 159277
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "smf",
        "model": "SMF",
        "name": "12 GL Vertical Freezer Double Door",
        "slug": "smf",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SMF.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SMF.jpg",
        "imageAlt": "",
        "capacity": "1000",
        "rating": "",
        "dimensions": {
          "width": "49.21",
          "depth": "29.52",
          "height": "82.24"
        },
        "price": {
          "mrp": 229390,
          "selling": 197355
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "slf-500",
        "model": "SLF-500",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "slf-500",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/SLF-500.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/SLF-500.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/slf-500.jpg",
        "capacity": "441",
        "rating": "",
        "dimensions": {
          "width": "26.46",
          "depth": "27.17",
          "height": "80.55"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      }
    ]
  },
  {
    "id": "glass-top-deep-freezer",
    "name": "Glass Top Deep Freezer",
    "slug": "glass-top-deep-freezer",
    "description": "Western Glass Top Deep Freezer - Premium quality equipment",
    "products": [
      {
        "id": "f250gl25",
        "model": "F250GL25",
        "name": "Slaiding Glass Top Deep Freezer - With Led",
        "slug": "f250gl25",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F250GL25.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F250GL25.jpg",
        "imageAlt": "",
        "capacity": "192",
        "rating": "5*",
        "dimensions": {
          "width": "29.92",
          "depth": "27.36",
          "height": "32.87"
        },
        "price": {
          "mrp": 31150,
          "selling": 26191
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "f350gl25",
        "model": "F350GL25",
        "name": "Slaiding Glass Top Deep Freezer - With Led",
        "slug": "f350gl25",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F350GL25.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F350GL25.jpg",
        "imageAlt": "",
        "capacity": "311",
        "rating": "5*",
        "dimensions": {
          "width": "41.7",
          "depth": "27.36",
          "height": "32.87"
        },
        "price": {
          "mrp": 38590,
          "selling": 33413
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "f450gl25",
        "model": "F450GL25",
        "name": "Slaiding Glass Top Deep Freezer - With Led",
        "slug": "f450gl25",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F450GL25.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F450GL25.jpg",
        "imageAlt": "",
        "capacity": "422",
        "rating": "5*",
        "dimensions": {
          "width": "53.54",
          "depth": "27.36",
          "height": "32.87"
        },
        "price": {
          "mrp": 43900,
          "selling": 38012
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "f550gl25",
        "model": "F550GL25",
        "name": "Slaiding Glass Top Deep Freezer - With Led",
        "slug": "f550gl25",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F550GL25.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F550GL25.jpg",
        "imageAlt": "",
        "capacity": "536",
        "rating": "5*",
        "dimensions": {
          "width": "64.96",
          "depth": "27.36",
          "height": "32.87"
        },
        "price": {
          "mrp": 52390,
          "selling": 44216
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "eutectic-freezer",
    "name": "Eutectic Freezer",
    "slug": "eutectic-freezer",
    "description": "Western Eutectic Freezer - Premium quality equipment",
    "products": [
      {
        "id": "e325h220",
        "model": "E325H220",
        "name": "Eutectic Freezer hard top - Double door",
        "slug": "e325h220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/E325H220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/E325H220.jpg",
        "imageAlt": "",
        "capacity": "297",
        "rating": "",
        "dimensions": {
          "width": "41.75",
          "depth": "27.36",
          "height": "33.07"
        },
        "price": {
          "mrp": 49560,
          "selling": 42232
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "e425h220",
        "model": "E425H220",
        "name": "Eutectic Freezer hard top - Double door",
        "slug": "e425h220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/E425H220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/E425H220.jpg",
        "imageAlt": "",
        "capacity": "351",
        "rating": "",
        "dimensions": {
          "width": "53.54",
          "depth": "27.36",
          "height": "33.07"
        },
        "price": {
          "mrp": 57350,
          "selling": 48869
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "e425d220",
        "model": "E425D220",
        "name": "Eutectic Freezer hard top with Hatch Door - Double door",
        "slug": "e425d220",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/E425D220.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/E425D220.jpg",
        "imageAlt": "",
        "capacity": "351",
        "rating": "",
        "dimensions": {
          "width": "53.54",
          "depth": "27.36",
          "height": "36.22"
        },
        "price": {
          "mrp": 61600,
          "selling": 52489
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "e425gt20",
        "model": "E425GT20",
        "name": "Eutectic Freezer Glass top - Sliding door",
        "slug": "e425gt20",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/E425GT20.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/E425GT20.jpg",
        "imageAlt": "",
        "capacity": "393",
        "rating": "",
        "dimensions": {
          "width": "62.99",
          "depth": "27.36",
          "height": "31.29"
        },
        "price": {
          "mrp": 61240,
          "selling": 52187
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "e525d320",
        "model": "E525D320",
        "name": "Eutectic Freezer hard top with Hatch Door - Triple door",
        "slug": "e525d320",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/E525D320.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/E525D320.jpg",
        "imageAlt": "",
        "capacity": "480",
        "rating": "",
        "dimensions": {
          "width": "63.0",
          "depth": "27.36",
          "height": "36.22"
        },
        "price": {
          "mrp": 70660,
          "selling": 60211
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "scooping-parlour",
    "name": "Scooping Parlour",
    "slug": "scooping-parlour",
    "description": "Western Scooping Parlour - Premium quality equipment",
    "products": [
      {
        "id": "f450gt25aaingmxwhs",
        "model": "F450GT25AAINGMXWHS",
        "name": "Curve Glass Scooping Parlour",
        "slug": "f450gt25aaingmxwhs",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F450GT25AAINGMXWHS.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F450GT25AAINGMXWHS.jpg",
        "imageAlt": "",
        "capacity": "422",
        "rating": "5*",
        "dimensions": {
          "width": "53.54",
          "depth": "27.36",
          "height": "48.26"
        },
        "price": {
          "mrp": 49560,
          "selling": 51087
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "f550gt25aaingmxwhs",
        "model": "F550GT25AAINGMXWHS",
        "name": "Curve Glass Scooping Parlour",
        "slug": "f550gt25aaingmxwhs",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/F550GT25AAINGMXWHS.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/F550GT25AAINGMXWHS.jpg",
        "imageAlt": "",
        "capacity": "536",
        "rating": "5*",
        "dimensions": {
          "width": "65.0",
          "depth": "27.36",
          "height": "48.26"
        },
        "price": {
          "mrp": 66550,
          "selling": 56166
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "freezer-on-wheel",
    "name": "Freezer on Wheel",
    "slug": "freezer-on-wheel",
    "description": "Western Freezer on Wheel - Premium quality equipment",
    "products": [
      {
        "id": "g200h120",
        "model": "G200H120",
        "name": "Freezer On Wheel (FOW) Without Cart",
        "slug": "g200h120",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/G200H120.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/G200H120.jpg",
        "imageAlt": "",
        "capacity": "117",
        "rating": "",
        "dimensions": {
          "width": "37.0",
          "depth": "25.19",
          "height": "30.9"
        },
        "price": {
          "mrp": 50890,
          "selling": 44645
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "g300h120",
        "model": "G300H120",
        "name": "Freezer On Wheel (FOW) Without Cart",
        "slug": "g300h120",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/G300H120.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/G300H120.jpg",
        "imageAlt": "",
        "capacity": "206",
        "rating": "",
        "dimensions": {
          "width": "38.97",
          "depth": "24.92",
          "height": "35.03"
        },
        "price": {
          "mrp": 56963,
          "selling": 50960
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "counter-table-top",
    "name": "Counter Table Top",
    "slug": "counter-table-top",
    "description": "Western Counter Table Top - Premium quality equipment",
    "products": [
      {
        "id": "ct30hc",
        "model": "CT30HC",
        "name": "Counter Table Top",
        "slug": "ct30hc",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/CT30HC.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/CT30HC.jpg",
        "imageAlt": "",
        "capacity": "37",
        "rating": "",
        "dimensions": {
          "width": "18.3",
          "depth": "23.22",
          "height": "17.71"
        },
        "price": {
          "mrp": 18410,
          "selling": 16211
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "visi-cooler",
    "name": "Visi Cooler",
    "slug": "visi-cooler",
    "description": "Western Visi Cooler - Premium quality equipment",
    "products": [
      {
        "id": "src30hc-gl",
        "model": "SRC30HC-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src30hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC30HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC30HC-GL.jpg",
        "imageAlt": "",
        "capacity": "37",
        "rating": "",
        "dimensions": {
          "width": "13.8",
          "depth": "18.11",
          "height": "24.8"
        },
        "price": {
          "mrp": 19470,
          "selling": 17312
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src60hc-gl",
        "model": "SRC60HC-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src60hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC60HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC60HC-GL.jpg",
        "imageAlt": "",
        "capacity": "58",
        "rating": "",
        "dimensions": {
          "width": "18.45",
          "depth": "18.93",
          "height": "26.52"
        },
        "price": {
          "mrp": 22300,
          "selling": 19830
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src200hcf-gl",
        "model": "SRC200HCF-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src200hcf-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC200HCF-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC200HCF-GL.jpg",
        "imageAlt": "",
        "capacity": "167",
        "rating": "",
        "dimensions": {
          "width": "20.53",
          "depth": "21.92",
          "height": "50.52"
        },
        "price": {
          "mrp": 31860,
          "selling": 27857
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src201hcf-gl",
        "model": "SRC201HCF-GL",
        "name": "Single Door Visi Cooler ( With Canopy)",
        "slug": "src201hcf-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC201HCF-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC201HCF-GL.jpg",
        "imageAlt": "",
        "capacity": "167",
        "rating": "",
        "dimensions": {
          "width": "21.53",
          "depth": "22.92",
          "height": "62.5"
        },
        "price": {
          "mrp": 33280,
          "selling": 29095
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src280hcf-gl",
        "model": "SRC280HCF-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src280hcf-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC280HCF-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC280HCF-GL.jpg",
        "imageAlt": "",
        "capacity": "216",
        "rating": "",
        "dimensions": {
          "width": "20.53",
          "depth": "21.92",
          "height": "60.5"
        },
        "price": {
          "mrp": 36110,
          "selling": 31572
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src281hc-gl",
        "model": "SRC281HC-GL",
        "name": "Single Door Visi Cooler ( With Canopy)",
        "slug": "src281hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC281HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC281HC-GL.jpg",
        "imageAlt": "",
        "capacity": "216",
        "rating": "",
        "dimensions": {
          "width": "21.53",
          "depth": "22.92",
          "height": "61.5"
        },
        "price": {
          "mrp": 38230,
          "selling": 33429
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src360hc-gl",
        "model": "SRC360HC-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src360hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC360HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC360HC-GL.jpg",
        "imageAlt": "",
        "capacity": "302",
        "rating": "",
        "dimensions": {
          "width": "17.08",
          "depth": "20.47",
          "height": "52.36"
        },
        "price": {
          "mrp": 42340,
          "selling": 37019
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src380hcf-gl",
        "model": "SRC380HCF-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src380hcf-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC380HCF-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC380HCF-GL.jpg",
        "imageAlt": "",
        "capacity": "340",
        "rating": "",
        "dimensions": {
          "width": "22.88",
          "depth": "26.16",
          "height": "69.49"
        },
        "price": {
          "mrp": 44250,
          "selling": 38691
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src381hc-gl",
        "model": "SRC381HC-GL",
        "name": "Single Door Visi Cooler ( With Canopy)",
        "slug": "src381hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC381HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC381HC-GL.jpg",
        "imageAlt": "",
        "capacity": "340",
        "rating": "",
        "dimensions": {
          "width": "22.55",
          "depth": "25.8",
          "height": "76.4"
        },
        "price": {
          "mrp": 46730,
          "selling": 40858
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src501hc-gl",
        "model": "SRC501HC-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src501hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC501HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC501HC-GL.jpg",
        "imageAlt": "",
        "capacity": "458",
        "rating": "",
        "dimensions": {
          "width": "23.28",
          "depth": "27.76",
          "height": "82.27"
        },
        "price": {
          "mrp": 53040,
          "selling": 46215
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src752hc-gl",
        "model": "SRC752HC-GL",
        "name": "Single Door Visi Cooler",
        "slug": "src752hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC752HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC752HC-GL.jpg",
        "imageAlt": "",
        "capacity": "585",
        "rating": "",
        "dimensions": {
          "width": "28.34",
          "depth": "27.83",
          "height": "81.73"
        },
        "price": {
          "mrp": 69380,
          "selling": 59125
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src810hc-gl",
        "model": "SRC810HC-GL",
        "name": "Double Door Visi Cooler ( Without Canopy)",
        "slug": "src810hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC810HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC810HC-GL.jpg",
        "imageAlt": "",
        "capacity": "695",
        "rating": "",
        "dimensions": {
          "width": "40.35",
          "depth": "26.29",
          "height": "72.44"
        },
        "price": {
          "mrp": 90578,
          "selling": 80404
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src950hc-gl",
        "model": "SRC950HC-GL",
        "name": "Double Door Visi Cooler ( With Canopy)",
        "slug": "src950hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC950HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC950HC-GL.jpg",
        "imageAlt": "",
        "capacity": "805",
        "rating": "",
        "dimensions": {
          "width": "40.35",
          "depth": "27.83",
          "height": "80.78"
        },
        "price": {
          "mrp": 104780,
          "selling": 90150
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src1050hc-gl",
        "model": "SRC1050HC-GL",
        "name": "Double Door Visi Cooler ( With Canopy)",
        "slug": "src1050hc-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC1050HC-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC1050HC-GL.jpg",
        "imageAlt": "",
        "capacity": "908",
        "rating": "",
        "dimensions": {
          "width": "40.93",
          "depth": "30.63",
          "height": "83.95"
        },
        "price": {
          "mrp": 113280,
          "selling": 97459
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "src1800-gl",
        "model": "SRC1800-GL",
        "name": "Triple Door Visi Cooler ( With Canopy)",
        "slug": "src1800-gl",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SRC1800-GL.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SRC1800-GL.jpg",
        "imageAlt": "",
        "capacity": "1882",
        "rating": "",
        "dimensions": {
          "width": "70.86",
          "depth": "33.46",
          "height": "86.65"
        },
        "price": {
          "mrp": 184080,
          "selling": 158372
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "imvc-300",
        "model": "IMVC 300",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-300",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-300.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-300.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-300.jpg",
        "capacity": "333",
        "rating": "",
        "dimensions": {
          "width": "20.47",
          "depth": "28.43",
          "height": "65.87"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "imvc-450",
        "model": "IMVC 450",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-450",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-450.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-450.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-450.jpg",
        "capacity": "457",
        "rating": "",
        "dimensions": {
          "width": "22.83",
          "depth": "28.43",
          "height": "78.35"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "imvc-550",
        "model": "IMVC 550",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-550",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-550.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-550.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-550.jpg",
        "capacity": "569",
        "rating": "",
        "dimensions": {
          "width": "22.83",
          "depth": "30.51",
          "height": "86.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "imvc-675",
        "model": "IMVC 675",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-675",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-675.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-675.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-675.jpg",
        "capacity": "681",
        "rating": "",
        "dimensions": {
          "width": "27.56",
          "depth": "30.51",
          "height": "86.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "imvc-900",
        "model": "IMVC 900",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-900",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-900.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-900.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-900.jpg",
        "capacity": "1009",
        "rating": "",
        "dimensions": {
          "width": "46.46",
          "depth": "28.43",
          "height": "74.8"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "imvc-1100",
        "model": "IMVC 1100",
        "name": "VISI Cooler | Temp +2°C to +8°C | Castor wheels",
        "slug": "imvc-1100",
        "images": [
          "https://www.icemakeindia.com/wp-content/uploads/IMVC-1100.jpg"
        ],
        "imageUrl": "https://www.icemakeindia.com/wp-content/uploads/IMVC-1100.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/ice-make/imvc-1100.jpg",
        "capacity": "1256",
        "rating": "",
        "dimensions": {
          "width": "46.46",
          "depth": "30.51",
          "height": "86.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Ice Make",
        "manufacturer": "IcemaKe India"
      },
      {
        "id": "vg-200",
        "model": "VG-200",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg-200",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG-200.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG-200.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg-200.jpg",
        "capacity": "187",
        "rating": "",
        "dimensions": {
          "width": "17.72",
          "depth": "21.22",
          "height": "57.64"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg-250",
        "model": "VG-250",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg-250",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG-250.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG-250.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg-250.jpg",
        "capacity": "230",
        "rating": "",
        "dimensions": {
          "width": "17.72",
          "depth": "21.22",
          "height": "67.87"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg1d-295",
        "model": "VG1D 295",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg1d-295",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG1D-295.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG1D-295.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg1d-295.jpg",
        "capacity": "285",
        "rating": "",
        "dimensions": {
          "width": "22.68",
          "depth": "25.59",
          "height": "57.24"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg1d-370",
        "model": "VG1D 370",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg1d-370",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG1D-370.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG1D-370.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg1d-370.jpg",
        "capacity": "358",
        "rating": "",
        "dimensions": {
          "width": "22.68",
          "depth": "25.59",
          "height": "67.87"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg1d-450",
        "model": "VG1D 450",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg1d-450",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG1D-450.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG1D-450.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg1d-450.jpg",
        "capacity": "448",
        "rating": "",
        "dimensions": {
          "width": "22.68",
          "depth": "25.59",
          "height": "80.91"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg-550",
        "model": "VG-550",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg-550",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG-550.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG-550.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg-550.jpg",
        "capacity": "485",
        "rating": "",
        "dimensions": {
          "width": "24.41",
          "depth": "26.61",
          "height": "74.69"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg1d-600",
        "model": "VG1D 600",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg1d-600",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG1D-600.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG1D-600.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg1d-600.jpg",
        "capacity": "595",
        "rating": "",
        "dimensions": {
          "width": "29.09",
          "depth": "25.59",
          "height": "81.22"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg-650",
        "model": "VG-650",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg-650",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG-650.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG-650.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg-650.jpg",
        "capacity": "522",
        "rating": "",
        "dimensions": {
          "width": "24.41",
          "depth": "26.61",
          "height": "79.41"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "vg2d-1000",
        "model": "VG2D 1000",
        "name": "VISI Cooler | Tropical 41°C / 75% RH | R134a/R290 per model",
        "slug": "vg2d-1000",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/VG2D-1000.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/VG2D-1000.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/vg2d-1000.jpg",
        "capacity": "947",
        "rating": "",
        "dimensions": {
          "width": "40.35",
          "depth": "29.33",
          "height": "79.92"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      }
    ]
  },
  {
    "id": "super-market-cooler",
    "name": "Super Market Cooler",
    "slug": "super-market-cooler",
    "description": "Western Super Market Cooler - Premium quality equipment",
    "products": [
      {
        "id": "smr",
        "model": "SMR",
        "name": "12 GL Super Market Cooler - Double door",
        "slug": "smr",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SMR.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SMR.jpg",
        "imageAlt": "",
        "capacity": "935",
        "rating": "",
        "dimensions": {
          "width": "47.24",
          "depth": "29.8",
          "height": "75.98"
        },
        "price": {
          "mrp": 126020,
          "selling": 108423
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "back-bar",
    "name": "Back Bar",
    "slug": "back-bar",
    "description": "Western Back Bar - Premium quality equipment",
    "products": [
      {
        "id": "rbw-",
        "model": "RBW-",
        "name": "95 GS PC 196 LT 2 Door Back Bar",
        "slug": "rbw-",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/RBW-.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/RBW-.jpg",
        "imageAlt": "",
        "capacity": "196",
        "rating": "",
        "dimensions": {
          "width": "35.43",
          "depth": "21.45",
          "height": "35.43"
        },
        "price": {
          "mrp": 59968,
          "selling": 54619
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "water-cooler",
    "name": "Water Cooler",
    "slug": "water-cooler",
    "description": "Western Water Cooler - Premium quality equipment",
    "products": [
      {
        "id": "swc2040",
        "model": "SWC2040",
        "name": "SS WATER COOLER 20L P/H COOLING WATER 40 LT Storage",
        "slug": "swc2040",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC2040.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC2040.jpg",
        "imageAlt": "",
        "capacity": "20-40",
        "rating": "",
        "dimensions": {
          "width": "19.9",
          "depth": "19.9",
          "height": "44.64"
        },
        "price": {
          "mrp": 38970,
          "selling": 33669
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "swc4080hc",
        "model": "SWC4080HC",
        "name": "SS WATER COOLER 40L P/H COOLING WATER 80 LT Storage",
        "slug": "swc4080hc",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC4080HC.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC4080HC.jpg",
        "imageAlt": "",
        "capacity": "40-80",
        "rating": "",
        "dimensions": {
          "width": "26.37",
          "depth": "26.61",
          "height": "47.4"
        },
        "price": {
          "mrp": 49875,
          "selling": 42938
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "swc6080",
        "model": "SWC6080",
        "name": "SS WATER COOLER 60L P/H COOLING WATER 80 LT Storage",
        "slug": "swc6080",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC6080.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC6080.jpg",
        "imageAlt": "",
        "capacity": "60-80",
        "rating": "",
        "dimensions": {
          "width": "26.37",
          "depth": "26.61",
          "height": "47.4"
        },
        "price": {
          "mrp": 56825,
          "selling": 49880
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "pwc6080",
        "model": "PWC6080",
        "name": "PCS WATER COOLER 60L P/H COOLING WATER 80 LT Storage",
        "slug": "pwc6080",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/PWC6080.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/PWC6080.jpg",
        "imageAlt": "",
        "capacity": "60-80",
        "rating": "",
        "dimensions": {
          "width": "26.37",
          "depth": "26.61",
          "height": "47.4"
        },
        "price": {
          "mrp": 52035,
          "selling": 46139
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "swc60120",
        "model": "SWC60120",
        "name": "SS WATER COOLER 60L P/H COOLING WATER 120 LT Storage",
        "slug": "swc60120",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC60120.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC60120.jpg",
        "imageAlt": "",
        "capacity": "60-120",
        "rating": "",
        "dimensions": {
          "width": "27.55",
          "depth": "32.32",
          "height": "47.4"
        },
        "price": {
          "mrp": 64897,
          "selling": 57362
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "swc80120",
        "model": "SWC80120",
        "name": "SS WATER COOLER 80L P/H COOLING WATER 120 LT Storage",
        "slug": "swc80120",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC80120.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC80120.jpg",
        "imageAlt": "",
        "capacity": "80-120",
        "rating": "",
        "dimensions": {
          "width": "27.55",
          "depth": "32.32",
          "height": "47.4"
        },
        "price": {
          "mrp": 64897,
          "selling": 57362
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      },
      {
        "id": "swc150150",
        "model": "SWC150150",
        "name": "SS WATER COOLER 150L P/H COOLING WATER 150 LT Storage",
        "slug": "swc150150",
        "images": [
          "https://westernequipments.com/wp-content/uploads/2024/01/SWC150150.jpg"
        ],
        "imageUrl": "https://westernequipments.com/wp-content/uploads/2024/01/SWC150150.jpg",
        "imageAlt": "",
        "capacity": "150-150",
        "rating": "",
        "dimensions": {
          "width": "32.67",
          "depth": "32.32",
          "height": "47.4"
        },
        "price": {
          "mrp": 80697,
          "selling": 74820
        },
        "features": [],
        "specifications": {},
        "brand": "Western",
        "manufacturer": "Western Refrigeration Pvt. Ltd."
      }
    ]
  },
  {
    "id": "convertible-chest-freezer",
    "name": "Convertible Chest Freezer",
    "slug": "convertible-chest-freezer",
    "description": "Frigoglass Convertible Chest Freezer - Premium quality equipment",
    "products": [
      {
        "id": "fh1d-110-ct",
        "model": "FH1D 110 CT",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fh1d-110-ct",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FH1D-110-CT.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FH1D-110-CT.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fh1d-110-ct.jpg",
        "capacity": "95",
        "rating": "",
        "dimensions": {
          "width": "21.85",
          "depth": "20.67",
          "height": "33.46"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fh1d-250-ct",
        "model": "FH1D 250 CT",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fh1d-250-ct",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FH1D-250-CT.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FH1D-250-CT.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fh1d-250-ct.jpg",
        "capacity": "230",
        "rating": "",
        "dimensions": {
          "width": "32.72",
          "depth": "26.22",
          "height": "36.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fh2d-350-ct",
        "model": "FH2D 350 CT",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fh2d-350-ct",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FH2D-350-CT.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FH2D-350-CT.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fh2d-350-ct.jpg",
        "capacity": "335",
        "rating": "",
        "dimensions": {
          "width": "44.09",
          "depth": "26.22",
          "height": "36.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fh2d-450-ct",
        "model": "FH2D 450 CT",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fh2d-450-ct",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FH2D-450-CT.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FH2D-450-CT.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fh2d-450-ct.jpg",
        "capacity": "440",
        "rating": "",
        "dimensions": {
          "width": "55.2",
          "depth": "26.22",
          "height": "36.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fh2d-560-ct",
        "model": "FH2D 560 CT",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fh2d-560-ct",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FH2D-560-CT.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FH2D-560-CT.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fh2d-560-ct.jpg",
        "capacity": "550",
        "rating": "",
        "dimensions": {
          "width": "66.61",
          "depth": "26.22",
          "height": "36.61"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      }
    ]
  },
  {
    "id": "flat-glass-door-freezer",
    "name": "Flat Glass Door Freezer",
    "slug": "flat-glass-door-freezer",
    "description": "Frigoglass Flat Glass Door Freezer - Premium quality equipment",
    "products": [
      {
        "id": "fg2d-250",
        "model": "FG2D 250",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fg2d-250",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FG2D-250.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FG2D-250.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fg2d-250.jpg",
        "capacity": "225",
        "rating": "",
        "dimensions": {
          "width": "32.72",
          "depth": "25.98",
          "height": "34.84"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fg2d-350",
        "model": "FG2D 350",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fg2d-350",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FG2D-350.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FG2D-350.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fg2d-350.jpg",
        "capacity": "330",
        "rating": "",
        "dimensions": {
          "width": "44.09",
          "depth": "25.98",
          "height": "34.84"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fg2d-450",
        "model": "FG2D 450",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fg2d-450",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FG2D-450.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FG2D-450.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fg2d-450.jpg",
        "capacity": "435",
        "rating": "",
        "dimensions": {
          "width": "55.2",
          "depth": "25.98",
          "height": "34.84"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      },
      {
        "id": "fg2d-550",
        "model": "FG2D 550",
        "name": "Convertible: -24°C to 0~10°C (FH*); Flat Glass Door Freezers (FG*); Vertical Freezer (SLF-500)",
        "slug": "fg2d-550",
        "images": [
          "https://www.frigoglass.com/wp-content/uploads/FG2D-550.jpg"
        ],
        "imageUrl": "https://www.frigoglass.com/wp-content/uploads/FG2D-550.jpg",
        "imageAlt": "https://usha-refrigeration-anand.netlify.app/images/products/frigoglass/fg2d-550.jpg",
        "capacity": "545",
        "rating": "",
        "dimensions": {
          "width": "66.61",
          "depth": "25.98",
          "height": "34.84"
        },
        "price": {
          "mrp": 0,
          "selling": 0
        },
        "features": [],
        "specifications": {},
        "brand": "Frigoglass",
        "manufacturer": "Frigoglass India Pvt. Ltd."
      }
    ]
  }
];

export const getAllProducts = (): Product[] => {
  return categories.flatMap(category => category.products);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};

export const getProductBySlug = (categorySlug: string, productSlug: string): Product | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find(product => product.slug === productSlug);
};

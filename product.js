const products = [
  {
    name_of_the_products: 'ketch up heniz',
    categoria: 'salsa',
    fecha_de_caducidad: '2024-12-04T23:00:00.000Z',
    stock: 5,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mostaza',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-08-01T22:00:00.000Z',
    stock: 4,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa brava',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-01-11T23:00:00.000Z',
    stock: 7,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mayonesa',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-12-11T23:00:00.000Z',
    stock: 8,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'sriracha',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-03-11T23:00:00.000Z',
    stock: 9,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa de soja',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-04-04T22:00:00.000Z',
    stock: 12,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa agridulce',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-03-04T23:00:00.000Z',
    stock: 3,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa de tomate',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-04-07T22:00:00.000Z',
    stock: 33,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa alfredo',
    categoria: 'salsa',
    fecha_de_caducidad: '2025-09-07T22:00:00.000Z',
    stock: 20,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salsa pesto',
    categoria: 'salsa',
    fecha_de_caducidad: null,
    stock: 33,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'tomate cherry',
    categoria: 'salsa',
    fecha_de_caducidad: null,
    stock: 22,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'lechuga romana',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 67,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'cebolla morada',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 55,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'esparragos',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 4,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'calabacin',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 34,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'pimiento rojos',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 44,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'pimiento verde',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 24,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'patatas',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 55,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'brocoli',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 67,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'cebolla dulce',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 34,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'maiz',
    categoria: 'verdura',
    fecha_de_caducidad: '2025-12-01T23:00:00.000Z',
    stock: 21,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'espinacas',
    categoria: 'verdura',
    fecha_de_caducidad: '2025-04-03T22:00:00.000Z',
    stock: 34,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'zanohoria',
    categoria: 'verdura',
    fecha_de_caducidad: '2025-05-04T22:00:00.000Z',
    stock: 33,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'frambuesa',
    categoria: 'verdura',
    fecha_de_caducidad: '2025-05-07T22:00:00.000Z',
    stock: 21,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'arandanos',
    categoria: 'verdura',
    fecha_de_caducidad: null,
    stock: 56,
    provedor: 'arrarat'
  },
  {
    name_of_the_products: 'merluza congelada',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-06-06T22:00:00.000Z',
    stock: 31,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'GAMBAS PELADO',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-11-06T23:00:00.000Z',
    stock: 34,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'atun en lata',
    categoria: 'pescado',
    fecha_de_caducidad: '2028-12-11T23:00:00.000Z',
    stock: 22,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salmon ahumado',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-10-09T22:00:00.000Z',
    stock: 21,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'gambas congelado',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-12-04T23:00:00.000Z',
    stock: 18,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'bacalao fresaca',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-05-04T22:00:00.000Z',
    stock: 19,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'calamares',
    categoria: 'pescado',
    fecha_de_caducidad: null,
    stock: 20,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mejillones',
    categoria: 'pescado',
    fecha_de_caducidad: '2028-05-05T22:00:00.000Z',
    stock: 25,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'pulpo',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-10-07T22:00:00.000Z',
    stock: 25,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'sardina',
    categoria: 'pescado',
    fecha_de_caducidad: '2025-08-07T22:00:00.000Z',
    stock: 26,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'tilapia congelada',
    categoria: 'pescado',
    fecha_de_caducidad: '2028-09-09T22:00:00.000Z',
    stock: 28,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'caballa',
    categoria: 'pescado',
    fecha_de_caducidad: '2028-08-07T22:00:00.000Z',
    stock: 29,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'anchoas',
    categoria: 'pescado',
    fecha_de_caducidad: '2028-07-08T22:00:00.000Z',
    stock: 30,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'detergente ariel',
    categoria: 'limpieza',
    fecha_de_caducidad: '2029-09-09T22:00:00.000Z',
    stock: 32,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'desinfectante lysol',
    categoria: 'limpieza',
    fecha_de_caducidad: '2028-10-11T22:00:00.000Z',
    stock: 33,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'jabon liquiodo',
    categoria: 'limpieza',
    fecha_de_caducidad: '2029-07-06T22:00:00.000Z',
    stock: 28,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'cloro liqiudo',
    categoria: 'limpieza',
    fecha_de_caducidad: '2032-12-11T23:00:00.000Z',
    stock: 18,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'toallitas desfinfectantes',
    categoria: 'limpieza',
    fecha_de_caducidad: '2029-12-05T23:00:00.000Z',
    stock: 22,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'esponja multiusos',
    categoria: 'limpieza',
    fecha_de_caducidad: '2030-07-11T22:00:00.000Z',
    stock: 34,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'cepillo fregar',
    categoria: 'limpieza',
    fecha_de_caducidad: null,
    stock: 36,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'bolsa de vasura',
    categoria: 'limpieza',
    fecha_de_caducidad: null,
    stock: 38,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'limpiador multiusos',
    categoria: 'limpieza',
    fecha_de_caducidad: '2025-12-04T23:00:00.000Z',
    stock: 39,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'ambientador',
    categoria: 'limpieza',
    fecha_de_caducidad: '2028-08-08T22:00:00.000Z',
    stock: 14,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'filete  de res',
    categoria: 'carne',
    fecha_de_caducidad: '2026-09-08T22:00:00.000Z',
    stock: 17,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'chuleta de cerdo',
    categoria: 'carne',
    fecha_de_caducidad: '2028-12-11T23:00:00.000Z',
    stock: 19,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'pechuga de pollo',
    categoria: 'carne',
    fecha_de_caducidad: '2026-06-05T22:00:00.000Z',
    stock: 22,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'carne de molido',
    categoria: 'carne',
    fecha_de_caducidad: '2029-07-07T22:00:00.000Z',
    stock: 20,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'costilla de cerdo',
    categoria: 'carne',
    fecha_de_caducidad: '2029-09-09T22:00:00.000Z',
    stock: 16,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'salchichas',
    categoria: 'carne',
    fecha_de_caducidad: '2026-02-01T23:00:00.000Z',
    stock: 18,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'jamon de serranoi',
    categoria: 'carne',
    fecha_de_caducidad: '2026-03-02T23:00:00.000Z',
    stock: 19,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'chorrizo',
    categoria: 'carne',
    fecha_de_caducidad: '2027-03-04T23:00:00.000Z',
    stock: 34,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'pavo ahumado',
    categoria: 'carne',
    fecha_de_caducidad: '2029-04-03T22:00:00.000Z',
    stock: 29,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'bistec de ternera',
    categoria: 'carne',
    fecha_de_caducidad: '2028-05-04T22:00:00.000Z',
    stock: 23,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'papas fritas lays',
    categoria: 'aperitivo',
    fecha_de_caducidad: '2027-08-07T22:00:00.000Z',
    stock: 14,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'galletas de chocolate',
    categoria: 'aperitivo',
    fecha_de_caducidad: '2028-09-08T22:00:00.000Z',
    stock: 18,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'te verde lipton',
    categoria: 'caf�',
    fecha_de_caducidad: '2028-05-04T22:00:00.000Z',
    stock: 19,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'caf� molido',
    categoria: 'caf�',
    fecha_de_caducidad: '2029-04-03T22:00:00.000Z',
    stock: 22,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'cereal de maiz',
    categoria: 'caf�',
    fecha_de_caducidad: '2029-07-06T22:00:00.000Z',
    stock: 34,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'cococola',
    categoria: 'bebida',
    fecha_de_caducidad: '2029-08-06T22:00:00.000Z',
    stock: 45,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'fanta',
    categoria: 'bebida',
    fecha_de_caducidad: '2029-09-08T22:00:00.000Z',
    stock: 46,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'coco cola zero',
    categoria: 'bebida',
    fecha_de_caducidad: '2029-08-06T22:00:00.000Z',
    stock: 46,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'cococola light',
    categoria: 'bebida',
    fecha_de_caducidad: '2029-09-08T22:00:00.000Z',
    stock: 43,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'fanta naranja',
    categoria: 'bebida',
    fecha_de_caducidad: '2025-08-07T22:00:00.000Z',
    stock: 23,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'aquarias naranja',
    categoria: 'bebida',
    fecha_de_caducidad: '2027-09-08T22:00:00.000Z',
    stock: 67,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'aquarias limon',
    categoria: 'bebida',
    fecha_de_caducidad: '2028-12-01T23:00:00.000Z',
    stock: 28,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'sprite',
    categoria: 'bebida',
    fecha_de_caducidad: '2025-03-02T23:00:00.000Z',
    stock: 29,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'seven up',
    categoria: 'bebida',
    fecha_de_caducidad: '2028-05-04T22:00:00.000Z',
    stock: 30,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mahou botellin',
    categoria: 'cerveza',
    fecha_de_caducidad: '2029-07-06T22:00:00.000Z',
    stock: 32,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mahou lata verde',
    categoria: 'cerveza',
    fecha_de_caducidad: '2029-08-06T22:00:00.000Z',
    stock: 33,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'mahou lata rojo',
    categoria: 'cerveza',
    fecha_de_caducidad: '2028-09-06T22:00:00.000Z',
    stock: 35,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'heniken lata',
    categoria: 'cerveza',
    fecha_de_caducidad: '2029-07-07T22:00:00.000Z',
    stock: 45,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'heniken botelliin',
    categoria: 'cerveza',
    fecha_de_caducidad: '2025-10-09T22:00:00.000Z',
    stock: 55,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'heniken tercio',
    categoria: 'cerveza',
    fecha_de_caducidad: '2028-12-01T23:00:00.000Z',
    stock: 56,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'aguilla lata',
    categoria: 'cerveza',
    fecha_de_caducidad: '2026-12-04T23:00:00.000Z',
    stock: 58,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'aguila sin filtrar',
    categoria: 'cerveza',
    fecha_de_caducidad: '2028-11-07T23:00:00.000Z',
    stock: 59,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino rioja',
    categoria: 'vino',
    fecha_de_caducidad: '2028-12-07T23:00:00.000Z',
    stock: 60,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino ribera',
    categoria: 'vino',
    fecha_de_caducidad: '2029-12-01T23:00:00.000Z',
    stock: 62,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino crianza',
    categoria: 'vino',
    fecha_de_caducidad: '2028-04-04T22:00:00.000Z',
    stock: 63,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino verdejo',
    categoria: 'vino',
    fecha_de_caducidad: '2029-07-06T22:00:00.000Z',
    stock: 65,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino  semidulce',
    categoria: 'vino',
    fecha_de_caducidad: '2029-08-07T22:00:00.000Z',
    stock: 67,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino rossado',
    categoria: 'vino',
    fecha_de_caducidad: '2029-07-08T22:00:00.000Z',
    stock: 68,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'vino dulce',
    categoria: 'vino',
    fecha_de_caducidad: '2026-08-07T22:00:00.000Z',
    stock: 69,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'agua pequena',
    categoria: 'agua',
    fecha_de_caducidad: '2028-09-04T22:00:00.000Z',
    stock: 70,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'agua grande',
    categoria: 'agua',
    fecha_de_caducidad: '2028-07-06T22:00:00.000Z',
    stock: 72,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'zumo de naranja',
    categoria: 'zumo',
    fecha_de_caducidad: '2027-09-08T22:00:00.000Z',
    stock: 75,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'zumo de pi�a',
    categoria: 'zumo',
    fecha_de_caducidad: '2029-08-08T22:00:00.000Z',
    stock: 78,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'zumo de melecoton',
    categoria: 'zumo',
    fecha_de_caducidad: '2028-04-03T22:00:00.000Z',
    stock: 80,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'agua con gas',
    categoria: 'agua',
    fecha_de_caducidad: '2028-08-06T22:00:00.000Z',
    stock: 17,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'tonica',
    categoria: 'tonico',
    fecha_de_caducidad: '2028-09-08T22:00:00.000Z',
    stock: 12,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'jb whisky',
    categoria: 'whisky',
    fecha_de_caducidad: '2028-09-08T22:00:00.000Z',
    stock: 19,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'red label',
    categoria: 'whisky',
    fecha_de_caducidad: '2029-08-06T22:00:00.000Z',
    stock: 27,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'jhony negro',
    categoria: 'whisky',
    fecha_de_caducidad: '2028-03-02T23:00:00.000Z',
    stock: 29,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'puerto india',
    categoria: 'gin',
    fecha_de_caducidad: '2029-09-08T22:00:00.000Z',
    stock: 40,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'segram',
    categoria: 'gin',
    fecha_de_caducidad: '2028-05-04T22:00:00.000Z',
    stock: 22,
    provedor: 'makro'
  },
  {
    name_of_the_products: 'martin miller',
    categoria: 'gin',
    fecha_de_caducidad: '2028-08-06T22:00:00.000Z',
    stock: 13,
    provedor: 'makro'
  }
]
module.exports = products

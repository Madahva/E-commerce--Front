const categories = [
  {
    title: "Smartphones",
    img:
      "https://images.samsung.com/is/image/samsung/assets/co/smartphones/galaxy-z-flip3-5g/buy/ZFlip3_Carousel_FoldUnfoldCombo_Lavender_MO.jpg",
  },
  {
    title: "Televisions",
    img:
      "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
  },
  {
    title: "Computers",
    img:
      "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_823x.jpg?v=1660440284",
  },
  {
    title: "Game Consoles",
    img:
      "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.jpg",
  },
  {
    title: "Cameras",
    img:
      "https://http2.mlstatic.com/D_NQ_NP_980174-MLA31993371931_082019-O.webp",
  },
  {
    title: "Smart Watches",
    img:
      "https://http2.mlstatic.com/D_NQ_NP_706375-MLA42361438857_062020-O.webp",
  },
  {
    title: "Speakers",
    img:
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_ii/product_silo_images/SoundLink_Revolve_II_Black_Ecom_1.png/_jcr_content/renditions/cq5dam.web.320.320.png",
  },
  {
    title: "Drones",
    img:
      "https://http2.mlstatic.com/D_NQ_NP987513-MLA44226666119_122020-B.webp",
  },
  {
    title: "Headphones",
    img:
      "https://http2.mlstatic.com/D_NQ_NP_794283-MLA50236126838_062022-O.webp",
  },
];

const products = {
  Smartphones: [
    {
      name: "Samsung Galaxy S22 Ultra 5G",
      description:
        "Samsung's top-of-the-line flagship smartphone with 5G capabilities.",
      category: "Smartphones",
      brand: "Samsung",
      romMemory: "128GB/256GB/512GB",
      ramMemory: "12GB/16GB",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_687089-MLA52140335784_102022-F.webp",
      price: 1199.99,
      rating: 4,
    },
    {
      name: "Samsung Galaxy Note 20 Ultra 5G",
      description:
        "Samsung's high-end smartphone with a large screen, S Pen, and 5G capabilities.",
      category: "Smartphones",
      brand: "Samsung",
      romMemory: "128GB/256GB/512GB",
      ramMemory: "12GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/Samsung-galaxy-s20-ultra_18d96eeb-331c-43c7-b338-871d301f5cf5_700x.png?v=1621301850",
      price: 1299.99,
      rating: 4,
    },
    {
      name: "Samsung Galaxy S21 5G",
      description:
        "Samsung's mid-range flagship smartphone with 5G capabilities.",
      category: "Smartphones",
      brand: "Samsung",
      romMemory: "128GB/256GB",
      ramMemory: "8GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-s21-5g-0_700x.jpg?v=1634321179",
      price: 799.99,
      rating: 4,
    },
    {
      name: "Samsung Galaxy A52 5G",
      description:
        "Samsung's affordable 5G smartphone with a long-lasting battery.",
      category: "Smartphones",
      brand: "Samsung",
      romMemory: "128GB/256GB",
      ramMemory: "6GB/8GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-a52-4g-10_700x.jpg?v=1643760347",
      price: 449.99,
      rating: 4,
    },
    {
      name: "Samsung Galaxy A12",
      description:
        "Samsung's budget smartphone with a large display and multiple cameras.",
      category: "Smartphones",
      brand: "Samsung",
      romMemory: "32GB/64GB/128GB",
      ramMemory: "3GB/4GB/6GB",
      image:
        "https://cdn.shopify.com/s/files/1/0271/0922/8578/products/samsung-galaxy-a12-sm-a125-1_700x.jpg?v=1639666000",
      price: 179.99,
      rating: 4,
    },
  ],
  Televisions: [
    {
      name: "Samsung QN900A Neo QLED TV",
      description:
        "Samsung's flagship 8K TV with an ultra-thin design and advanced picture quality technology.",
      category: "Televisions",
      brand: "Samsung",
      size: "75 inches",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 6999.99,
      rating: 4,
    },
    {
      name: "LG CX OLED TV",
      description:
        "LG's premium OLED TV with excellent picture quality and gaming features.",
      category: "Televisions",
      brand: "LG",
      size: "65 inches",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 2199.99,
      rating: 4,
    },
    {
      name: "Sony X950H LED TV",
      description:
        "Sony's high-end LED TV with excellent color accuracy and HDR performance.",
      category: "Televisions",
      brand: "Sony",
      size: "55 inches",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 1299.99,
      rating: 4,
    },
    {
      name: "TCL 6-Series QLED TV",
      description:
        "TCL's affordable QLED TV with great picture quality and Roku smart TV features.",
      category: "Televisions",
      brand: "TCL",
      size: "55 inches",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 699.99,
      rating: 4,
    },
    {
      name: "Vizio M-Series Quantum TV",
      description:
        "Vizio's mid-range quantum TV with excellent picture quality and smart TV features.",
      category: "Televisions",
      brand: "Vizio",
      size: "65 inches",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_855774-MLA52220683915_102022-O.webp",
      price: 999.99,
      rating: 4,
    },
  ],
  Computers: [
    {
      name: "ASUS ROG Strix Scar 17",
      description:
        "A high-end gaming laptop with a fast processor, powerful graphics card, and high-refresh-rate display.",
      category: "Computers",
      brand: "ASUS",
      processor: "Intel Core i9",
      graphicsCard: "NVIDIA GeForce RTX 3080",
      display: "17.3 inches, 1920 x 1080 pixels, 360Hz",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 2999.99,
      rating: 4,
    },
    {
      name: "Dell XPS 13",
      description:
        "A premium ultrabook with a slim design, long battery life, and beautiful display.",
      category: "Computers",
      brand: "Dell",
      processor: "Intel Core i7",
      graphicsCard: "Intel UHD Graphics",
      display: "13.4 inches, 3840 x 2400 pixels",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 1299.99,
      rating: 4,
    },
    {
      name: "HP Envy 32 All-in-One",
      description:
        "A sleek all-in-one PC with a large 32-inch display and powerful speakers.",
      category: "Computers",
      brand: "HP",
      processor: "Intel Core i7",
      graphicsCard: "NVIDIA GeForce GTX 1650",
      display: "31.5 inches, 3840 x 2160 pixels",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 1699.99,
      rating: 4,
    },
    {
      name: "Lenovo ThinkCentre M75n IoT",
      description:
        "A compact desktop PC designed for Internet of Things (IoT) applications.",
      category: "Computers",
      brand: "Lenovo",
      processor: "AMD Ryzen 5",
      graphicsCard: "AMD Radeon Graphics",
      display: "None",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 599.99,
      rating: 4,
    },
    {
      name: "Microsoft Surface Studio 2",
      description:
        "A unique all-in-one PC with a large 28-inch touchscreen display that can be tilted for drawing and design work.",
      category: "Computers",
      brand: "Microsoft",
      processor: "Intel Core i7",
      graphicsCard: "NVIDIA GeForce GTX 1070",
      display: "28 inches, 4500 x 3000 pixels",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 3499.99,
      rating: 4,
    },
    {
      name: "Apple Mac Mini",
      description:
        "A compact desktop computer with Apple's M1 chip and a variety of ports for connectivity.",
      category: "Computers",
      brand: "Apple",
      processor: "Apple M1",
      graphicsCard: "Integrated",
      display: "None",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_792906-MLA53016994903_122022-O.webp",
      price: 699.99,
      rating: 4,
    },
  ],
  GameConsoles: [
    {
      name: "PlayStation 5",
      description:
        "The latest console from Sony with advanced graphics and fast load times.",
      category: "GameConsoles",
      brand: "Sony",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_627149-MLA44484230438_012021-O.webp",
      price: 499.99,
      rating: 4,
    },
    {
      name: "Xbox Series X",
      description:
        "Microsoft's flagship console with powerful hardware and backward compatibility.",
      category: "GameConsoles",
      brand: "Microsoft",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 499.99,
      rating: 4,
    },
    {
      name: "Nintendo Switch",
      description:
        "A hybrid console that can be used as a handheld device or connected to a TV.",
      category: "GameConsoles",
      brand: "Nintendo",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 299.99,
      rating: 4,
    },
    {
      name: "PlayStation 4",
      description:
        "Sony's previous generation console with a vast library of games.",
      category: "GameConsoles",
      brand: "Sony",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 299.99,
      rating: 4,
    },
    {
      name: "Xbox One X",
      description:
        "A powerful console from Microsoft with 4K capabilities and HDR support.",
      category: "GameConsoles",
      brand: "Microsoft",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 399.99,
      rating: 4,
    },
    {
      name: "Nintendo 3DS",
      description:
        "A portable console with 3D capabilities and a large library of games.",
      category: "GameConsoles",
      brand: "Nintendo",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp",
      price: 149.99,
      rating: 4,
    },
  ],
  Drones: [
    {
      name: "DJI Mavic 2 Pro",
      description:
        "A powerful drone with a Hasselblad camera and 4K video capabilities.",
      category: "Drones",
      brand: "DJI",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 1499.99,
      rating: 4,
    },
    {
      name: "DJI Mini 2",
      description:
        "A compact and portable drone with a 4K camera and advanced features.",
      category: "Drones",
      brand: "DJI",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 449.99,
      rating: 4,
    },
    {
      name: "Autel Robotics EVO II",
      description:
        "A high-performance drone with a 6K camera and obstacle avoidance technology.",
      category: "Drones",
      brand: "Autel Robotics",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 1499.99,
      rating: 4,
    },
    {
      name: "DJI Phantom 4 Pro",
      description:
        "A professional-grade drone with a 4K camera and intelligent flight modes.",
      category: "Drones",
      brand: "DJI",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 1499.99,
      rating: 4,
    },
    {
      name: "Parrot Bebop 2 Power",
      description:
        "A compact and durable drone with a 14 MP camera and FPV headset.",
      category: "Drones",
      brand: "Parrot",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 499.99,
      rating: 4,
    },
    {
      name: "Yuneec Typhoon H Pro",
      description:
        "A hexacopter drone with a 4K camera and obstacle avoidance technology.",
      category: "Drones",
      brand: "Yuneec",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_681554-MLA51055415459_082022-O.webp",
      price: 1499.99,
      rating: 4,
    },
  ],
  Cameras: [
    {
      name: "Canon EOS R6",
      description:
        "A full-frame mirrorless camera with advanced autofocus and image stabilization technology.",
      category: "Cameras",
      brand: "Canon",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 2499.99,
      rating: 4,
    },
    {
      name: "Nikon Z6 II",
      description:
        "A full-frame mirrorless camera with improved autofocus and dual memory card slots.",
      category: "Cameras",
      brand: "Nikon",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1999.99,
      rating: 4,
    },
    {
      name: "Sony Alpha A7 III",
      description:
        "A full-frame mirrorless camera with excellent low-light performance and 4K video recording.",
      category: "Cameras",
      brand: "Sony",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1799.99,
      rating: 4,
    },
    {
      name: "Fujifilm X-T4",
      description:
        "A mirrorless camera with in-body image stabilization and a durable, weather-resistant design.",
      category: "Cameras",
      brand: "Fujifilm",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1699.99,
      rating: 4,
    },
    {
      name: "Panasonic Lumix GH5",
      description:
        "A mirrorless camera with excellent video features and a durable magnesium alloy body.",
      category: "Cameras",
      brand: "Panasonic",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1399.99,
      rating: 4,
    },
    {
      name: "Olympus OM-D E-M1 Mark III",
      description:
        "A micro four thirds camera with advanced autofocus and image stabilization technology.",
      category: "Cameras",
      brand: "Olympus",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_771755-MLA47093902463_082021-O.webp",
      price: 1199.99,
      rating: 4,
    },
  ],
  Headphones: [
    {
      name: "Bose QuietComfort 35 II",
      description:
        "Noise-cancelling headphones with great sound quality and comfortable fit.",
      category: "Headphones",
      brand: "Bose",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_880229-MLA40185360474_122019-O.webp",
      price: 299.99,
      rating: 4,
    },
    {
      name: "Sony WH-1000XM4",
      description:
        "Premium noise-cancelling headphones with advanced features and excellent sound quality.",
      category: "Headphones",
      brand: "Sony",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_669943-MLA44451841546_012021-F.webp",
      price: 349.99,
      rating: 4,
    },
    {
      name: "Beats Solo3",
      description:
        "Wireless headphones with a sleek design and good sound quality.",
      category: "Headphones",
      brand: "Beats",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_861810-MLA44998102071_022021-F.webp",
      price: 199.99,
      rating: 4,
    },
    {
      name: "Jabra Elite 85h",
      description:
        "Noise-cancelling headphones with a long battery life and customizable sound.",
      category: "Headphones",
      brand: "Jabra",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_981569-MLA43041045090_082020-F.webp",
      price: 249.99,
      rating: 4,
    },
    {
      name: "Sennheiser Momentum 3",
      description:
        "High-end headphones with premium materials and excellent sound quality.",
      category: "Headphones",
      brand: "Sennheiser",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_879865-MLA43739289639_102020-F.webp",
      price: 399.99,
      rating: 4,
    },
    {
      name: "Apple AirPods Pro",
      description:
        "True wireless earbuds with active noise cancellation and excellent integration with Apple devices.",
      category: "Headphones",
      brand: "Apple",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_818915-MLA44332500968_122020-F.webp",
      price: 249.99,
      rating: 4,
    },
  ],
  Speakers: [
    {
      name: "Bose SoundLink Revolve+",
      description:
        "A portable 360° Bluetooth speaker with powerful sound and long battery life.",
      category: "Speakers",
      brand: "Bose",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_694138-MLA53285895231_012023-O.webp",
      price: 299.0,
      rating: 4,
    },
    {
      name: "Sonos One (Gen 2)",
      description:
        "A smart speaker with voice control and superior sound quality.",
      category: "Speakers",
      brand: "Sonos",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_878300-MLA41211557084_032020-O.webp",
      price: 199.0,
      rating: 4,
    },
    {
      name: "JBL Flip 5",
      description:
        "A waterproof portable Bluetooth speaker with high-quality sound.",
      category: "Speakers",
      brand: "JBL",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_964990-MLA44428410857_122020-O.webp",
      price: 119.95,
      rating: 4,
    },
    {
      name: "UE Boom 3",
      description:
        "A rugged portable Bluetooth speaker with 360° sound and deep bass.",
      category: "Speakers",
      brand: "UE",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_632972-MLA40093570467_122019-O.webp",
      price: 149.99,
      rating: 4,
    },
    {
      name: "Amazon Echo Dot (4th Gen)",
      description:
        "A smart speaker with Alexa that fits perfectly into any room.",
      category: "Speakers",
      brand: "Amazon",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_814674-MLA45523435696_042021-O.webp",
      price: 49.99,
      rating: 4,
    },
    {
      name: "Bose SoundTouch 10",
      description:
        "A compact wireless speaker with powerful sound and easy setup.",
      category: "Speakers",
      brand: "Bose",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_937579-MLA40108440454_122019-O.webp",
      price: 199.99,
      rating: 4,
    },
  ],
  SmartWatches: [
    {
      name: "Apple Watch Series 7",
      description:
        "The latest smartwatch from Apple with a larger display and faster charging.",
      category: "SmartWatches",
      brand: "Apple",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_854092-MLA51210865767_082022-O.webp",
      price: 399.99,
      rating: 4,
    },
    {
      name: "Samsung Galaxy Watch4",
      description:
        "A feature-packed smartwatch from Samsung with improved fitness tracking and Google Wear OS.",
      category: "SmartWatches",
      brand: "Samsung",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_978328-MLA46879861883_072021-O.webp",
      price: 299.99,
      rating: 4,
    },
    {
      name: "Fitbit Versa 3",
      description:
        "A versatile smartwatch from Fitbit with built-in GPS and improved battery life.",
      category: "SmartWatches",
      brand: "Fitbit",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_736429-MLA45825762529_052021-O.webp",
      price: 229.99,
      rating: 4,
    },
    {
      name: "Garmin Venu 2",
      description:
        "A premium smartwatch from Garmin with a vivid AMOLED display and advanced health tracking features.",
      category: "SmartWatches",
      brand: "Garmin",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_838336-MLA47312622134_082021-O.webp",
      price: 399.99,
      rating: 4,
    },
    {
      name: "Fossil Gen 6",
      description:
        "A stylish smartwatch from Fossil with a new faster processor and longer battery life.",
      category: "SmartWatches",
      brand: "Fossil",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_623617-MLA47334203982_082021-O.webp",
      price: 299.99,
      rating: 4,
    },
    {
      name: "TicWatch E3",
      description:
        "A budget-friendly smartwatch from TicWatch with the latest Snapdragon Wear 4100 chipset.",
      category: "SmartWatches",
      brand: "TicWatch",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_828064-MLA47014655543_082021-O.webp",
      price: 179.99,
      rating: 4,
    },
  ],
};

const imagesContext = require.context(
  "../images/Brands",
  false,
  /\.(png|jpe?g|svg)$/
);

const brands = imagesContext.keys().map((image) => {
  return {
    src: imagesContext(image),
    alt: image.replace(/\.[^/.]+$/, "").replace("./", ""),
  };
});

export { categories, products, brands };

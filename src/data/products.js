// Extended product data with more variety
const products = [
  // Original products from API (keeping some for consistency)
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Womens Casual Slim Fit T-Shirt",
    price: 19.99,
    description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.5, count: 430 }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695.00,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168.00,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.0, count: 400 }
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 }
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive",
    price: 64.00,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109.00,
    description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost",
    price: 109.00,
    description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114.00,
    description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599.00,
    description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 }
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 }
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 }
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 }
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 }
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 }
  },

  // New Electronics - Smart Watches
  {
    id: 21,
    title: "SmartFit Pro Fitness Watch",
    price: 129.99,
    description: "Track your fitness goals with precision. Features heart rate monitoring, sleep tracking, step counter, and 14+ exercise modes. Water-resistant up to 50m with a battery life of up to 7 days.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.7, count: 312 }
  },
  {
    id: 22,
    title: "TechGear Smart Watch Series 5",
    price: 249.99,
    description: "Stay connected on the go with this premium smartwatch. Features include ECG monitoring, always-on Retina display, GPS, and cellular connectivity. Compatible with iOS and Android.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.8, count: 529 }
  },
  {
    id: 23,
    title: "FitTrack Pulse Smart Band",
    price: 79.99,
    description: "Lightweight fitness tracker with a vibrant AMOLED display. Tracks steps, calories, sleep, and features 11 sport modes. Water-resistant with up to 14 days of battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.3, count: 187 }
  },

  // Power Banks
  {
    id: 24,
    title: "PowerMax 20000mAh Fast Charging Power Bank",
    price: 49.99,
    description: "High-capacity 20000mAh power bank with fast charging technology. Features dual USB ports, USB-C input/output, and LED power indicator. Charge your smartphone up to 5 times on a single charge.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 245 }
  },
  {
    id: 25,
    title: "SlimCharge 10000mAh Portable Charger",
    price: 29.99,
    description: "Ultra-slim design with 10000mAh capacity. Features fast charging, multiple device compatibility, and built-in cables for both iPhone and Android. Perfect for travel.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.4, count: 198 }
  },

  // Men's Clothing - T-shirts and Hoodies
  {
    id: 26,
    title: "Premium Cotton Graphic T-Shirt",
    price: 24.99,
    description: "Made from 100% organic cotton, this comfortable t-shirt features original graphic designs. Pre-shrunk fabric with a modern fit and reinforced stitching for durability.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 156 }
  },
  {
    id: 27,
    title: "Urban Streetwear Hoodie",
    price: 59.99,
    description: "Stylish streetwear hoodie with premium fleece lining for extra warmth. Features adjustable drawstring hood, kangaroo pocket, and ribbed cuffs. Perfect for casual everyday wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.7, count: 203 }
  },
  {
    id: 28,
    title: "Athletic Performance Zip-Up Hoodie",
    price: 64.99,
    description: "Designed for athletes, this performance hoodie features moisture-wicking fabric, breathable mesh panels, and four-way stretch. Perfect for workouts or casual wear.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 178 }
  },
  {
    id: 29,
    title: "Vintage Washed Cotton T-Shirt Pack",
    price: 39.99,
    description: "Set of 3 vintage-style t-shirts with a soft, pre-washed feel. Made from heavyweight cotton with a relaxed fit and reinforced collar that keeps its shape wash after wash.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.4, count: 132 }
  },

  // Women's Clothing
  {
    id: 30,
    title: "Floral Print Summer Dress",
    price: 45.99,
    description: "Lightweight summer dress with a beautiful floral print. Features a flattering A-line silhouette, adjustable straps, and side pockets. Perfect for warm weather occasions.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.8, count: 217 }
  },
  {
    id: 31,
    title: "Women's Cropped Hoodie",
    price: 38.99,
    description: "Trendy cropped hoodie made from soft cotton blend. Features a relaxed fit, drawstring hood, and ribbed trim. Stylish for casual outings or lounging at home.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 189 }
  },
  {
    id: 32,
    title: "High-Waisted Yoga Leggings",
    price: 34.99,
    description: "Performance yoga leggings with high-waisted design for maximum comfort and support. Features four-way stretch fabric, moisture-wicking technology, and hidden pocket.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.7, count: 256 }
  },
  {
    id: 33,
    title: "Oversized Graphic T-Shirt",
    price: 27.99,
    description: "Trendy oversized t-shirt with artistic graphic print. Made from soft cotton with a relaxed fit and dropped shoulders for a contemporary look.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 173 }
  },
  {
    id: 34,
    title: "Knitted Cardigan Sweater",
    price: 49.99,
    description: "Cozy knitted cardigan with button closure and front pockets. Made from a soft wool blend that's perfect for layering during cooler months.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 142 }
  },

  // More Electronics
  {
    id: 35,
    title: "Wireless Noise-Cancelling Headphones",
    price: 179.99,
    description: "Premium wireless headphones with active noise cancellation. Features 30-hour battery life, comfortable over-ear design, and high-resolution audio for an immersive listening experience.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.8, count: 327 }
  },
  {
    id: 36,
    title: "Portable Bluetooth Speaker",
    price: 89.99,
    description: "Waterproof portable speaker with 360° sound and deep bass. Features 20-hour battery life, built-in microphone for calls, and can be paired with a second speaker for stereo sound.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 215 }
  },

  // Additional Men's Clothing
  {
    id: 37,
    title: "Slim Fit Denim Jeans",
    price: 49.99,
    description: "Classic slim fit jeans made from premium denim. Features a comfortable stretch fabric, five-pocket styling, and a modern tapered leg.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 189 }
  },
  {
    id: 38,
    title: "Casual Button-Down Oxford Shirt",
    price: 39.99,
    description: "Timeless oxford shirt made from soft, breathable cotton. Features a button-down collar, chest pocket, and regular fit that's perfect for any occasion.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.4, count: 156 }
  },
  {
    id: 39,
    title: "Lightweight Packable Down Jacket",
    price: 79.99,
    description: "Ultra-lightweight down jacket that packs into its own pocket. Perfect for travel or as a layering piece in cold weather. Features 650-fill-power down insulation.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.7, count: 203 }
  },
  {
    id: 40,
    title: "Classic Polo Shirt",
    price: 34.99,
    description: "Timeless polo shirt made from premium piqué cotton. Features a ribbed collar, two-button placket, and embroidered logo on the chest.",
    category: "men's clothing",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.3, count: 178 }
  },

  // Additional Women's Clothing
  {
    id: 41,
    title: "Casual Maxi Dress",
    price: 54.99,
    description: "Flowy maxi dress perfect for summer days. Features adjustable spaghetti straps, side pockets, and a flattering silhouette.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.8, count: 231 }
  },
  {
    id: 42,
    title: "High-Rise Skinny Jeans",
    price: 59.99,
    description: "Flattering high-rise skinny jeans with a touch of stretch for comfort. Features a classic five-pocket design and ankle-length cut.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 198 }
  },
  {
    id: 43,
    title: "Oversized Knit Sweater",
    price: 49.99,
    description: "Cozy oversized sweater perfect for layering. Made from a soft wool blend with dropped shoulders and ribbed trim.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 167 }
  },
  {
    id: 44,
    title: "Satin Blouse",
    price: 42.99,
    description: "Elegant satin blouse with a relaxed fit. Features a V-neckline, long sleeves with button cuffs, and a luxurious drape.",
    category: "women's clothing",
    image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.4, count: 145 }
  },

  // Additional Electronics
  {
    id: 45,
    title: "Ultra HD 4K Action Camera",
    price: 149.99,
    description: "Capture your adventures in stunning 4K resolution. Features electronic image stabilization, waterproof design, and Wi-Fi connectivity for easy sharing.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 213 }
  },
  {
    id: 46,
    title: "Smart Home Security Camera",
    price: 79.99,
    description: "Keep an eye on your home with this HD security camera. Features motion detection, two-way audio, night vision, and cloud storage options.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 187 }
  },
  {
    id: 47,
    title: "Wireless Charging Pad",
    price: 29.99,
    description: "Convenient wireless charging for compatible smartphones. Features fast charging technology, LED indicator, and non-slip surface.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1622043596664-a3a9e2ad0e9f?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.3, count: 156 }
  },
  {
    id: 48,
    title: "Smart LED Light Bulb",
    price: 19.99,
    description: "Control your lighting with your smartphone or voice assistant. Features millions of colors, dimming capabilities, and energy-efficient design.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1550985543-49bee3167284?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.4, count: 178 }
  },

  // Accessories
  {
    id: 49,
    title: "Minimalist Leather Wallet",
    price: 39.99,
    description: "Slim leather wallet with RFID blocking technology. Features multiple card slots, ID window, and compact design that fits comfortably in your pocket.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.7, count: 213 }
  },
  {
    id: 50,
    title: "Polarized Sunglasses",
    price: 59.99,
    description: "Stylish sunglasses with polarized lenses to reduce glare. Features durable frame, 100% UV protection, and comes with a protective case.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.5, count: 187 }
  },
  {
    id: 51,
    title: "Weekender Travel Bag",
    price: 89.99,
    description: "Versatile travel bag perfect for weekend getaways. Features durable canvas construction, leather trim, multiple pockets, and a detachable shoulder strap.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.8, count: 231 }
  },
  {
    id: 52,
    title: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Features leak-proof design and eco-friendly materials.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1000&auto=format&fit=crop",
    rating: { rate: 4.6, count: 198 }
  }
];

export default products;

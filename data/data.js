const discount = 0.7

export const Products = [
  {
    _id: "69259cd9bc23937fb2f93b80",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Elegant Cotton Neck Top",
    description:
      "This lightweight cotton top is perfect for casual outings, featuring a relaxed fit and durable material that ensures long-lasting wear. Crafted from high-quality, breathable cotton, it provides all-day comfort for errands, meetings, or leisure. The round neck adds elegance, versatile for pairing with jeans or skirts. Machine washable and fade-resistant, it's a wardrobe staple that flatters all body types.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_1.png"],
    category: "Women",
    date: "1764072665778",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "69259d4dbc23937fb2f93b82",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Men Premium Wool Sweater",
    description:
      "A premium wool sweater offering exceptional comfort and warmth, great for winter layering and cozy days. Made from soft wool that regulates temperature, ideal for outdoors or office. Features ribbed cuffs for fit, smooth texture without itch. Pairs with jeans or chinos in neutral tones. Gentle wash or dry clean to retain shape and softness.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_2.png"],
    category: "Men",
    date: "1764072781890",
    subCategory: "Winterwear",
    popular: false,
    new:true
  },
  {
    _id: "69259e4dbc23937fb2f93b89",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Casual Women Cotton Top",
    description:
      "Soft cotton top for women, ideal for active days and relaxation, providing ultimate comfort. From pure cotton that's breathable and moisture-wicking, keeps you cool during workouts or lounging. Styles easily with leggings or pants for outings or home. Reinforced seams for durability, withstands washing without fading. Available in sizes and patterns for perfect fit.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_3_1.png"],
    category: "Women",
    date: "1764073037054",
    subCategory: "Topwear",
    popular: true,
    new:true
  },
  {
    _id: "6925a183bc23937fb2f93b8b",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Women Casual T-Shirt",
    description:
      "A casual t-shirt made from breathable cotton, suitable for any informal occasion, offering versatility. Soft, pre-shrunk fabric maintains fit after washes. Crew neck and short sleeves for timeless look, layers under jackets. Pairs with denim or joggers for meetups or strolls. Classic colors, tag-free for no irritation.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_4.png"],
    category: "Women",
    date: "1764073859250",
    subCategory: "Topwear",
    popular: false,
    new:true
  },
  {
    _id: "6925a1c4bc23937fb2f93b8d",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Stylish Women Knit Sweater",
    description:
      "An everyday essential knit sweater for women, offering simplicity and warmth for cooler months. From soft yarns for insulation without bulk, layers over blouses. Relaxed silhouette for movement, suitable for office or outings. Ribbed edges, versatile neckline for styling. Machine washable, maintains texture and color.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_5.png"],
    category: "Women",
    date: "1764073924797",
    subCategory: "Winterwear",
    popular: false,
    new:true
  },
  {
    _id: "6925a1e9bc23937fb2f93b8f",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Graphic Hoodie for Women",
    description:
      "Fun and vibrant graphic hoodie, perfect for women's casual wear and chilly days, with practical warmth. Fleece-lined for heat, eye-catching graphics add personality. Drawstring hood and pocket for function. Relaxed fit for layering, ideal for adventures or gym. Bold colors, machine washable, retains softness.",
    price: 15,
    offerPrice: 15*discount,
    images: ["/images/product_6.png"],
    category: "Women",
    date: "1764073961618",
    subCategory: "Winterwear",
    popular: true,
    new:true
  },
  {
    _id: "6925a21bbc23937fb2f93b91",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Women Soft Trouser",
    description:
      "Comfortable, lightweight trousers ideal for casual wear any season, with versatility. Soft fabric drapes elegantly, elastic waist for fit. Pairs with tops or sweaters, wrinkle-resistant for polish. Side pockets, straight-leg design flatters shapes. Machine washable, in lengths and colors.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_7.png"],
    category: "Women",
    date: "1764074011321",
    subCategory: "Bottomwear",
    popular: false,
    new:false
  },
  {
    _id: "6925a455bc23937fb2f93b97",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Casual Women Hoodie",
    description:
      "Warm and comfortable hoodie with adjustable hood and pockets, for women's winter activities. Plush material retains heat for walks or relaxation. Drawstring for coverage, kangaroo pockets for warmth. Pairs with jeans or leggings casually. Range of sizes and hues, reinforced for lasting.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_8.png"],
    category: "Women",
    date: "1764074581999",
    subCategory: "Winterwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c0b9bc23937fb2f93b99",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Women Cozy Hoodie",
    description:
      "A casual hoodie for women, soft material for all-day comfort in relaxed activities. Fleece-lined for warmth, ideal for lounging or pursuits. Pullover with hood and cuffs to seal coziness. Minimalist for accessories, flattering fit. Washable, resistant to pilling.",
    price: 30,
    offerPrice: 30*discount,
    images: ["/images/product_9.png"],
    category: "Women",
    date: "1764081849698",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c0d8bc23937fb2f93b9b",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Men Jogger Pants",
    description:
      "High-waisted joggers for casual wear, relaxed fit for comfort in activities. Flexible fabric wicks moisture, tapered legs with cuffs. Drawstring and pockets for practicality. Durable for use and washing. Versatile colors, pairs with tees or hoodies.",
    price: 30,
    offerPrice: 30*discount,
    images: ["/images/product_10.png"],
    category: "Men",
    date: "1764081880641",
    subCategory: "Bottomwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c10ebc23937fb2f93b9d",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Classic Slim Fit Shirt",
    description:
      "Durable slim fit shirt for casual or formal, polished look. Wrinkle-resistant fabric, button-down collar, long sleeves. Contoured fit for silhouette, for meetings or events. Quality buttons, seams for wear. Classic patterns, elevates ensembles.",
    price: 15,
    offerPrice: 15*discount,
    images: ["/images/product_11.png"],
    category: "Men",
    date: "1764081934381",
    subCategory: "Topwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c14cbc23937fb2f93b9f",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Kids Playtime T-Shirt",
    description:
      "Comfortable t-shirt for active kids, soft fabric for play or outings. Breathable cotton, hypoallergenic, tagless. Allows movement, wicks sweat for coolness. Vibrant colors resist fading. Sized for growth, washable and quick-drying.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_12.png"],
    category: "Kids",
    date: "1764081996114",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c175bc23937fb2f93ba1",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Women Skinny Fit Blouse",
    description:
      "Trendy skinny blouse pairs with bottoms for chic look in settings. Stretchable fabric accentuates, flexible. Detailing like buttons for sophistication. Sleek for day to night. Breathable, resists wrinkles. Assortment of colors for staple.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_13.png"],
    category: "Women",
    date: "1764082037439",
    subCategory: "Topwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c19dbc23937fb2f93ba3",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Functional Kids Cargo Shirt",
    description:
      "Rugged cargo shirt with pockets for adventures, practical for kids. Tear-resistant fabric for play. Button-up, roll-up sleeves for weather. Cleanable, retains structure. Earthy tones for style and function.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_14.png"],
    category: "Kids",
    date: "1764082077438",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c25bbc23937fb2f93baa",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Men Adventure Shorts",
    description:
      "Elastic waist shorts for active men, for activities like hiking. Quick-drying, UV protection. Adjustable waist, pockets for gear. Durable for terrain and washing. Versatile for gym or beach, in colors.",
    price: 25,
    offerPrice: 25*discount,
    images: ["/images/product_15.png"],
    category: "Men",
    date: "1764082267435",
    subCategory: "Bottomwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c277bc23937fb2f93bac",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Floral Print Shirt",
    description:
      "Soft floral print shirt for comfort and style in settings. Lightweight fabric with patterns for personality. Button-front, collar for versatility. Reinforced, wrinkle-resistant. Multiple sizes and variations for outfits.",
    price: 15,
    offerPrice: 15*discount,
    images: ["/images/product_16.png"],
    category: "Men",
    date: "1764082295089",
    subCategory: "Topwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c29abc23937fb2f93bae",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Men Lightweight Puffer Pants",
    description:
      "Stylish puffer pants for warmth in weather, insulation for activities. Down alternative, water-resistant shell. Elastic waist, cuffs for fit. Compact, durable stitching. Neutral colors for style.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_17.png"],
    category: "Men",
    date: "1764082330979",
    subCategory: "Bottomwear",
    popular: true,
    new:false
  },
  {
    _id: "6925c38dbc23937fb2f93bb0",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Classic Men Trench Coat",
    description:
      "Timeless trench coat tailored fit, protection for occasions. Weather-resistant, removable lining. Double-breasted, belted for look. Coverage with cuffs, pockets. Traditional shades for elegance.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_18.png"],
    category: "Men",
    date: "1764082573221",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c3b2bc23937fb2f93bb2",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Kids Winter Parka",
    description:
      "Warm parka durable for cold, for play and adventures. Padded, fleece-lined, hooded with trim. Reflective, pockets for safety. Waterproof, adjustable fit. Cleanable for winter coziness.",
    price: 15,
    offerPrice: 15*discount,
    images: ["/images/product_19.png"],
    category: "Kids",
    date: "1764082610087",
    subCategory: "Topwear",
    popular: false,
    new:false
  },
  {
    _id: "6925c3e8bc23937fb2f93bb4",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "Women Classic Trouser",
    description:
      "Versatile denim trousers for seasons, pairing with tops. Stretch-denim, shape retention. Five-pocket, straight-leg for appeal. Comfort mid-rise flatters. Fade-resistant, in washes and sizes.",
    price: 20,
    offerPrice: 20*discount,
    images: ["/images/product_20.png"],
    category: "Women",
    date: "1764082664282",
    subCategory: "Bottomwear",
    popular: true,
    new:false
  },
]

export const userDummyData = [
  {
    _id: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    name: "user one",
    email: "test.codeatusman@gmail.com",
    imageUrl:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zNXNVcjRuZWhCMW9QTFloaEI3RmZKNWpYNmYifQ",
    __v: 0,
    cartItems: {},
  },
]

export const addressDummyData = [
  {
    _id: "69294f6230e5f49abb6a9f7d",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    completeName: "John Cena",
    phone: "1234567890",
    zipcode: "12345",
    city: "Springfield",
    state: "NY",
    country: "United States",
    streetAddress: "123 Main Street",
  },
  {
    _id: "692babe70be1d2f4e69cdfc7",
    userId: "user_35sUr0gOkatUxT9F55XMGURcNeJ",
    completeName: "John Doe",
    phone: "1234567890",
    zipcode: "12345",
    city: "Springfield",
    state: "NY",
    country: "United States",
    streetAddress: "240 Maplewood Drive",
  },
]

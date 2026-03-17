export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export const menuData: Record<string, MenuCategory> = {
  momos: {
    id: "momos",
    name: "Momos",
    description: "Authentic Himalayan steamed and fried dumplings.",
    image: "/images/momos.png",
    items: [
      { id: "m1", name: "Classic Steamed Momos", description: "Traditional veg dumplings with spicy chutney.", price: "$12.99", image: "/images/momos/classic.png", rating: 4.9 },
      { id: "m2", name: "Pan-Fried Schezwan Momos", description: "Crispy momos tossed in fiery schezwan sauce.", price: "$14.50", image: "/images/momos/schezwan.png", rating: 4.8 },
      { id: "m3", name: "Cheese & Corn Momos", description: "Melty cheese and sweet corn filling.", price: "$13.99", image: "/images/momos/cheese.png", rating: 4.7 },
      { id: "m4", name: "Jhol Momos", description: "Momos served in a tangy sesame-based soup.", price: "$15.00", image: "/images/momos/jhol.png", rating: 4.9 },
      { id: "m5", name: "Spinach & Paneer Momos", description: "Healthy spinach wrap with spiced cottage cheese.", price: "$13.50", image: "/images/momos/spinach.png", rating: 4.6 },
      { id: "m6", name: "Tandoori Momos", description: "Smoky momos marinated in yogurt and spices.", price: "$14.99", image: "/images/momos/tandoori.png", rating: 4.8 },
      { id: "m7", name: "Open Momos", description: "Unique shape with four different dips included.", price: "$16.00", image: "/images/momos/open.png", rating: 4.9 },
      { id: "m8", name: "Chilly Momos", description: "Deep fried momos sautéed with capsicum and onions.", price: "$14.00", image: "/images/momos/chilly.png", rating: 4.7 },
      { id: "m9", name: "Momo Platter", description: "A mix of all our best-selling momos.", price: "$22.00", image: "/images/momos/platter.png", rating: 5.0 },
      { id: "m10", name: "Whole Wheat Momos", description: "Guilt-free veg momos made with wheat flour.", price: "$13.00", image: "/images/momos/wheat.png", rating: 4.5 },
      { id: "m11", name: "Mushroom Truffle Momos", description: "Earthy mushrooms with a hint of truffle oil.", price: "$17.50", image: "/images/momos/truffle.png", rating: 4.9 },
      { id: "m12", name: "Kothey Momos", description: "Half-steamed, half-fried for a unique texture.", price: "$13.99", image: "/images/momos/kothey.png", rating: 4.8 },
    ],
  },
  smoothies: {
    id: "smoothies",
    name: "Smoothies",
    description: "Cold-pressed juices and thick fruit blends.",
    image: "/images/smoothies.png",
    items: [
      { id: "s1", name: "Tropical Sunrise", description: "Mango, pineapple, and coconut milk.", price: "$8.50", image: "/images/smoothies/tropical.png", rating: 4.9 },
      { id: "s2", name: "Berry Blast", description: "Mixed berries, Greek yogurt, and honey.", price: "$9.00", image: "/images/smoothies/berry.png", rating: 4.8 },
      { id: "s3", name: "Green Detox", description: "Spinach, green apple, cucumber, and ginger.", price: "$8.75", image: "/images/smoothies/green.png", rating: 4.7 },
      { id: "s4", name: "Avocado Dream", description: "Creamy avocado blend with condensed milk.", price: "$10.50", image: "/images/smoothies/avocado.png", rating: 4.9 },
      { id: "s5", name: "Protein Power", description: "Banana, peanut butter, and whey protein.", price: "$9.50", image: "/images/smoothies/protein.png", rating: 4.6 },
      { id: "s6", name: "Classic Strawberry", description: "Fresh strawberries and vanilla cream.", price: "$8.50", image: "/images/smoothies/strawberry.png", rating: 4.8 },
      { id: "s7", name: "Choco-Oat Smoothie", description: "Dark chocolate, oats, and almond milk.", price: "$9.99", image: "/images/smoothies/choco.png", rating: 4.7 },
      { id: "s8", name: "Passion Fruit Punch", description: "Tangy passion fruit with a hint of lime.", price: "$9.25", image: "/images/smoothies/passion.png", rating: 4.8 },
    ],
  },
  desserts: {
    id: "desserts",
    name: "Desserts",
    description: "Heavenly sweets and artisanal cakes.",
    image: "/images/desserts.png",
    items: [
      { id: "d1", name: "Chocolate Lava Cake", description: "Warm center with vanilla bean gelato.", price: "$10.99", image: "/images/desserts/lava.png", rating: 5.0 },
      { id: "d2", name: "New York Cheesecake", description: "Creamy cheesecake with a graham crust.", price: "$12.00", image: "/images/desserts/cheesecake.png", rating: 4.9 },
      { id: "d3", name: "Tiramisu Classic", description: "Espresso-soaked ladyfingers and mascarpone.", price: "$11.50", image: "/images/desserts/tiramisu.png", rating: 4.8 },
      { id: "d4", name: "Mango Red Velvet", description: "A unique fusion of mango and red velvet cake.", price: "$10.50", image: "/images/desserts/mango-red.png", rating: 4.7 },
      { id: "d5", name: "Warm Apple Crumble", description: "Spiced apples with a buttery oat topping.", price: "$9.99", image: "/images/desserts/apple.png", rating: 4.8 },
      { id: "d6", name: "Dark Chocolate Mousse", description: "70% cocoa mousse with sea salt caramel.", price: "$8.50", image: "/images/desserts/mousse.png", rating: 4.9 },
      { id: "d7", name: "Berry Panna Cotta", description: "Silky cream dessert with fresh berry coulis.", price: "$9.25", image: "/images/desserts/panna.png", rating: 4.7 },
      { id: "d8", name: "Pistachio Baklava", description: "Flaky pastry layers with crushed pistachios.", price: "$11.00", image: "/images/desserts/baklava.png", rating: 4.8 },
      { id: "d9", name: "Brownie Sundae", description: "Fudgy brownie with three scoops of ice cream.", price: "$13.00", image: "/images/desserts/sundae.png", rating: 4.9 },
      { id: "d10", name: "Crème Brûlée", description: "Classic vanilla custard with burnt sugar.", price: "$10.00", image: "/images/desserts/brulee.png", rating: 4.6 },
      { id: "d11", name: "Macaron Tower", description: "Assorted 6-piece French macaron set.", price: "$14.00", image: "/images/desserts/macarons.png", rating: 4.8 },
      { id: "d12", name: "Fruit Tart", description: "Seasonal fresh fruits on a pastry cream base.", price: "$9.50", image: "/images/desserts/tart.png", rating: 4.7 },
      { id: "d13", name: "Matcha Lava Cake", description: "Green tea cake with a melting matcha heart.", price: "$11.99", image: "/images/desserts/matcha.png", rating: 4.8 },
      { id: "d14", name: "Lemon Meringue Pie", description: "Zesty lemon curd with fluffy toasted topping.", price: "$8.99", image: "/images/desserts/lemon.png", rating: 4.5 },
      { id: "d15", name: "Gulab Jamun Cheesecake", description: "Fusion dessert with Indian sweet dumplings.", price: "$12.50", image: "/images/desserts/fusion.png", rating: 4.9 },
    ],
  },
  coffee: {
    id: "coffee",
    name: "Coffee",
    description: "Premium roasted beans and artisanal brews.",
    image: "/images/coffee.png",
    items: [
      { id: "c1", name: "Signature Latte", description: "Perfect espresso with silky steamed milk.", price: "$5.50", image: "/images/coffee/latte.png", rating: 4.9 },
      { id: "c2", name: "Double Espresso", description: "Intense and rich double shot of dark roast.", price: "$3.50", image: "/images/coffee/espresso.png", rating: 4.8 },
      { id: "c3", name: "Vanilla Bean Cappuccino", description: "Frothy milk with fresh vanilla bean infusion.", price: "$6.00", image: "/images/coffee/cappuccino.png", rating: 4.7 },
      { id: "c4", name: "Iced Caramel Macchiato", description: "Layered espresso, milk, and caramel drizzle.", price: "$6.50", image: "/images/coffee/caramel.png", rating: 4.9 },
      { id: "c5", name: "Flat White", description: "Velvety micro-foam over a double ristretto.", price: "$5.75", image: "/images/coffee/flatwhite.png", rating: 4.8 },
      { id: "c6", name: "Cold Brew Nitro", description: "Smooth, naturally sweet nitrogen-infused coffee.", price: "$7.00", image: "/images/coffee/nitro.png", rating: 4.9 },
      { id: "c7", name: "Mocha Frappé", description: "Blended coffee with Belgian chocolate chips.", price: "$7.50", image: "/images/coffee/mocha.png", rating: 4.8 },
      { id: "c8", name: "Vietnamese Egg Coffee", description: "Unique creamy egg yolk foam over robust coffee.", price: "$8.00", image: "/images/coffee/egg.png", rating: 5.0 },
      { id: "c9", name: "Spanish Latte", description: "Sweetened condensed milk with bold espresso.", price: "$6.25", image: "/images/coffee/spanish.png", rating: 4.7 },
      { id: "c10", name: "Hazelnut Cortado", description: "Balanced milk and espresso with hazelnut notes.", price: "$5.99", image: "/images/coffee/cortado.png", rating: 4.8 },
    ],
  },
};

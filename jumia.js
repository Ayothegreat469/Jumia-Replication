
class Product {
    constructor(image, name, rating, cost, originalcost, percentoff) {
        this.image = image;
        this.name = name;
        this.rating = rating;
        this.cost = cost;
        this.originalcost = originalcost;
        this.percentoff = percentoff;
    }

    create() {
        const container = document.createElement("div");
        container.className = "product-card";

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "product-image-wrapper";

        const image = document.createElement("img");
        image.src = this.image;
        image.alt = this.name;
        image.loading = "lazy";

        const discount = document.createElement("span");
        discount.className = "product-discount-badge";
        discount.textContent = this.percentoff;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(discount);

        const name = document.createElement("p");
        name.className = "product-name";
        name.textContent = this.name;

        const rating = document.createElement("div");
        rating.className = "product-rating";

        const star = document.createElement("i");
        star.className = "fa-solid fa-star";

        const ratingValue = document.createElement("span");
        ratingValue.textContent = this.rating;

        rating.appendChild(star);
        rating.appendChild(ratingValue);

        const cost = document.createElement("p");
        cost.className = "product-price";
        cost.textContent = this.cost;

        const priceContainer = document.createElement("div");

        const originalcost = document.createElement("p");
        originalcost.className = "product-old-price";
        originalcost.textContent = this.originalcost;

        priceContainer.appendChild(originalcost);

        const stockLabel = document.createElement("div");
        stockLabel.className = "product-stock-label";
        stockLabel.textContent = "Limited-time deal";

        const stockBar = document.createElement("div");
        stockBar.className = "product-stock-bar";

        const stockProgress = document.createElement("div");
        stockBar.appendChild(stockProgress);

        container.appendChild(imageWrapper);
        container.appendChild(name);
        container.appendChild(rating);
        container.appendChild(cost);
        container.appendChild(priceContainer);
        container.appendChild(stockLabel);
        container.appendChild(stockBar);

        return container;
    }
}



const productImages = {
    tv: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
    phone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
    camera: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
    chair: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    shirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    bag: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    speaker: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80",
    toy: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=400&q=80",
    fridge: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=400&q=80",
    perfume: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80",
    blender: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=400&q=80",
    game: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=80",
    power: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80"
};

function makeProduct(image, name, rating, cost, originalcost, percentoff) {
    return new Product(
        productImages[image],
        name,
        rating,
        cost,
        originalcost,
        percentoff
    );
}


const productSections = [
    {
        title: "Top Sellers",
        products: [
            ["tv", "Mi+ 32 Inch HD Digital LED TV", "4.0", "₦ 86,999", "₦ 108,596", "-20%"],
            ["headphones", "Wireless Bluetooth Headphones", "4.3", "₦ 18,500", "₦ 25,000", "-26%"],
            ["fridge", "Hisense Single Door Refrigerator", "4.2", "₦ 178,020", "₦ 235,437", "-24%"],
            ["watch", "Smart Watch Bluetooth", "4.1", "₦ 25,500", "₦ 35,000", "-27%"],
            ["phone", "Samsung Galaxy A15 128GB", "4.5", "₦ 235,000", "₦ 280,000", "-16%"],
            ["shoes", "Men's Running Sports Sneakers", "4.2", "₦ 15,999", "₦ 22,000", "-27%"],
            ["blender", "Binatone Electric Blender", "4.3", "₦ 24,500", "₦ 32,000", "-23%"],
            ["laptop", "HP 15 Intel Core Laptop", "4.4", "₦ 520,000", "₦ 600,000", "-13%"],
            ["speaker", "Portable Wireless Bluetooth Speaker", "4.3", "₦ 19,500", "₦ 27,000", "-28%"],
            ["bag", "Casual Everyday Backpack", "4.1", "₦ 12,500", "₦ 17,000", "-26%"],
            ["perfume", "Luxury Men's Fragrance", "4.5", "₦ 9,500", "₦ 14,000", "-32%"],
            ["power", "20000mAh Fast Charging Power Bank", "4.4", "₦ 22,000", "₦ 29,000", "-24%"]
        ]
    },
    {
        title: "Sponsored Products",
        products: [
            ["phone", "Android Smartphone", "4.2", "₦ 185,000", "₦ 220,000", "-16%"],
            ["speaker", "Portable Bluetooth Speaker", "4.4", "₦ 22,000", "₦ 30,000", "-27%"],
            ["watch", "Digital Smart Watch", "4.0", "₦ 19,999", "₦ 28,000", "-29%"],
            ["headphones", "Wireless Stereo Headphones", "4.3", "₦ 15,500", "₦ 22,000", "-30%"],
            ["laptop", "Lenovo IdeaPad Slim Laptop", "4.4", "₦ 490,000", "₦ 570,000", "-14%"],
            ["shoes", "Unisex Fashion Sneakers", "4.1", "₦ 17,000", "₦ 23,000", "-26%"],
            ["tv", "TCL 43 Inch Smart Android TV", "4.5", "₦ 285,000", "₦ 350,000", "-19%"],
            ["blender", "Portable Rechargeable Blender", "4.2", "₦ 14,500", "₦ 19,000", "-24%"],
            ["bag", "Women's Fashion Handbag", "4.3", "₦ 13,500", "₦ 18,000", "-25%"],
            ["camera", "HD Digital Security Camera", "4.4", "₦ 35,000", "₦ 46,000", "-24%"],
            ["power", "Universal Fast Charging Adapter", "4.2", "₦ 5,500", "₦ 8,000", "-31%"],
            ["perfume", "Unisex Long Lasting Perfume", "4.3", "₦ 11,000", "₦ 15,000", "-27%"]
        ]
    },
    {
        title: "Brand Festival deals",
        products: [
            ["phone", "Android Smartphone 128GB", "4.4", "₦ 245,000", "₦ 310,000", "-21%"],
            ["watch", "Bluetooth Smart Watch", "4.2", "₦ 29,999", "₦ 40,000", "-25%"],
            ["headphones", "Wireless Headphones", "4.1", "₦ 17,500", "₦ 25,000", "-30%"],
            ["speaker", "Portable Sound Speaker", "4.3", "₦ 21,000", "₦ 28,000", "-25%"],
            ["tv", "Samsung 43 Inch Crystal UHD TV", "4.5", "₦ 420,000", "₦ 510,000", "-18%"],
            ["laptop", "HP Pavilion 15 Laptop", "4.4", "₦ 650,000", "₦ 780,000", "-17%"],
            ["fridge", "Hisense Double Door Refrigerator", "4.5", "₦ 320,000", "₦ 400,000", "-20%"],
            ["shoes", "Nike Style Running Shoes", "4.3", "₦ 28,000", "₦ 36,000", "-22%"],
            ["blender", "Kenwood Multi-Purpose Blender", "4.4", "₦ 35,000", "₦ 45,000", "-22%"],
            ["bag", "Premium Leather Handbag", "4.2", "₦ 25,000", "₦ 33,000", "-24%"],
            ["power", "Oraimo Fast Charging Power Bank", "4.5", "₦ 24,000", "₦ 32,000", "-25%"],
            ["perfume", "Designer Inspired Fragrance", "4.3", "₦ 12,500", "₦ 17,000", "-26%"]
        ]
    },
    {
        title: "Top selling items",
        products: [
            ["tv", "Royal 32 Inch Smart Android TV", "3.9", "₦ 129,999", "₦ 245,556", "-47%"],
            ["shoes", "Casual Sports Sneakers", "4.2", "₦ 18,500", "₦ 25,000", "-26%"],
            ["perfume", "Long Lasting Fragrance", "4.4", "₦ 8,500", "₦ 12,000", "-29%"],
            ["phone", "Android Mobile Phone", "4.3", "₦ 165,000", "₦ 200,000", "-18%"],
            ["watch", "Men's Stainless Steel Wristwatch", "4.2", "₦ 14,000", "₦ 19,000", "-26%"],
            ["headphones", "Noise Reduction Bluetooth Headphones", "4.5", "₦ 22,000", "₦ 30,000", "-27%"],
            ["fridge", "Nexus Compact Refrigerator", "4.1", "₦ 145,000", "₦ 185,000", "-22%"],
            ["blender", "Electric Food Blender", "4.3", "₦ 19,500", "₦ 26,000", "-25%"],
            ["bag", "Travel Laptop Backpack", "4.4", "₦ 16,500", "₦ 22,000", "-25%"],
            ["speaker", "Rechargeable Home Speaker", "4.2", "₦ 28,000", "₦ 37,000", "-24%"],
            ["power", "Solar Rechargeable Power Bank", "4.3", "₦ 26,000", "₦ 35,000", "-26%"],
            ["toy", "Kids Educational Building Blocks", "4.5", "₦ 9,500", "₦ 13,000", "-27%"]
        ]
    },
    {
        title: "Samsung Official Store",
        products: [
            ["phone", "Samsung Galaxy Smartphone", "4.5", "₦ 450,000", "₦ 520,000", "-13%"],
            ["tv", "Samsung Smart LED Television", "4.4", "₦ 650,000", "₦ 800,000", "-19%"],
            ["watch", "Samsung Galaxy Smart Watch", "4.3", "₦ 185,000", "₦ 220,000", "-16%"],
            ["headphones", "Samsung Wireless Earbuds", "4.2", "₦ 85,000", "₦ 100,000", "-15%"],
            ["phone", "Samsung Galaxy A05 64GB", "4.3", "₦ 145,000", "₦ 175,000", "-17%"],
            ["phone", "Samsung Galaxy A25 5G", "4.5", "₦ 320,000", "₦ 380,000", "-16%"],
            ["phone", "Samsung Galaxy S24 Ultra", "4.7", "₦ 1,450,000", "₦ 1,650,000", "-12%"],
            ["tv", "Samsung 55 Inch Crystal UHD TV", "4.6", "₦ 780,000", "₦ 920,000", "-15%"],
            ["watch", "Samsung Galaxy Watch 6", "4.4", "₦ 210,000", "₦ 250,000", "-16%"],
            ["headphones", "Samsung Galaxy Buds FE", "4.3", "₦ 95,000", "₦ 115,000", "-17%"],
            ["phone", "Samsung Galaxy A35 256GB", "4.5", "₦ 390,000", "₦ 450,000", "-13%"],
            ["tv", "Samsung 32 Inch HD Smart TV", "4.2", "₦ 245,000", "₦ 290,000", "-16%"]
        ]
    },
    {
        title: "Deals On Air Conditioners",
        products: [
            ["power", "Royal 1HP Inverter Air Conditioner", "4.4", "₦ 294,644", "₦ 436,010", "-32%"],
            ["power", "Nexus 1HP Split Air Conditioner", "4.3", "₦ 255,650", "₦ 344,450", "-26%"],
            ["power", "Hisense 1HP Split Air Conditioner", "4.6", "₦ 289,990", "₦ 438,205", "-34%"],
            ["power", "Haier Thermocool 1HP Air Conditioner", "4.3", "₦ 336,090", "₦ 504,519", "-33%"],
            ["power", "LG 1.5HP Split Air Conditioner", "4.5", "₦ 425,000", "₦ 520,000", "-18%"],
            ["power", "Midea 1HP Energy Saving AC", "4.4", "₦ 310,000", "₦ 390,000", "-21%"],
            ["power", "Panasonic 1.5HP Air Conditioner", "4.5", "₦ 455,000", "₦ 560,000", "-19%"],
            ["power", "Hisense 1.5HP Inverter AC", "4.6", "₦ 385,000", "₦ 470,000", "-18%"],
            ["power", "LG Dual Inverter Split AC", "4.7", "₦ 590,000", "₦ 720,000", "-18%"],
            ["power", "Nexus 1.5HP Split AC", "4.2", "₦ 345,000", "₦ 420,000", "-18%"],
            ["power", "Royal 2HP Split Air Conditioner", "4.3", "₦ 510,000", "₦ 620,000", "-18%"],
            ["power", "Haier Thermocool 2HP Inverter AC", "4.5", "₦ 625,000", "₦ 750,000", "-17%"]
        ]
    },
    {
        title: "Everyday Essentials",
        products: [
            ["phone", "Android Smartphone 128GB", "4.2", "₦ 185,000", "₦ 230,000", "-20%"],
            ["headphones", "Wireless Bluetooth Headphones", "4.3", "₦ 18,500", "₦ 25,000", "-26%"],
            ["watch", "Digital Smart Watch", "4.1", "₦ 22,000", "₦ 30,000", "-27%"],
            ["speaker", "Portable Bluetooth Speaker", "4.4", "₦ 20,000", "₦ 28,000", "-29%"],
            ["blender", "Electric Kitchen Blender", "4.3", "₦ 19,000", "₦ 25,000", "-24%"],
            ["bag", "Casual Everyday Backpack", "4.2", "₦ 14,500", "₦ 19,000", "-24%"],
            ["shoes", "Unisex Casual Sneakers", "4.4", "₦ 18,000", "₦ 24,000", "-25%"],
            ["power", "Universal Phone Charger", "4.1", "₦ 4,500", "₦ 6,000", "-25%"],
            ["perfume", "Fresh Everyday Perfume", "4.3", "₦ 9,000", "₦ 12,000", "-25%"],
            ["toy", "Kids Learning Toy Set", "4.2", "₦ 11,000", "₦ 15,000", "-27%"],
            ["chair", "Modern Home Office Chair", "4.3", "₦ 55,000", "₦ 70,000", "-21%"],
            ["laptop", "Affordable Student Laptop", "4.2", "₦ 420,000", "₦ 490,000", "-14%"]
        ]
    },
    {
        title: "Smart TVs deals",
        products: [
            ["tv", "Royal 50 Inch QLED Google TV", "4.4", "₦ 339,999", "₦ 563,333", "-40%"],
            ["tv", "TCL 43 Inch QLED Google Smart TV", "4.4", "₦ 285,556", "₦ 371,222", "-23%"],
            ["tv", "Hikers 43 Inch Smart Frameless TV", "4.1", "₦ 187,666", "₦ 288,000", "-35%"],
            ["tv", "Hisense 55 Inch UHD 4K Smart TV", "4.5", "₦ 513,999", "₦ 750,000", "-32%"],
            ["tv", "Samsung 43 Inch Crystal UHD TV", "4.5", "₦ 420,000", "₦ 510,000", "-18%"],
            ["tv", "LG 55 Inch 4K UHD Smart TV", "4.6", "₦ 590,000", "₦ 720,000", "-18%"],
            ["tv", "TCL 32 Inch Android Smart TV", "4.2", "₦ 165,000", "₦ 210,000", "-21%"],
            ["tv", "Hisense 43 Inch Full HD Smart TV", "4.4", "₦ 290,000", "₦ 350,000", "-17%"],
            ["tv", "Samsung 50 Inch Crystal UHD TV", "4.5", "₦ 560,000", "₦ 670,000", "-16%"],
            ["tv", "LG 43 Inch Full HD Television", "4.3", "₦ 325,000", "₦ 390,000", "-17%"],
            ["tv", "TCL 55 Inch QLED Google TV", "4.6", "₦ 520,000", "₦ 650,000", "-20%"],
            ["tv", "Royal 43 Inch Android Smart TV", "4.1", "₦ 230,000", "₦ 295,000", "-22%"]
        ]
    },
    {
        title: "Kitchen And Dining deals",
        products: [
            ["blender", "Electric Kitchen Blender", "4.1", "₦ 18,500", "₦ 25,000", "-26%"],
            ["kitchen", "Kitchen Cooking Set", "4.3", "₦ 28,000", "₦ 38,000", "-26%"],
            ["blender", "Multi-Function Food Processor", "4.2", "₦ 35,000", "₦ 45,000", "-22%"],
            ["kitchen", "Kitchen Storage Accessories", "4.0", "₦ 9,500", "₦ 13,000", "-27%"],
            ["kitchen", "Stainless Steel Cooking Pot Set", "4.5", "₦ 32,000", "₦ 42,000", "-24%"],
            ["blender", "Binatone Table Blender", "4.3", "₦ 25,000", "₦ 33,000", "-24%"],
            ["kitchen", "Non-Stick Frying Pan", "4.2", "₦ 12,500", "₦ 17,000", "-26%"],
            ["kitchen", "Electric Rice Cooker", "4.4", "₦ 28,500", "₦ 36,000", "-21%"],
            ["kitchen", "Kitchen Knife Set", "4.1", "₦ 8,500", "₦ 12,000", "-29%"],
            ["kitchen", "Microwave Oven 20L", "4.4", "₦ 85,000", "₦ 110,000", "-23%"],
            ["blender", "Rechargeable Portable Blender", "4.2", "₦ 15,000", "₦ 20,000", "-25%"],
            ["kitchen", "Electric Sandwich Maker", "4.3", "₦ 22,000", "₦ 29,000", "-24%"]
        ]
    },
    {
        title: "Health and Relaxation deals",
        products: [
            ["watch", "Digital Fitness Watch", "4.1", "₦ 22,000", "₦ 30,000", "-27%"],
            ["speaker", "Portable Relaxation Speaker", "4.3", "₦ 18,000", "₦ 24,000", "-25%"],
            ["chair", "Comfortable Home Chair", "4.2", "₦ 45,000", "₦ 60,000", "-25%"],
            ["perfume", "Fresh Fragrance", "4.4", "₦ 8,500", "₦ 12,000", "-29%"],
            ["chair", "Ergonomic Office Chair", "4.5", "₦ 75,000", "₦ 95,000", "-21%"],
            ["watch", "Smart Fitness Tracker", "4.3", "₦ 18,500", "₦ 25,000", "-26%"],
            ["power", "Digital Body Weight Scale", "4.2", "₦ 12,000", "₦ 16,000", "-25%"],
            ["chair", "Adjustable Study Chair", "4.4", "₦ 48,000", "₦ 65,000", "-26%"],
            ["speaker", "Wireless Home Audio Speaker", "4.3", "₦ 24,000", "₦ 32,000", "-25%"],
            ["perfume", "Refreshing Body Mist", "4.1", "₦ 6,500", "₦ 9,000", "-28%"],
            ["watch", "Water Resistant Fitness Watch", "4.4", "₦ 26,000", "₦ 35,000", "-26%"],
            ["chair", "Modern Reclining Lounge Chair", "4.5", "₦ 95,000", "₦ 120,000", "-21%"]
        ]
    },
    {
        title: "Men's Clothing - Trouser & Chinos",
        products: [
            ["shirt", "Men's Casual Cotton T-Shirt", "4.2", "₦ 7,500", "₦ 10,000", "-25%"],
            ["shirt", "Men's Smart Casual Shirt", "4.1", "₦ 12,000", "₦ 16,000", "-25%"],
            ["shirt", "Men's Casual Chino Trousers", "4.3", "₦ 15,000", "₦ 20,000", "-25%"],
            ["shoes", "Men's Casual Sneakers", "4.2", "₦ 18,500", "₦ 25,000", "-26%"],
            ["shirt", "Men's Slim Fit Jeans", "4.4", "₦ 16,000", "₦ 22,000", "-27%"],
            ["shirt", "Men's Formal Office Trousers", "4.3", "₦ 18,000", "₦ 24,000", "-25%"],
            ["shirt", "Men's Short Sleeve Polo Shirt", "4.2", "₦ 9,500", "₦ 13,000", "-27%"],
            ["shoes", "Men's Leather Formal Shoes", "4.5", "₦ 28,000", "₦ 36,000", "-22%"],
            ["shirt", "Men's Cargo Pants", "4.3", "₦ 17,000", "₦ 23,000", "-26%"],
            ["shirt", "Men's Long Sleeve Shirt", "4.1", "₦ 13,500", "₦ 18,000", "-25%"],
            ["shoes", "Men's Running Trainers", "4.4", "₦ 22,000", "₦ 29,000", "-24%"],
            ["shirt", "Men's Two Piece Casual Outfit", "4.3", "₦ 25,000", "₦ 33,000", "-24%"]
        ]
    },
    {
        title: "Hikers Official Store",
        products: [
            ["tv", "Hikers 32 Inch Smart HD TV", "4.1", "₦ 102,246", "₦ 171,000", "-40%"],
            ["tv", "Hikers 43 Inch Smart Frameless TV", "4.1", "₦ 187,666", "₦ 288,000", "-35%"],
            ["tv", "Hikers 32 Inch Digital LED TV", "3.9", "₦ 95,000", "₦ 129,600", "-27%"],
            ["tv", "Hikers Smart LED Television", "4.0", "₦ 135,000", "₦ 180,000", "-25%"],
            ["tv", "Hikers 50 Inch Smart Android TV", "4.3", "₦ 285,000", "₦ 360,000", "-21%"],
            ["tv", "Hikers 40 Inch Full HD Television", "4.2", "₦ 165,000", "₦ 220,000", "-25%"],
            ["tv", "Hikers 55 Inch UHD Smart TV", "4.4", "₦ 350,000", "₦ 450,000", "-22%"],
            ["tv", "Hikers 24 Inch LED Television", "3.9", "₦ 75,000", "₦ 99,000", "-24%"],
            ["tv", "Hikers 43 Inch Google TV", "4.2", "₦ 210,000", "₦ 275,000", "-24%"],
            ["tv", "Hikers 32 Inch Frameless TV", "4.0", "₦ 110,000", "₦ 145,000", "-24%"],
            ["tv", "Hikers 50 Inch 4K UHD TV", "4.3", "₦ 295,000", "₦ 380,000", "-22%"],
            ["tv", "Hikers 65 Inch Smart Television", "4.5", "₦ 520,000", "₦ 650,000", "-20%"]
        ]
    },
    {
        title: "Beyond The Brand",
        products: [
            ["shoes", "Everyday Sports Sneakers", "4.3", "₦ 18,500", "₦ 25,000", "-26%"],
            ["watch", "Modern Digital Watch", "4.1", "₦ 22,000", "₦ 30,000", "-27%"],
            ["bag", "Everyday Travel Backpack", "4.4", "₦ 16,000", "₦ 22,000", "-27%"],
            ["headphones", "Wireless Headphones", "4.2", "₦ 15,500", "₦ 22,000", "-30%"],
            ["shirt", "Unisex Casual Cotton T-Shirt", "4.3", "₦ 8,000", "₦ 11,000", "-27%"],
            ["perfume", "Premium Unisex Fragrance", "4.4", "₦ 12,000", "₦ 16,000", "-25%"],
            ["bag", "Women's Stylish Shoulder Bag", "4.2", "₦ 19,000", "₦ 25,000", "-24%"],
            ["shoes", "Classic Everyday Canvas Shoes", "4.1", "₦ 14,000", "₦ 19,000", "-26%"],
            ["watch", "Classic Leather Strap Watch", "4.3", "₦ 17,000", "₦ 23,000", "-26%"],
            ["headphones", "Wireless Noise Cancelling Earbuds", "4.5", "₦ 21,000", "₦ 28,000", "-25%"],
            ["bag", "Large Travel Duffel Bag", "4.4", "₦ 23,000", "₦ 30,000", "-23%"],
            ["shoes", "Lightweight Walking Sneakers", "4.3", "₦ 20,000", "₦ 27,000", "-26%"]
        ]
    },
    {
        title: "Computing Deals",
        products: [
            ["laptop", "Laptop Computer", "4.3", "₦ 450,000", "₦ 550,000", "-18%"],
            ["camera", "Digital Camera", "4.2", "₦ 125,000", "₦ 160,000", "-22%"],
            ["laptop", "Everyday Laptop", "4.1", "₦ 380,000", "₦ 450,000", "-16%"],
            ["headphones", "Computer Headset", "4.2", "₦ 18,500", "₦ 25,000", "-26%"],
            ["laptop", "HP 250 G9 Core i5 Laptop", "4.5", "₦ 580,000", "₦ 680,000", "-15%"],
            ["laptop", "Lenovo ThinkPad Business Laptop", "4.4", "₦ 490,000", "₦ 570,000", "-14%"],
            ["camera", "1080P USB Webcam", "4.3", "₦ 22,000", "₦ 29,000", "-24%"],
            ["power", "Wireless Computer Mouse", "4.2", "₦ 7,500", "₦ 10,000", "-25%"],
            ["laptop", "Dell Latitude Core i7 Laptop", "4.5", "₦ 620,000", "₦ 750,000", "-17%"],
            ["headphones", "USB Gaming Headset", "4.4", "₦ 24,000", "₦ 32,000", "-25%"],
            ["power", "Mechanical Gaming Keyboard", "4.5", "₦ 35,000", "₦ 45,000", "-22%"],
            ["camera", "Portable Laptop Webcam", "4.1", "₦ 15,000", "₦ 20,000", "-25%"]
        ]
    },
    {
        title: "Mobile Accessories deals",
        products: [
            ["headphones", "Wireless Bluetooth Earbuds", "4.3", "₦ 12,500", "₦ 18,000", "-31%"],
            ["phone", "Phone Protective Case", "4.1", "₦ 3,500", "₦ 5,000", "-30%"],
            ["power", "Portable Power Bank", "4.2", "₦ 15,000", "₦ 20,000", "-25%"],
            ["speaker", "Portable Bluetooth Speaker", "4.4", "₦ 20,000", "₦ 28,000", "-29%"],
            ["power", "Fast Charging USB-C Adapter", "4.3", "₦ 6,500", "₦ 9,000", "-28%"],
            ["phone", "Tempered Glass Screen Protector", "4.2", "₦ 2,500", "₦ 4,000", "-38%"],
            ["power", "10000mAh Compact Power Bank", "4.4", "₦ 13,500", "₦ 18,000", "-25%"],
            ["headphones", "Wireless Gaming Earbuds", "4.3", "₦ 16,000", "₦ 22,000", "-27%"],
            ["phone", "Universal Phone Holder", "4.1", "₦ 4,500", "₦ 6,500", "-31%"],
            ["power", "3-in-1 Charging Cable", "4.2", "₦ 3,000", "₦ 4,500", "-33%"],
            ["speaker", "Mini Portable Bluetooth Speaker", "4.3", "₦ 14,000", "₦ 19,000", "-26%"],
            ["phone", "Adjustable Phone Tripod Stand", "4.4", "₦ 9,500", "₦ 13,000", "-27%"]
        ]
    },
    {
        title: "Kids Play Nest (Toys)",
        products: [
            ["toy", "Building Blocks Toy Set", "4.4", "₦ 12,000", "₦ 16,000", "-25%"],
            ["toy", "Kids Educational Toy", "4.2", "₦ 8,500", "₦ 12,000", "-29%"],
            ["toy", "Colourful Toy Building Set", "4.3", "₦ 15,000", "₦ 20,000", "-25%"],
            ["bag", "Kids School Backpack", "4.1", "₦ 9,500", "₦ 13,000", "-27%"],
            ["toy", "Remote Control Racing Car", "4.5", "₦ 18,000", "₦ 25,000", "-28%"],
            ["toy", "Kids Drawing and Painting Kit", "4.3", "₦ 7,500", "₦ 10,000", "-25%"],
            ["toy", "Educational Alphabet Learning Set", "4.4", "₦ 6,500", "₦ 9,000", "-28%"],
            ["toy", "Children's Toy Kitchen Set", "4.2", "₦ 22,000", "₦ 30,000", "-27%"],
            ["toy", "Kids Basketball Hoop Set", "4.3", "₦ 16,000", "₦ 22,000", "-27%"],
            ["toy", "Colourful Building Blocks 100pcs", "4.5", "₦ 14,000", "₦ 19,000", "-26%"],
            ["toy", "Plush Teddy Bear", "4.4", "₦ 8,000", "₦ 11,000", "-27%"],
            ["bag", "Kids Cartoon School Bag", "4.2", "₦ 11,000", "₦ 15,000", "-27%"]
        ]
    },
    {
        title: "Hot deals right now",
        products: [
            ["phone", "Android Smartphone", "4.3", "₦ 185,000", "₦ 230,000", "-20%"],
            ["tv", "32 Inch LED Television", "4.1", "₦ 95,000", "₦ 125,000", "-24%"],
            ["shoes", "Casual Sports Sneakers", "4.2", "₦ 18,500", "₦ 25,000", "-26%"],
            ["watch", "Smart Watch", "4.1", "₦ 22,000", "₦ 30,000", "-27%"],
            ["headphones", "Wireless Bluetooth Earbuds", "4.4", "₦ 12,500", "₦ 18,000", "-31%"],
            ["laptop", "Student Everyday Laptop", "4.3", "₦ 420,000", "₦ 500,000", "-16%"],
            ["blender", "Electric Kitchen Blender", "4.2", "₦ 18,000", "₦ 25,000", "-28%"],
            ["speaker", "Rechargeable Bluetooth Speaker", "4.4", "₦ 20,000", "₦ 28,000", "-29%"],
            ["bag", "Fashion Travel Backpack", "4.3", "₦ 14,000", "₦ 19,000", "-26%"],
            ["power", "Fast Charging Power Bank", "4.5", "₦ 22,000", "₦ 29,000", "-24%"],
            ["perfume", "Long Lasting Men's Perfume", "4.4", "₦ 9,000", "₦ 13,000", "-31%"],
            ["fridge", "Compact Single Door Refrigerator", "4.2", "₦ 155,000", "₦ 195,000", "-21%"]
        ]
    },
    {
        title: "Games & Consoles",
        products: [
            ["game", "Gaming Console", "4.5", "₦ 350,000", "₦ 420,000", "-17%"],
            ["game", "Wireless Game Controller", "4.3", "₦ 35,000", "₦ 45,000", "-22%"],
            ["headphones", "Gaming Headset", "4.4", "₦ 25,000", "₦ 35,000", "-29%"],
            ["game", "Gaming Accessories", "4.2", "₦ 18,000", "₦ 24,000", "-25%"],
            ["game", "PlayStation 5 Console", "4.8", "₦ 850,000", "₦ 950,000", "-11%"],
            ["game", "Xbox Wireless Controller", "4.6", "₦ 95,000", "₦ 115,000", "-17%"],
            ["game", "Gaming Mouse RGB", "4.4", "₦ 18,000", "₦ 24,000", "-25%"],
            ["game", "Mechanical Gaming Keyboard", "4.5", "₦ 35,000", "₦ 45,000", "-22%"],
            ["headphones", "Surround Sound Gaming Headset", "4.5", "₦ 32,000", "₦ 42,000", "-24%"],
            ["game", "PlayStation 5 Wireless Controller", "4.7", "₦ 105,000", "₦ 125,000", "-16%"],
            ["game", "Gaming Mouse Pad XL", "4.3", "₦ 8,500", "₦ 12,000", "-29%"],
            ["game", "USB RGB Gaming Microphone", "4.4", "₦ 28,000", "₦ 36,000", "-22%"]
        ]
    }
];


function addProducts(container, products) {
    if (!container) return;

    container.classList.add("product-list");

    products.forEach(function(data) {
        const product = makeProduct(
            data[0],
            data[1],
            data[2],
            data[3],
            data[4],
            data[5]
        );

        container.appendChild(product.create());
    });
}

function findProductSection(title) {
    const sections = document.querySelectorAll(".design-1, .design-2");

    for (const section of sections) {
        const heading = Array.from(section.children).find(function(element) {
            return element.tagName === "P";
        });

        if (title === "__untitled__") {
            if (!heading) return section;
        } else if (
            heading &&
            heading.textContent.trim().toLowerCase() === title.toLowerCase()
        ) {
            return section;
        }
    }

    return null;
}

productSections.forEach(function(sectionData) {
    const section = findProductSection(sectionData.title);

    if (!section) return;

    const container = Array.from(section.children).find(function(element) {
        return element.tagName === "DIV" &&
            !element.classList.contains("arrow");
    });

    if (container) {
        addProducts(container, sectionData.products);
    }
});

const flashSalesProducts = document.getElementById("flash-sales-products");

addProducts(flashSalesProducts, [
    ["watch", "Samsung Galaxy Smart Watch", "4.5", "₦ 529,355", "₦ 600,000", "-12%"],
    ["headphones", "Wireless Bluetooth Headphones", "4.3", "₦ 18,500", "₦ 25,000", "-26%"],
    ["phone", "Android Smartphone", "4.4", "₦ 185,000", "₦ 230,000", "-20%"],
    ["shoes", "Sports Sneakers", "4.2", "₦ 18,500", "₦ 25,000", "-26%"]
]);

import "./CategoryPage.css";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function CategoryPage() {
  const { categoryId } = useParams();
  const { addToCart } = useCart();

  // Define ALL possible categories from your different components
  const allCategories = {
    // From ProductBoxes
    electronics: {
      name: "Electronics",
      description: "Latest gadgets and devices",
    },
    valentine: {
      name: "Valentine Gifts",
      description: "Perfect gifts for your loved ones",
    },
    toys: { name: "Toys & Games", description: "Fun for all ages" },
    "real-estate": { name: "Real Estate", description: "Find your dream home" },
    "personal-care": {
      name: "Personal Care",
      description: "Beauty and grooming essentials",
    },
    pets: { name: "Pets", description: "Everything for your furry friends" },
    clothing: { name: "Clothing", description: "Fashion for everyone" },

    // From ProductGrid
    "home-decor": {
      name: "Home Decor",
      description: "Beautiful items for your home",
    },
    fashion: { name: "Fashion", description: "Latest fashion trends" },

    // From ProductSliders
    trending: {
      name: "Trending Products",
      description: "What everyone is buying right now",
    },
    recommended: {
      name: "Recommended For You",
      description: "Products you might like",
    },

    // From ProductPrices
    deals: {
      name: "Hot Deals",
      description: "Limited time offers and discounts",
    },
  };

  // Sample products for each category (in real app, this would come from API/database)
  const categoryProducts = {
    electronics: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        image: "/images/headphones.jpg",
        description: "High-quality wireless headphones",
      },
      {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        image: "/images/smartphone.jpg",
        description: "Latest smartphone with advanced camera",
      },
      {
        id: 3,
        name: "Bluetooth Speaker",
        price: 49.99,
        image: "/images/speaker.jpg",
        description: "Portable speaker with great sound",
      },
      {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        image: "/images/watch.jpg",
        description: "Track your fitness and notifications",
      },
    ],
    clothing: [
      {
        id: 5,
        name: "Classic T-Shirt",
        price: 24.99,
        image: "/images/tshirt.jpg",
        description: "Comfortable cotton t-shirt",
      },
      {
        id: 6,
        name: "Denim Jeans",
        price: 59.99,
        image: "/images/jeans.jpg",
        description: "Comfortable fit denim jeans",
      },
      {
        id: 7,
        name: "Winter Jacket",
        price: 129.99,
        image: "/images/jacket.jpg",
        description: "Warm winter jacket",
      },
      {
        id: 8,
        name: "Running Shoes",
        price: 89.99,
        image: "/images/shoes.jpg",
        description: "Comfortable running shoes",
      },
    ],
    toys: [
      {
        id: 9,
        name: "Building Blocks",
        price: 29.99,
        image: "/images/blocks.jpg",
        description: "Creative building set",
      },
      {
        id: 10,
        name: "Action Figure",
        price: 19.99,
        image: "/images/action-figure.jpg",
        description: "Collectible action figure",
      },
      {
        id: 11,
        name: "Board Game",
        price: 34.99,
        image: "/images/board-game.jpg",
        description: "Family board game",
      },
      {
        id: 12,
        name: "Remote Car",
        price: 49.99,
        image: "/images/remote-car.jpg",
        description: "RC car with remote control",
      },
    ],
    "home-decor": [
      {
        id: 13,
        name: "Wall Art",
        price: 39.99,
        image: "/images/wall-art.jpg",
        description: "Beautiful wall decoration",
      },
      {
        id: 14,
        name: "Table Lamp",
        price: 45.99,
        image: "/images/lamp.jpg",
        description: "Modern table lamp",
      },
      {
        id: 15,
        name: "Throw Pillow",
        price: 24.99,
        image: "/images/pillow.jpg",
        description: "Comfortable decorative pillow",
      },
      {
        id: 16,
        name: "Vase Set",
        price: 35.99,
        image: "/images/vase.jpg",
        description: "Elegant vase collection",
      },
    ],
    valentine: [
      {
        id: 17,
        name: "Romantic Gift Set",
        price: 49.99,
        image: "/images/gift-set.jpg",
        description: "Perfect Valentine's gift",
      },
      {
        id: 18,
        name: "Chocolate Box",
        price: 19.99,
        image: "/images/chocolate.jpg",
        description: "Delicious assorted chocolates",
      },
      {
        id: 19,
        name: "Flower Bouquet",
        price: 39.99,
        image: "/images/flowers.jpg",
        description: "Beautiful fresh flowers",
      },
      {
        id: 20,
        name: "Jewelry Box",
        price: 79.99,
        image: "/images/jewelry.jpg",
        description: "Elegant jewelry gift",
      },
    ],
    // Default products for any category that doesn't have specific products
    default: [
      {
        id: 21,
        name: "Premium Product",
        price: 99.99,
        image: "/images/product_img.jpg",
        description: "High-quality premium product",
      },
      {
        id: 22,
        name: "Special Edition",
        price: 149.99,
        image: "/images/ipad_img.jpg",
        description: "Limited special edition",
      },
      {
        id: 23,
        name: "Best Seller",
        price: 79.99,
        image: "/images/product1-9.jpg",
        description: "Customer favorite product",
      },
      {
        id: 24,
        name: "New Arrival",
        price: 59.99,
        image: "/images/product_img.jpg",
        description: "Just arrived in stock",
      },
    ],
  };

  // Get the current category or use default
  const category = allCategories[categoryId] || {
    name: categoryId
      ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
      : "Category",
    description: "Explore our amazing products",
  };

  // Get products for this category, or use default products
  const products = categoryProducts[categoryId] || categoryProducts.default;

  return (
    <div className="category-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> › </span>
          <span>{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="category-header">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <p className="product-count">{products.length} products available</p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/300/300?random=${product.id}`;
                  }}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Related Categories Section */}
        <div className="related-categories">
          <h3>Explore More Categories</h3>
          <div className="category-links">
            {Object.entries(allCategories).map(
              ([id, cat]) =>
                id !== categoryId && (
                  <Link
                    key={id}
                    to={`/category/${id}`}
                    className="category-link-tag"
                  >
                    {cat.name}
                  </Link>
                )
            )}
          </div>
        </div>

        {/* Back to Home */}
        <div className="back-home">
          <Link to="/" className="back-home-link">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;

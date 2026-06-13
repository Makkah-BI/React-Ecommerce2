import "./ProductBoxes.css";
import { useCart } from "../context/CartContext.js";
import { Link } from "react-router-dom";

function ProductBoxes() {
  const { addToCart } = useCart();

  // First row of products
  const firstRowProducts = [
    {
      id: 1,
      title: "Buy a Home",
      image: "/images/box1-1.jpg",
      price: 75.5,
      linkText: "See More",
      category: "real-estate",
    },
    {
      id: 2,
      title: "Valentine Gifts",
      image: "/images/box1-2.jpg",
      price: 15.66,
      linkText: "Shop More",
      category: "valentine",
    },
    {
      id: 3,
      title: "Toys under $25",
      image: "/images/box1-3.jpg",
      price: 17.56,
      linkText: "Shop More",
      category: "toys",
    },
    {
      id: 4,
      title: "Music Woofer",
      image: "/images/box1-4.jpg",
      price: 120.5,
      linkText: "Get your game on",
      category: "electronics",
    },
  ];

  // Second row of products
  const secondRowProducts = [
    {
      id: 5,
      title: "Showering Items",
      image: "/images/box2-1.jpg",
      price: 50.0,
      linkText: "See all deals",
      category: "personal-care",
    },
    {
      id: 6,
      title: "Samsung Ultra",
      image: "/images/box2-2.jpg",
      price: 200.5,
      linkText: "See all deals",
      category: "electronics",
    },
    {
      id: 7,
      title: "Pets",
      image: "/images/box2-3.jpg",
      price: 150.75,
      linkText: "See More",
      category: "pets",
    },
    {
      id: 8,
      title: "Girls' Fashion",
      image: "/images/box2-4.jpg",
      price: 100.65,
      linkText: "Discover More",
      category: "clothing",
    },
  ];

  // Third row of products (from your later section)
  const thirdRowProducts = [
    {
      id: 9,
      title: "Stationaries",
      image: "/images/box3-1.jpg",
      price: 32.5,
      linkText: "See all deals",
      category: "stationaries",
    },
    {
      id: 10,
      title: "Laptop Deals",
      image: "/images/box3-2.jpg",
      price: 250.0,
      linkText: "See all deals",
      category: "electronics",
    },
    {
      id: 11,
      title: "Office chairs",
      image: "/images/box3-3.jpg",
      price: 340.78,
      linkText: "See More",
      category: "furnitures",
    },
    {
      id: 12,
      title: "Gaming monitor",
      image: "/images/box3-4.jpg",
      price: 500.99,
      linkText: "Discover More",
      category: "electronics",
    },
  ];

  // Product Box Component
  const ProductBox = ({ product }) => (
    <div className="box-col">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <Link to={`/category/${product.category}`} className="category-link">
        {product.linkText}
      </Link>
    </div>
  );

  return (
    <div className="product-boxes-container">
      {/* First Row - with special header-box class */}
      <div className="box-row header-box">
        {firstRowProducts.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>

      {/* Second Row */}
      <div className="box-row">
        {secondRowProducts.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>

      {/* Third Row (from your later section) */}
      <div className="box-row">
        {thirdRowProducts.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductBoxes;

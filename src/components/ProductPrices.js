import "./ProductPrices.css";
import { useRef } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductPrices() {
  const productsScrollRef = useRef(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Yellow Jacket",
      image: "/images/yellow-jacket.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 2,
      name: "Graphic T-Shirt",
      image: "/images/graphic-tshirt.avif",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 3,
      name: "Green Sweater",
      image: "/images/green-front-sweater.avif",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 4,
      name: "Graphic T-Shirt",
      image: "/images/graphic-tshirt.avif",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 5,
      name: "Yellow Jacket",
      image: "/images/yellow-jacket.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 6,
      name: "Blank Shirt",
      image: "/images/blank-shirt.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 7,
      name: "Pink Sweater",
      image: "/images/pink-sweater.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 8,
      name: "Graphic T-Shirt",
      image: "/images/graphic-tshirt.avif",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 9,
      name: "Yellow Jacket",
      image: "/images/yellow-jacket.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 10,
      name: "Green Sweater",
      image: "/images/green-front-sweater.avif",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 11,
      name: "Blank Shirt",
      image: "/images/blank-shirt.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
    {
      id: 12,
      name: "Pink Sweater",
      image: "/images/pink-sweater.jpg",
      discount: "25% off",
      price: 34.5,
      originalPrice: 29.5,
      description: "This jacket is the new trend.",
      category: "clothing",
    },
  ];

  const handleWheel = (evt) => {
    evt.preventDefault();
    if (productsScrollRef.current) {
      productsScrollRef.current.scrollLeft += evt.deltaY;
    }
  };

  return (
    <div className="products-prices">
      <h2>Deals under $40</h2>
      <div className="products" ref={productsScrollRef} onWheel={handleWheel}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-offer">
              <p>
                {product.discount} <span>Deal</span>
              </p>
              <p className="product-price">
                ${product.price} List Price: ${product.originalPrice}
              </p>
              <Link
                to={`/category/${product.category}`}
                className="product-name-link"
              >
                <h3>{product.name}</h3>
              </Link>
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
    </div>
  );
}

export default ProductPrices;

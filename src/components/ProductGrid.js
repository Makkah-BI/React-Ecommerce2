import "./ProductGrid.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductGrid() {
  const { addToCart } = useCart();

  const gridSections = [
    {
      id: 1,
      title: "Wireless Tech",
      price: 27.55,
      linkText: "See all",
      category: "electronics",
      images: [
        "/images/product_img.jpg",
        "/images/ipad_img.jpg",
        "/images/product1-9.jpg",
        "/images/product_img.jpg",
      ],
    },
    {
      id: 2,
      title: "Toys for all ages",
      price: 37.65,
      linkText: "Discover more",
      category: "toys",
      images: [
        "/images/product_img.jpg",
        "/images/ipad_img.jpg",
        "/images/product1-9.jpg",
        "/images/product_img.jpg",
      ],
    },
    {
      id: 3,
      title: "Wireless Tech",
      price: 23.75,
      linkText: "See all",
      category: "electronics",
      images: [
        "/images/product_img.jpg",
        "/images/ipad_img.jpg",
        "/images/product1-9.jpg",
        "/images/product_img.jpg",
      ],
    },
    {
      id: 4,
      title: "Wireless Tech",
      price: 31.65,
      linkText: "Discover more",
      category: "electronics",
      images: [
        "/images/product_img.jpg",
        "/images/ipad_img.jpg",
        "/images/product1-9.jpg",
        "/images/product_img.jpg",
      ],
    },
  ];

  const GridContainer = ({ section }) => (
    <div className={`container-${section.id}`}>
      <h3>{section.title}</h3>
      <div className="grid-images">
        {section.images.map((image, index) => (
          <img key={index} src={image} alt={section.title} className="image" />
        ))}
      </div>
      <p className="product-price">${section.price}</p>
      <button
        className="add-to-cart-btn"
        onClick={() =>
          addToCart({
            id: section.id,
            name: section.title,
            price: section.price,
            image: section.images[0],
          })
        }
      >
        Add to Cart
      </button>
      <Link to={`/category/${section.category}`} className="category-link">
        {section.linkText}
      </Link>
    </div>
  );

  return (
    <div className="grid">
      {gridSections.map((section) => (
        <GridContainer key={section.id} section={section} />
      ))}
    </div>
  );
}

export default ProductGrid;

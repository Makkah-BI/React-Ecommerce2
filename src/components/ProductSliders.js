import "./ProductSliders.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

function ProductSliders() {
  const scrollContainersRef = useRef([]);

  // Product data for different sections
  const sliderSections = [
    {
      id: 1,
      title: "Popular products internationally",
      products: Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        image: `/images/product1-${i + 2}.jpg`,
        alt: `Product ${i + 1}`,
        category: "trending",
      })),
    },
    {
      id: 2,
      title: "Related to items you searched",
      products: Array.from({ length: 16 }, (_, i) => ({
        id: i + 14,
        image: `/images/product${i < 4 ? "2" : "1"}-${(i % 9) + 1}.jpg`,
        alt: `Product ${i + 14}`,
        category: "recommended",
      })),
    },
    {
      id: 3,
      title: "Home Decor Under $20",
      showSeeMore: true,
      products: Array.from({ length: 13 }, (_, i) => ({
        id: i + 30,
        image: `/images/product1-${i + 2}.jpg`,
        alt: `Home Decor ${i + 1}`,
        category: "decor",
      })),
    },
    {
      id: 4,
      title: "Top picks for Kenya",
      showSeeMore: true,
      products: Array.from({ length: 16 }, (_, i) => ({
        id: i + 50,
        image: `/images/product${i < 4 ? "2" : "1"}-${(i % 9) + 1}.jpg`,
        alt: `Kenya Pick ${i + 1}`,
        category: "suggested",
      })),
    },
  ];

  // Handle wheel scrolling for horizontal scroll
  const handleWheel = (evt, index) => {
    evt.preventDefault();
    const container = scrollContainersRef.current[index];
    if (container) {
      container.scrollLeft += evt.deltaY;
    }
  };

  return (
    <div className="product-sliders-container">
      {sliderSections.map((section, index) => (
        <div key={section.id} className="products-slider">
          <h3>
            {section.title}
            {section.showSeeMore && (
              <Link to={section.seeMoreLink} className="see-more-link">
                See more
              </Link>
            )}
          </h3>

          <div
            className="products"
            ref={(el) => (scrollContainersRef.current[index] = el)}
            onWheel={(e) => handleWheel(e, index)}
          >
            {section.products.map((product) => (
              <Link
                key={product.id}
                to={`/category/${product.category}`}
                className="product-item-link"
              >
                <div className="product-item">
                  <img
                    src={product.image}
                    alt={product.alt}
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/200/200?random=${product.id}`;
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSliders;

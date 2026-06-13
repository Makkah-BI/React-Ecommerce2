import "./SearchResults.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function SearchResults() {
  const { searchQuery, searchResults, addToCart } = useCart();

  return (
    <div className="search-results-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> › </span>
          <span>Search Results</span>
        </nav>

        {/* Search Header */}
        <div className="search-header">
          <h1>Search Results for "{searchQuery}"</h1>
          <p className="results-count">
            {searchResults.length}{" "}
            {searchResults.length === 1 ? "result" : "results"} found
          </p>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="search-results-grid">
            {searchResults.map((product) => (
              <div key={product.id} className="search-product-card">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/300/300?random=${product.id}`;
                    }}
                  />
                </div>
                <div className="product-details">
                  <Link
                    to={`/category/${product.category}`}
                    className="product-name"
                  >
                    <h3>{product.name}</h3>
                  </Link>
                  <p className="product-category">
                    Category: {product.category}
                  </p>
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
        ) : (
          <div className="no-results">
            <h2>No products found for "{searchQuery}"</h2>
            <p>Try checking your spelling or using more general terms</p>
            <Link to="/" className="back-to-home">
              Continue Shopping
            </Link>
          </div>
        )}

        {/* Suggested Searches */}
        <div className="suggested-searches">
          <h3>Try these popular categories:</h3>
          <div className="suggestion-tags">
            <Link to="/category/electronics" className="suggestion-tag">
              Electronics
            </Link>
            <Link to="/category/clothing" className="suggestion-tag">
              Clothing
            </Link>
            <Link to="/category/toys" className="suggestion-tag">
              Toys
            </Link>
            <Link to="/category/home-decor" className="suggestion-tag">
              Home Decor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

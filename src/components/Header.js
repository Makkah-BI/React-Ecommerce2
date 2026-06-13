import "./Header.css";
import { useCart } from "../context/CartContext.js";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../product.js";
import { useRef } from "react";

function Header() {
  const { getCartItemsCount, setSearchQuery, setSearchResults } = useCart();
  const navigate = useNavigate();
  const cartItemsCount = getCartItemsCount();
  const searchInputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = searchInputRef.current?.value.trim() || "";

    if (searchTerm) {
      // Filter products based on search term
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchQuery(searchTerm);
      setSearchResults(results);
      navigate("/search");
    }
  };

  return (
    <>
      {/* Top Header Row */}
      <div className="header-1">
        <div className="logo">
          <img src="/images/amazon_logo.png" alt="Amazon Logo" />
        </div>

        <div className="location">
          <p>
            Deliver to <span>Kenya</span>
          </p>
          <img src="/images/location_icon.png" alt="Location" />
        </div>

        {/* Search Section */}
        <form className="drop" onSubmit={handleSearch}>
          <select className="options">
            <option>All</option>
            <option>All Departments</option>
            <option>Arts & Crafts</option>
            <option>Automotive</option>
            <option>Baby</option>
            <option>Beauty & Personal Care</option>
            <option>Books</option>
            <option>Girl's Fashion</option>
            <option>Computers</option>
            <option>Deals</option>
            <option>Digital Music</option>
            <option>Boy's Fashion</option>
            <option>Electronics</option>
            <option>Home & Kitchen</option>
            <option>Industrial & Scientific</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="input"
            name="search"
          />
          <i className="bx bx-search"></i>
        </form>

        {/* Language Selector */}
        <select className="countries">
          <option>EN</option>
          <option>English--EN</option>
          <option>Arabic --AR</option>
          <option>Espanol--ES</option>
        </select>

        {/* Account Section */}
        <div className="sign-in">
          <p>
            Hello, sign in <br />
            <strong>Accounts & Lists</strong>
          </p>
        </div>

        {/* Returns Section */}
        <div className="return">
          <p>
            Return <br />
            <strong>& Orders</strong>
          </p>
        </div>

        {/* Cart Section */}
        <div className="boxicons">
          <Link to="/cart" className="cart-link">
            <i className="bx bx-cart">
              Cart {cartItemsCount > 0 && `(${cartItemsCount})`}
            </i>
          </Link>
        </div>
      </div>

      {/* Second Header Row - Navigation */}
      <div className="header-2">
        <div className="menu-icon">
          <i className="bx bx-menu">All</i>
        </div>
        <ul>
          <li>Today's List</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default Header;

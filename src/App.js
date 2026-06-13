import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.js";
import Header from "./components/Header.js";
import HeroSlider from "./components/HeroSlider.js";
import ProductBoxes from "./components/ProductBoxes.js";
import ProductSliders from "./components/ProductSliders.js";
import ProductGrid from "./components/ProductGrid.js";
import ReviewSection from "./components/ReviewSection.js";
import ProductPrices from "./components/ProductPrices.js";
import CartPage from "./components/CartPage/CartPage.js";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage.js";
import SearchResults from "./components/SearchResults/SearchResults.js";
import CategoryPage from "./components/CategoryPage/CategoryPage.js";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSlider />
                  <ProductBoxes />
                  <ProductSliders />
                  <ProductGrid />
                  <ReviewSection />
                  <ProductPrices />
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

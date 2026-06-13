import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

// Cart reducer to manage state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    case "COMPLETE_ORDER":
      return {
        ...state,
        items: [],
        lastOrder: {
          items: state.items,
          total: state.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ),
          orderId: Math.random().toString(36).substr(2, 9).toUpperCase(),
          date: new Date().toISOString(),
        },
      };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  lastOrder: null,
  searchQuery: "",
  searchResults: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const completeOrder = () => {
    dispatch({ type: "COMPLETE_ORDER" });
  };

  const getCartTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartItemsCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const setSearchQuery = (query) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const setSearchResults = (results) => {
    dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        lastOrder: state.lastOrder,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        completeOrder,
        getCartTotal,
        getCartItemsCount,
        setSearchQuery,
        setSearchResults,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

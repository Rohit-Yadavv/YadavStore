import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("yadavCart");
  if (newCartData === []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment anddecrement cart amount

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // To remove indivdual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //To clear Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("yadavCart", JSON.stringify(state.cart));
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

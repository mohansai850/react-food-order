import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext({ cartItems: [] });

function cartReducer(state, action) {
  const existingItemIndex = state.cartItems.findIndex(
    (cartItem) => cartItem.id === action.payload.id
  );
  switch (action.type) {
    case "ADD_MEAL_TO_CART":
      if (existingItemIndex > -1) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: state.cartItems[existingItemIndex].quantity + 1,
                }
              : cartItem
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_MEAL_FROM_CART":
      if (
        existingItemIndex > -1 &&
        state.cartItems[existingItemIndex].quantity > 1
      ) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: state.cartItems[existingItemIndex].quantity - 1,
                }
              : cartItem
          ),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export default function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addMeal = (meal) => {
    // console.log("in add meal action", meal);
    dispatch({ type: "ADD_MEAL_TO_CART", payload: meal });
  };

  const removeMeal = (id) => {
    dispatch({ type: "REMOVE_MEAL_FROM_CART", payload: id });
  };

  const contextValue = { items: cartState.cartItems, addMeal, removeMeal };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

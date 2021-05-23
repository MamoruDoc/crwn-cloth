import { addItemToCart } from "./cart.utils";

const initial_state = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "toggle_cart_hidden":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "add_item":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "clear_item_from_cart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;

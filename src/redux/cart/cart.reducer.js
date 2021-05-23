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
    default:
      return state;
  }
};
export default cartReducer;

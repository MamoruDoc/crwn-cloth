const initial_state = {
  hidden: true,
};
const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "toggle_cart_hidden":
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
export default cartReducer;

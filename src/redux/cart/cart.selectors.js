import { createSelector } from "reselect";

const selectCert = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCert],
  (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

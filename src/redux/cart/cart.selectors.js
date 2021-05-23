import { createSelector } from "reselect";

const selectCert = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCert],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCert],
  (cart) => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

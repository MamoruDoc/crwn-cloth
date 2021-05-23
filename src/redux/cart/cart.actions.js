export const toggleCartHidden = () => ({
  type: "toggle_cart_hidden",
});
export const addItem = (item) => ({
  type: "add_item",
  payload: item,
});

import SHOP_DATA from "../../pages/shoppage/shoppage.data";
const initial_state = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

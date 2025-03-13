import { createSelector } from "reselect";


// export const selectCartVisibility = (state) => state.cart.isCartOpen;
// export const selectCartItems = (state) => state.cart.cartItems;
const selectCartSlice = (state) => state.cart;

export const selectCartVisibility = createSelector([selectCartSlice], (cart) => cart.isCartOpen);
export const selectCartItems = createSelector([selectCartSlice], (cart) => cart.cartItems);

// generate new Cart Count. 
export const selectCartCount = createSelector([selectCartItems], (cartItems) => {
  const newCartCount = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
  return newCartCount
});

// generate new Cart Cost.
export const selectCartCost = createSelector([selectCartItems], (cartItems) => {
  const newCartTotalCost = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
  return newCartTotalCost
});

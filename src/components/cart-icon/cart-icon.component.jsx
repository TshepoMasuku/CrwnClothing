// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { CART_ACTION_TYPES } from "../../store/cart/cart.types";
import { selectCartCount, selectCartVisibility } from "../../store/cart/cart.selector";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";


const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCartVisibility);
  const cartCount = useSelector(selectCartCount);
  
  const toggleIsCartOpen = () => 
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen)
    );

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

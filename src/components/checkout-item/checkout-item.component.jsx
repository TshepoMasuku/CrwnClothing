// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from "../../store/cart/cart.selector";
import { 
  addItemToCart, 
  removeItemFromCart, 
  clearItemFromCart 
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Span,
  Quantity,
  Value,
  Arrow,
  RemoveButton,
} from "./checkout-item.styles";


function CheckoutItem({ cartItem }) {
  const { imageUrl, name, price, quantity } = cartItem;
  // const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddItem = (cartItem) => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItem = (cartItem) => dispatch(removeItemFromCart(cartItems, cartItem));
  const handleClearCartItem = (cartItem) => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} width="200" height="100" />
      </ImageContainer>
      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={() => handleRemoveItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => handleAddItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Span>{price}</Span>
      <RemoveButton onClick={() => handleClearCartItem(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;

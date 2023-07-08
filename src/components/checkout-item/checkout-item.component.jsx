import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleRemoveItem = (cartItem) => removeItemFromCart(cartItem);
  const handleAddItem = (cartItem) => addItemToCart(cartItem);
  const handleClearCartItem = (cartItem) => clearItemFromCart(cartItem);

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

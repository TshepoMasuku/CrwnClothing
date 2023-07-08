import React, { useContext } from "react";
import { CartContext } from "./../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock as="span">Product</HeaderBlock>
        <HeaderBlock as="span">Description</HeaderBlock>
        <HeaderBlock as="span">Quantity</HeaderBlock>
        <HeaderBlock as="span">Price</HeaderBlock>
        <HeaderBlock as="span">Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>TOTAL: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}

export default Checkout;

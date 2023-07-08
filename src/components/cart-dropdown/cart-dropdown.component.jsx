import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.components";
import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const proceed2CheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length === 0 ? (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      ) : (
        <CartItems>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </CartItems>
      )}
      <Button onClick={proceed2CheckoutHandler}>
        Go To Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;

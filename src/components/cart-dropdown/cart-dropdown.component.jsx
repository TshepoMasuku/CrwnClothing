// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";


const CartDropDown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItemz = useSelector(selectCartItems);
  const navigate = useNavigate();

  const proceed2CheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItemz.length === 0 ? (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      ) : (
        <CartItems>
          {cartItemz.map((cartItem) => {
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

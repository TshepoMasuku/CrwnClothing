import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} X ${price}.00
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from './../../store/cart/cart.selector';
import { addItemToCart } from './../../store/cart/cart.action';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer, 
  Img, Name, Price, Footer 
} from "./product-card.styles";


const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  // const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

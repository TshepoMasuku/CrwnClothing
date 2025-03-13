import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useContext } from "react";
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectCartVisibility } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "./../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { NavigationContainer, LogoContainer, NavLinks, NavUserName, NavLink } from "./navigation.styles";


const Navigation = () => {
  // const { isCartOpen } = useContext(CartContext);
  // const { currentUser } = useContext(UserContext);
  const isCartOpen = useSelector(selectCartVisibility);
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = async () => await signOutUser();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          {currentUser?.displayName && (
            <NavUserName>
              {`Hi ${currentUser.displayName.toUpperCase()}`}
            </NavUserName>
          )}
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

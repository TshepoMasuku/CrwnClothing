import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase.util";
import { setCurrentUser } from "./store/user/user.action";
import { fetchCategoriesAsync } from "./store/categories/categories.action";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Authentication from "./routes/authentication/authentication.component";


const NotFound = () => {
  return (
    <div>
      <div style={{ width: '15rem', margin: '15rem auto', textAlign: 'center' }}>
        <h3> PAGE NOT FOUND </h3>
        <h1> STATUS 404 </h1>
      </div>
    </div>
  );
};


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
      dispatch(fetchCategoriesAsync());
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="/shop/*" element={<Shop />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Shop from "./routes/shop/shop.component";

const NotFound = () => {
  return (
    <div>
      <h3> PAGE NOT FOUND </h3>
      <h1> STATUS 404 </h1>
    </div>
  );
};

const App = () => {
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

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
`;

const Container = styled.div`
  background: yellow;
  color: white;
`;
// import {
//   Home,
//   SingleProduct,
//   Cart,
//   // Checkout,
//   Error,
//   About,
//   Products,
//   // PrivateRoute,
// } from "./pages";

function App() {
  return (
    <div>
      <Container>
        <div>Hello</div>
      </Container>
      <Button>Click me</Button>
    </div>

    // <Router>
    //   <Navbar />
    //   <Sidebar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route exact path="/about">
    //       <About />
    //     </Route>
    //     <Route exact path="/cart">
    //       <Cart />
    //     </Route>
    //     <Route exact path="/products">
    //       <Products />
    //     </Route>
    //     <Route exact path="/products/:id" children={<SingleProduct />} />
    //     {/* <PrivateRoute exact path="/checkout">
    //       <Checkout />
    //     </PrivateRoute> */}
    //     <Route path="*">
    //       <Error />
    //     </Route>
    //   </Switch>
    //   <Footer />
    // </Router>
  );
}

export default App;

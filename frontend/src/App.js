import Header from "./Components/Layouts/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./Components/Home/Home";
import Footer from "./Components/Layouts/Footer/Footer";
import ProductDetails from "./Components/Product/ProductDetails";
import Search from "./Components/Product/Search";
import Products from "./Components/Product/Products";
import LoginSignup from "./Components/User/LoginSignUp";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserOptions from "./Components/Layouts/Header/UserOptions";
import store from "./store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { loadUser } from "./actions/userAction";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import Profile from "./Components/User/Profile";
import UpdateProfile from "./Components/User/UpdateProfile";
import UpdatePassword from "./Components/User/UpdatePassword";
import ForgotPassword from "./Components/User/ForgotPassword";
import ResetPassword from "./Components/User/ResetPassword";
import Cart from "./Components/Cart/Cart";
import Shipping from "./Components/Cart/Shipping";
import ConfirmOrder from "./Components/Cart/ConfirmOrder";
import Payment from "./Components/Cart/Payment";
import NotFound from "./Components/Layouts/Not Found/NotFound";
import OrderSuccess from "./Components/Cart/OrderSuccess";
import MyOrders from "./Components/Order/MyOrders";
import OrderDetails from "./Components/Order/OrderDetails";
import Dashboard from "./Components/admin/Dashboard";
import ProductList from "./Components/admin/ProductList";
import NewProduct from "./Components/admin/NewProduct";
import UpdateProduct from "./Components/admin/UpdateProduct";
import OrderList from "./Components/admin/OrderList";
import ProcessOrder from "./Components/admin/ProcessOrder";
import UsersList from "./Components/admin/UsersList";
import UpdateUser from "./Components/admin/UpdateUser";
import ProductReviews from "./Components/admin/ProductReviews";
import About from "./Components/Layouts/About/About";
import Contact from "./Components/Layouts/Contact/Contact";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
    
  }
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid sans"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
    
  }, []);

  // window.addEventListener("contextmenu", (e)=>e.preventDefault())

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
       
        <Route path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route path="/login" component={LoginSignup } />
        <Route path="/Search" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
          <ProtectedRoute  path="/account" component={Profile} />
          <ProtectedRoute  path="/me/update" component={UpdateProfile} />
          <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/Cart" component={Cart} />
        <ProtectedRoute exact path="/shipping" component={Shipping} />
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        <ProtectedRoute exact path="/orders" component={MyOrders} />
        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
       
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />
         <ProtectedRoute
          exact
          path="/admin/product/update/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />
        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
         <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

         
        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
       
        

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

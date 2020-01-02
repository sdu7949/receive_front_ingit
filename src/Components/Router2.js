import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header2 from "Components/Header2";
// import Login from "Routes/Login";
import User from "Routes/User";
import Purchasing from "Routes/Purchasing";
import Exchange from "Routes/Exchange";
import Detail from "Routes/Detail";
import Cancel from "Routes/Cancel";

export default () => (
  <Router>
    <>
      <Header2 />
      <Switch>
        {/* <Route path="/" exact component={Login} /> */}
        <Route path="/user" exact component={User} />
        <Route path="/user/:id" component={Detail} />
        <Route path="/purchasing" exact component={Purchasing} />
        <Route path="/purchasing/:id" component={Detail} />
        <Route path="/exchange" exact component={Exchange} />
        <Route path="/exchange/:id" component={Detail} />
        <Route path="/cancel" exact component={Cancel} />
        <Route path="/cancel/:id" component={Detail} />
        <Redirect from="*" to="/user" />
      </Switch>
    </>
  </Router>
);

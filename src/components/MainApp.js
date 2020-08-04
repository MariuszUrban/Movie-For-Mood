import React from "react";
import SignIn from "./SignIn/SignIn";
import About from "./About/About";
import Home from "../components/Home/Home";
import Navigation from '../components/Navigation/Navigation'
import { Provider } from "react-redux";
import { NavLink as Link, Route, Switch, HashRouter } from "react-router-dom";
import store from "../redux/store";


import "../sass/components/_mainApp.scss";


export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Provider store={store}>
          <HashRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route class path="/about" component={About} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

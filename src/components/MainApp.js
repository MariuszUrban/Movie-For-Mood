import React from "react";

import About from '../components/About';
import Home from '../components/Home'
import { Provider } from "react-redux";
import { NavLink as Link, Route, Switch, HashRouter } from "react-router-dom";
import store from "../redux/store";

import "../sass/utils/style.scss";
import '../sass/components/_mainApp.scss';

const active = {color:' #083c4d', fontWeight:'bold' }

export default class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <Provider store={store}>
          <HashRouter>
            <nav className='mainNav'> 
              <ul className="list">
                <li>
                  <Link exact to="/"
                  activeStyle={active}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/signIn"
                  activeStyle={active}>
                  SIGN IN</Link>
                </li>
                <li>
                  <Link to="/about"
                  activeStyle={active}
                  >ABOUT</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path ='/about' component={About} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

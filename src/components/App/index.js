import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import userData from "../../data/users_data.js";
import Home from "../Home";
import Create from "../Create";
import Edit from "../Edit";
import * as actions from "../../actions";

class App extends Component {
  componentDidMount() {
    userData.forEach(user => {
      this.props.dispatch(actions.addUser(user));
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route path="/" exact={true} component={Home} />
          <Route path="/edit/:userId" component={Edit} />
          <Route path="/create-user" component={Create} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(App);

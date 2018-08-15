import React, { Component } from "react";

import NumberContext from "../Context/NumberContext";

//This Component uses React Context and pulls from the NumberConn
class FavoriteNumber extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <div className="FavoriteNumber">

        <NumberContext.Consumer>{val => <h1>My Favorite Number: {val} 💪</h1>}</NumberContext.Consumer>

      </div>
    );
  }
}
export default FavoriteNumber;

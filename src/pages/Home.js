import React, { Component } from "react";
import HeaderButton from "../Components/HeaderButton";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderButton />
        </Header>
        <div>Hello React-Router</div>
      </>
    );
  }
}

export default Home;

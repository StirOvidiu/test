import React from "react";
import "./App.css";
import PhoneNav from "./components/PhoneNav/phone-nav";
import Nav from "./components/nav/nav";
import Nav2 from "./components/nav2/nav2";
import Logo from "./components/logo/logo";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Text from "./components/Text/text";
import Image from "./components/image-component/image-component";
import Button from "./components/button/button";
import Input from "./components/input/input";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <PhoneNav />
        <Nav />
        <Nav2 />
        <Logo />
        <Header />
        <Body />
        <Text />
        <Image />
        <Button />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;

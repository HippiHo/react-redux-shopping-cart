import React from "react";
import CheckoutForm from "./CheckoutForm.jsx";
import Header from "./Header.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CheckoutForm />
      </div>
    );
  }
}

export default App;

import React from 'react';
import CheckoutForm from './CheckoutForm.jsx';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerdata: {
          "title": "React shopping cart",
          "desc": "Below you find a react shopping cart which persists its data to the LocalStorage. Refactor it using Redux!"
        }
    }
  }
  render() {
    return (
      <div>
        <Header headerdata={this.state.headerdata}/>
        <CheckoutForm/>
      </div>
    );
  }
}
export default App;

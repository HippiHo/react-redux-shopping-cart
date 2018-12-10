const initialState = JSON.parse(localStorage.getItem("react-cart")) || {
  data: [
    {
      id: 0,
      name: "JavaScript: The Definitive Guide, 6th Edition",
      release: "September 2010",
      amount: 1,
      price: "2.99"
    },
    {
      id: 1,
      name: "Ruby on Rails: Up and Running",
      release: "March 2007",
      amount: 1,
      price: "30.99"
    },
    {
      id: 2,
      name: "MongoDB: The Definitive Guide",
      release: "Januar 2019",
      amount: 1,
      price: "99.99"
    },
    {
      id: 3,
      name: "Linux Cookbook",
      release: "Februar 2009",
      amount: 1,
      price: "24.99"
    }
  ],
  total: 0,
  // set initial form value
  form: {}
};

export default function(state = initialState, action) {
  console.log("Action called in the reducer", action);
  console.log("###", action);
  switch (action.type) {
    case "UPDATEITEM":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          amount: action.item.props.data.amount + 1
        }

        /*
        data: {
          //TODO find the item instead of create a new one
          data: { [action.id]: action.item.props.data.amount + 1 }
        }
        */
      };
      localStorage.setItem("react-cart", JSON.stringify(this.state));
    case "LIKE":
      return {
        ...state,
        data: [
          ...state.data,
          {
            [action.id]: action.value
          }
        ]
      };
      localStorage.setItem("react-cart", JSON.stringify(this.state));
    case "ONCHANGE":
      console.log(action);
      return {
        ...state,
        //TODO: Why is it overwriting?
        form: { [action.id]: action.value }
      };

    default:
      return state;
  }
}

/*
onChange = (field, value) => {
  // local copy of state
  let data = { ...this.state.form };
  // create form object with id of input
  data[field] = value;
  // sync to state and to LC
  this.setState({ form: data });
  localStorage.setItem("react-cart", JSON.stringify(this.state));
};
*/

/*
updateItem = (item, index) => {
  var data = this.state.data;

  if (index === "like") {
    data[item.props.data.id].liked = !data[item.props.data.id].liked;
  } else if (index) data[item.props.data.id].amount++;
  else if (data[item.props.data.id].amount > 0)
    data[item.props.data.id].amount--;

  this.state.total = data
    .map((item, index, array) => item.price * item.amount)
    .reduce((a, b) => a + b, 0);
  this.setState(this.state);
  localStorage.setItem("react-cart", JSON.stringify(this.state));
};
*/

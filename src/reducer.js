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
  form: {}
};

export default (state = initialState, { type, input, whatToDo, item }) => {
  switch (type) {
    case "GETVALUES":
      const value = input.type === "checkbox" ? input.checked : input.value;
      console.log("GETVALUES", input.id, value);
      const form = { ...state.form, [input.id]: value };
      localStorage.setItem("react-cart", JSON.stringify({ ...state, form }));
      return { ...state, form };

    case "UPDATE":
      console.log("UPDATE", whatToDo);
      const data = [...state.data];

      if (whatToDo === "like") {
        data[item.id].liked = !data[item.id].liked;
      } else if (whatToDo) {
        data[item.id].amount++;
      } else if (data[item.id].amount > 0) {
        data[item.id].amount--;
      }
      data[item.id] = item;

      const total = state.data
        .map(item => item.price * item.amount)
        .reduce((a, b) => a + b, 0);
      localStorage.setItem(
        "react-cart",
        JSON.stringify({ ...state, total, data })
      );
      return { ...state, total, data };

    case "DELETE":
      console.log("Good Bye localStorage");
      localStorage.removeItem("react-cart");
      return;

    default:
      return state;
  }
};

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
updateItem = (item, whatToDo) => {
  var data = this.state.data;

  if (whatToDo === "like") {
    data[item.props.data.id].liked = !data[item.props.data.id].liked;
  } else if (whatToDo) data[item.props.data.id].amount++;
  else if (data[item.props.data.id].amount > 0)
    data[item.props.data.id].amount--;

  this.state.total = data
    .map((item, whatToDo, array) => item.price * item.amount)
    .reduce((a, b) => a + b, 0);
  this.setState(this.state);
  localStorage.setItem("react-cart", JSON.stringify(this.state));
};
*/

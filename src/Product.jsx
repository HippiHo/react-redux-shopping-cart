import React from "react";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("###", this);
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{this.props.data.name}</h6>
          <small className="text-muted">
            Release: {this.props.data.release}
          </small>
        </div>
        <div className="d-flex flex-column">
          <button
            className={
              "btn btn-sm " +
              (this.props.data.liked ? "btn-danger" : "btn-outline-danger")
            }
            onClick={e => this.props.updateItem(this, "like")}
          >
            like
          </button>
          <span className="text-muted d-flex justify-content-center align-items-baseline">
            <button
              className="btn btn-sm btn-light"
              onClick={e => this.props.updateItem(this, false)}
            >
              -
            </button>
            <button
              className="btn btn-sm btn-light"
              onClick={e => this.props.updateItem(this, true)}
            >
              +
            </button>
          </span>
          <span
            className={
              "badge " + (this.props.data.amount > 0 ? "badge-primary" : "")
            }
          >
            {this.props.data.amount}
          </span>
          <span className="text-right">{this.props.data.price}$</span>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateItem: (item, whatToDoWithIt) => {
    console.log("dispatch", item, whatToDoWithIt);
    dispatch({
      type: "UPDATEITEM",
      index: whatToDoWithIt,
      id: item.props.data.id,
      item: item
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Product);

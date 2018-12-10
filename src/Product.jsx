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
          <h6 className="my-0">{this.props.item.name}</h6>
          <small className="text-muted">
            Release: {this.props.item.release}
          </small>
        </div>
        <div className="d-flex flex-column">
          <button
            className={
              "btn btn-sm " +
              (this.props.item.liked ? "btn-danger" : "btn-outline-danger")
            }
            onClick={e => this.props.updateItem(this.props.item, "like")}
          >
            like
          </button>
          <span className="text-muted d-flex justify-content-center align-items-baseline">
            <button
              className="btn btn-sm btn-light"
              onClick={e => this.props.updateItem(this.props.item, false)}
            >
              -
            </button>
            <button
              className="btn btn-sm btn-light"
              onClick={e => this.props.updateItem(this.props.item, true)}
            >
              +
            </button>
          </span>
          <span
            className={
              "badge " + (this.props.item.amount > 0 ? "badge-primary" : "")
            }
          >
            {this.props.item.amount}
          </span>
          <span className="text-right">{this.props.item.price}$</span>
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateItem: (item, index) =>
    dispatch({ type: "UPDATE", item: item, index: index })
});

export default connect(
  state => ({ data: state.data }),
  mapDispatchToProps
)(Product);

import React, { Component } from "react";
import Product from "./Product.jsx";
import Form from "./Form.jsx";
import { connect } from "react-redux";

class CheckoutForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {this.props.data.map((item, i) => (
              <Product key={i} item={item} />
            ))}

            <li className="list-group-item d-flex justify-content-between lh-condensed">
              Total:
              <span className="font-weight-bold">
                {this.props.total.toFixed(2)} ${" "}
              </span>
            </li>
          </ul>

          <form
            className="card p-2"
            data={this.props.form.coupon}
            onChange={this.props.onChange}
            id="form-coupon"
          >
            <div className="input-group">
              <input
                id="coupon"
                defaultValue={this.props.form.coupon}
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Form needs data on load and the change handler */}
        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
  total: state.total,
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch({ type: "GETVALUES", input: e.target })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutForm);

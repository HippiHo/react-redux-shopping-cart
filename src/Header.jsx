import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className="py-5 text-center">
        <h2>{this.props.headerdata.title}</h2>
        <p className="lead">{this.props.headerdata.desc}</p>
        <form action="" onSubmit={this.props.deleteCache}>
          <button className="btn btn-danger">delete cache</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  deleteCache: () => dispatch({ type: "DELETE" })
});
export default connect(
  state => ({ headerdata: state.headerdata }),
  mapDispatchToProps
)(Header);

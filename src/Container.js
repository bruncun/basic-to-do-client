import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Container extends Component {
  constructor(props) {
    super(props);
    this.props.history.listen(this.props.clearMessage);
  }

  render() {
    return (
      <div className="container">
        {this.props.message && (
          <div className="alert alert-danger">
            <span>{this.props.message}</span>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Container);

import React, { PureComponent, Component } from "react";

class MyPureComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { shouldChange: this.props.shouldChange }

    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({shouldChange: true})
  }

  render() {
      console.log("render() call");
      return(<div>
          <h1>{this.props.shouldChange}</h1>
          <button onClick={this.changeState}>Confirm</button>
      </div>)
  }
}

export default MyPureComponent;
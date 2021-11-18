import React from "react";
import { Component } from "react";

class DummyComponent extends Component {
  constructor(props) {
    console.log("constructor() call")
    super(props);
    this.state = { isWorking: false};
  }

  render() {
    return <> {console.log("render() call")}</>;
  }

  static getDerivedStateFromProps(props, state) { 
    console.log("getDerivedStateFromProps() call");
    return {
       isWorking: !props.isWorking
    }
  } 

  componentDidMount() {
    console.log("componentDidMount() call");
    return true;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate() call");
    return true;
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate() call");
    return true || null 
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() call");
    return true
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() call");
    return true;
  }

}

export default DummyComponent;

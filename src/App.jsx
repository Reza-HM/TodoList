/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    console.log("App.jsx => Constructor");

    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("App.jsx => getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("App.jsx => shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    console.log("App.jsx => componentDidMount");
  }

  render() {
    console.log("App.jsx => Render");

    return (
      <div>
        <TodoList></TodoList>
      </div>
    );
  }
}

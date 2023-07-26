/* eslint-disable no-unused-vars */
import React, { PureComponent } from "react";

export default class Todo extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Todo.jsx => Constructor");

    this.state = {
      todoID: null,
      todoCompleted: null,
      todoTitle: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Todo.jsx => getDerivedStateFromProps", props, state);

    return {
      todoID: props.id,
      todoCompleted: props.completed,
      todoTitle: props.title,
    };
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log("Todo.jsx => getSnapshotBeforeUpdate", props, state);
    console.log("Todo.jsx => getSnapshotBeforeUpdate");
    return 20
  }

  componentDidUpdate(props, state, data) {
    console.log("Todo.jsx => componentDidUpdate", data);
  }

  componentWillUnmount() {
    console.log("Todo.jsx => componentWillUnmount");
  }

  componentDidMount() {
    console.log("todo.jsx => componentDidMount");
  }

  removeHandler(id) {
    this.props.onRemove(id);
  }

  editHandler(id) {
    this.props.onEdit(id);
  }

  render() {
    console.log("Todo.jsx => Render");
    let { id, title, completed } = this.props;
    return (
      // 'completed' class for completed todos
      <div
        className={`todo ${this.state.todoCompleted ? "completed" : ""}`}
        style={{ display: "flex" }}
      >
        <li className="todo-item">{this.state.todoTitle}</li>

        <button
          className="check-btn"
          onClick={this.editHandler.bind(this, this.state.todoID)}
        >
          <i className="fas fa-check" aria-hidden="true"></i>
        </button>

        <button
          className="trash-btn"
          onClick={this.removeHandler.bind(this, this.state.todoID)}
        >
          <i className="fas fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

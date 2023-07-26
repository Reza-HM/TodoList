/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    console.log("TodoList.jsx => Constructor");

    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);

  }

  static getDerivedStateFromProps() {
    console.log("TodoList.jsx => getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("TodoList.jsx => shouldComponentUpdate");
    return true
  }

  componentDidUpdate() {
    console.log("TodoList.jsx => componentDidUpdate");
  }

  componentDidMount() {
    console.log("TodoList => componentDidMount");
  }

  inputHandler(event) {
    this.setState({
      todoTitle: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();

    let newTodo = {
      id: this.state.todos.length + 1,
      title: this.state.todoTitle,
      completed: false,
    };

    if (newTodo.title) {
      this.setState((prevState) => {
        return {
          todos: [...prevState.todos, newTodo],
        };
      });

      this.setState({
        todoTitle: "",
      });
    }
  }

  removeTodo(todoID) {
    console.log(todoID);

    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== todoID;
    });

    this.setState({
      todos: newTodos,
    });
  }

  editTodo(todoID) {
    let newTodos = [...this.state.todos];

    newTodos.forEach((todo) => {
      if (todo.id === todoID) {
        todo.completed = !todo.completed;
      }
    });

    this.setState({
      todos: newTodos,
    });
  }

  filteringHandler(event) {
    this.setState({
      status: event.target.value,
    });
  }

  render() {
    console.log("TodoList.jsx => Render");

    return (
      <>
        <Header />
        <form onSubmit={(event) => this.addTodo(event)}>
          <input
            type="text"
            className="todo-input"
            value={this.state.todoTitle}
            onChange={(event) => this.inputHandler(event)}
            maxLength="40"
          />
          <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              name="todos"
              className="filter-todo"
              onChange={(event) => this.filteringHandler(event)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.status === "completed" &&
              this.state.todos
                .filter((todo) => todo.completed)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo}
                    onEdit={this.editTodo}
                  />
                ))}
            {this.state.status === "uncompleted" &&
              this.state.todos
                .filter((todo) => !todo.completed)
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onRemove={this.removeTodo}
                    onEdit={this.editTodo}
                  />
                ))}
            {this.state.status === "all" &&
              this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onRemove={this.removeTodo}
                  onEdit={this.editTodo}
                />
              ))}
          </ul>
        </div>
      </>
    );
  }
}

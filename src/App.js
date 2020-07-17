import React, { Component } from 'react';
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './style.css';

class App extends Component {

  constructor() {
    super()
    console.log(todosData)
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
        this.setState(prevState => {
      
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <React.StrictMode thirdParty={false}>
      <div>
        {todoItems}
      </div>
      </React.StrictMode>
    )
  }
}

export default App;

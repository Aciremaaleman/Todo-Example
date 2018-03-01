import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBox from './components/TodoBox';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoItems:[]
    }

    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onSubmit(e){
    let todoListValue = this.refs.todobox.getInputValue();
    let newTodoItemvalue = this.state.todoItems.concat(todoListValue);
    this.setState({todoItems:newTodoItemvalue});
    console.log(todoListValue)

  }

  render() {
    return (
      <div className="App">
        <TodoBox onSubmit={this.onSubmit} ref="todobox" />
        <TodoList items={this.state.todoItems}/>
      </div>
    );
  }
}

export default App;

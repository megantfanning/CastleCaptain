import React, { Component } from 'react';

  const TodoForm = ({addTodo}) => {
    // Input Tracker
    let input;
    // Return JSX
    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          addTodo(input.value);
          input.value = '';
        }}>
        <input className="form-control col-md-12" ref={node => {
          input = node;
        }} />
        <br />
      </form>
    );
  };
  
  const Todo = ({todo, remove}) => {
    // Each Todo
    return (<li className="list-group-item">{todo.text}</li>);
  }
  
  const TodoList = ({todos, remove}) => {
    // Map through the todos
    const todoNode = todos.map((todo) => {
      return (<Todo todo={todo} key={todo.id} remove={remove}/>)
    });
    return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
  }
  
  // Contaner Component
  class CaptainsLog extends React.Component{
    constructor(props){
      // Pass props to parent class
      super(props);
      // Set initial state
      this.state = {
        data: []
      }
    }
    // Add todo handler
    addTodo(val){
      // Assemble data
      const todo = {text: val}
      // Update data
      this.state.data.push(todo);
      this.setState({data: this.state.data});
    }   
    render(){
      // Render JSX
      return (
        <div>
          <TodoForm addTodo={this.addTodo.bind(this)}/>
          <TodoList todos={this.state.data} />
        </div>
      );
    }
  }

// class CaptainsLog extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             log: [ "Landed in Parnas to take on crew","Began Voyage, fair eastward winds"]
//         }
//     }

//     // on button press take button label and create a entry to the log
//     logEntry(props){
//         var action = "action: "
//         var entry = action.concat({props})
//         this.state.log.push(entry)
//     }

//     render(){
//         var logItems = this.state.log.map((log) => <li>{log}</li>);
//         return(
//             <div>
//                 <ul>{logItems}</ul> <br/>
//             </div>
//         )
//     }
// }

export {CaptainsLog};
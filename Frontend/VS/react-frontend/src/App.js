
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoItem from './Components/TodoItem.component';
import TodoForm from './Components/TodoForm.component';
class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <TodoForm/>
          <Routes>
            <Route path="/" element={<TodoItem/>}/>
          </Routes>
          </div>
      </Router>
    )
  }
}




export default App;

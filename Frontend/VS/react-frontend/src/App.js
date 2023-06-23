
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoItem from './Components/TodoItem.component';

class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<TodoItem/>}/>
          </Routes>
          </div>
      </Router>
    )
  }
}




export default App;

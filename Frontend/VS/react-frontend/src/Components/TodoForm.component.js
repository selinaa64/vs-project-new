import React, {useState} from "react"

function TodoForm(){
    const [input, setInput] = useState("")
    const handleChange= e=>{
        setInput(e.target.value);
    }
    const handleSubmit = e=>{
     //   e.preventDefault();
      //  props.onSubmit({
      //      id: Math.floor(Math.random()*1000), 
      //      text: input
      //  })
    }
    
    return (
        <form className="todo-form">

            <input type="text" placeholder= "Add a todo item" value={input} name="text" className="todo-input"
            onChange={handleChange}>

            </input>
            <button className="todo-button">Add TodoItem</button>
        </form>
    )
}

export default TodoForm
import React, {Component} from "react"; 
import ServiceTodoItem from "../service/ServiceTodoItem.service"

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[], 

        }
    }
    componentDidMount(){
        console.log("hi")
        ServiceTodoItem.getTodos().then((response)=>{
            this.setState({todos:response});
        })
        .catch((e) =>{
            console.log(e)
        });
    }
 
    render(){
        const { todos} = this.state; 
        return (
        <div>
            <h1>HI NEU</h1>
                <div>{todos.map((todo)=>{
                    <h2>{todo.title}</h2>
                })}
                </div>
        </div>
        )
    }

}

export default TodoItem;
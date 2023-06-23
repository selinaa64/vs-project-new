import React, {Component} from "react"; 
import ServiceTodoItem from "../service/ServiceTodoItem.service"
import FormGroup from '@mui/material/FormGroup';    


class TodoItem extends Component{
constructor(props){
        super(props);
        this.state={
            todos:[], 
            todo: "",
            id: "",
            priority: "",
            description: "",
        }
        this.delete=this.delete.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
    componentDidMount() {
        ServiceTodoItem.getTodos()
          .then((response) => {
            if (response.length > 0) {
              this.setState({ todos: response });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    
      handleChange(event){
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        console.log(name)
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
      event.preventDefault();
      const { todo, id, priority, description } = this.state;
     
     console.log(event)
      ServiceTodoItem.createTodo({
        todo, id, priority, description 
      })
      .then((response) => {
        // Todo erfolgreich erstellt
        console.log("Todo erstellt:", response);
        // Hier können Sie weitere Aktionen ausführen, z. B. die Anzeige aktualisieren
        this.setState({
          todo: "",
          id: "",
          priority: "",
          description: "",
        });
            ServiceTodoItem.getTodos()
            .then((response) => {
              if (response.length > 0) {
                this.setState({ todos: response });
              }
            })          })
          .catch((error) => {
            console.error("Fehler beim Erstellen des Todos:", error);
            // Hier können Sie eine Fehlerbehandlung implementieren
          });
      }
  
      delete(id) {
        ServiceTodoItem.deleteTodo(id)
          .then(() => {
            this.setState((prevState) => ({
              todos: prevState.todos.filter((todo) => todo.id !== id),
            }));
          })
          .catch((error) => {
            console.error("Fehler beim Löschen des Todos:", error);
          });
      }


    
    render(){
        const { todos, todo, id, priority, description} = this.state; 
        return (
        <div>
            <h1>TodoItems</h1>
            <ul>
            {todos.map((todo) => (
            <li className="todo-container" key={todo.id}>
              <p>
                {todo.todo} 
              </p>
              id: {todo.id} | Prio: {todo.priority} | Beschreibung: {todo.description}
              <button
                className="deleteButton"
                onClick={() => this.delete(todo.id)}
              >
                Löschen
              </button>
              </li> 
            
            ))}
            </ul>   
            <form onSubmit={this.handleSubmit}>    
             <label>Name: </label> 
             <input
              type="text"
              id="todo"
              name="todo"
              value={todo}
              onChange={this.handleChange}
            />
             <label>id: </label> 
             <input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={this.handleChange}
            />             
             <label>Prio: </label> 
             <input
              type="text"
              id="priority"
              name="priority"
              value={priority}
              onChange={this.handleChange}
            />
             <label>Beschreibung: </label> 
             <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
             <input type="submit" value="Submit" />
            </form>

        </div>
        )
    }

}

export default TodoItem;
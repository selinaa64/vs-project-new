import React, {Component} from "react"; 
import ServiceTodoItem from "../service/ServiceTodoItem.service"


class TodoItem extends Component{
constructor(props){
        super(props);
        this.state={
            todos:[], 
            id: "",
            name: "",
            description: "",
        }
        this.delete=this.delete.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
      }
      componentDidMount() {
        ServiceTodoItem.getTodos()
          .then((response) => {
            if (Array.isArray(response) && response.length > 0) {
              this.setState({ todos: response });
            }
          })
          .catch((error) => {
            console.error("Error retrieving todos:", error);
          });
      }
      getTodos(){
        ServiceTodoItem.getTodos()
        .then((response) => {
          if (Array.isArray(response) && response.length > 0) {
            this.setState({ todos: response });
          }
        })
        .catch((error) => {
          console.error("Error retrieving todos:", error);
        });
      }
      handleChange(event){
        event.preventDefault()
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
      event.preventDefault();
      const { id, name, description } = this.state;
      ServiceTodoItem.createTodo({
        id: id,
        name: name,
        description: description      })
      .then((response) => {
        // Todo erfolgreich erstellt
        console.log("Todo erstellt:", response);
        // Hier können Sie weitere Aktionen ausführen, z. B. die Anzeige aktualisieren
        this.setState({
          id: "",
          name: "",
          description: "",
        });
                    })
          .catch((error) => {
            console.error("Fehler beim Erstellen des Todos:", error);
            // Hier können Sie eine Fehlerbehandlung implementieren
          });
          this.getTodos();
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
        const { todos, id, name, description} = this.state; 
 
        return (
        <div>
              <h1>TodoItems</h1>
              {todos && todos.length > 0 ? (
              <ul>
                {todos.map((todo) => (
                  todo && (
                    <li className="todo-container" key={todo.id}>
                      <p>{todo.name}</p>
                      id: {todo.id} | Beschreibung: {todo.description}
                      <button
                        className="deleteButton"
                        onClick={() => this.delete(todo.id)}
                      >
                        Löschen
                      </button>
                    </li>
                  )
                ))}
              </ul>
            ) : (
              <div>Keine Todos vorhanden</div>
            )}
            <form onSubmit={this.handleSubmit}>    
   
             <label>id: </label> 
             <input
              type="number"
              id="id"
              name="id"
              value={id  || ''} 
              onChange={this.handleChange}
            />   
             <label>Name: </label> 
             <input
              type="text"
              id="name"
              name="name"
              value={name || ''} 
              onChange={this.handleChange}
            />          
             <label>Beschreibung: </label> 
             <input
              type="text"
              id="description"
              name="description"
              value={description  || ''} 
              onChange={this.handleChange}
            />
             <input type="submit" value="Submit" />
            </form>

        </div>
        )
    }

}

export default TodoItem;
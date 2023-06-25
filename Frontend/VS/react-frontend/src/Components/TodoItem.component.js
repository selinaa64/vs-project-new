import React, {Component} from "react"; 
import ServiceTodoItem from "../service/ServiceTodoItem.service"
import "../Style/TodoItem.css";

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
        this.update = this.update.bind(this);
      }
      componentDidMount() {
        this.getTodos();
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
          // Überprüfung der ID auf Duplikate

        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
      event.preventDefault();
      const { id, name, description } = this.state;
  
      // Überprüfung der ID auf Duplikate
      const isIdDuplicate = this.state.todos.some((todo) => todo.id === parseInt(id));
      if (isIdDuplicate && !(this.state.isEditing) ) {
        alert("Die ID existiert bereits. Bitte geben Sie eine eindeutige ID ein.");
        return;
      }
      if(id<=0){
        alert("die ID soll größer gleich 0 sein");
        return;
      }
    
      if (this.state.isEditing) {
        // Aufruf der Update-Funktion
        this.update(id);
      } else
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
        window.location.reload();
                    })
          .catch((error) => {
            console.error("Fehler beim Erstellen des Todos:", error);
            // Hier können Sie eine Fehlerbehandlung implementieren
          });
          
      }
      update(id) {
        const { name, description } = this.state;
        const updatedItem = {
          name: name,
          description: description
        };
    
        ServiceTodoItem.updateTodo(id, updatedItem)
          .then((response) => {
            // Todo erfolgreich aktualisiert
            console.log("Todo aktualisiert:", response);
            // Hier können Sie weitere Aktionen ausführen, z. B. die Anzeige aktualisieren
            this.setState({
              id: "",
              name: "",
              description: "",
              isEditing: false // isEditing zurücksetzen
            });
            this.getTodos(); // Aktualisierte Todos erneut abrufen
          })
          .catch((error) => {
            console.error("Fehler beim Aktualisieren des Todos:", error);
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
      startEditing(todo) {
        this.setState({
          id: todo.id,
          name: todo.name,
          description: todo.description,
          isEditing: true,
        });
      }

    
    render(){
        const { todos, id, name, description,} = this.state; 
 
        return (
<div className="container">
  
  <h1>All TodoItems</h1>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Beschreibung</th>
      <th>Aktionen</th>
    </tr>
  </thead>
  <tbody>
    {todos.map((todo) => (
      todo && (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.name}</td>
          <td>{todo.description}</td>
          <td>
            <button
              className="deleteButton"
              onClick={() => this.delete(todo.id)}
            >
              Löschen
            </button>
            <button className="editButton" onClick={() => this.startEditing(todo)}>
              Bearbeiten
            </button>
          </td>
        </tr>
      )
    ))}
  </tbody>
</table>
<h1>Add / Edit TodoItems</h1>

            <form onSubmit={this.handleSubmit}>    
   
             <label>id: </label> 
             <input
              type="number"
              id="id"
              name="id"
              value={id  || ''} 
              onChange={this.handleChange}
              readOnly={this.state.isEditing} // Hier wird das readOnly-Attribut basierend auf dem isEditing-Zustand festgelegt
              
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
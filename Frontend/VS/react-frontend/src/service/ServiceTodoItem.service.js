import http from "../http-common";


class ServiceTodoItem{

    getTodos(){
        return http.get("/").then(response =>response.data)
        .catch(err=>{
        console.log(err, "error");
        })
    }   
    
    getTodoById(id){
        return http.get(`/${id}`)
        .then(response => response.data)
        .catch(err=>{
            console.log(err, "error");
        })

    }
    createTodo(todo){
        console.log(todo)
        return http.post("/", todo)
        .then(response => response.data)
        .catch(err=>{
            console.log(err, "error");
        })

    }
    updateTodo(id, todo){
        return http.put(`/${id}`, todo)
        .then(response => response.todo)
        .catch(err=>{
            console.log(err, "error");
        })

    }
    deleteTodo(id){
        return http.delete(`/${id}`)
        .then(response => response.data)
        .catch(err=>{
            console.log(err, "error");
        })

    }
}

const serviceTodoItem = new ServiceTodoItem();

export default serviceTodoItem; 
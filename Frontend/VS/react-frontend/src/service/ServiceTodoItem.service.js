import http from "../http-common";



class ServiceTodoItem{

    getTodos(){
        console.log("Hi")
        return http.get("/todo/").then(response =>response.data).catch(err=>{
        console.log("error");
        })

        
    }    
}

export default ServiceTodoItem; 
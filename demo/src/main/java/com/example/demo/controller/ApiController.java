package com.example.demo.controller;
import com.example.demo.service.ServiceTodoItem;
import com.example.demo.model.TodoItem;
import org.springframework.beans.factory.annotation.Autowired;
//import com.example.demo.repository.TodoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/todo")
public class ApiController {

    //autowired sonst nullpointerexception
    @Autowired
    private ServiceTodoItem service;

    @GetMapping("/")
    public List<TodoItem> getTodoItems(){
        return service.getTodoItems();
    }

    @PostMapping("/")
    public TodoItem setTodoItem(@RequestBody TodoItem item){
        //TodoItem newItem = new TodoItem(item.getId(), item.getPriority(),item.getTodo(), item.getDescription());
        return service.setTodoItem(item);
    }


    @PutMapping("/{id}")
    public void updateTodoItem(@PathVariable long id, @RequestBody TodoItem todoItem) {
        service.updateTodoItem(id, todoItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id) {
        boolean deleted = service.deleteTodoItem(id);
        if (deleted) {
            return ResponseEntity.ok("Todo successfully deleted");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

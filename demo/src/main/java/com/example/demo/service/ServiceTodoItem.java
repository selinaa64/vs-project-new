package com.example.demo.service;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.TodoRepository;
import com.example.demo.model.TodoItem;
@Service
public class ServiceTodoItem {
  //  private List<TodoItem> todoItems = new ArrayList<>();
    @Autowired
    TodoRepository repo;


    public List<TodoItem> getTodoItems() {
        return repo.findAll();
    }

    public TodoItem setTodoItem(TodoItem item){
        TodoItem newItem = new TodoItem();
        newItem.setId(item.getId());
        newItem.setName(item.getName());
        newItem.setDescription(item.getDescription());
        
        return repo.save(newItem);
    }

   public TodoItem updateTodoItem(Long id, TodoItem updatedItem){
          Optional<TodoItem> optTodo = repo.findById(id);
        if (optTodo.isPresent()) {
            TodoItem todo = optTodo.get();
            todo.setName(updatedItem.getName());
            todo.setDescription(updatedItem.getDescription());
            return repo.save(todo);
        }
        return null;
   }

   public boolean deleteTodoItem(long id){
        Optional<TodoItem> optionalTodo = repo.findById(id);
        if (optionalTodo.isPresent()) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }

}

package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.TodoItem;
@Service
public class ServiceTodoItem {
    private List<TodoItem> todoItems = new ArrayList<>();

    TodoItem item1 = new TodoItem(1,1 ,"bla", "bla");
    TodoItem item2 = new TodoItem(2,3, "erstes Item", "erste Beschreibung");


    public List<TodoItem> getTodoItems() {
        if(!(todoItems.contains(item1)) || (!(todoItems.contains(item1)))){
        todoItems.add(item1);
        todoItems.add(item2);
        }

        return todoItems;
    }
    public TodoItem getTodoItemById(Integer id) {
        return todoItems.stream().filter(item ->item.id.equals(id)).findFirst().orElse(null);
    }
    public TodoItem setTodoItem(TodoItem item){
        TodoItem newItem = new TodoItem(item.getId(), item.getPriority(), item.getDescription(), item.getTodo());
        todoItems.add(newItem);
        return newItem;
    }

   public void updateTodoItem(Integer id, TodoItem updatedItem){
       for (TodoItem item : todoItems) {
        if(item.getId().equals(id)){
               // Aktualisiere das TodoItem mit den Werten aus updatedItem
               item.setTitle(updatedItem.getTodo());
               item.setDescription(updatedItem.getDescription());
               return; // Beende die Methode, nachdem das TodoItem aktualisiert wurde
           }
       }
   }

   public void deleteTodoItem(Integer id){
       TodoItem searchedItem = todoItems.stream().filter(item ->item.id.equals(id)).findFirst().orElse(null);
       todoItems.remove(searchedItem);
    }

}

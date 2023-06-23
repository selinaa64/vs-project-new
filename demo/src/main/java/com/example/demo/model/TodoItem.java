package com.example.demo.model;

public class TodoItem {
    private String todo;
    public Integer id; 
    private int priority = 2;
    String description; 

    public TodoItem(Integer id, int priority, String todo, String description){
        this.id=id;
        this.priority=priority;
        this.todo=todo;
        this.description=description;
    }

    public TodoItem(Integer id){
        this.id=id;
    }
    public Integer getId(){
        return id;
    }

    public int getPriority(){
        return priority;
    }

    public String getTodo(){
        return todo;
    }

    public String getDescription(){
        return description;
    }
    public void setId(int id){
        this.id= id;
    }


    public void setPriority(int priority){
        this.priority = priority;
    }

    public void setTitle(String todo){
        this.todo=todo;
    }
    public void setDescription(String description){
        this.description=description;
    }
}

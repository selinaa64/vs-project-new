package com.example.demo.model;

public class TodoItem {
    public Integer id;
    public String title;
    public String description;

    public TodoItem(Integer id, String title, String description){
        this.id=id;
        this.title=title;
        this.description=description;
    }

    public TodoItem(Integer id){
        this.id=id;
    }

    public Integer getId(){
        return id;
    }

    public String getTitle(){
        return title;
    }

    public String getDescription(){
        return description;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public void setTitle(String title){
        this.title=title;
    }
    public void setDescription(String description){
        this.description=description;
    }
}

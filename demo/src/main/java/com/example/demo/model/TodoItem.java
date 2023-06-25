package com.example.demo.model;

import jakarta.persistence.Entity;


import jakarta.persistence.Id;
@Entity
public class TodoItem {
    @Id
    public long id; 
    public String name;
    public String description; 

    public TodoItem(){
        
    }
    public TodoItem(long id,String name, String description){
        this.id=id;
        this.name = name;
        this.description=description;
    }

    public TodoItem(long id){
        this.id=id;
    }
    public long getId(){
        return id;
    }


    public String getName(){
        return name;
    }

    public String getDescription(){
        return description;
    }
    public void setId(long id){
        this.id= id;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setDescription(String description){
        this.description=description;
    }
}

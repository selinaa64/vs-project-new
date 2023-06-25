package com.example.demo.repository;

import com.example.demo.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TodoRepository extends JpaRepository<TodoItem, Long> {
}
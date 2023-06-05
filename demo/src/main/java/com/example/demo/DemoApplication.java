package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/hello")
    public String sayHello1(){
        return "Hallooo";
    }

//    @PostMapping("/endpoint/{variable}")
//    public String postVariable(@PathVariable String variable){
//
//        System.out.println(" #### Submitted variable: "+variable);
//        return "The variable which has been submitted is: "+variable;
//    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}

package com.example.demo.app.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @GetMapping(path = "/hello")
    String hello() {
        return "hello, world!";
    }
}

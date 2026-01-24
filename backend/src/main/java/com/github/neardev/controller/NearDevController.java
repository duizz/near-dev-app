package com.github.neardev.controller;

import com.github.neardev.dto.NearDevDTO;
import com.github.neardev.exceptions.DevNotFoundException;
import com.github.neardev.service.NearDevService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Objects;

@RestController
@RequestMapping("/dev")
public class NearDevController {

    @Autowired
    private NearDevService devService;

    @PostMapping("/save")
    public ResponseEntity registerDev(@RequestBody NearDevDTO devDTO) {
        try {
            devService.store(devDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }


    @GetMapping
    public ResponseEntity listDevs() {
        HashMap<String, String> response = new HashMap<>();

        try {
            return ResponseEntity.ok().body(devService.indexAllDevs());
        } catch (DevNotFoundException e){
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}

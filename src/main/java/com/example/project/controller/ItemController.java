package com.example.project.controller;

import com.example.project.domain.Item;
import com.example.project.dto.ItemDto;
import com.example.project.service.ItemService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @ApiOperation(value = "매물 조회")
    @GetMapping(value = "/search/{itemTitle}")
    public ResponseEntity<ItemDto> getItem(@PathVariable String itemTitle){
        Item item = itemService.getItem(itemTitle);
        return new ResponseEntity<>(new ItemDto(item), HttpStatus.OK);
    }

}

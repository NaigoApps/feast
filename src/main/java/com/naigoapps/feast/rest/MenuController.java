package com.naigoapps.feast.rest;

import com.naigoapps.feast.model.Category;
import com.naigoapps.feast.repositories.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MenuController {

    @Autowired
    private CategoriesRepository repository;

    @GetMapping(path = "api/categories")
    public List<Category> getCategories() {
        List<Category> categories = new ArrayList<>();
        for (Category category : repository.findAll()) {
            categories.add(category);
        }
        return categories;
    }

    @PostMapping(path = "api/categories")
    public void addCategory(@RequestBody CategoryCreateRequest request) {
        Category category = new Category();
        category.setName(request.name);
        repository.save(category);
    }

    @DeleteMapping(path = "api/categories/{id}")
    public void deleteCategory(@PathVariable("id") Long categoryId) {
        repository.deleteById(categoryId);
    }

    private record CategoryCreateRequest(String name) {
    }
}

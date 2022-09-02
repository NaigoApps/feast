package com.naigoapps.feast.rest;

import com.naigoapps.feast.model.Feast;
import com.naigoapps.feast.repositories.FeastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class FeastsController {

    @Autowired
    private FeastRepository repository;

    @GetMapping(path = "api/feasts")
    public List<Feast> getFeasts() {
        List<Feast> feasts = new ArrayList<>();
        for (Feast feast : repository.findAll()) {
            feasts.add(feast);
        }
        return feasts;
    }

    @PostMapping(path = "api/feasts")
    public void addFeast(@RequestBody FeastCreateRequest request) {
        Feast feast = new Feast();
        feast.setName(request.name);
        repository.save(feast);
    }

    @DeleteMapping(path = "api/feasts/{id}")
    public void deleteFeast(@PathVariable("id") Long feastId) {
        repository.deleteById(feastId);
    }

    private record FeastCreateRequest(String name) {
    }
}

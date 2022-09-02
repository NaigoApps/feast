package com.naigoapps.feast.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "feasts")
public class Feast extends BaseEntity {

    private String name;

    @OneToMany(mappedBy = "feast")
    private List<Ordination> ordinations;

    public Feast() {
        this.ordinations = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ordination> getOrdinations() {
        return ordinations;
    }

    public void setOrdinations(List<Ordination> ordinations) {
        this.ordinations = ordinations;
    }
}

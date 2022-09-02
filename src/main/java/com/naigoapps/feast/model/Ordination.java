package com.naigoapps.feast.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "ordinations")
public class Ordination extends BaseEntity {

    @ManyToOne
    private Feast feast;

    @OneToMany(mappedBy = "ordination")
    private List<Order> orders;

    public Feast getFeast() {
        return feast;
    }

    public void setFeast(Feast feast) {
        this.feast = feast;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}

package com.shruti.order.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shruti.order.models.Order;


@Repository
public interface OrderRepository extends MongoRepository<Order,String> {

	public List<Order> findByUsername(String username);
}

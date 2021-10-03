package com.shruti.product.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.shruti.product.models.Cart;
@Repository
public interface CartRepository extends MongoRepository<Cart, String>{

	public List<Cart> findByUsername(String username);
}

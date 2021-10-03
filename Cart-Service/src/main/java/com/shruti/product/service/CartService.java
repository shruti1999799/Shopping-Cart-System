package com.shruti.product.service;

import java.util.List;

import com.shruti.product.models.Cart;
public interface CartService {

	public List<Cart> findAll();
	public List<Cart> findByUsername(String username);
}

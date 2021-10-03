package com.shruti.order.service;

import java.util.List;

import com.shruti.order.models.Order;
public interface OrderService {

	public List<Order> findAll();
	public List<Order> findByUsername(String username);
}

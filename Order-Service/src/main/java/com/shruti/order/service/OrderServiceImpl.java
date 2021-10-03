package com.shruti.order.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shruti.order.models.Order;
import com.shruti.order.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public List<Order> findAll() {
		
		return this.orderRepository.findAll();
	}

	@Override
	public List<Order> findByUsername(String username){
		return this.orderRepository.findByUsername(username);
	}
}

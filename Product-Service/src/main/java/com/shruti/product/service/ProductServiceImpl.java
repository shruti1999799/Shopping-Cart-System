package com.shruti.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shruti.product.models.Product;
import com.shruti.product.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Product> findAll() {
		
		return this.productRepository.findAll();
	}

	@Override
	public List<Product> findByCategory(String category){
		return this.productRepository.findByCategory(category);
	}
}

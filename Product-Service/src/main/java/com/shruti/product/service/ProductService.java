package com.shruti.product.service;

import java.util.List;
import java.util.Optional;

import com.shruti.product.models.Product;


public interface ProductService {

	public List<Product> findAll();
	public List<Product> findByCategory(String category);
}

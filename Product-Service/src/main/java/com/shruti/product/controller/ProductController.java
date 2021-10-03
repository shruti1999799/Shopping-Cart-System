package com.shruti.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shruti.product.models.Product;
import com.shruti.product.repository.ProductRepository;
import com.shruti.product.service.ProductService;

@RestController
@CrossOrigin
@RequestMapping(value="/api")
public class ProductController {

	private final ProductRepository productRepository;
	
	@Autowired
	public ProductService service;
	
	public ProductController(ProductRepository productRepository) {
		this.productRepository=productRepository;
	}
	
	@GetMapping("/products")
	public List<Product> getProducts(){
		return service.findAll();
	}
	
	@GetMapping("/products/{id}")
	public Optional<Product> getProduct(@PathVariable int id){
		return productRepository.findById(id);
	}
	
	@PostMapping("/products/create")
	public String createProduct(@RequestBody Product product) {
		Product insertedProduct = productRepository.insert(product);
		return "Product Created "+ insertedProduct.getName();
	}
	
	@PutMapping("/products/{id}")
	public String updateProduct(@PathVariable int id,@RequestBody Product product) {
	 Product updatedProduct = productRepository.save(product);
	 return "Product Updated "+updatedProduct.getName();
	 
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteProduct(@PathVariable int id) {
		  productRepository.deleteById(id);
		
	}
	
	
	@GetMapping("{category}")
	public List<Product> getProductByCategory(@PathVariable String category){
		return productRepository.findByCategory(category);
	}
//	
	
}

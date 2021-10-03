package com.shruti.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shruti.product.models.Cart;
import com.shruti.product.repository.CartRepository;
import com.shruti.product.service.CartService;


@RestController
@CrossOrigin
public class CartController {

	private final CartRepository cartRepository;
	
	public CartController(CartRepository cartRepository) {
		this.cartRepository=cartRepository;
	}
	@Autowired
	public CartService service;
	
	@GetMapping("/cart")
	public List<Cart> getProducts(){
		return service.findAll();
	}
	
	@PostMapping("/cart/create")
	public String createProduct(@RequestBody Cart cart) {
		Cart insertedProduct = cartRepository.insert(cart);
		return "Cart Created "+ insertedProduct.getName();
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCart(@PathVariable String id) {
		 cartRepository.deleteById(id);
		
	}
	@GetMapping("/cart/{username}")
	public List<Cart> getCartByUsername(@PathVariable String username){
		return service.findByUsername(username);
	}

	
	
	
}

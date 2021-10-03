package com.shruti.product;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.shruti.product.models.Product;
import com.shruti.product.repository.ProductRepository;


@SpringBootTest
class ProductServiceApplicationTests {

	@Autowired
	ProductRepository pRepo;
	
	@Test
	public void testCreate() {
		Product p=new Product();
		p.setId(4);
		p.setName("Iphone");
		p.setCategory("Electronics");
		p.setPrice(500.00);
		p.setDescription("good");
		p.setImage("Iphone.jpg");
		pRepo.save(p);
		assertNotNull(pRepo.findById(1).get());
	}

	@Test
	public void testReadAll() {
		List<Product> list = pRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	public void testSingleProduct() {
		Product product=pRepo.findById(3).get();
		assertEquals(700.00, product.getPrice());
	}
	
	@Test
	public void testupdate() {
		Product p = pRepo.findById(3).get();
				p.setPrice(600.00);
				pRepo.save(p);
				assertNotEquals(700.00,pRepo.findById(3).get().getPrice());
		        
	}
	
	@Test
	public void testDelete() {
		pRepo.deleteById(1);
		assertThat(pRepo.existsById(1)).isFalse();
	}
}

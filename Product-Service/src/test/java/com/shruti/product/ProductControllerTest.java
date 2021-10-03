package com.shruti.product;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import com.shruti.product.controller.ProductController;
import com.shruti.product.models.Product;
import com.shruti.product.repository.ProductRepository;

@WebMvcTest(ProductController.class)
public class ProductControllerTest {

	@MockBean
	private ProductRepository productRepository;
	
	@Autowired
	private WebApplicationContext webApplicationContext;
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	void shouldCreateMockMvc() {
		assertNull(mockMvc);
	}
	
	
}

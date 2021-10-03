package com.shruti.product.models;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Document(collection="Product")
public class Product {
	
	@Id
	
	private int id;
	private String name;
	private String category;
	private double price;
	private String quantity;
	private String description;
	private String image;
	
	public Product() {
		
	}
	
	
	public Product(String name, String category, double price,String quantity,String description,String image) {
		super();
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity=quantity;
		this.description=description;
		this.image=image;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	

	public String getQuantity() {
		return quantity;
	}


	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}


	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}


	
	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return String.format("Product [id='%s',name='%s',category='%s',price='%s',quantity='%s',description='%s',image='%s']",id,name,category,price,description,image);
	}
	
}

package com.mvp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Product")
public class Product {
 
	@Id
	@GeneratedValue
	@Column(name="product_id")
	private int product_id;
	
	@Column(name="product_name")
	private String product_name;
	
	@Column(name="image_path")
	private String image_path;
	
	@Column(name="brand_id")
	private int brand_id;
	
	@Column(name="category_id")
	private int category_id;
	
	@Column(name="price")
	private int price;
	
	@Column(name="quantity")
	private int Quantity;
	
	public int getProduct_id() {
		return product_id;
	}

	@Column(name="description")
	private String description;
	
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

	public int getBrand_id() {
		return brand_id;
	}

	public void setBrand_id(int brand_id) {
		this.brand_id = brand_id;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getQuantity() {
		return Quantity;
	}

	public void setQuantity(int quantity) {
		Quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}

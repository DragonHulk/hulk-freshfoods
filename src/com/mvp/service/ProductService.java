package com.mvp.service;

import java.util.List;

import com.mvp.model.Product;

public interface ProductService {

	List<Product> getproductbycategory(int id);

	List<Product> getallproduct();

	List<Product> getallproductbysearch(String value);

	List<Product> getallproductbybrand(int id);

	List<Product> getproductbyid(int id);

}

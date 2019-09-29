package com.mvp.service;

import java.util.List;


import com.mvp.dao.ProductDao;
import com.mvp.dao.ProductDaoImpl;

import com.mvp.model.Product;

public class ProductServiceImpl implements ProductService {

	ProductDao productdao = new ProductDaoImpl();

	public List<Product> getproductbycategory(int id) {
		
		return productdao.getproductbycategory(id); 
		
	}

	public List<Product> getallproduct() {
	
		return productdao.getallproduct();
	}

	public List<Product> getallproductbysearch(String value) {
		
		return productdao.getallproductbysearch(value);
	}

	public List<Product> getallproductbybrand(int id) {
		// TODO Auto-generated method stub
		return productdao.getallproductbybrand(id);
	}


	public List<Product> getproductbyid(int id) {
		// TODO Auto-generated method stub
		return productdao.getproductbyid(id);
	}
	
}

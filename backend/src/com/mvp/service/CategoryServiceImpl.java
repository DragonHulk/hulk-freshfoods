package com.mvp.service;

import java.util.List;

import com.mvp.dao.CategoryDao;
import com.mvp.dao.CategoryDaoImpl;
import com.mvp.model.Category;

public class CategoryServiceImpl implements CategoryService {
	
	CategoryDao categorydao = new CategoryDaoImpl();

	@Override
	public List<Category> getallcategory() {
		
		return categorydao.getallcategory(); 
	}
	

}

package com.mvp.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.mvp.model.Category;
import com.mvp.service.CategoryService;
import com.mvp.service.CategoryServiceImpl;

@Path("/category")
public class CategoryController {
	
	CategoryService categoryservice = new CategoryServiceImpl();
	
	@Path("/getallcategory")
	@GET
	@Produces("application/json")
	
	public List<Category> getallcategory(){
		return categoryservice.getallcategory();
	}

}

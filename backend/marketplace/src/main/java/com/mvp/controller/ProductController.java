package com.mvp.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.mvp.model.Product;

import com.mvp.service.ProductService;
import com.mvp.service.ProductServiceImpl;

@Path("/product")
public class ProductController {
	
ProductService productservice = new ProductServiceImpl();
	
	@Path("/getproductbycategory")
	@GET
	@Produces("application/json")
	
	public List<Product> getproductbycategory(@QueryParam("id") int id) throws Exception{
		
		return productservice.getproductbycategory(id);
	}
	
	@Path("/getallproduct")
	@GET
	@Produces("application/json")
	
	public List<Product> getallproduct() throws Exception{
		
		return productservice.getallproduct();
	}
	
	@Path("/getallproductbysearch")
	@GET
	@Produces("application/json")
	
	public List<Product> getallproductbysearch(@QueryParam("value") String value) throws Exception{
		
		return productservice.getallproductbysearch(value);
	}
	
	@Path("/getallproductbybrand")
	@GET
	@Produces("application/json")
	
	public List<Product> getallproductbybrand(@QueryParam("id") int id) throws Exception{
		
		return productservice.getallproductbybrand(id);
	}
	
	@Path("/getproductbyid")
	@GET
	@Produces("application/json")
	
	public List<Product> getallproductbyid(@QueryParam("id") int id) throws Exception{
		
		return productservice.getproductbyid(id);
	}
	
}

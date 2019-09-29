package com.mvp.controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.mvp.model.Brand;
import com.mvp.service.BrandService;
import com.mvp.service.BrandServiceImpl;


@Path("/brands")
public class BrandController {
	
	BrandService brandService = new BrandServiceImpl();

	@Path("/getAllBrands")
	@GET
	@Produces("application/json")
	
	public List<Brand> getAllBrands() {
	
		return brandService.getAllBrands();
		
	}
}

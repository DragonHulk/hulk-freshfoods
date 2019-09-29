package com.mvp.service;

import java.util.List;

import com.mvp.dao.BrandDao;
import com.mvp.dao.BrandDaoImpl;
import com.mvp.model.Brand;

public class BrandServiceImpl implements BrandService {
	
	BrandDao brandDao = new BrandDaoImpl();

	public List<Brand> getAllBrands() {
		
		return brandDao.getAllBrands();
	}
	
	public void sample() {}

}

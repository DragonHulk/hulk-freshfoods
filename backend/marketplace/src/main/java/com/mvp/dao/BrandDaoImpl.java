package com.mvp.dao;

import java.util.List;

import com.mvp.model.Brand;
import com.mvp.utils.HibernateUtil;

public class BrandDaoImpl implements BrandDao {
	
	HibernateUtil hibernateUtil =new HibernateUtil();

	public List<Brand> getAllBrands() {
		hibernateUtil.openCurrentSession();
		List<Brand> brandList = (List<Brand>)hibernateUtil.getCurrentSession().createQuery("from Brand").list();
		hibernateUtil.closeCurrentSession();
		return brandList;
	}
	
	
}

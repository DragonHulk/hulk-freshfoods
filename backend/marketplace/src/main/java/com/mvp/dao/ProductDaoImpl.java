package com.mvp.dao;

import java.util.List;

import com.mvp.model.Product;
import com.mvp.utils.HibernateUtil;

public class ProductDaoImpl implements ProductDao {
	HibernateUtil hibernateUtil =new HibernateUtil();

	public List<Product> getproductbycategory(int id) {
		
		hibernateUtil.openCurrentSession();
		List<Product> product = (List<Product>)hibernateUtil.getCurrentSession().createQuery("from Product where category_id="+id+"").list();
		hibernateUtil.closeCurrentSession();
		
		return product;
	}

	public List<Product> getallproduct() {
		
		hibernateUtil.openCurrentSession();
		List<Product> product = (List<Product>)hibernateUtil.getCurrentSession().createQuery("from Product").list();
		hibernateUtil.closeCurrentSession();
		
		return product;
	}

	public List<Product> getallproductbysearch(String value) {
		hibernateUtil.openCurrentSession();
		List<Product> product = (List<Product>)hibernateUtil.getCurrentSession().createQuery("from Product where product_name like '%"+value+"%'").list();
		hibernateUtil.closeCurrentSession();
		return product;
	}

	public List<Product> getallproductbybrand(int id) {
		
		hibernateUtil.openCurrentSession();
		List<Product> product = (List<Product>)hibernateUtil.getCurrentSession().createQuery("from Product where brand_id="+id+"").list();
		hibernateUtil.closeCurrentSession();
		
		return product;
	}

	public List<Product> getproductbyid(int id) {
		hibernateUtil.openCurrentSession();
		List<Product> product = (List<Product>)hibernateUtil.getCurrentSession().createQuery("from Product where product_id="+id+"").list();
		hibernateUtil.closeCurrentSession();
		return product;
	}

}

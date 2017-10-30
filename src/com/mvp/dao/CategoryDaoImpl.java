package com.mvp.dao;

import java.util.List;

import com.mvp.model.Category;
import com.mvp.utils.HibernateUtil;

public class CategoryDaoImpl implements CategoryDao{
	HibernateUtil hibernateUtil =new HibernateUtil();

	@Override
	public List<Category> getallcategory() {
		hibernateUtil.openCurrentSession();
		List<Category> categoryList = (List<Category>)hibernateUtil.getCurrentSession().createQuery("from Category").list();
		hibernateUtil.closeCurrentSession();
		return categoryList;
	}

}

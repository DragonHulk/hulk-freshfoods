package com.mvp.dao;

import com.mvp.model.UserDetail;
import com.mvp.utils.HibernateUtil;

public class UserDetailDaoImpl implements UserDetailDao{
	HibernateUtil hibernateUtil =  new HibernateUtil();

	@Override
	public String add(UserDetail user) {
		hibernateUtil.openCurrentSessionwithTransaction();
		Integer id = (Integer)hibernateUtil.getCurrentSession().save(user);
		hibernateUtil.closeCurrentSessionwithTransaction();
		return "useradded";
	}
	

}

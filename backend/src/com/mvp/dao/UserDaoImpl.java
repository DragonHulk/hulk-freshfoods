package com.mvp.dao;

import com.mvp.model.User;
//import com.mvp.model.UserDetail;
import com.mvp.utils.HibernateUtil;

public class UserDaoImpl implements UserDao{

	HibernateUtil hibernateUtil =  new HibernateUtil();
	
	@Override
	public User findUserByEmail(String email,String pwd) {
		
		hibernateUtil.openCurrentSession();
		
		User user =(User)hibernateUtil.getCurrentSession().createQuery("from User where emailid = '"+email+"' and pwd = '"+pwd+"'").uniqueResult();
		
		hibernateUtil.closeCurrentSession();
		return user;
	}

	@Override
	public String addUser(User user) {
		hibernateUtil.openCurrentSessionwithTransaction();
		Integer id = (Integer)hibernateUtil.getCurrentSession().save(user);
		hibernateUtil.closeCurrentSessionwithTransaction();
		return ""+id+"";
	}
	
}

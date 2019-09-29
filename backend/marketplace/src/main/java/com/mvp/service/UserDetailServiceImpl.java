package com.mvp.service;

import com.mvp.dao.UserDetailDao;
import com.mvp.dao.UserDetailDaoImpl;
import com.mvp.model.UserDetail;

public class UserDetailServiceImpl implements UserDetailService{
	UserDetailDao userDao = new UserDetailDaoImpl();

	public String addUser(UserDetail user) {
		
		return userDao.add(user);
	}

}

package com.mvp.service;

import com.mvp.dao.UserDao;
import com.mvp.dao.UserDaoImpl;
import com.mvp.model.User;
//import com.mvp.model.UserDetail;

public class UserServiceImpl implements UserService{

	UserDao userDao = new UserDaoImpl();
	@Override
	public User findUserByEmail(String email,String pwd) {
		
		return userDao.findUserByEmail(email,pwd);
	}

	@Override
	public String addUser(User user) {
		
		return userDao.addUser(user);
	}
}

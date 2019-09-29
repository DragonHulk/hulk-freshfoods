package com.mvp.dao;

import com.mvp.model.User;
//import com.mvp.model.UserDetail;

public interface UserDao {

	public User findUserByEmail(String email,String pwd);

	public String addUser(User user);
}

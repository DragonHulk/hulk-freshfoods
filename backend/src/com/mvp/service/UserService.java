package com.mvp.service;

import com.mvp.model.User;
//import com.mvp.model.UserDetail;

public interface UserService {
	
	public User findUserByEmail(String email,String pwd);
	public String addUser(User user);

}

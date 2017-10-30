package com.mvp.controller;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.mvp.model.UserDetail;
import com.mvp.service.UserDetailService;
import com.mvp.service.UserDetailServiceImpl;

@Path("/userdetail")
public class UserDetailController {
	UserDetailService userDetailService = new UserDetailServiceImpl();
	

	@Path("/add")
	@POST
	@Produces("application/json")
	public String addUser(UserDetail user)
	{
		return userDetailService.addUser(user);
	}
}

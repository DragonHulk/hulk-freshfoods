package com.mvp.controller;


import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;


import org.codehaus.jettison.json.JSONObject;

import com.mvp.model.User;
import com.mvp.service.UserService;
import com.mvp.service.UserServiceImpl;

@Path("/user")
public class UserController {
	UserService userService = new UserServiceImpl();
	
	@Path("/auth")
	@POST
	@Produces("application/json")
	public String authUserByEmail(User user1) throws Exception
	{	String email=user1.getEmailid();
		String pwd=user1.getPwd();
		User user = userService.findUserByEmail(email,pwd);
		
		String response="";
		JSONObject jsonObject = new JSONObject();
		
		if(email.equalsIgnoreCase(user.getEmailid()) && pwd.equalsIgnoreCase(user.getPwd())) {
			
			jsonObject.put("Status", "Success");
			jsonObject.put("email", user.getEmailid());
			jsonObject.put("userid", user.getUserid());
			
			response = jsonObject.toString().replace("\\", " ");
			
		}
		
		else {
			jsonObject.put("Status", "Failure");
			response = jsonObject.toString().replace("\\", " ");
		}
		return response;
	}
	
	@Path("/add")
	@POST
	@Produces("application/json")
	public String addUser(User user)
	{
		return userService.addUser(user);
	}
	
	@Path("/edit")
	@PUT
	public String editUser(int id,User user){
		return  null;
	}
	
	@Path("/delete")
	@DELETE
	public String DeleteUser(int id){
		return null;
	}
	
	
}


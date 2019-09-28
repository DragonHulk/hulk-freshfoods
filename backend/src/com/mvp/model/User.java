package com.mvp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="LoginDetail")
public class User {

	@Id
	@GeneratedValue
	@Column(name="userid")
	private int userid;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="pwd")
	private String  pwd;
	
//	@OneToOne
//	private UserDetail userdetail;
	
	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

//	public UserDetail getUserdetail() {
//		return userdetail;
//	}
//
//	public void setUserdetail(UserDetail userdetail) {
//		this.userdetail = userdetail;
//	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

}

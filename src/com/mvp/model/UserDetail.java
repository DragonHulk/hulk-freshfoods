package com.mvp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="UserDetail")

public class UserDetail {

		@Id
		@Column(name="userid")
		private int userid;
			
		@Column(name="name")
		private String  name;
		
		@Column(name="ph_no")
		private String ph_no;
		
		@Column(name="delivery_address")
		private String delivery_address;
		
//		@OneToOne(mappedBy="userdetail")
//		private User user;
//		
//		
//		public User getUser() {
//			return user;
//		}
//
//		public void setUser(User user) {
//			this.user = user;
//		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPh_no() {
			return ph_no;
		}

		public void setPh_no(String ph_no) {
			this.ph_no = ph_no;
		}

		public String getDelivery_address() {
			return delivery_address;
		}

		public void setDelivery_address(String delivery_address) {
			this.delivery_address = delivery_address;
		}

		public int getUserid() {
			return userid;
		}

		public void setUserid(int userid) {
			this.userid = userid;
		}

}

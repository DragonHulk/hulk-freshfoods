package com.mvp.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hc")
public class HealthCheckController {

	@Path("/ping")
	@GET
	@Produces(MediaType.TEXT_PLAIN)

	public String ping() {

		return "up and running";

	}

}

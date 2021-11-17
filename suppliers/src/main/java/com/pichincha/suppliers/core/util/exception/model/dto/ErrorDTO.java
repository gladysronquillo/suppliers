package com.pichincha.suppliers.core.util.exception.model.dto;

public class ErrorDTO {
	
	private String message;
	private String trace;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTrace() {
		return trace;
	}

	public void setTrace(String trace) {
		this.trace = trace;
	}
}

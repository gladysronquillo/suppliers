package com.pichincha.suppliers.exception;

import java.time.LocalDateTime;

public class ExceptionResponse {

	private LocalDateTime date;
	private String message;
	private String details;

	public ExceptionResponse(LocalDateTime date, String message, String details) {
		super();
		this.date = date;
		this.message = message;
		this.details = details;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

}

package com.pichincha.suppliers.core.util.exception.model;

public class ApplicationException  extends Exception {

	private static final long serialVersionUID = 1L;
	private boolean isTrace;

	public ApplicationException(String message) {
		super(message);
	}
	
	public ApplicationException(String message, Boolean isTrace) {
		super(message);
		this.isTrace = isTrace;
	}

	public boolean isTrace() {
		return isTrace;
	}	
	
}

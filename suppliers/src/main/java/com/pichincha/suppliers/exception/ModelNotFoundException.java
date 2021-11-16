package com.pichincha.suppliers.exception;

//@ResponseStatus(HttpStatus.NOT_FOUND)
public class ModelNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 7854519934103787164L;

	public ModelNotFoundException(String message) {
		super(message);
	}
}
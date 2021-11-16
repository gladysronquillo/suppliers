package com.pichincha.suppliers.exception;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(Exception.class)
	public final ResponseEntity<ExceptionResponse> handleAllExceptions(Exception ex, WebRequest request) {

		LocalDateTime currentDate = LocalDateTime.now();
		String message = ex.getMessage();
		String reqDes = request.getDescription(false);
		ExceptionResponse er = new ExceptionResponse(currentDate, message, reqDes);

		return new ResponseEntity<ExceptionResponse>(er, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(ModelNotFoundException.class)
	public final ResponseEntity<ExceptionResponse> handleModelNotFoundException(ModelNotFoundException ex,
			WebRequest request) {

		LocalDateTime currentDate = LocalDateTime.now();
		String message = ex.getMessage();
		String reqDes = request.getDescription(false);
		ExceptionResponse er = new ExceptionResponse(currentDate, message, reqDes);

		return new ResponseEntity<ExceptionResponse>(er, HttpStatus.NOT_FOUND);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		LocalDateTime currentDate = LocalDateTime.now();
		String message = ex.getBindingResult().getAllErrors().stream().map(e -> {
			return e.getDefaultMessage().toString().concat(", ");
		}).collect(Collectors.joining());

		String reqDes = request.getDescription(false);
		ExceptionResponse er = new ExceptionResponse(currentDate, message, reqDes);

		return new ResponseEntity<Object>(er, HttpStatus.BAD_REQUEST);
	}

}

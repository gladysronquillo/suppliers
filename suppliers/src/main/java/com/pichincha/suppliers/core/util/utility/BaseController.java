package com.pichincha.suppliers.core.util.utility;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.pichincha.suppliers.core.util.exception.model.ApplicationException;
import com.pichincha.suppliers.core.util.exception.model.dto.ErrorDTO;
import com.pichincha.suppliers.core.util.logging.LoggerApplication;

public class BaseController {

	protected LoggerApplication<?> applicationLogger;

	public LoggerApplication<?> getApplicationLogger() {
		return applicationLogger;
	}

	public BaseController(Class<?> clazz) {
		this.applicationLogger = new LoggerApplication<>(clazz);
	}

	public ResponseEntity<Object> exceptionControllerManagement(Exception e, Object clazz) {

		ErrorDTO errorDTO = new ErrorDTO();

		if (e instanceof ApplicationException) {
			if (((ApplicationException) e).isTrace()) {
				errorDTO.setTrace(e.getMessage());
			} else {
				errorDTO.setMessage(e.getMessage());
			}
		} else {
			errorDTO.setMessage(e.getMessage());
			errorDTO.setTrace(ExceptionUtils.getStackTrace(e));
		}

		return new ResponseEntity<>(errorDTO, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

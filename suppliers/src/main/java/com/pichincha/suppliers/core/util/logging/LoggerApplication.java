package com.pichincha.suppliers.core.util.logging;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.event.Level;

import com.pichincha.suppliers.core.util.utility.AppConstants;

public final class LoggerApplication<T> {

	private String module = "";
	protected final Logger logger;
	private Class<T> clazz;

	public LoggerApplication(Class<T> clazz) {
		this.clazz = clazz;
		logger = LoggerFactory.getLogger(clazz);
	}

	public void info(String message) {
		logger.info(clazz.getCanonicalName(), Level.INFO, message);
	}

	public void debug(String message) {
		logger.debug(clazz.getCanonicalName(), Level.DEBUG, message, null);
	}

	public void error(Throwable e) {
		logger.error(clazz.getCanonicalName(), Level.ERROR, ExceptionUtils.getStackTrace(e), null);
	}

	public void error(Throwable e, String message) {
		logger.error(clazz.getCanonicalName(), Level.ERROR,
				message + AppConstants.TWO_POINTS_SEPARATOR + ExceptionUtils.getStackTrace(e), null);
	}

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public Class<T> getClazz() {
		return clazz;
	}

	public void setClazz(Class<T> clazz) {
		this.clazz = clazz;
	}

	public Logger getLogger() {
		return logger;
	}

}

package com.pichincha.suppliers.service;

import java.util.List;

import com.pichincha.suppliers.core.util.exception.model.ApplicationException;

public interface ICRUD<T, ID> {

	T save(T pac) throws ApplicationException;

	T update(T pac) throws ApplicationException;

	List<T> findAll() throws ApplicationException;

	T findById(ID id) throws ApplicationException;

	void delete(ID id) throws ApplicationException;
}

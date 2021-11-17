package com.pichincha.suppliers.service.impl;

import java.util.List;

import com.pichincha.suppliers.core.util.exception.model.ApplicationException;
import com.pichincha.suppliers.repository.IGenericRepository;
import com.pichincha.suppliers.service.ICRUD;

public abstract class CRUDImpl<T, ID> implements ICRUD<T, ID> {

	protected abstract IGenericRepository<T, ID> getRepo();

	@Override
	public T save(T obj) throws ApplicationException {
		return getRepo().save(obj);
	}

	@Override
	public T update(T obj) throws ApplicationException {
		return getRepo().save(obj);
	}

	@Override
	public List<T> findAll() throws ApplicationException {
		return getRepo().findAll();
	}

	@Override
	public T findById(ID id) throws ApplicationException {
		return getRepo().findById(id).orElse(null);
	}

	@Override
	public void delete(ID id) throws ApplicationException {
		getRepo().deleteById(id);
	}

}

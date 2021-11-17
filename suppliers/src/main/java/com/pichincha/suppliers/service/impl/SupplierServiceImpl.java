package com.pichincha.suppliers.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pichincha.suppliers.models.entity.Supplier;
import com.pichincha.suppliers.repository.IGenericRepository;
import com.pichincha.suppliers.repository.ISupplierRepository;
import com.pichincha.suppliers.service.ISupplierService;

@Service
public class SupplierServiceImpl extends CRUDImpl<Supplier, Long> implements ISupplierService {

	@Autowired
	private ISupplierRepository repo;

	@Override
	protected IGenericRepository<Supplier, Long> getRepo() {
		return repo;
	}

}
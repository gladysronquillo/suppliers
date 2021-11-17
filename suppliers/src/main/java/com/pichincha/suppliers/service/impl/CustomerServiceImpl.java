package com.pichincha.suppliers.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pichincha.suppliers.models.entity.Customer;
import com.pichincha.suppliers.repository.ICustomerRepository;
import com.pichincha.suppliers.repository.IGenericRepository;
import com.pichincha.suppliers.service.ICustomerService;

@Service
public class CustomerServiceImpl extends CRUDImpl<Customer, Long> implements ICustomerService {

	@Autowired
	private ICustomerRepository repo;

	@Override
	protected IGenericRepository<Customer, Long> getRepo() {
		return repo;
	}

}
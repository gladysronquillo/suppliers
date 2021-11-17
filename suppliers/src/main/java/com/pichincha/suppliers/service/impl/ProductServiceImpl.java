package com.pichincha.suppliers.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pichincha.suppliers.models.entity.Product;
import com.pichincha.suppliers.repository.IGenericRepository;
import com.pichincha.suppliers.repository.IProductRepository;
import com.pichincha.suppliers.service.IProductService;

@Service
public class ProductServiceImpl extends CRUDImpl<Product, Long> implements IProductService {

	@Autowired
	private IProductRepository repo;

	@Override
	protected IGenericRepository<Product, Long> getRepo() {
		return repo;
	}

}
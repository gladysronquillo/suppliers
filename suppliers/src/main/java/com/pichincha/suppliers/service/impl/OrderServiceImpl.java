package com.pichincha.suppliers.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pichincha.suppliers.models.entity.Order;
import com.pichincha.suppliers.repository.IGenericRepository;
import com.pichincha.suppliers.repository.IOrderRepository;
import com.pichincha.suppliers.service.IOrderService;

@Service
public class OrderServiceImpl extends CRUDImpl<Order, Long> implements IOrderService {

	@Autowired
	private IOrderRepository repo;

	@Override
	protected IGenericRepository<Order, Long> getRepo() {
		return repo;
	}

}
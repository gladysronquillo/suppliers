package com.pichincha.suppliers.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pichincha.suppliers.core.application.AppSpringCtx;
import com.pichincha.suppliers.core.util.utility.BaseController;
import com.pichincha.suppliers.models.entity.Supplier;
import com.pichincha.suppliers.service.ISupplierService;

@RestController
@CrossOrigin
@RequestMapping("/api/supplier")
public class SupplierController extends BaseController{
	
	public SupplierController() {
		super(SupplierController.class);
	}
	
	@GetMapping
	public ResponseEntity<Object> findAll(){
		try {
			return new ResponseEntity<>(AppSpringCtx.getBean(ISupplierService.class).findAll(), HttpStatus.OK);
		} catch (Exception ex) {
			return this.exceptionControllerManagement(ex, this);
		}
	}

	@PostMapping
	public ResponseEntity<Object> save(@Valid @RequestBody Supplier supplier) {
		try {
			return new ResponseEntity<>(AppSpringCtx.getBean(ISupplierService.class).save(supplier), HttpStatus.OK);
		} catch (Exception ex) {
			return this.exceptionControllerManagement(ex, this);
		}
	}

	@PutMapping
	public ResponseEntity<Object> update(@Valid @RequestBody Supplier supplier) {
		try {
			return new ResponseEntity<>(AppSpringCtx.getBean(ISupplierService.class).update(supplier), HttpStatus.OK);
		} catch (Exception ex) {
			return this.exceptionControllerManagement(ex, this);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> delete(@PathVariable("id") Long id) {
		try {
			AppSpringCtx.getBean(ISupplierService.class).delete(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception ex) {
			return this.exceptionControllerManagement(ex, this);
		}
	}

}

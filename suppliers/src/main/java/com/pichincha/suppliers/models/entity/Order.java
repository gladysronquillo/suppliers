package com.pichincha.suppliers.models.entity;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pichincha.suppliers.core.util.model.entity.Base;

@Entity
@Table(name = "orden")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Order extends Base {
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "cliente")
	private Customer customer;
	
	@Column(name = "fecha_pedido", nullable = false, columnDefinition = "TIMESTAMP")
	protected LocalDateTime orderDate = LocalDateTime.now();
	
	@Column(name = "direccion_entrega", columnDefinition = "text")
    private String address;

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
}

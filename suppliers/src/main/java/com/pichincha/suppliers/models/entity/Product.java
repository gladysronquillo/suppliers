package com.pichincha.suppliers.models.entity;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pichincha.suppliers.core.util.model.entity.Base;

@Entity
@Table(name = "producto", uniqueConstraints = {
		@UniqueConstraint(columnNames = { "codigo" }, name = "prod_codigo_uk"), })
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product extends Base {

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "proveedor", insertable = false, updatable = false, nullable = false)
	private Supplier supplier;

	@Column(name = "proveedor")
	private Long supplierId;

	@Column(name = "codigo")
	private String code;

	@Column(name = "descripcion", columnDefinition = "text")
	private String description;

	@Column(name = "precio", columnDefinition = "DECIMAL(10, 2) DEFAULT 0.0")
	private BigDecimal price = new BigDecimal(0.00);

	@Column(name = "stock")
	private Long stock;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Long getStock() {
		return stock;
	}

	public void setStock(Long stock) {
		this.stock = stock;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public Long getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(Long supplierId) {
		this.supplierId = supplierId;
	}
}

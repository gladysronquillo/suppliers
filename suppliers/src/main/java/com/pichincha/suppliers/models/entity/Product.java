package com.pichincha.suppliers.models.entity;

import java.math.BigDecimal;

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
@Table(name = "producto")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Product extends Base {
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
	@JoinColumn(name = "proveedor")
	private Supplier supplier;
	
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
}

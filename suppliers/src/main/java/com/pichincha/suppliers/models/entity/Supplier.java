package com.pichincha.suppliers.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pichincha.suppliers.core.util.model.entity.Base;

@Entity
@Table(name = "proveedor")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Supplier extends Base {

    @Column(name = "descripcion", columnDefinition = "text")
    private String description;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
  
}

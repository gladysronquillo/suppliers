package com.pichincha.suppliers.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pichincha.suppliers.core.util.model.entity.Base;

@Entity
@Table(name = "cliente")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Customer extends Base {

    @Column(name = "nombres")
    private String names;

    @Column(name = "apellidos")
    private String surnames;

    @Column(name = "identificacion")
    private String documentNumber;
    
    @Transient
    private String fullName;     

    public String getNames() {
		return names;
	}
    
	public void setNames(String names) {
		this.names = names;
	}

	public String getSurnames() {
		return surnames;
	}

	public void setSurnames(String surnames) {
		this.surnames = surnames;
	}

	public String getDocumentNumber() {
		return documentNumber;
	}

	public void setDocumentNumber(String documentNumber) {
		this.documentNumber = documentNumber;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	@PostLoad
    private void postLoad() {
        this.fullName = names.concat(" ").concat(surnames);
    }

}

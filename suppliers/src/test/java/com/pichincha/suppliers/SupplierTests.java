package com.pichincha.suppliers;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.pichincha.suppliers.core.application.AppSpringCtx;
import com.pichincha.suppliers.models.entity.Supplier;
import com.pichincha.suppliers.repository.ISupplierRepository;


@SpringBootTest
class SupplierTests {

	@Test
	void should_save_supplier() {
		Supplier su = new Supplier();
		su.setDescription("supplier");
		Supplier retorno = AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su);
		assertThat(retorno).hasFieldOrPropertyWithValue("description", "supplier");

	}
	
	@Test
	void should_find_all_suppliers() {
		Supplier su1 = new Supplier();
		su1.setDescription("supplier#1");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su1);
		Supplier su2 = new Supplier();
		su2.setDescription("supplier#2");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su2);
		List<Supplier> suppliers = AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).findAll();
		assertThat(suppliers).contains(su1, su2);

	}
	
	@Test
	  public void should_update_supplier_by_id() {
		Supplier su = new Supplier();
		su.setDescription("supplier#1");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su);

		Supplier updatedTut = new Supplier();
		updatedTut.setDescription("supplier update");

		Supplier found = AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).findById(su.getId()).get();
		found.setDescription(updatedTut.getDescription());
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(found);

		Supplier checkTut = AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).findById(su.getId()).get();
	    
	    assertThat(checkTut.getId()).isEqualTo(su.getId());
	    assertThat(checkTut.getDescription()).isEqualTo(updatedTut.getDescription());
	  }
	
	
	@Test
	  public void should_delete_supplier_by_id() {
		Supplier su1 = new Supplier();
		su1.setDescription("supplier#1");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su1);
		Supplier su2 = new Supplier();
		su2.setDescription("supplier#2");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su2);
		Supplier su3 = new Supplier();
		su3.setDescription("supplier#3");
		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).save(su3);

		AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).deleteById(su2.getId());

		Iterable<Supplier> suppliers = AppSpringCtx.getAppCtx().getBean(ISupplierRepository.class).findAll();

	    assertThat(suppliers).contains(su1, su3);
	  }

}

package com.tangarfa.pmb.service;

import com.tangarfa.pmb.service.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Product.
 */
public interface ProductService {

    /**
     * Save a product.
     *
     * @param productDTO the entity to save
     * @return the persisted entity
     */
    ProductDTO save(ProductDTO productDTO);

    /**
     *  Get all the products.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<ProductDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" product.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    ProductDTO findOne(Long id);

    /**
     *  Delete the "id" product.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}

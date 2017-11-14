package com.tangarfa.pmb.service;

import com.tangarfa.pmb.service.dto.CartDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing Cart.
 */
public interface CartService {

    /**
     * Save a cart.
     *
     * @param cartDTO the entity to save
     * @return the persisted entity
     */
    CartDTO save(CartDTO cartDTO);

    /**
     *  Get all the carts.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<CartDTO> findAll(Pageable pageable);

    /**
     *  Get the "id" cart.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    CartDTO findOne(Long id);

    /**
     *  Delete the "id" cart.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}

package com.tangarfa.pmb.service;


import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specifications;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.jhipster.service.QueryService;

import com.tangarfa.pmb.domain.Cart;
import com.tangarfa.pmb.domain.*; // for static metamodels
import com.tangarfa.pmb.repository.CartRepository;
import com.tangarfa.pmb.service.dto.CartCriteria;

import com.tangarfa.pmb.service.dto.CartDTO;
import com.tangarfa.pmb.service.mapper.CartMapper;

/**
 * Service for executing complex queries for Cart entities in the database.
 * The main input is a {@link CartCriteria} which get's converted to {@link Specifications},
 * in a way that all the filters must apply.
 * It returns a {@link List} of {%link CartDTO} or a {@link Page} of {%link CartDTO} which fulfills the criterias
 */
@Service
@Transactional(readOnly = true)
public class CartQueryService extends QueryService<Cart> {

    private final Logger log = LoggerFactory.getLogger(CartQueryService.class);


    private final CartRepository cartRepository;

    private final CartMapper cartMapper;

    public CartQueryService(CartRepository cartRepository, CartMapper cartMapper) {
        this.cartRepository = cartRepository;
        this.cartMapper = cartMapper;
    }

    /**
     * Return a {@link List} of {%link CartDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public List<CartDTO> findByCriteria(CartCriteria criteria) {
        log.debug("find by criteria : {}", criteria);
        final Specifications<Cart> specification = createSpecification(criteria);
        return cartMapper.toDto(cartRepository.findAll(specification));
    }

    /**
     * Return a {@link Page} of {%link CartDTO} which matches the criteria from the database
     * @param criteria The object which holds all the filters, which the entities should match.
     * @param page The page, which should be returned.
     * @return the matching entities.
     */
    @Transactional(readOnly = true)
    public Page<CartDTO> findByCriteria(CartCriteria criteria, Pageable page) {
        log.debug("find by criteria : {}, page: {}", criteria, page);
        final Specifications<Cart> specification = createSpecification(criteria);
        final Page<Cart> result = cartRepository.findAll(specification, page);
        return result.map(cartMapper::toDto);
    }

    /**
     * Function to convert CartCriteria to a {@link Specifications}
     */
    private Specifications<Cart> createSpecification(CartCriteria criteria) {
        Specifications<Cart> specification = Specifications.where(null);
        if (criteria != null) {
            if (criteria.getId() != null) {
                specification = specification.and(buildSpecification(criteria.getId(), Cart_.id));
            }
            if (criteria.getCode() != null) {
                specification = specification.and(buildStringSpecification(criteria.getCode(), Cart_.code));
            }
            if (criteria.getName() != null) {
                specification = specification.and(buildStringSpecification(criteria.getName(), Cart_.name));
            }
        }
        return specification;
    }

}

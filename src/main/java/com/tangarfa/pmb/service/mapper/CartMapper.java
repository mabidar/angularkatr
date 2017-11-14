package com.tangarfa.pmb.service.mapper;

import com.tangarfa.pmb.domain.*;
import com.tangarfa.pmb.service.dto.CartDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Cart and its DTO CartDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CartMapper extends EntityMapper <CartDTO, Cart> {
    
    
    default Cart fromId(Long id) {
        if (id == null) {
            return null;
        }
        Cart cart = new Cart();
        cart.setId(id);
        return cart;
    }
}

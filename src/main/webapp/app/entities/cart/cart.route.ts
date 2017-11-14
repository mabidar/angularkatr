import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { CartComponent } from './cart.component';
import { CartDetailComponent } from './cart-detail.component';
import { CartPopupComponent } from './cart-dialog.component';
import { CartDeletePopupComponent } from './cart-delete-dialog.component';

@Injectable()
export class CartResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const cartRoute: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        resolve: {
            'pagingParams': CartResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'angularkatrApp.cart.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'cart/:id',
        component: CartDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'angularkatrApp.cart.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const cartPopupRoute: Routes = [
    {
        path: 'cart-new',
        component: CartPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'angularkatrApp.cart.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'cart/:id/edit',
        component: CartPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'angularkatrApp.cart.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'cart/:id/delete',
        component: CartDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'angularkatrApp.cart.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

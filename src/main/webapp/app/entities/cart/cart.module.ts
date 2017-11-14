import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularkatrSharedModule } from '../../shared';
import {
    CartService,
    CartPopupService,
    CartComponent,
    CartDetailComponent,
    CartDialogComponent,
    CartPopupComponent,
    CartDeletePopupComponent,
    CartDeleteDialogComponent,
    cartRoute,
    cartPopupRoute,
    CartResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...cartRoute,
    ...cartPopupRoute,
];

@NgModule({
    imports: [
        AngularkatrSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CartComponent,
        CartDetailComponent,
        CartDialogComponent,
        CartDeleteDialogComponent,
        CartPopupComponent,
        CartDeletePopupComponent,
    ],
    entryComponents: [
        CartComponent,
        CartDialogComponent,
        CartPopupComponent,
        CartDeleteDialogComponent,
        CartDeletePopupComponent,
    ],
    providers: [
        CartService,
        CartPopupService,
        CartResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularkatrCartModule {}

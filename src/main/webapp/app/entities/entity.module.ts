import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularkatrProductModule } from './product/product.module';
import { AngularkatrCartModule } from './cart/cart.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AngularkatrProductModule,
        AngularkatrCartModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularkatrEntityModule {}

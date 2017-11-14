import { BaseEntity } from './../../shared';

export class Cart implements BaseEntity {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
    ) {
    }
}

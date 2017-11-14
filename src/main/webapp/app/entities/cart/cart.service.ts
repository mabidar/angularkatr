import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Cart } from './cart.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class CartService {

    private resourceUrl = SERVER_API_URL + 'api/carts';

    constructor(private http: Http) { }

    create(cart: Cart): Observable<Cart> {
        const copy = this.convert(cart);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(cart: Cart): Observable<Cart> {
        const copy = this.convert(cart);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Cart> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(cart: Cart): Cart {
        const copy: Cart = Object.assign({}, cart);
        return copy;
    }
}

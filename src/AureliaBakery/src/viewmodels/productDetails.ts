import {DataService} from 'services/dataservice';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class ProductDetails {
    product;

    constructor(private dataservice) {
        this.dataservice = dataservice;
    }

    activate(params, routeConfig) {
        this.product = this.dataservice.getProductById(params.productId);
    }
}
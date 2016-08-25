import {DataService} from 'services/dataservice';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class CategoryDetails {
    products;
    category;

    constructor(private dataservice) {
        this.dataservice = dataservice;
    }

    activate(params, routeConfig) {
        let categoryId = params.categoryId;
        this.products = this.dataservice.getProductsByCategoryId(categoryId);
        this.category = this.dataservice.getCategoryById(categoryId);
    }
}
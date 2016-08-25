import {DataService} from 'services/dataservice';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class Categories {
    categories;

    constructor(dataservice) {
        this.categories = dataservice.getCategories();
    }
}
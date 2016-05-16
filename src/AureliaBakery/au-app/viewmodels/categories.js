import {DataService} from 'services/dataservice';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class Categories {
    constructor(dataservice) {
        this.categories = dataservice.getCategories();
    }
}
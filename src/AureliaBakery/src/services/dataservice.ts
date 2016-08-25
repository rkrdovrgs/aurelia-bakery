import {products} from 'services/productData';
import {categories} from 'services/categoryData';
import _ from 'lodash';

export class DataService {
    getProductsByCategoryId(categoryId) {
        return !!categoryId ?
            _.filter(products, x => x.categoryId === parseInt(categoryId)) :
            products;
    }

    getProductById(productId) {
        return _.find(products, x => x.id === parseInt(productId));
    }

    getCategories() {
        return categories;
    }

    getCategoryById(categoryId) {
        return _.find(categories, x => x.id === parseInt(categoryId));
    }
}
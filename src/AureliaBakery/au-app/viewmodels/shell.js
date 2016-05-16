export class Shell {
    configureRouter(config, router) {
        this.router = router;
        config.title = "Aurelia Bakery";
        
        config.map([
			{ 
			    route: ['', 'categories', 'categories/:categoryId'], 
			    moduleId: 'viewmodels/categoryDetails'
			},
            {
                route: 'productDetails/:productId',
                moduleId:'viewmodels/productDetails'
            }
        ]);
    }
}
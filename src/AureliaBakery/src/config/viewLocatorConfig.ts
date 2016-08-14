import {ViewLocator} from 'aurelia-framework';

export function viewLocatorConfig() {
    ViewLocator.prototype.convertOriginToViewUrl = (origin) => {
        let moduleId = origin.moduleId;
        var id = moduleId.endsWith('.js') ?
            moduleId.substring(0, moduleId.length - 3) :moduleId;

        return id.replace('viewmodels', 'views') + '.html';
    };    
}
"use strict";
require('bootstrap');
require('lodash');
var viewLocatorConfig_1 = require('config/viewLocatorConfig');
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    viewLocatorConfig_1.viewLocatorConfig();
    aurelia.start().then(function (a) { return a.setRoot('viewmodels/shell'); });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map
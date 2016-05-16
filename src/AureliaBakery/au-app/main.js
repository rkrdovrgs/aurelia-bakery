import 'bootstrap';
import 'lodash';

import {viewLocatorConfig} from 'config/viewLocatorConfig';
import {inject} from "aurelia-framework";

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    viewLocatorConfig();

    aurelia.start().then(a => a.setRoot('viewmodels/shell'));
}
'use strict';
var express = require('./express');
var loopbackExpress = require('./server-app');
var proto = require('./application');
var fs = require('fs');
var ejs = require('./ejs');
var path = require('path');
var merge = require('util')._extend;
var assert = require('assert');
var Registry = require('./registry');
var juggler = require('./loopback-datasource-juggler');
var configureShareMethods = require('./configure-shared-methods');

var loopback = module.exports = createApplication;


function createApplication(options) {
    var app = loopbackExpress();
    merge(app, proto);
    app.loopback = loopback;

    app.on('modelRemoted', function () {
        app.models().forEach(function (Model) {
            if(!Model.config) return;
            configureShareMethods(Model, app.get('remoting'), Model.config);
        });
    });
}

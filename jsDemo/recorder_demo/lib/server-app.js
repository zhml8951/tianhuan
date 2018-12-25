'use strict';
var g = require('./globalize');
var assert = require('assert');
var express = require('./express');
var merge = require('util')._extend;
var mergePhaseNameLists = require('./loopback-phase').mergePhaseNameLists;
var debug = require('./debug')('loopback:app');

const BUILTIN_MIDDLEWARE = {builtin: true};
var proto = {};

module.exports = function loopbackExpress() {
    var app = express();
    app.__expressLazyRouter = app.lazyrouter;
    merge(app, proto);
    return app;
};

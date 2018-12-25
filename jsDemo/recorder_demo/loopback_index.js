'use strict';
/**
 *  loopback - public api
 */
const loopback = module.exports = require('./lib/loopback');
//TODO . add loopback-datasource-juggler
const datasourceJuggler = require('loopback-datasource-juggler');

loopback.Connector = require('./lib/connectors/base-connector');
loopback.Memory = require('./lib/connectors/memory');
loopback.Mail = require('./lib/connectors/mail');
//TODO ... add loopback-connector-remote;
loopback.Remote = require('loopback-connector-remote');

loopback.GeoPoint = require('loopback-datasource-juggler/lib/geo').GeoPoint;
loopback.DateString = require('loopback-datasource-juggler/lib/date-string');
loopback.ValidationError = loopback.Model.ValidationError;
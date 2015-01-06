'use strict';

// Dependencies
var Q       = require('q'),
    request = require('request');

// Privates
var apiHost    = 'https://graph.facebook.com',
    apiVersion = 'v2.2',
    fqlVersion = 'v2.1';

exports.getData = function(settings) {
    var deferred = Q.defer();

    // Raise error is there is no access token
    if (settings.token.length === 0) {
        deferred.reject(new Error('Invalid access token'));
        return deferred.promise;
    }

    // Raise error is REST query is empty AND no FQL query given either
    if (settings.rest.length === 0 && settings.fql.length === 0) {
        deferred.reject(new Error('No query given'));
        return deferred.promise;
    }

    // Handle deprecated FQL queries
    if (settings.fql.length !== 0) {
        deferred.resolve([]);
    }

    // Handle REST query
    if (settings.rest.length !== 0) {
        deferred.resolve([]);
    }

    return deferred.promise;
};

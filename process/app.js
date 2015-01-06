'use strict';

// Dependencies
var Q       = require('q'),
    graph   = require('fbgraph');

// Privates
var appId     = process.env.FB_GRAPH_SLAB_ID,
    appSecret = process.env.FB_GRAPH_SLAB_SECRET;

var extendAccessToken = function(appId, appSecret, token) {
    var deferred = Q.defer();

    graph.extendAccessToken({
        "access_token"  : token,
        "client_id"     : appId,
        "client_secret" : appSecret
    }, function (err, facebookRes) {
        if(err) {
            deferred.reject(err);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

exports.getData = function(settings) {
    var deferred = Q.defer();

    // Validate token length
    if (settings.authorizedCall && settings.token.length === 0) {
        deferred.reject(new Error('Invalid access token'));
        return deferred.promise;
    }

    // Raise error if REST query is empty
    if (settings.query.length === 0) {
        deferred.reject(new Error('No query given'));
        return deferred.promise;
    }

    // If user has not authorized the app make the request and let
    // facebook reject the call
    if (!settings.authorizedCall) {
        graph.get(settings.query, function(err, res) {
            if (err) {
                deferred.reject(err);
                return;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    // If the user has authorized the app then extend token lifetime to 60 days
    extendAccessToken(appId, appSecret, settings.token)
        .then(function(facebookRes) {
            console.log(facebookRes);

            graph.setAppSecret(appSecret);
            graph.setAccessToken(settings.token);

            graph.get(settings.query, function(err, res) {
                if (err) {
                    deferred.reject(err);
                    return;
                }
                deferred.resolve(res);
            });
        })
        .fail(function(err) {
            deferred.reject(err);
        });

    return deferred.promise;
};

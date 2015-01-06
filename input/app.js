/* global $:false, slabs:false */
'use strict';

var authorizedCall = false,
    token          = '';

// @TODO: handle user authorization
var authorizeAppWithFacebook = function() {
  token = 'a_valid_token';
  authorizedCall = true;
};

var compileObject = function() {
  var query = $('#query').val();

  var settings = {
    authorizedCall : authorizedCall,
    token          : token,
    query          : query
  };

  // Submit the data to the slabs core, this also triggers the close of the iFrame.
  slabs.send(settings);
};

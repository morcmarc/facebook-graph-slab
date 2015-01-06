/* global $:false, slabs:false */
'use strict';

var authenticateWithFacebook = function() {
  var token = '';

  // @TODO: implement Facebook login

  $('#accessToken').val(token);
};

var compileObject = function() {
  var accessToken = $('#accessToken').val();
  var restQuery   = $('#restQuery').val();
  var fqlQuery    = $('#fqlQuery').val();

  var settings = {
    token : accessToken,
    rest  : restQuery,
    fql   : fqlQuery
  };

  // Submit the data to the slabs core, this also triggers the close of the iFrame.
  slabs.send(settings);
};

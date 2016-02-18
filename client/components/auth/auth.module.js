'use strict';

angular.module('memesApp.auth', [
  'memesApp.constants',
  'memesApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

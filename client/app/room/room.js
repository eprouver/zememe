'use strict';

angular.module('memesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/room/:roomId', {
        templateUrl: 'app/room/room.html',
        controller: 'RoomCtrl',
        controllerAs: 'room'
      });
  });

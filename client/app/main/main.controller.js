'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.rooms = [];

    $http.get('/api/rooms').then(response => {
      this.rooms = response.data;
      socket.syncUpdates('room', this.rooms);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('room');
    });
  }

  addThing() {
      this.$http.post('/api/rooms');
  }

  deleteThing(thing) {
    this.$http.delete('/api/rooms/' + thing._id);
  }
}

angular.module('memesApp')
  .controller('MainController', MainController);

})();

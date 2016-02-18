'use strict';

angular.module('memesApp')
  .controller('RoomCtrl', ['$scope', '$routeParams', 'socket', '$http', 'growl',
  'memes', '$q', '$timeout',
    function ($scope, $routeParams, socket, $http, growl,
    memes, $q, $timeout) {

      this.$http = $http;
      $scope.room = this;
      $scope.myData = {
        background: '',
        bottom: ''
      };

      this.startRound = function(){
        $scope.room.memes = memes.getImages();

        memes.getTop(1).then(function(res){
          $http.put('/api/rooms/'+$routeParams.roomId, {
            top: res[0],
            background: ''
          });

          $scope.myData = {
            background: '',
            bottom: ''
          };
        });
      };

      this.startRound();

      this.addSubmission = function(){
        $http.put('/api/rooms/'+$routeParams.roomId, {
          submissions: fake,
        }).then(function(res){
          growl.info('Submission Added')
        }, function(res){
          growl.error('Could not add submission');
          console.error(res);
        })
      }

      $http.get('/api/room/'+$routeParams.roomId).then(response => {
        this.roomData = response.data[0];
        socket.syncUpdates('room', response.data, function(e, obj){
          $scope.room.roomData = obj;

        });
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('rooms/'+$routeParams.roomId);
      });
  }]);

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, libretaService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.alumnos = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  /*
  libretaService.getAlumnos().then( function (response) {
    angular.forEach(response, function (alumno) {
      $scope.alumnos.push(alumno);
    });
  }, function (error) {
    console.log(error);
  });
  */
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log($stateParams);
  $scope.alumno = Chats.get($stateParams.alumnoId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

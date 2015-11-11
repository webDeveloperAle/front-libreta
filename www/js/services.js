angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var alumnos = [{
    id: 1,
    nombre: "Alejandro Sayegh",
    dni: "31286691",
    curso: "1ro A",
    img: "img/ben.png"
  }, {
    id: 2,
    nombre: "Rolo Sobisch",
    dni: "123434334",
    curso: "1ro A",
    img: "img/adam.jpg"
  }, {
    id: 3,
    nombre: "Pipo Pompon",
    dni: "101010101",
    curso: "4ro B",
    img: "img/max.png"
  }, {
    id: 4,
    nombre: "Leo Sobisch",
    dni: "43565656",
    curso: "2ro C",
    img: "img/mike.png"
  }, {
    id: 5,
    nombre: "Coco Williams",
    dni: "33445566",
    curso: "6ro A",
    img: "img/perry.png"
  }];

  return {
    all: function() {
      return alumnos;
    },
    remove: function(alumno) {
      alumnos.splice(alumnos.indexOf(alumno), 1);
    },
    get: function(id) {
      for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === parseInt(id)) {
          return alumnos[i];
        }
      }
      return null;
    }
  };
})

.service('libretaService', function($http, $q) {

    var url = 'http://localhost/api/';

    function _getAlumnos() {
      var defer = $q.defer();

      $http.get("../json/alumnos.json")
        .success(function (response) {
          defer.resolve(response);
        })
        .error(function (response) {
          defer.reject(response);
        });

      return defer.promise;
    }

    return {
      getAlumnos: _getAlumnos
    }
});

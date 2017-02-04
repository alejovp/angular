
angular.module('arrayApp', [])

  .controller('arrayController', function ($scope) {
    var students = ['Carles', 'Jonas', 'Bijay', 'Josep', 'Xavier', 'Ignasi', 'Ernesto', 'Stivali', 'Fran', 'Ezequiel', 'Alejandro', 'Oscar']

    var addName = function (name) {
      students.push(name)
      $scope.userInput = ''
    }

    var deleteName = function (name) {
      var index = students.indexOf(name)
      students.splice(index, 1)
    }

    $scope.students = students
    $scope.addName = addName
    $scope.deleteName = deleteName
  })

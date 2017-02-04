angular.module('myApp')
  .controller('reposController', function ($scope, $rootScope, reposFactory) {
    // $http.get vs $.ajax

    reposFactory.getRepos($scope.username)
      .then(function (response) {
        $scope.repos = response.data
        console.log(repos)
      })

    $scope.showRepos = function (e) {
      e.preventDefault()
      $scope.repos.push({ name: $scope.username })
      // $scope.username = ''
    }

    $scope.removeElement = function (index) {
      $scope.repos.splice(index, 1)
    }
  })

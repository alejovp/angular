angular.module('myApp')
  .factory('reposFactory', function ($http) {
    var url = 'https://api.github.com/users/<%NAME%>/repos'

    function getRepos (username) {
      var urlFilled = url.replace('<%NAME%>', username)
      return $http.get(urlFilled)
    }

    return {
      getRepos: getRepos
    }
  })

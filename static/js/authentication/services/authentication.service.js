
(function () {
  'use strict';

  angular
    .module('djangular.authentication.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];


  function Authentication($cookies, $http) {

    var Authentication = {
      register: register
    };

    return Authentication;


    function register(email, password, username) {
      return $http.post('/api/accounts/', {
        username: username,
        password: password,
        email: email
      });
    }
  }
})();
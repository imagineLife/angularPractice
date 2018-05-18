(function(angular) {
  'use strict';
angular.module('scopeExample', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

/*
Scope is the glue between application controller and the view.
 During the template linking phase the directives set up $watch expressions
  on the scope. The $watch allows the directives to be notified
   of property changes, which allows the directive to
    render the updated value to the DOM.

Both controllers and directives have reference to the scope,
 but not to each other. This arrangement isolates the controller
  from the directive as well as from the DOM. This is an
   important point since it makes the controllers view agnostic,
    which greatly improves the testing story of the applications.


*/
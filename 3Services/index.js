(function(angular) {
  'use strict';
angular.module('finance2', [])
  .factory('currencyConverter', function() {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    var convert = function(amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    return {
      currencies: currencies,
      convert: convert
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
/*

We moved the convertCurrency function and the definition of the existing currencies
 into the new file finance2.js. 
 But how does the controller get a hold of the now separated function?

This is where Dependency Injection comes into play.
 Dependency Injection (DI) is a software design pattern that 
  deals with how objects and functions get created
   and how they get a hold of their dependencies.
    Everything within Angular (directives, filters, controllers, services, ...)
     is created and wired using dependency injection.
      Within Angular, the DI container is called the injector.

To use DI, there needs to be a place where all the things that should work together are registered. In Angular, this is the purpose of the modules. When Angular starts, it will use the configuration of the module with the name defined by the ng-app directive, including the configuration of all modules that this module depends on.

In the example above: The template contains the directive ng-app="invoice2". This tells Angular to use the invoice2 module as the main module for the application. The code snippet angular.module('invoice2', ['finance2']) specifies that the invoice2 module depends on the finance2 module. By this, Angular uses the InvoiceController as well as the currencyConverter service.

Now that Angular knows of all the parts of the application, it needs to create them. In the previous section we saw that controllers are created using a constructor function. For services, there are multiple ways to specify how they are created (see the service guide). In the example above, we are using an anonymous function as the factory function for the currencyConverter service. This function should return the currencyConverter service instance.

Back to the initial question: How does the InvoiceController get a reference to the currencyConverter function? In Angular, this is done by simply defining arguments on the constructor function. With this, the injector is able to create the objects in the right order and pass the previously created objects into the factories of the objects that depend on them. In our example, the InvoiceController has an argument named currencyConverter. By this, Angular knows about the dependency between the controller and the service and calls the controller with the service instance as argument.

The last thing that changed in the example between the previous section and this section is that we now pass an array to the module.controller function, instead of a plain function. The array first contains the names of the service dependencies that the controller needs. The last entry in the array is the controller constructor function. Angular uses this array syntax to define the dependencies so that the DI also works after minifying the code, which will most probably rename the argument name of the controller constructor function to something shorter like a.






*/
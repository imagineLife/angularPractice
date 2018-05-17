/*

NOTES
From Angular Docs

THIS IS A TEMPLATE, parsed & processed with COMPILER, turned into the VIEW
This looks like normal HTML, with some new markup.
 In Angular, a file like this is called a template. 
  When Angular starts your application,
   it parses and processes this new markup from the template using the compiler.
    The loaded, transformed and rendered DOM is then called the VIEW.

DIRECTIVES

IE ng-model

The first kind of new markup are the directives.
 They apply special behavior to attributes or elements in the HTML.
  In the example above we use the ng-app attribute,
   which is linked to a directive that automatically initializes our application. Angular also defines a directive for the input element that adds extra behavior to the element. The ng-model directive stores/updates the value of the input field into/from a variable.


Custom directives to access the DOM: In Angular, the only place where an application should access the DOM is within directives. This is important because artifacts that access the DOM are hard to test. If you need to access the DOM directly you should write a custom directive for this. The directives guide explains how to do this.
The second kind of new markup are the double curly braces {{ expression | filter }}: When the compiler encounters this markup, it will replace it with the evaluated value of the markup. An expression in a template is a JavaScript-like code snippet that allows Angular to read and write variables. Note that those variables are not global variables. Just like variables in a JavaScript function live in a scope, Angular provides a scope for the variables accessible to expressions. The values that are stored in variables on the scope are referred to as the model in the rest of the documentation. Applied to the example above, the markup directs Angular to "take the data we got from the input widgets and multiply them together".

The example above also contains a filter. A filter formats the value of an expression for display to the user. In the example above, the filter currency formats a number into an output that looks like money.

The important thing in the example is that Angular provides live bindings: Whenever the input values change, the value of the expressions are automatically recalculated and the DOM is updated with their values. The concept behind this is two-way data binding.




*/
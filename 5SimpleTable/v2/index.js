let app = angular
	.module("tableModule", [])
	.controller("tableController", ($scope) => {
		let persons = [
		    { name:'Tom', gender: 'Male', city: 'Hartford'},
		    { name:'Jerry', gender: 'Male', city: 'San Francisco'},
		    { name:'Ben', gender: 'Male', city: 'ST. Louis'},
		    { name:'Sally', gender: 'Female', city: 'Sao Palo'},
		    { name:'Maria', gender: 'Female', city: 'Orlando'},
		  ];

		  $scope.persons =persons;
	})
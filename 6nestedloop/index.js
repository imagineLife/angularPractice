let app = angular
	.module("tableModule", [])
	.controller("tableController", ($scope) => {
		let countries = [
			{
				name: 'India',
				cities: [
					{name: 'Hyderabad'},
					{name: 'Chennai'}
				]
			},
			{
				name: 'USA',
				cities: [
					{name: 'Los ANgeles'},
					{name: 'Chicago'}
				]
			}
		]

		  $scope.countries = countries;
	})
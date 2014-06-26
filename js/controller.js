// Gallery Controller
bsd.controller('galCtrl', ['$scope',
	
	function ($scope) {
		// Recent Projects 
		$scope.projects = 
		[
			{
			img: "drop",
			url: "github.com",	
			title: "Drop",
			desc: "Drop is an application im building for final Project for school. It will allow snowboarding to enter the social media network."
			},
			{
			img: "wcf",
			url: "github.com",	
			title: "Westmoreland Contract Furniture",
			desc: "Westmoreland Contract Furniture's Custom Mobile Friendly Porfolio."
			},
			{
			img: "guru",
			url: "github.com",	
			title: "Guru e-Learning",
			desc: "A Ficticious site created for educational purposes. Used a JS library interacting with an Actionscript library to create a custom flash player."
			},
			{
			img: "tidy",
			url: "github.com",	
			title: "Tidy",
			desc: "Pure JS MVC Framwork for a 'Tidy' task manager application."
			}
		]
}]);

// create angular controller
bsd.controller('contactCtrl', function($scope) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) {
			alert('our form is amazing');
		}

	};

});



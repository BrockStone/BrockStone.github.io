// Gallery Controller
bsd.controller('galCtrl', ['$scope',
	
	function ($scope) {
		// Recent Projects 
		$scope.projects = 
		[
			{
			img: "drop",
<<<<<<< HEAD
			url: "https://github.com/BrockStone/drop",	
=======
			url: "github.com",	
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c
			title: "Drop",
			desc: "Drop is an application im building for final Project for school. It will allow snowboarding to enter the social media network."
			},
			{
			img: "wcf",
<<<<<<< HEAD
			url: "https://github.com/BrockStone/Westmoreland_Contract_Furniture",	
=======
			url: "github.com",	
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c
			title: "Westmoreland Contract Furniture",
			desc: "Westmoreland Contract Furniture's Custom Mobile Friendly Porfolio."
			},
			{
			img: "guru",
<<<<<<< HEAD
			url: "https://github.com/BrockStone/Guru_eLearning",	
=======
			url: "github.com",	
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c
			title: "Guru e-Learning",
			desc: "A Ficticious site created for educational purposes. Used a JS library interacting with an Actionscript library to create a custom flash player."
			},
			{
			img: "tidy",
<<<<<<< HEAD
			url: "https://github.com/BrockStone/Tidy",	
=======
			url: "github.com",	
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c
			title: "Tidy",
			desc: "Pure JS MVC Framwork for a 'Tidy' task manager application."
			}
		]
<<<<<<< HEAD
	}	
]);
=======
}]);
>>>>>>> d367ebf4a9787e15949f66cb38622ebe6ac1422c

// create angular controller
bsd.controller('contactCtrl', function($scope, $http) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {
		//$scope.formData
		// check to make sure the form is completely valid
		if (isValid) {
			//alert('our form is amazing');
			var params = "name=" + $scope.formData.name + "&email=" + $scope.formData.email + "&msg=" +$scope.formData.msg;
			
			$http({
		        method  : 'POST',
		        url     : 'contact_process.php',
		        data  	: params,//$scope.formData  // pass in data as strings
		        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		    }).success(function(data, status, headers, config){
				console.log("success", data);	
				$scope.success = "Recieved your message! Will Be in touch Shortly";
				$scope.formData.name = " ";
				$scope.formData.email = " ";
				$scope.formData.msg = " ";
		    }).error(function(data, status, headers, config){
		    	console.log("error", data);	
		    })
		    
	        
		}

	};

});



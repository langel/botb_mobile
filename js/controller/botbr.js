angular.module('botb_mobile.controllers')



.controller('botbr-profile', function($scope, api_caller, $stateParams) {
	api_caller.load('botbr', $stateParams.botbr_id)
	.then(function(response) {
		$scope.botbr = response.data;
	});
})


.controller('botbr-entries', function($scope, infinite_loader, $stateParams) {
	$scope.entries = infinite_loader('entry/list', '?filters=botbr_id~' + $stateParams.botbr_id + '&sort=datetime&desc=true');
});

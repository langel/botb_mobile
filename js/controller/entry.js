angular.module('botb_mobile.controllers')



.controller('entry-recent', function($scope, $http, infinite_loader) {
	$scope.entries = infinite_loader('entry/list', '?filters=battle_id~2844&sort=score&desc=true');
})



.controller('entry-profile', function($state, $scope, $stateParams, api_caller) {
	$scope.api_botbr_url = $state.current.data.api_botbr_url;
	api_caller.load('entry', $stateParams.entry_id)
	.then(function(response) {
		$scope.entry = response.data;
		console.log(response.data);
	});
});

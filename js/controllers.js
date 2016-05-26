angular.module('botb_mobile.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('EntryCtrl', function($scope, $http) {
	$http({
		method: 'GET',
		url: 'http://battleofthebits.org/api/v1/entry/list/battle_id/666?sort_by=score&desc=true'
	}).then(function successCallback(response) {
		$scope.entry_list = response.data;
		console.log(response);
	}, function errorCallback(response) {
		console.log(response);
	});
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

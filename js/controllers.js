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

.controller('tabs-control', function($scope, $ionicTabsDelegate) {
	console.log('asdasdasd');
	$scope.goHome = function() {
		//$ionicTabsDelegate.$getByHandle('botb-tabs');
		//$ionicTabsDelegate.$getByHandle('botb-tabs').selectedIndex();
//		$ionicTabsDelegate.$getByHandle('botb-tabs').select(0);
		console.log('tab click');
		console.log($ionicTabsDelegate.$getByHandle('botb-tabs'));
	}  
})


.controller('player-single', function($scope, $state) {
	console.log('poop');
	console.log($state);
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

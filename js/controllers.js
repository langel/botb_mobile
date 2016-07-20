angular.module('botb_mobile.controllers', [])

.controller('DashCtrl', function($scope) {})

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

.controller('player-single', function($scope, $stateParams, api_caller, player) {
	$scope.player = player;
	api_caller.load('entry', $stateParams.entry_id)
	.then(function(response) {
		$scope.entry = response.data;
		console.log(response.data);
	});
	console.log('player controller loaded');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

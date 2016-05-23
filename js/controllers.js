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

.controller('entry-recent', function($scope, $http, infinite_loader) {
	$scope.entries = infinite_loader('entry/list', '?filters=battle_id~2844&sort=score&desc=true');
})

.controller('entry-profile', function($state, $scope, $stateParams, api_caller) {
	$scope.api_botbr_url = $state.current.data.api_botbr_url;
	api_caller.load('entry', $stateParams.entry_id)
	.then(function(response) {
		$scope.entry = response.data;
	});
})

.controller('battle-entries', function($scope, $http, $stateParams, infinite_loader) {
	console.log($stateParams.battle_id);
	$scope.entries = infinite_loader('entry/list', '?filters=battle_id~' + $stateParams.battle_id + '&sort=score&desc=true');
})

.controller('battle-recent', function($scope, infinite_loader) {
	$scope.battles = infinite_loader('battle/list', '?sort=end&desc=true');
})

.controller('battle-profile', function($scope, api_caller, $stateParams) {
	console.log($stateParams);
	api_caller.load('battle', $stateParams.battle_id)
		.then(function(response) {
			$scope.battle = response.data;
		}, function (error) {
			let alert_msg = Alert.create({
				title: 'Failz0hrz Err0Hrz',
				message: 'SANTYX ERROR ::| Could not load type "battle" with id "' + battle_id + '"',
				buttons: ['Dismiss']
			});
			this.nav.present(alert_msg);
		}
	);
	console.log($scope.battle);
})

.controller('botbr-profile', function($scope, api_caller, $stateParams) {
	api_caller.load('botbr', $stateParams.botbr_id)
	.then(function(response) {
		$scope.botbr = response.data;
	});
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

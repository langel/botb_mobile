angular.module('botb_mobile.controllers')



.controller('battle-entries', function($scope, $http, $stateParams, infinite_loader) {
	$scope.entries = infinite_loader('entry/list', '?filters=battle_id~' + $stateParams.battle_id + '&sort=score&desc=true');
	$scope.view_title = 'Battle Entries';
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
});

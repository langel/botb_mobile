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

.controller('entries-recent', function($scope, $http, infinite_loader) {
	$scope.entries = infinite_loader('entry/list', '?filters=battle_id~2844&sort=score&desc=true');
})

.controller('battles-recent', function($scope, infinite_loader) {
	$scope.battles = infinite_loader('battle/list', '?sort=end&desc=true');
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

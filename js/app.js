// Ionic Battle of the Bits Mobile App

// angular.module is a global place for creating, registering and retrieving Angular modules
angular
.module('botb_mobile', [
	'ionic', 
	'botb_mobile.controllers', 
	'botb_mobile.services'
])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	// default home screen	
	$urlRouterProvider.otherwise('/tab/dash');

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	.state('scaffold', {
		abstract: true,
		templateUrl: "templates/scaffold.html"
	})

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		parent: 'scaffold',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:

	.state('tab.dash', {
		url: '/dash',
		views: {
			'tab-dash': {
				templateUrl: 'templates/tab-dash.html',
				controller: 'DashCtrl'
			}
		}
	})


	.state('tab.battle-home', {
		url: '/battle',
		views: {
			'battle': {
				templateUrl: 'templates/battle/recent.html',
				controller: 'battle-recent'
			}
		}
	})
	.state('tab.battle-profile', {
		url: '/battle/profile/:battle_id',
		views: {
			'battle': {
				templateUrl: 'templates/battle/profile.html',
				controller: 'battle-profile'
			}
		}
	})
	.state('tab.battle-entry', {
		url: '/battle/entry/:entry_id',
		views: {
			'battle': {
				templateUrl: 'templates/entry/profile.html',
				controller: 'entry-profile',
			}
		},
		data: {
			api_botbr_url: 'battle/botbr'
		}
	})
	.state('tab.battle-botbr', {
		url: '/battle/botbr/:botbr_id',
		views: {
			'battle': {
				templateUrl: 'templates/botbr/profile.html',
				controller: 'botbr-profile',
			}
		}
	})

	.state('tab.entry-recent', {
		url: '/entry/recent',
		views: {
			'entry': {
				templateUrl: 'templates/entry/recent.html',
				controller: 'entry-recent',
			}
		}
	})
	.state('tab.entry-profile', {
		url: '/entry/profile/:entry_id',
		views: {
			'entry': {
				templateUrl: 'templates/entry/profile.html',
				controller: 'entry-profile',
			}
		}
	})
	.state('tab.entry-botbr', {
		url: '/entry/botbr/:botbr_id',
		views: {
			'entry': {
				templateUrl: 'templates/botbr/profile.html',
				controller: 'botbr-profile',
			}
		}
	})
	.state('tab.entry-format', {
		url: '/entry/format/:format_token',
		views: {
			'entry': {
				templateUrl: 'templates/format/profile.html',
				controller: 'format-profile',
			}
		}
	})


	.state('tab.chats', {
		url: '/chats',
		views: {
			'tab-chats': {
				templateUrl: 'templates/tab-chats.html',
				controller: 'ChatsCtrl'
			}
		}
	})
	.state('tab.chat-detail', {
		url: '/chats/:chatId',
		views: {
			'tab-chats': {
				templateUrl: 'templates/chat-detail.html',
				controller: 'ChatDetailCtrl'
			}
		}
	})

	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'AccountCtrl'
			}
		}
	});

	// if none of the above states are matched, use this as the fallback

}]);

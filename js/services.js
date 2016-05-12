angular.module('botb_mobile.services', ['ngResource'])

.factory('Entry', function($resource) {
	var entry = $resource('http://battleofthebits.org/api/v1/entry/666');
	console.log(entry);
	return entry;
	
})

.factory('api_resource', function($http) {
	var api_resource = {
		url_base : 'http://battleofthebits.org/api/v1/',
		data : {},
		call : function(query) {
			$http({
				method: 'GET',
				url: this.url_base + query
			}).then(function successCallback(response) {
				this.data = response.data;
				console.log(this.data);
				return this.data;
			}, function errorCallback(response) {
				console.log(response);
			});
		}
	};
	return api_resource;
})

.factory('ordinal_suffix', function() {
	return function(n) {
		var j = n % 10;
		var k = n % 100;
		if (j == 1 && k != 11) {
			return n + "st";
		}
		if (j == 2 && k != 12) {
			return n + "nd";
		}
		if (j == 3 && k != 13) {
			return n + "rd";
		}
		return n + "th";
	}
})

.factory('infinite_loader', function($http, $rootScope) {
	return function(query, sort) {
		return {
			query: query,
			sort: sort,
			page: 0,
			items: [],
			more: true,
			api_url: 'http://battleofthebits.org/api/v1/',
			load_items: function() {
				var $this = this;
				$http.get(this.api_url + query + '/' + this.page + sort)
				.success(function(items) {
					angular.forEach(items, function(item) {
						$this.items.push(item);
					});
				})
				.error(function(data) {
					$this.more = false;
				})
				.finally(function() {
					$this.page++;
					$rootScope.$broadcast('scroll.infiniteScrollComplete');
				});
			},
		};
	};
})

.factory('Chats', function() {

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

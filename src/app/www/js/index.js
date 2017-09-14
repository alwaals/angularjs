var myapp = angular.module("myapp", ['google-maps',"ui.router"]);

myapp.config(function($stateProvider, $urlRouterProvider) { 

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'services.html'
        })
        .state('login', {  
            url: '/login',
            templateUrl: 'login.html' 
        });

});


myapp.factory("dataResourceService", function($http, $q, $rootScope) {
    var dataResource = {
        // getMakeModel: getMakeModel,
        getStores: getStores,
        getServices: getServices
    }
    return dataResource;

    function getMakeModel() {
        return createRequest({
            method: "GET",
            // url: "http://192.168.0.103:8080/user/register"
        });
    }

    function getStores(data) {
        return createRequest({
            method: "POST",
            // url: "http://192.168.0.103:8080/user/register",
            data: data
        });
    }

    function getServices() {
        return createRequest({
            method: "GET",
            // url: "http://192.168.0.103:8080/user/getUser?2"
        });
    }

    function createRequest({
        method = "",
        url = "",
        params = {},
        data = {}
    } = {}) {
        var deferred = $q.defer();
        $http({
                method,
                url,
                params,
                data
            })
            .success(function(response) {
                deferred.resolve(response);
            })
            .error(function(error) {
                $rootScope.showLoader = false;
                deferred.reject();
            });
        return deferred.promise;
    }
});

myapp.filter('unique', function() {

    return function(arr, field) {
        var o = {},
            i, r = [];
        var l = !!arr ? arr.length : 0;
        for (i = 0; i < l; i += 1) {
            o[arr[i][field]] = arr[i];
        }
        for (i in o) {
            r.push(o[i]);
        }
        return r;
    };
})

myapp.controller("SearchCtrl", function($scope) {
  
});
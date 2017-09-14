(function() {
    'use strict';

    angular
        .module('loginapp')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$window', 'loginSrv', 'notify'];

    function LoginCtrl($window, loginSrv, notify) {
        /* jshint validthis:true */
        var vm = this;
        vm.validateUser = function() {
            loginSrv.validateLogin(vm.username, vm.password).then(function(data) {
                if (data.isValidUser) {
                    $window.location.href = '/login.html';
                } else
                    alert('Login incorrect');
            });
        }
    }
})();
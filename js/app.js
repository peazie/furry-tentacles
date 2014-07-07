var AdManager = angular.module('AdManager', ['ngRoute']);

AdManager.run(['$rootScope', '$window', 'Fb', function($rootScope, $window, Fb) {

    $window.fbAsyncInit = function() {
        FB.init({
            appId      : '679996358720931',
            cookie     : true,  // enable cookies to allow the server to access the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.0' // use version 2.0
        });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $rootScope.Fb = Fb;
}]);

AdManager.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/views/home.html',
    });
}]);

AdManager.controller('HomeCtrl', ['$scope', 'Fb', function($scope, Fb) {
}]);



AdManager.service('Fb', ['$rootScope', '$http', function($rootScope, $http) {

    this.login = function() {
        FB.login(function(response) {
                console.log(response);
            },
            {
                scope: 'public_profile,email'
            }
        );
    }

    var statusChangeCallback = function(response) {
        console.log('statusChangeCallback');
        console.log(response);

        if (response.status === 'connected') {
            testAPI();
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
        } else {
            document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
        }
    }


    this.checkLoginState = function() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }


    var testAPI = function() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        });
    }//testAPI

}]);

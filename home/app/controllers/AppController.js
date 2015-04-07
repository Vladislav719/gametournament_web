/**
 * Created by vladislav on 07.04.2015.
 */

app.controller('AppController', ['$scope', '$http', '$location', 'TestApiService', '$timeout',
    function ($scope, $http, $location, TestApiService, $timeout) {
        TestApiService.sendTestRequest().success(function (user) {
            console.log(user.email);

        });
    }]);

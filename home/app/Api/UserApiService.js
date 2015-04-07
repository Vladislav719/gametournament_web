/**
 * Created by vladislav on 07.04.2015.
 */
app.service('UserApiService', function ($http, Api) {
    return {
        getUserInfo: function (userId) {
            return $http.get(Api.send('user/') + userId);
        }
    };
});
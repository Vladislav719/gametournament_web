/**
 * Created by vladislav on 07.04.2015.
 */

app.service('TestApiService', function ($http, Api) {
    return {
        sendTestRequest: function (param) {
            return $http.get(Api.send('test'));
        }
    }
})
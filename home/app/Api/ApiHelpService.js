/**
 * Created by vladislav on 07.04.2015.
 */
app.service('Api', function () {
    var mainUrl = 'http://localhost:8080/';
    return {
        send : function (url) {
            return mainUrl+url;
        }
    };
});
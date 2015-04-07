/**
 * Created by vladislav on 07.04.2015.
 */
app.service('authInfo', function ($http, $location, UserApiService, UserInfo) {
    var user = null;
    var userInfo = null;
    return {
      getUserInfo: function () {
          var self = this;
          if (userInfo == null && user != null) {
              UserApiService.getUserInfo(self.getUser().userId).success(function (data) {
                  userInfo = data;
              });
              return userInfo;
          }
      }
    };
});
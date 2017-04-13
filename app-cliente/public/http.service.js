// https://github.com/sombriks/roundabout/blob/master/ambbi-morador/src/httpfilters.js
// https://github.com/sombriks/aplicativo-catolico/blob/master/app-usuario/src/components/restapi.js

angular.module("webapp").service('httpService', function ($http) {

  let baseURL = "http://127.0.0.1:3000";
  
  this.save = (obj) => $http.post(baseURL + "/save", obj);
  this.list = () => $http.get(baseURL + "/list");
});

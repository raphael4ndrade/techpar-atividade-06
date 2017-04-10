angular
    .module("webapp").service('httpService', function($http){
        this.save = (obj) => $http.post("/save", obj);
        this.list = () => $http.get("/list");
    })
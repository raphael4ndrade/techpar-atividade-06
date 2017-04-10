angular
    .module("webapp").config(($routeProvider) => {
        $routeProvider
            .when('/list', {
                controller : "toListController",
                templateUrl: "templates/list.html",
                controllerAs: "ctrl"
            })

            .when('/save', {
                controller : "toSaveController",
                templateUrl: "templates/save.html",
                controllerAs: "ctrl"
            })
            .otherwise('/list');
    });
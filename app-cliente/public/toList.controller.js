angular
    .module("webapp").controller('toListController', function(httpService){
        this.list = () => {
            httpService.list()
                .then((ret) => this.listAll = ret.data);
        }

        this.list();
    })
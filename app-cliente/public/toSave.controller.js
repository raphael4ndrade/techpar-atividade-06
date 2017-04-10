angular 
    .module("webapp").controller('toSaveController', function(httpService){
        this.obj = {}

        this.save = () => {
            httpService.save(this.obj)
                .then( (ret) => {
                    this.obj = {};
                });
        };
    })
angular.module("storeService", [])

    .service('Storage', function() {
   
        this.name = 'EmpeekStorage';
        this.getData = function () {
            
            let data = localStorage.getItem(this.name);

            return JSON.parse(data);
        };
        this.setData = function(data) {
            // localStorage.clear();
            localStorage.setItem(this.name, JSON.stringify(data));
        };

    });

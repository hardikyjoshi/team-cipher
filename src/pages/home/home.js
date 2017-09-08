import CipherApp from "../../app.js";
import "./home.scss"

var HomeController = function($scope, sharedService) {
    var self = this;
    self.name = "Hardik";
    self.carouselData = {
        cards: [{
                title: 'ddf'
            },
            {
                title: 'ddf2'
            },
            {
                title: 'ddf3'
            }
        ]
    }
    self.init = function() {
        var promise = sharedService.getJSON();

        promise.then(function(data) {
            console.log(data);
        });
    }
};

HomeController.$inject = ['$scope', 'sharedService'];

CipherApp.module.controller('homeController', HomeController);
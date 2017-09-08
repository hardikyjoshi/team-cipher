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
            self.footerData = data.footerData;
            self.footerSocialMedia = data.footerSocialMedia;
        });
    }
};

HomeController.$inject = ['$scope', 'sharedService'];

CipherApp.module.controller('homeController', HomeController);
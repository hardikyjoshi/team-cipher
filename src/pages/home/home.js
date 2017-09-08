import CipherApp from "../../app.js";
import "./home.scss"

var HomeController = function($scope,sharedService) {
    var self = this;
    self.name = "Hardik";
    self.init = function() {
        var promise = sharedService.getJSON();

        promise.then(function(data) {
        	console.log(data);
        });
    }
};

HomeController.$inject = ['$scope','sharedService'];

CipherApp.module.controller('homeController', HomeController);
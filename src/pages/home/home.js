import CipherApp from "../../app.js";
import "./home.scss"

var HomeController = function($scope, sharedService) {
    var self = this;    
    self.carouselData = {
        cards: [{
                img:'cloud.svg',
                title: 'Lorem ipsum dolor. 1',
                detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia.'
            },
            {
                img:'computer.svg',
                title: 'Lorem ipsum dolor. 2',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia.'
            },
            {
                img:'rocket.svg',
                title: 'Lorem ipsum dolor. 3',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia.'
            },
            {
                img:'computer.svg',
                title: 'Lorem ipsum dolor. 4',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia.'
            },
            {
                img:'cloud.svg',
                title: 'Lorem ipsum dolor. 5',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, officia.'
            }
        ],
        cardSize:360,
        visibleCards:3
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
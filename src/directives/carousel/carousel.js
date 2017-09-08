import CipherApp from "../../app.js";
import "./carousel.scss"
import {default as carouselTemplate} from './carousel.html'
var CarouselController = function($scope,$element) {
    var self = this;
    self.name = "Mit";
    self.visibleCards = 3;
    self.translate = 0;
    console.log(self.carouselData);
    // self.cards = $element[0].querySelector('.card');
    // self.totalCards = self.cards.length;
    self.cardSize = 360;
    // if(self.totalCards>0){
    //     self.cardSize = self.cards[0].getBoundingClientRect();
    // }
    self.navLeft = function(){
        self.translate -= self.cardSize;
        console.log('left');
    }

    self.navRight = function(){
        self.translate += self.cardSize;
        console.log('right');
    }
};

CarouselController.$inject = ['$scope','$element'];

CipherApp.module.component('carouselComponent', {
    controller: CarouselController,
    templateUrl: carouselTemplate,
    controllerAs: "ctrl",
    transclude: true,
    bindings: {
        carouselData: '='
    }
});
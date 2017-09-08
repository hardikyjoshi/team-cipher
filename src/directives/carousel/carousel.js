import CipherApp from "../../app.js";
import "./carousel.scss"
import {default as carouselTemplate} from './carousel.html'
var CarouselController = function($scope,$element) {
    var self = this;
    self.translate = 0;
    self.cardSize = self.carouselData.cardSize;
    self.noOfCards = self.carouselData.cards.length;
    self.wrapSize = self.cardSize*self.noOfCards;
    self.visisbleCards = self.carouselData.visibleCards;
    self.currentCard = 0;
    self.isLeftDisabled = function () {
        return self.currentCard==0;
    }
    self.isRightDisabled = function () {
        return !(self.currentCard<(self.noOfCards-self.visisbleCards));
    }
    self.navLeft = function(){
        if(!self.isLeftDisabled()){
            self.translate += self.cardSize;
            self.currentCard--;
        }
    }

    self.navRight = function(){
        if(!self.isRightDisabled()){
            self.translate -= self.cardSize;
            self.currentCard++;
        }
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
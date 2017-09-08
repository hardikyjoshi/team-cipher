import CipherApp from "../../app.js";
import {default as cardTemplate} from './card.html'
import "./card.scss"
var CardController = function($scope) {
    var self = this;
    self.name = "Mit";
    self.visibleCards = 3;
    
};

CardController.$inject = ['$scope'];

CipherApp.module.component('cardComponent', {
    controller: CardController,
    templateUrl: cardTemplate,
    controllerAs: "ctrl",
    transclude: true,
    bindings: {
        myValue: '='
    }
});
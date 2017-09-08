import CipherApp from "../../app.js";
import {default as cardTemplate} from './card.html'
import "./card.scss"
var CardController = function($scope) {
};

CardController.$inject = ['$scope'];

CipherApp.module.component('cardComponent', {
    controller: CardController,
    templateUrl: cardTemplate,
    controllerAs: "ctrl",
    transclude: true,
    bindings: {
        cardSize: '='
    }
});
import CipherApp from "../../app.js";
import {default as panelTemplate} from './panel.html';
import {default as styles} from "./panel.scss";

var PanelComponentController = function($scope, sharedService) {
    var self = this;
    self.name = "Mit";
    
    self.init = function() {
        var promise = sharedService.getJSON();

        promise.then(function(data) {
        	self.panelData = data.panelData;
        });
    }
    self.init();
};

PanelComponentController.$inject = ['$scope', 'sharedService'];

CipherApp.module.component('panelComponent', {
    controller: PanelComponentController,
    templateUrl: panelTemplate,
    controllerAs: "ctrl"
});
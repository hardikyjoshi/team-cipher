import CipherApp from "../../app.js";
import {default as styles} from "./header.scss";
import {default as headerTemplate} from "./header.html";

var headerController = function ($scope){
	 var self = this;
};

headerController.$inject = ['$scope'];

CipherApp.module.component('headerComponent', {
    controller:headerController,
    templateUrl: headerTemplate,
    controllerAs: "ctrl"
});
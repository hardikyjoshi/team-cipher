import CipherApp from "../../app.js";
import { default as styles } from "./footer.scss";
import { default as footerTemplate } from './footer.html'

var footerController = function ($scope, sharedService) {
    var self = this;
    self.init = function () {
        var promise = sharedService.getJSON();

        promise.then(function (data) {
            console.log(data);
        });
    }
};

footerController.$inject = ['$scope', 'sharedService'];

CipherApp.module.component('footerComponent', {
    bindings: {
        footerData: '=',
        socialMediaIcons:'='
    },
    controller: footerController,
    templateUrl: footerTemplate,
    controllerAs: "ctrl"
});
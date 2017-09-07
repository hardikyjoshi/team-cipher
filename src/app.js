require('babel-polyfill');
// // var $ = require('jquery');

// // require('./vendors/jquery-ui/jquery-ui.min.js');
// // require('./vendors/jquery-ui-touch/jquery.ui.touch-punch.min.js');

// // require('tether/dist/js/tether.js');
// // require('bootstrap/dist/js/bootstrap.min.js');
// // require('./vendors/cropper/cropper.min.js');

// var angular = require('angular');
// var uiRouter = require('angular-ui-router');
// var sanitize = require('angular-sanitize');
// // var uiMask = require('angular-ui-mask');
// var ngMessages = require('angular-messages');
// // var AppComponent = require('./app.component.js');
// var Shared = require('./__shared/shared');
// // var SignupPages = require('./signup/signuppages');
// // var nuskinRegister = require('./nuskin-register/register');
// // var CommerceComponent = require('./commerce/commerce');
// // var digitalToolkitComponents = require('./digital-toolkit/digital.toolkit');
// // var prospectTargetingComponent = require('./prospect-targeting/prospect.targeting');
// var Styles = require('./stylesheets/base.scss');
// // var SlickStyle = require('./stylesheets/vendors/slick/slick.scss');
// // var SlickThemeStyle = require('./stylesheets/vendors/slick/slick-theme.scss');
// // var homescreenpage = require('./homescreen/pages/homescreen');
// // var ngSortable = require('./vendors/ng-sortable/ng-sortable.min.js');

import angular from "angular";
import "angular-ui-router";
import "angular-messages";
import { routes } from "./routes.js";

export class CipherAppClass {

    constructor() {
        // TODO, we may want to create a common module to include common things
        this.module = angular.module("cipher-app", ['ui.router', 'ngMessages']);

        this.module.config(CipherAppConfiguration);

        this.module.$inject = ['$state', '$stateParams', '$rootScope', 'ngMessages'];

        this.module.run(($state, $stateParams, $rootScope, $location) => {
            // $rootScope.strings = strings;
            $rootScope.state = $state;
            // $rootScope.configs = {};
            // $rootScope.model = {};
            // $rootScope.sharedValues = {};
            $rootScope.$on("$stateChangeSuccess", function(event, currentRoute, previousRoute) {

                window.scrollTo(0, 0);
                // Added for Offline Caching
                // if ('serviceWorker' in navigator) {
                //     navigator.serviceWorker.register('./service-worker.js');
                // }
            });

            // TODO: May want to investigate a more sophisticated solution
            // for going back to where the user wanted to go
            var destination = window.location.hash;
            if (destination) {
                var replacement = (destination.indexOf("#!") >= 0) ? "#!/" : "#/";
                destination = destination.replace(replacement, "");
                $state.go(destination);
            } else {
                if (window.location.href.indexOf('guid') >= 0) {
                    $state.go("home");
                } else {
                    $state.go("home")
                }
            }

            $rootScope.currentViewName = function() {
                return $rootScope.strings.get('routes', $state.current.name);
            };
        });
        //This is only for testing purpose.Need to remove this once actual language and market setup.
        /* var languageData = {
                             language : "en",
                             market : "US"
                         };
                         userProfileManager.setPageLocaleVal(languageData);*/
    }
}

var CipherAppConfiguration = function($stateProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('');

    for (let i = 0, len = routes.list.length; i < len; i++) {
        $stateProvider.state(routes.list[i]);
    }

    $sceDelegateProvider.resourceUrlWhitelist([    'self'
        //     'https://po.st/**',
        //     'http://pub.mecommercedev.nuskin.com/**',
        // s3Path+'/**',
    ]);
};


export var CipherApp = new CipherAppClass();
export default CipherApp;
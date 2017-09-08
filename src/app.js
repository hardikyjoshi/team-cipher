require('babel-polyfill');

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
            $rootScope.state = $state;
            $rootScope.$on("$stateChangeSuccess", function(event, currentRoute, previousRoute) {

                window.scrollTo(0, 0);
            
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
        
    }
}

var CipherAppConfiguration = function($stateProvider, $locationProvider, $sceDelegateProvider) {
    $locationProvider.hashPrefix('');

    for (let i = 0, len = routes.list.length; i < len; i++) {
        $stateProvider.state(routes.list[i]);
    }

    $sceDelegateProvider.resourceUrlWhitelist(['self']);
};


export var CipherApp = new CipherAppClass();
export default CipherApp;
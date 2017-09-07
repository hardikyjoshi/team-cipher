import CipherApp from "../app.js";
const jsonUrl = "../../src/data/data.json";

var SharedService = function($http,$q) {

	this.getJSON = function (url) {
        var deferred = $q.defer();
        $http.get(jsonUrl).then(function (response) {
            deferred.resolve(response.data);
        });

        return deferred.promise;
    };
};

SharedService.$inject = ['$http','$q'];

CipherApp.module.service('sharedService',SharedService);
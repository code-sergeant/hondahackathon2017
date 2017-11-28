(function () {
    'use strict';

    angular.module(APPNAME)
        .factory('CarDataService', CarDataService);

    CarDataService.$inject = [];

    function CarDataService() {

        const carLocations = [
            // dummy data looks like this:
            //{
            //    latitude: null,
            //    longitude: null
            //},
            //{
            //    latitude: null,
            //    longitude: null
            //}
        ];

        return carLocations;
    }
})();
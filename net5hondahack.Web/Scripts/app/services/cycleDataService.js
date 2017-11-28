(function () {
    'use strict';

    angular.module(APPNAME)
        .factory('CycleDataService', CycleDataService);

    CycleDataService.$inject = [];

    function CycleDataService() {

        const cycleLocations = [
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

        return cycleLocations;
    }
})();
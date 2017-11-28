(function () {
    'use strict';

    angular.module(APPNAME)
        .service('BikerLocationFactory', BikerLocationFactory);

    BikerLocationFactory.$inject = ['$q', '$http', 'CycleDataService', 'CarDataService'];

    function BikerLocationFactory($q, $http, CycleDataService, CarDataService) {
        const svc = this;


        svc.cycleLocations = CycleDataService.cycleLocations;
        svc.getCycleLocation = _getCycleLocation;


        function _getCycleLocation() {
            navigator.geolocation.getCurrentPosition(position => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                svc.cycleLocations.push(location);
            });
        }
    }
})();
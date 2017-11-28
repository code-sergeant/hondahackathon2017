(function () {
    'use strict';

    angular.module(APPNAME)
        .factory('BikerLocationFactory', BikerLocationFactory);

    BikerLocationFactory.$inject = ['$q', '$http'];

    function BikerLocationFactory($q, $http) {

        /////// Available services TOC ///////
        const service = {
            getBikerLoc: _getBikerLoc,
            postBikerLoc: _postBikerLoc,
            updateBikerLoc: _updateBikerLoc
        };

        return service;

        /////// Implementation details ///////
        function _getBikerLoc() {
            $http.post()
                .then();
        };

        function _postBikerLoc() {
            $http.post()
                .then();
        };

        function _updateBikerLoc() {

        };
    }
})();
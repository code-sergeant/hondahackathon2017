(function () {
	'use strict';

	angular.module(APPNAME)
		.service('BikeLocationService', BikeLocationService);
	BikeLocationService.$inject = ['$http'];

	function BikeLocationService($http) {
		var vm = this;

		vm.create = _create;
		vm.update = _update;


		function _update(data) {
			return $http({
				method: 'GET',
				url: '/api/BikeLocation/' + data.id,
				data: data
			})
		}

		function _create(data) {
			return $http({
				method: 'PUT',
				url: '/api/Bikelocation',
				data: data
			})
		}
	}
})();


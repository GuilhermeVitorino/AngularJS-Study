angular.module('listaTelefonica').factory('errorInterceptor', function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === -1) $location.path('/error');
			return $q.reject(rejection);
		}
	};
});	
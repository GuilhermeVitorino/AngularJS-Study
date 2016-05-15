angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contatosAPI, contato) {
	console.log($routeParams.id);
	$scope.contato = contato;
	/*contatosAPI.getContatos($routeParams.id).success(function (contato) {
		$scope.contato = contato;	
	});*/
});

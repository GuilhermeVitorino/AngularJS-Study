angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, uppercaseFilter, $http, 
	contatosAPI, operadorasAPI, serialGenerator) {
		console.log(serialGenerator.generate());
		/*$http não esta sendo utilizada, pois esta nos servicos injetados*/
		$scope.app = "Lista Telefonica";

		$scope.contatos = [];

		/*[
			{nome: $filter('uppercase') ("Pedro"),	telefone: "9999-7891", data: new Date(),
				operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, 		cor: "blue"},
			{nome: uppercaseFilter("Ana"), 		telefone: "9923-7892", data: new Date(),
				operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"},  	cor: "red"},
			{nome: "Marcela", 	telefone: "9199-7893", data: new Date(),
				operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, 	cor: "yellow"},
			{nome: "Camila", 	telefone: "9349-7895", data: new Date(),
				operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}, 		cor: "green"},
			{nome: "Lorena", 	telefone: "9679-7893", data: new Date(),
				operadora: {nome: "Embratel", codigo: 21, categoria: "Fixo"}, 	cor: "gray"}
		];*/

		var carregarContatos = function () {
			//$http.get("http://127.0.0.1:8080/ListaTelefonicaRESTService/api/contatos").
			contatosAPI.getContatos().success(function (data, status) {
					$scope.contatos = data;
				});
		};

		$scope.operadoras = [
			{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
			{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
			{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
			{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 6},
			{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
		];


		/*var carregarOperadoras = function () {
			//$http.get("http://127.0.0.1:8080/ListaTelefonicaRESTService/api/operadoras").
			operadorasAPI.getOperadoras().success(function (data, status) {
				$scope.contatos = data;
			});
		};*/

		/*$scope.adicionarContato = function (nome, telefone) {
			$scope.contatos.push({nome : nome, telefone : telefone});
			$scope.contatos.push(contato);
		};*/

		$scope.adicionarContato = function (contato) {
			contato.serial = serialGenerator.generate();
			$scope.contatos.push(angular.copy(contato));
			delete $scope.contato;
			$scope.contatoForm.$setPristine();	
		};

		/*$scope.adicionarContato = function (contato) {
			contato.data = new Date();
			contatosAPI.saveContato(contato).success(function (data) {
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregarContatos();
			});	
		};*/

		$scope.apagarContatos = function (contatos) {
			$scope.contatos = contatos.filter(
				function (contato) {
					if (!contato.selecionado) return contato;
				});	
		};

		$scope.isContatoSelecionado = function (contatos) {
			return contatos.some(
				function (contato) {
					return contato.selecionado;
				});
		};

		$scope.ordenarPor = function (campo) {
			$scope.criterioDeOrdenacao = campo;
			$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
		}

		carregarContatos();
	});

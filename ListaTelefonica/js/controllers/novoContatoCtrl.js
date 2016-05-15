angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $filter, contatosAPI, uppercaseFilter, operadorasAPI, 
	operadoras, serialGenerator, $location) {
		
		console.log(operadoras);
		
		/*var carregarOperadoras = function () {
			//$http.get("http://127.0.0.1:8080/ListaTelefonicaRESTService/api/operadoras").
			operadorasAPI.getOperadoras().success(function (data, status) {
				$scope.contatos = data;
			});
		};*/

		/*operadoras recebidas do routeConfig por meio do resolve*/
		$scope.operadoras = operadoras;

		/*$scope.operadoras = [
			{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
			{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
			{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
			{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 6},
			{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
		];*/

		/*$scope.adicionarContato = function (nome, telefone) {
			$scope.contatos.push({nome : nome, telefone : telefone});
			$scope.contatos.push(contato);
		};*/

		$scope.adicionarContato = function (contato) {
			/*contato.serial = serialGenerator.generate();
			$scope.contatos.push(angular.copy(contato));
			delete $scope.contato;
			$scope.contatoForm.$setPristine();*/
			$location.path("/contatos");	
		};

		/*$scope.adicionarContato = function (contato) {
			contato.data = new Date();
			contatosAPI.saveContato(contato).success(function (data) {
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregarContatos();
			});	
		};*/
});

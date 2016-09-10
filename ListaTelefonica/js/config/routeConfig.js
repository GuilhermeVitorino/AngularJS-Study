angular.module("listaTelefonica").config(function ($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {		
			/*operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			},
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			}*/
		}		
	});

	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {		
			/*operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}*/
			operadoras: function () {
				operadoras = [
					{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
					{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
					{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
					{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 6},
					{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 5},
				];

				return operadoras;
			}
		}	
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {		
			/*contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}*/
			contato: function ($route, $http) {
				if ($route.current.params.id != 5) {
					contato = {id: 1, nome: "Pedro", telefone: "9999-7891", data: new Date(),
					operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"};
					return contato;
				} else {
					return $http.get('https://forcarerro');
				}
			}
		}	
	});

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	
	$routeProvider.otherwise({redirectTo: "/contatos"});
});

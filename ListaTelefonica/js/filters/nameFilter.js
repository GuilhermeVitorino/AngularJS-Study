/*Converter nomes escritos totalmente em letra maiúsculas ou minúsculas,
deixando apenas a primeira letra maiúscula e as outras minúsculas*/ 
angular.module("listaTelefonica").filter("name", function () {
	return function (input) {
		var listaDeNomes = input.split(" ");		
		var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
			if(/(da|de)/.test(nome)) return nome; 
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();		
		});
		console.log(listaDeNomesFormatada);
		return listaDeNomesFormatada.join(" ");
	};
})

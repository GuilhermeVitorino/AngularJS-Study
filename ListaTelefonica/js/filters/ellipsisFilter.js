/*Limitar a quantidade de caracteres de uma String, incluindo
	"..." no final, se necessario, com base no tamanho passado
	por parametro.*/ 
angular.module("listaTelefonica").filter("ellipsis", function () {
	return function (input, size) {
		if (input.length <= size) return input;
		/*se size for null ou undefined ele vai ser evaluado para falso
			e 5 sera o valor de size*/
		var output = input.substring(0, size || 5) + "...";
		return output;
	};
})

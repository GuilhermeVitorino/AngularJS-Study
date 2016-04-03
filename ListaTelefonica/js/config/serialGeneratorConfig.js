angular.module("listaTelefonica").config(function (serialGeneratorProvider) {
	console.log(serialGeneratorProvider.getLength());
	serialGeneratorProvider.setLength(8);
	console.log(serialGeneratorProvider.getLength());
});

/*O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  
(a altura deve estar em metros e o peso em quilogramas). Por exemplo, 
no caso de Carlos de Souza, a altura ao quadrado é 3,09. */
/*
José
da Silva
27
83.5
1.70
Ouro*/


var nome = "José";
var idade = 27;
var peso = 83.5;
var altura = 1.70;
var plano = true;


var imc = peso / (altura*altura);

//console.log(imc);

//Aline Ferreira tem 33 anos e seu índice de massa corporal é de xx”.

console.log(nome + " tem " + idade +" anos e seu índice de massa corporal é de  " + imc.toFixed(2));



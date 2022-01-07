//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del Triángulo miden " + ladoTriangulo1 + "cm , " + ladoTriangulo2 + "cm , " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del Triángulo es de " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del Triángulo es: " + areaTriangulo  + "cm^2");
console.groupEnd();

//Código del circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo*2;
console.log("El diametro del Circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

//Perimetro 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El área del Circulo es: " + areaCirculo  + "cm^2");
console.groupEnd();
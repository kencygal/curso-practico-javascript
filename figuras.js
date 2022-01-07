//Código del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado * 4;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado( lado ){
    return lado * lado;
}
console.groupEnd();

//Código del Triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del Triángulo miden " + ladoTriangulo1 + "cm , " + ladoTriangulo2 + "cm , " + baseTriangulo + "cm");
// const alturaTriangulo = 5.5;
// console.log("La altura del Triángulo es de " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo( lado1 , lado2, base){
    return lado1 + lado2 + base;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//console.log("El área del Triángulo es: " + areaTriangulo  + "cm^2");
function areaTriangulo(base , altura){
    return (base * altura)/2;
}

console.groupEnd();

//Código del Circulo
console.group("Circulos");
//const radioCirculo = 4;
//console.log("El radio del Circulo es: " + radioCirculo + "cm");

//const diametroCirculo = radioCirculo*2;
//console.log("El diametro del Circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;
//console.log("PI es: " + PI);

//Perímetro 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del Circulo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return (radio * radio) * PI
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del Circulo es: " + areaCirculo  + "cm^2");
console.groupEnd();
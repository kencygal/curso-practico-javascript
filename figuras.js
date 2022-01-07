//CODIGO DEL CUADRADO
console.group("Cuadrados");
//perimetro
function perimetroCuadrado(lado){
    return lado * 4;
}
//area
function areaCuadrado( lado ){
    return lado * lado;
}
console.groupEnd();


//CODIGO DEL TRIANGULO
console.group("Triángulos");
//perimetro
function perimetroTriangulo( lado1 , lado2, base){
    return lado1 + lado2 + base;
}
//area
function areaTriangulo(base , altura){
    return (base * altura)/2;
}
console.groupEnd();


//CODIGO DEL CIRCULO
console.group("Circulos");
//diámetro
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const PI = Math.PI;
//perímetro 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//área
function areaCirculo(radio){
    return (radio * radio) * PI
}
console.groupEnd();
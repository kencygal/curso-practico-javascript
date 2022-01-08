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
function calcularAlturaTriangulo(base,lado){
    const mediaBase = base / 2;
    const altura = Math.sqrt((lado * lado) - (mediaBase * mediaBase) );
    return altura;
}
//perimetro
function perimetroTriangulo( lado1 , lado2, base){
    return lado1 + lado2 + base;
}
//area
function areaTriangulo(base , lado){
    const altura = calcularAlturaTriangulo(base,lado);
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

//INTERACCION CON HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputLado2 = document.getElementById("inputTriangulo2");
    const inputbase = document.getElementById("inputTriangulo3");

    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputbase.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

}
function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const inputbase = document.getElementById("inputTriangulo3");

    const lado1 = Number(inputLado1.value);
    const base = Number(inputbase.value);

    const area = areaTriangulo(base,lado1);
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);

}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = Number(inputRadio.value);

    const area = areaCirculo(radio);
    alert(area);
}
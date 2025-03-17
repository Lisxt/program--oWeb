let contar = 0;

function incremento(){
    contar++;
    document.getElementById("contar").innerText = contar;
}

function decremento(){
    contar--;
    document.getElementById("contar").innerText = contar;
    if(contar == 0){
        alert("Contador zerado!!");
    }
}

function contador(){
    let input = document.getElementById("digite").value;
    let cont = input .length;
    document.getElementById("caracter").innerText = cont + " caracteres";

}

function resetar() {
    contador = 0;
    document.getElementById("contar").textContent = contador;
    document.getElementById("caracter").innerHTML = "";
}
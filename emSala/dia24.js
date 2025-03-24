const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.19;

function atualizarValor(){
 const tipo = document.getElementById("combustivel").value;
 const litros = parseInt(document.getElementById("litros").value);
 let precoPorLitro;

 switch(tipo){
    case "gasolina": 
        precoPorLitro = precoGasolina;
        break;
    case "etanol":
        precoPorLitro = precoEtanol;
        break;
    case "diesel":
        precoPorLitro = precoDiesel;
        break;
    default:
        document.getElementById("resultado").textContent = "Invalido";
        return;
 }

 calcularValorAbastecimento(precoPorLitro, litros);

}

function calcularValorAbastecimento(precoCombustivel, litros){
    if(litros <= 0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "invalido";
        return;
}    
    const ValorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = ValorTotal;
}

document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);

document.getElementById("litros").addEventListener("keydown", function(event){
    if(event.key === "enter"){
        event.preventDefault();
        atualizarValor();
    }
})
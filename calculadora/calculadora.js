function adicionaValorVisor(valor){
    console.log ("O valor mostrado" + valor)
    document.getElementById("visor").value += valor;
}

function limpar(){
    document.getElementById("visor").value = ""
}

function calcular(){
    console.log("Iniciou a função calcular");

    var resultado = "";
    var operacao = "";
    var valor1 = "";
    var valor2 = "";
    var conteudoVisor = document.getElementById("visor").value;
    for (var indice = 0; indice <conteudoVisor.length; indice++){
        var valorIndice = conteudoVisor[indice];

        if ((isNaN(valorIndice)) && (valorIndice != ".")){
                    if (valorIndice == "+"){
                operacao = valorIndice;
            }else
            if (valorIndice == "-"){
                operacao = valorIndice;
            }else
            if (valorIndice == "*"){
                operacao = valorIndice;
            }else
            if (valorIndice == "/"){
                operacao = valorIndice;
            }
        } else {
            if (operacao == ""){
                valor1 += valorIndice;
            } else{
                valor2 += valorIndice;
            }
        }
        if (isNaN(conteudoVisor[indice+1])){
            if ((valor1 != "") && (valor2 != "") && (operacao != "")){
                if (operacao == "+"){
                    resultado = somar(parseFloat(valor1), parseFloat(valor2));
                }else 
                if(operacao == "-"){
                    resultado = subtrair(parseFloat(valor1), parseFloat(valor2));
                }else
                if (operacao == "*"){
                    resultado = multiplicar(parseFloat(valor1), parseFloat(valor2));
                }else
                if (operacao == "/"){
                    resultado = dividir(parseFloat(valor1), parseFloat(valor2));
                }
                valor1 = resultado;
                valor2 = "";
        }
        }       
}
    if (resultado != null){
        exibirResultado(resultado);
        log(conteudoVisor + " = " + resultado);        
    }
}

function somar(val1, val2){
    console.log("O resultado para a soma de" + val1 + "mais" + val2 + "é:")
    return val1 + val2;
}

function subtrair(val1, val2){
    console.log("O resultado para a subtração de" + val1 + "mais" + val2 + "é:")
    return val1 - val2;
}

function dividir(val1, val2){
    console.log("O resultado para a divisão de" + val1 + "mais" + val2 + "é:")
    return val1 / val2;
}

function multiplicar(val1, val2){
    console.log("O resultado para a multiplicação de" + val1 + "mais" + val2 + "é:")
    return val1 * val2;
}

function exibirResultado(valor){
    console.log("O resultado é: " + valor + "para calculo realizado")
    document.getElementById("visor").value = valor;
}

function log(valor){
    console.log("Adicionado o valor" + valor)
    if(valor!=""){
        let textoLog = "<p>" + valor + "</p>" + document.getElementById("conteudo_log").innerHTML
        document.getElementById("conteudo_log").innerHTML = textoLog   
    }  
}
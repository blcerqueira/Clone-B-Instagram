console.log ("Meu primeiro JS");

//var d = new Date
//
//alert("Hoje é: " + d);

function botao(idade){
var nome = prompt ("Qual o seu nome?");
var idade = prompt("QUal sua idade?");
/*if (getElementById(nome).value.length < 3){
    alert("Preencha o nome");
    return;
}else{
    var idade = prompt("QUal sua idade?");
    }
    if (idade == ''){
        return;
    }else{*/
        if (idade < 18){
            document.getElementById("MenorIdade").innerHTML = ("Sr(a) " + nome + ", você tem " + idade +" anos e não pode acessar esse site");
            //alert ("Sr(a) " + nome + ", você tem " + idade +" anos e não pode acessar esse site");
        }else{
            document.getElementById("MaiorIdade").innerHTML = ("Sr(a) " + nome + ", você tem " + idade +" anos e pode acessar esse site " +
            "CLIQUE AQUI");
        //alert ("Sr(a) " + nome + ", você tem " + idade +" anos e pode acessar esse site");
        }
    
    
}

function redirecionar(){
    window.open ("http://www.salaonk.com.br");
    //window.location.href = "http://www.salaonk.com.br";
}

function MouseOver(elem){
    //document.getElementById("Passar").innerHTML = ("Obrigado por passar o mouse"); //pode fazer desse jeito, mas se criar outras linhas vai pegar essa funcao
    elem.innerHTML =("Obrigado por passar o mouse");
}
function MouseOut(elem){
    //document.getElementById("Passar").innerHTML = ("Remover conta");
    elem.innerHTML = ("Remover conta")
}

function escolhasite(elem){
    //console.log(elemento.value);
    if (elem.value == "0"){
        return;
    }if (elem.value == "1"){
        window.open ("http://www.salaonk.com.br");
    }if (elem.value == "3"){
        window.open("qrcode.html");
    }else{
        console.log("Ag Site");
        window.open ("http://projetoconversacao.pe.hu/");
    }
}
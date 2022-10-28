//declaração de um objeto
let pessoa = {
    nome : "Juca",
    sobrenome :"Pirama",
    idade: 30,
    vip: true,
    saudacao: function(){
        return "Oi " + this.nome +" " + this.sobrenome;
    },
    sauda: function(){
        document.getElementById("demo").innerHTML = "Oi " + this.nome +" " + this.sobrenome;
    }
};






function myFunction() {
	let i = 0;
    
	for(i = 1; i <= 20; i++){
    	let resto = 0;
        let tipo = "impar";
       
        resto = i % 2;
        if (resto == 0){
        	tipo = "par";
        }
        resto = i % 4;
        if (resto == 0){
            document.write("plim","-", tipo, "<br>");
        } else {
    		document.write(i,"-", tipo, "<br>");
        }
    }
}

function contarItensDaLista(){
    // tupla cores Registro 
    //const cores = ["azul","amarelo","vermelho","verde","laranja","roxo","branco","preto","cinza"];
    //const cores = ["azul"];
    const cores = [];
    let mensagem = "";
    if (cores.length > 1) {
        mensagem = "A lista tem " + cores.length + " items";
    } else if(cores.length == 1){
        mensagem = "A lista tem 1 item";
    } else {
        mensagem = "A lista esta vazia ";
    }
    

    document.getElementById("demo").innerHTML = mensagem;
}

function contarItensDaLista2(){
    // tupla cores Registro 
    const cores = ["azul","amarelo","vermelho","verde","laranja","roxo","branco","preto","cinza"];
    //const cores = ["azul"];
    //const cores = [];
    let mensagem = "";

    switch (cores.length) {
        case 0:
            mensagem = "A lista esta vazia ";
            break;
        case 1:
            mensagem = "A lista tem 1 item";
            break;
        default:
            mensagem = "A lista tem " + cores.length + " items";
            break;
    }
    document.getElementById("demo").innerHTML = mensagem;
}

function sortearListaCrescente() {
    const alunos = ["Sara","Abraao","MK","Ademar","Norma","Lene","Beatriz"];
    alunos.sort();
    document.getElementById("demo").innerHTML = alunos;

}

function sortearListaDecrescente() {
    const alunos = ["Sara","Abraao","MK","Ademar","Norma","Lene","Beatriz"];
    alunos.sort();//ordena o conteudo da lista
    alunos.reverse();//inverte a lista 
    document.getElementById("demo").innerHTML = alunos;

}

function saudarPessoa() {
    document.getElementById("demo").innerHTML = "oi " + pessoa.nome + " " + pessoa.sobrenome;
    
}

function saudarPessoaFuncaoObjeto(){
    document.getElementById("demo").innerHTML = pessoa.saudacao();

}

function saudarPessoaMetodoObjeto(){
    pessoa.sauda();
}

class Pessoa{
    constructor(nome="Maria", sobrenome="Antonieta", idade=25, vip=true){
        //atributos
        // this.nome = "Maria";
        // this.sobrenome = "Antonieta";
        // this.idade = "25";
        // this.vip = false;

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.vip = vip;

        //Metodos e Funçoes
    }
    saudacoes(){
        document.getElementById("demo").innerHTML = "Ola " + this.nome +" " + this.sobrenome;
    }
}

function saudarPessoaClasse(){
    let aluna = new Pessoa("Beatriz","Gouveia",22,true);
    aluna.saudacoes();
}
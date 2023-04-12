const Personagem ={
    classe:"",
    nome:"Personagem",
    idade: 0,       //MAx:30
    forca: 0,       //MAx:20
    sono: 0,        //MAx:10
    velocidade: 0,  //MAx:20
    furtividade:0,  //MAx:20
    carisma:0,      //MAx:20
    vida:0,         //MAx:20
    producao:0,     //MAx:20

}

function classePersonagem(){
    if(Personagem.classe == avianzinho){
        Personagem.forca = 10,
        Personagem.sono = 10,
        Personagem.velocidade = 10,
        Personagem.furtividade = 5,
        Personagem.carisma = 2,
        Personagem.vida = 20,
        Personagem.producao = 0
    }else if(Personagem.classe == producao ){
        Personagem.forca = 5,
        Personagem.sono = 10,
        Personagem.velocidade = 5,
        Personagem.furtividade = 10,
        Personagem.carisma = 0,
        Personagem.vida = 15,
        Personagem.producao = 10
    }else if(Personagem.classe == laranja){
        Personagem.forca = 5,
        Personagem.sono = 10,
        Personagem.velocidade = 10,
        Personagem.furtividade = 7,
        Personagem.carisma = 15,
        Personagem.vida = 20,
        Personagem.producao = 0
    }


}

function escreva(texto){
    document.write(texto)
}

function criarPersonangem(Nome,idade,){
    Personagem.nome = nome
    Personagem.idade = idade
}

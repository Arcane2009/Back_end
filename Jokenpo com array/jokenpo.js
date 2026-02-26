let imagensPc = ["pcpedra.png","pcpapel.png","pctesoura.png"];
let imagensPlayer = ["pedra.png","papel.png","tesoura.png"];

function jogar(){
    let sorteio  = Math.floor(Math.random()*3);

    document.getElementById("pc").src = imagensPc[sorteio];

    if((document.getElementById("pedra").checked == true && sorteio ==0)
        ||(document.getElementById("papel").checked == true && sorteio ==1)
        ||(document.getElementById("tesoura").checked == true && sorteio ==2))
        {
              document.getElementById("placar").innerHTML = "EMPATE!!!";
    }
    else if((document.getElementById("pedra").checked == true && sorteio == 2)
            ||(document.getElementById("papel").checked == true && sorteio == 0)
            ||(document.getElementById("tesoura").checked == true && sorteio == 1))
            {
                document.getElementById("placar").innerHTML = "Você ganhou seu safadinho!";
    }
    else{
        document.getElementById("placar").innerHTML = "GANHEI HAHAHAHAHA!!";
    }
    }


function resetar(){
    document.getElementById("pc").src="pc.png";
    document.getElementById("placar").innerHTML=" ";
}
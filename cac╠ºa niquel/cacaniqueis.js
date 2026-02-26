let imagens = ["cereja.png","limao.png","uva.png"];

function jogar(){
    let sorteio1 = Math.floor(Math.random()*3)
    let sorteio2 = Math.floor(Math.random()*3);
    let sorteio3 = Math.floor(Math.random()*3);

    document.getElementById("img1").src = imagens[sorteio1];
    document.getElementById("img2").src = imagens[sorteio2];
    document.getElementById("img3").src = imagens[sorteio3];

    if(sorteio1 == sorteio2 && sorteio2 == sorteio3){
        document.getElementById("resultado").innerHTML = "VOCÊ VENCEU!!!"
    }
    else{
        document.getElementById("resultado").innerHTML = "VOCÊ PERDEU TENTE NOVAMENTE"
    }
}

function resetar(){
    document.getElementById("img1").src = "slot.png";
    document.getElementById("img2").src = "slot.png";
    document.getElementById("img3").src = "slot.png";
    document.getElementById("resultado").innerHTML = "Resultado";
}
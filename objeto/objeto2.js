let carro = {
    marca:"Toyota",
    modelo:"Corola",
    ano: 2020,
    ligar:function(){
        console.log("O carro ligou");
    },
    mostraInfo: function(){
        console.log(`Marca: ${this.marca}, \nModelo: ${this.mode}`)
    }
};
carro.ligar();
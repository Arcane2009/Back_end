function calcular(){

    let numero = document.getElementById('numero').value;
    let lista = document.getElementById('lista');
    
    for(i = 1; i <= 10; i++){

        let item = document.createElement('li');
        item.innerText = numero + " X " + i + " = " + (numero*i)
        lista.appendChild(item);
    }
    
}


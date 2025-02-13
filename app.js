// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre != ''){
        amigos.push(nombre);
        console.log(amigos);
        document.getElementById('amigo').value = '';

        let largo = amigos.length;
        console.log(largo);

        let lista = document.getElementById('listaAmigos') ;
        lista.innerHTML += `<li>${nombre}</li>`
    }
    else{
        alert('No se ha ingresado ningún nombre');
    }
}

function detectarEnter(event){
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

function sortearAmigo() {
    let largo = amigos.length;
    if (largo != 0){
        let indice = Math.random() * largo;
        indice = Math.floor(indice);
        let nombreAleatorio = amigos[indice];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = `El amigo sorteado es ${nombreAleatorio}!`;
    }
    else {
        alert('No se agregado ningún nombre');
    }

}

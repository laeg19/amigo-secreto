// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //variable amigos

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarAmigos(); // muestra la lista actualizada en el HTML
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos"); 
  lista.innerHTML = "";                               

  for (let i = 0; i < amigos.length; i++) {          
    let li = document.createElement("li");           
    li.textContent = amigos[i];                      
    lista.appendChild(li);                           
  }
}

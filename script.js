// =========================
// MANIPULAÇÃO DO DOM
// =========================

function mudarTexto() {

  const texto = document.getElementById("texto");

  texto.innerHTML = "O texto foi alterado com JavaScript!";

  texto.style.color = "#38bdf8";

}


// =========================
// VALIDAÇÃO DE FORMULÁRIO
// =========================

function validarFormulario() {

  const nome = document.getElementById("nome").value;

  if (nome === "") {

    alert("Por favor, preencha o campo nome!");

    return false;

  }

  alert("Formulário enviado com sucesso!");

  return true;

}


// =========================
// FUNÇÕES
// =========================

function soma(numero1, numero2) {

  return numero1 + numero2;

}

console.log("Resultado da soma:", soma(5, 5));


// =========================
// ARRAYS
// =========================

const linguagens = [

  "HTML",
  "CSS",
  "JavaScript"

];

console.log("Primeira linguagem:", linguagens[0]);


// =========================
// OBJETOS
// =========================

const aluno = {

  nome: "Ramon",
  curso: "ADS",
  semestre: "3º Semestre"

};

console.log(aluno);


// =========================
// EFEITO INTERATIVO
// =========================

const sections = document.querySelectorAll("section");

sections.forEach(function(section) {

  section.addEventListener("mouseover", function() {

    section.style.transform = "scale(1.02)";
    section.style.transition = "0.3s";

  });

  section.addEventListener("mouseout", function() {

    section.style.transform = "scale(1)";

  });

});


// =========================
// MENU RESPONSIVO SIMPLES
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

  link.addEventListener("click", function() {

    console.log("Você clicou no menu:", link.innerText);

  });

});


// =========================
// MENSAGEM AO CARREGAR
// =========================

window.addEventListener("load", function() {

  console.log("Portfólio carregado com sucesso!");

});
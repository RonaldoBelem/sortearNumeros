const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);
div.innerHTML = `
<div class="container">
    <section>
        <label>Quantidade de Numeros:</label>
        <input id="quantidade" type="number">
        <label>Numeros de Dezenas:</label>
        <input id="numero" type="number">
        <button id="btn">Gerar Numeros</button>
    </section>
    <section>
        <div id="numerosSorteados">Numeros Sorteados: </div>
        
    </section>  
</div>      
`;

const quantidadeTotal = document.getElementById("quantidade");
const input = document.getElementById("numero");
const btn = document.getElementById("btn");
const numerosSorteados = document.getElementById("numerosSorteados");

btn.addEventListener("click", () => {
  const quantidadeTotalNumeros = parseInt(quantidadeTotal.value);
  const quantidade = parseInt(input.value);


  const numeros = [];
  for (let i = 0; i < quantidade; i++) {
    numeros.push(Math.floor(Math.random() * quantidadeTotalNumeros) + 1); // Sorteia números entre 1 e 100
  }

  numerosSorteados.textContent = `Numeros Sorteados: ${numeros.join(",  ")}`;
});

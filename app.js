const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);
div.innerHTML = `
<div class="container">
    <section>
        <label>Quantidade de Numeros:</label>
        <input id="quantidade" type="number" min="0" placeholder="Digite um número positivo">
        <label>Numeros de Dezenas:</label>
        <input id="numero" type="number" min="0" placeholder="Digite um número positivo">
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
      numeros.push(Math.floor(Math.random() * quantidadeTotalNumeros) + 1); 
    }

  numerosSorteados.textContent = `Numeros Sorteados: ${numeros.join(",  ")}`;
});

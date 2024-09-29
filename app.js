const body = document.querySelector("body");
const div = document.createElement("div");

body.appendChild(div);
div.innerHTML = `
<div class="box">
  <div class="container">
      <section>
          <label>Quantidade de Numeros:</label>
          <input id="quantidade" type="number" min="0" placeholder="Digite um número">
          <label>Numeros de Dezenas:</label>
          <input id="numero" type="number" min="0" placeholder="Digite um número">
          <button id="btn">Gerar Numeros</button>
      </section>
      <section>
          <div id="numerosSorteados">Numeros Sorteados: </div>
      </section>  
  </div>      
  <div id="popup" >  
    <div class="popup_resultado" id="contagem" >Aguarde a Contagem </div>  
    <div class="popup_resultado" id="resultado" ></div>  
    <div class="popup_resultado " id="res" ></div>  
  </div>      
</div>       
`;

const quantidadeTotal = document.getElementById("quantidade");
const input = document.getElementById("numero");
const btn = document.getElementById("btn");
const numerosSorteados = document.getElementById("numerosSorteados");
const resultado = document.getElementById("resultado");
const res = document.getElementById("res");
const contagem = document.getElementById("contagem");
const popup = document.getElementById("popup");




btn.addEventListener("click", () => {
  let cont = 3
  popup.style.display="flex"
  function contagemRegressiva() {
    if (cont >= 0) {
      resultado.style.color="red"
      resultado.innerHTML=cont
       cont--   
    }
    else{
      contagem.innerHTML="Fechar"
      res.innerHTML=`Resultado`
      res.style.margin="0 40px"
      resultado.style.color="white"
      resultado.innerHTML=`${numeros.join(",  ")}`;
      clearInterval(intervalo)
    }
  }
  const intervalo = setInterval( contagemRegressiva, 1000)
  
  const quantidadeTotalNumeros = parseInt(quantidadeTotal.value);
  const quantidade = parseInt(input.value);


  const numeros = [];   
    for (let i = 0; i < quantidade; i++) {
      numeros.push(Math.floor(Math.random() * quantidadeTotalNumeros) + 1); 
    }
    
    numerosSorteados.textContent = `Numeros Sorteados: ${numeros.join(",  ")}`;
    
});

contagem.addEventListener("click", ()=>{
  popup.style.display="none"
})

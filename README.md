# Gerador de Números Aleatórios com Contagem Regressiva

Este projeto é uma aplicação JavaScript que permite gerar números aleatórios com base em uma quantidade definida pelo usuário. A aplicação exibe os números sorteados após uma contagem regressiva de 3 segundos.

## Funcionalidades

- Defina a quantidade total de números e a quantidade de números a serem sorteados.
- Após clicar no botão "Gerar Números", uma contagem regressiva de 3 segundos é iniciada.
- Exibe os números sorteados em um popup após a contagem regressiva.
- Opção de realizar um novo sorteio clicando no botão "Novo Sorteio".

## Como Usar

1. Clone ou copie o código para o seu projeto.
2. Adicione o código JavaScript em um arquivo `.js` ou dentro de uma página HTML.
3. Abra a página no navegador para visualizar a interface e interagir com o gerador de números.

### Exemplo de Uso

1. Insira um valor no campo **"Quantidade de Números"** (ex: `50` para números entre 1 e 50).
2. Insira um valor no campo **"Números de Dezenas"** (ex: `5` para gerar 5 números).
3. Clique no botão **"Gerar Números"** e observe a contagem regressiva.
4. Após 3 segundos, os números sorteados serão exibidos.
5. Para um novo sorteio, clique em **"Novo Sorteio"** no popup.

## Estrutura do Código

O código é organizado da seguinte forma:

1. **Manipulação do DOM com JavaScript**: Toda a interface HTML é gerada dinamicamente usando JavaScript.
2. **Eventos**:
   - Evento de clique no botão "Gerar Números" para iniciar o sorteio e a contagem regressiva.
   - Evento de clique no botão "Novo Sorteio" para reiniciar o sorteio após exibir os números.
   - Popup que exibe o resultado e pode ser fechado com o botão "Fechar".
3. **Lógica de Sorteio**: Números aleatórios são gerados com base na entrada fornecida pelo usuário.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da interface, gerada dinamicamente.
- **JavaScript**: Para manipulação do DOM, eventos e lógica de sorteio.

## Melhorias Futuras

- Validações adicionais para garantir que o usuário insira números válidos.
- Feedback visual aprimorado para melhorar a experiência do usuário.
- Melhorias na interface visual, adicionando estilos CSS personalizados.

---

Desenvolvido para fins educacionais para mostrar como manipular o DOM e criar funcionalidades interativas com JavaScript.

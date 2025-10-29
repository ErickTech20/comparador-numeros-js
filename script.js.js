javascript
function iniciarComparacao() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Array para armazenar todos os números digitados
    const numeros = [];

    // Função para obter número com validação
    function obterNumero(mensagem) {
        let numero;
        do {
            const input = prompt(mensagem);
            if (input === null) return null; // Usuário cancelou
            numero = parseInt(input);
            if (isNaN(numero)) {
                alert("Por favor, digite um número válido!");
            }
        } while (isNaN(numero));
        numeros.push(numero);
        return numero;
    }

    // COMPARAÇÃO 1: Igualdade e Identidade
    const num1 = obterNumero("🔢 COMPARAÇÃO 1/4\nDigite o primeiro número:");
    if (num1 === null) return;
    
    const num2 = obterNumero("🔢 COMPARAÇÃO 1/4\nDigite o segundo número:");
    if (num2 === null) return;

    resultsDiv.innerHTML += `
        <div class="comparison-section">
            <h3>📊 Comparação 1 - Igualdade vs Identidade</h3>
            <div class="numbers-display">
                <strong>Números digitados:</strong><br>
                Número 1: ${num1}<br>
                Número 2: ${num2}
            </div>
            <div class="result ${num1 == num2}">
                ✅ Igualdade (==): ${num1 == num2}
            </div>
            <div class="result ${num1 === num2}">
                ✅ Identidade (===): ${num1 === num2}
            </div>
        </div>
    `;

    // COMPARAÇÃO 2: Diferença
    const num3 = obterNumero("🔢 COMPARAÇÃO 2/4\nDigite o primeiro número:");
    if (num3 === null) return;
    
    const num4 = obterNumero("🔢 COMPARAÇÃO 2/4\nDigite o segundo número:");
    if (num4 === null) return;

    resultsDiv.innerHTML += `
        <div class="comparison-section">
            <h3>📊 Comparação 2 - Diferença</h3>
            <div class="numbers-display">
                <strong>Números digitados:</strong><br>
                Número 1: ${num3}<br>
                Número 2: ${num4}
            </div>
            <div class="result ${num3 != num4}">
                ✅ Não igual (!=): ${num3 != num4}
            </div>
            <div class="result ${num3 !== num4}">
                ✅ Não idêntico (!==): ${num3 !== num4}
            </div>
        </div>
    `;

    // COMPARAÇÃO 3: Maior e Menor
    const num5 = obterNumero("🔢 COMPARAÇÃO 3/4\nDigite o primeiro número:");
    if (num5 === null) return;
    
    const num6 = obterNumero("🔢 COMPARAÇÃO 3/4\nDigite o segundo número:");
    if (num6 === null) return;

    resultsDiv.innerHTML += `
        <div class="comparison-section">
            <h3>📊 Comparação 3 - Maior e Menor</h3>
            <div class="numbers-display">
                <strong>Números digitados:</strong><br>
                Número 1: ${num5}<br>
                Número 2: ${num6}
            </div>
            <div class="result ${num5 > num6}">
                ✅ Maior (>): ${num5 > num6}
            </div>
            <div class="result ${num5 < num6}">
                ✅ Menor (<): ${num5 < num6}
            </div>
        </div>
    `;

    // COMPARAÇÃO 4: Maior/Menor ou Igual
    const num7 = obterNumero("🔢 COMPARAÇÃO 4/4\nDigite o primeiro número:");
    if (num7 === null) return;
    
    const num8 = obterNumero("🔢 COMPARAÇÃO 4/4\nDigite o segundo número:");
    if (num8 === null) return;

    resultsDiv.innerHTML += `
        <div class="comparison-section">
            <h3>📊 Comparação 4 - Maior/Menor ou Igual</h3>
            <div class="numbers-display">
                <strong>Números digitados:</strong><br>
                Número 1: ${num7}<br>
                Número 2: ${num8}
            </div>
            <div class="result ${num7 >= num8}">
                ✅ Maior ou igual (>=): ${num7 >= num8}
            </div>
            <div class="result ${num7 <= num8}">
                ✅ Menor ou igual (<=): ${num7 <= num8}
            </div>
        </div>
    `;

    // RESUMO FINAL
    resultsDiv.innerHTML += `
        <div class="comparison-section" style="background: #e8f5e8; border-left-color: #28a745;">
            <h3>🎉 Resumo das Comparações</h3>
            <div class="numbers-display">
                <strong>Todos os números digitados:</strong><br>
                ${numeros.join(', ')}
            </div>
            <div style="margin-top: 10px;">
                <strong>Total de comparações realizadas:</strong> 8<br>
                <strong>Aluno:</strong> Erick Bezerra dos Santos<br>
                <strong>RA:</strong> 2222103266
            </div>
        </div>
    `;
}

function resetarPagina() {
    document.getElementById('results').innerHTML = '';
}
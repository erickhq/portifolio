function generatePermutations() {
    const input = document.getElementById('inputWord').value;
    const outputDiv = document.getElementById('output');

    // Limpa o output anterior
    outputDiv.innerHTML = '';

    if (input.length === 0) {
        outputDiv.innerHTML = 'Por favor, digite uma palavra.';
        return;
    }

    // Gerar permutações
    const permutations = getPermutations(input.split(''));
    // Exibir permutações
    outputDiv.innerHTML = permutations.join('<br>');
}

function getPermutations(arr) {
    if (arr.length === 1) return [arr.join('')];

    const results = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPerms = getPermutations(remaining);
        for (const perm of remainingPerms) {
            results.push(current + perm);
        }
    }

    return results;
}

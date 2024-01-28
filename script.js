function processText() {
    const inputText = document.getElementById('message_text').value;
    const option = document.getElementById('option').value;
    let result = '';

    if (option === 'encrypt') {
        result = encryptText(inputText);
    } else if (option === 'decrypt') {
        result = decryptText(inputText);
    }

    document.getElementById('message_result').innerText = result;
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u')
}

function copyToClipboard(){
    const result = document.getElementById('message_result');
    const resultText = result.innerText;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultText;

    document.body.appendChild(tempTextArea);

    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    alert('Texto copiado para a área de transferência!');
}
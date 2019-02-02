document.getElementById("encode").addEventListener("click", buttonEncode);
document.getElementById("decode").addEventListener("click", buttonDecode);

function buttonEncode(event) {
    event.preventDefault();

    let answer = document.getElementById("answer").value;
    let offset = parseInt(document.getElementById("offset").value);

    document.getElementById("resultCode").innerHTML = encode(answer,offset);
}

function encode(answer, offset) {
    let cipherMessage = [];

    if (offset < 0) {
        cipherMessage = decode(answer, offset * -1);
        return cipherMessage;
    }

    for (let i = 0; i < answer.length; i++) {
        let asciiCode = answer[i].charCodeAt();
        if (asciiCode >= 65 && asciiCode <= 90) {
            let letterMa = ((asciiCode - 65 + offset) % 26) + 65;
            cipherMessage.push(String.fromCharCode(letterMa));
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            let letterMi = ((asciiCode - 97 + offset) % 26) + 97;
            cipherMessage.push(String.fromCharCode(letterMi));
        } else {
            cipherMessage.push(String.fromCharCode(asciiCode));
        }
    }
    return cipherMessage.join("");
}

function buttonDecode(event) {
    event.preventDefault();

    let answer = document.getElementById("answer").value;
    let offset = parseInt(document.getElementById("offset").value);
    let message = '';

    document.getElementById("resultCode").innerHTML = decode(answer,offset);
}

function decode(answer, offset) {
    let cipherMessage = [];
    
    if (offset < 0) {
        cipherMessage = encode(answer, offset * -1);
        return cipherMessage;
    }

    for (let i = 0; i < answer.length; i++) {
        let asciiCode = answer[i].charCodeAt();
        if (asciiCode >= 65 && asciiCode <= 90) {
            let letterMa = (asciiCode - 90 - offset) % 26 + 90;
            cipherMessage.push(String.fromCharCode(letterMa));
        } else if (asciiCode >= 97 && asciiCode <= 122) {
            let letterMi = (asciiCode - 122 - offset) % 26 + 122;
            cipherMessage.push(String.fromCharCode(letterMi));
        } else {
            cipherMessage.push(String.fromCharCode(asciiCode));
        }
    }
    return cipherMessage.join("");
}
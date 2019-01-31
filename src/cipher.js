function buttonC(){
let answer = document.getElementById("answer").value;
let  offset = document.getElementById("offset").value;
encode(answer, parseInt(offset));
}

function encode(answer,offset){
  let cipherMessage = [];
  for (let i = 0; i < answer.length; i++) {
    let asciiCode = answer[i].charCodeAt();  
    if (asciiCode >= 65 && asciiCode <= 90) {
      let letterMa = ((asciiCode - 65 + offset) % 26) + 65;
      cipherMessage.push(String.fromCharCode(letterMa));
    }
    else if (asciiCode >= 97 && asciiCode <= 122){
      let letterMi = ((asciiCode - 97 + offset) % 26) + 97;
      cipherMessage.push(String.fromCharCode(letterMi));
    }
    else if (asciiCode === 32){
      let space = 32;
      cipherMessage.push(String.fromCharCode(space));
    }
  }
document.getElementById('final').style.display = 'block';
document.getElementById('inicio').style.display = 'none';
document.getElementById("resultCode").innerHTML = cipherMessage.join("");
}

function buttonD(){
  let answer = document.getElementById("answer").value;
  let  offset = document.getElementById("offset").value;
  decode(answer, parseInt(offset));
  }

function decode(answer,offset){
  let cipherMessage = [];
  for (let i = 0; i < answer.length; i++) {
    let asciiCode = answer[i].charCodeAt();
    if (asciiCode >= 65 && asciiCode <= 90) {
      let letterMa = (asciiCode - 65 - (offset %26) + 26) %26 + 65;
      cipherMessage.push(String.fromCharCode(letterMa));
    }
    else if (asciiCode >= 97 && asciiCode <= 122){
      let letterMi = (asciiCode - 97 - (offset %26) + 26) %26 + 97;
      cipherMessage.push(String.fromCharCode(letterMi));
    }
    else if (asciiCode === 32){
      let space = 32;
      cipherMessage.push(String.fromCharCode(space));
    }
  }

document.getElementById('final').style.display = 'block';
document.getElementById('inicio').style.display = 'none';
document.getElementById("resultCode").innerHTML = cipherMessage.join("");
}
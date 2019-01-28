//window.cipher = {
  // ... 
//};

function button(){
let answer = document.getElementById("answer").value;
let  offset = document.getElementById("offset").value;
encode(answer, parseInt(offset));
}

function encode(answer,offset){
  let cipherMessage = [];
  for (let i = 0; i < answer.length; i++) {
    let asciiCode = answer[i].charCodeAt();  
    if (asciiCode >= 65 && asciiCode <= 90) {
      let letter = ((asciiCode - 65 + offset) % 26) + 65;
      cipherMessage.push(String.fromCharCode(letter));
    }
  }
console.log (cipherMessage);

}

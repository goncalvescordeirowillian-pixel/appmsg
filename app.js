//cria array 0 1 2 
let frases =["f1", "f2", "f3"];
let frasesCopiadas =[...frases]

//gera as frases
function geradorMensagem(){
if(frases.length==0){
let indiceGerado=math.floor(Math.randon()*(frases.length));
let frasesGeradas=frases[indiceGerado];
console.log(fraseGerada)
document.querySelector("#msg").textContent=fraseGerada;
frases.splice(indiceGerado,1);
}
}

geradorMensagem();
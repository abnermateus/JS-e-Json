/*Ex1
console.log("Sou uma mensagem gerada com JavaScript.");
*/

/*Ex2
function imprimirMensagem(mensagem){
    console.log(mensagem);
}

imprimirMensagem("Sou uma mensagem gerada em JavaScript com function.");
*/

/*Ex3
var numeros = [9, 1, 3, 5, 4, 2, 8 , 7, 6, 0];
console.log("O vetor inicial é: " + numeros);
numeros.sort();
console.log("O vetor após a ordenação é: " + numeros);
numeros.push(10);
console.log("O vetor após a inserção no fim é: " + numeros);
numeros.shift();
console.log("O vetor após a remoção no início é: " + numeros);
numeros.pop();
console.log("O vetor após a remoção no fim é: " + numeros);
numeros.splice(0, 8);
console.log("O vetor após a remoção de uma sequência de itens é: " + numeros);
*/

/*Ex4
var animal = {nome: "Gato", especie: "Felino", habitat: "Casa", alimento: "Ração"};
animal.nome = "Cachorro";
animal.especie = "Canino";
animal.habitat = "Rua";
animal.alimento = "Carne";
*/

/*Ex5, Ex6 e Ex7
var animaisJSON = `{
    "animais": [
      {
        "nome": "Leão",
        "especie": "Panthera leo",
        "habitat": "Savana",
        "alimento": "Carnívoro"
      },
      {
        "nome": "Tigre",
        "especie": "Panthera tigris",
        "habitat": "Floresta",
        "alimento": "Carnívoro"
      },
      {
        "nome": "Girafa",
        "especie": "Giraffa camelopardalis",
        "habitat": "Savana",
        "alimento": "Herbívoro"
      },
      {
        "nome": "Elefante",
        "especie": "Loxodonta africana",
        "habitat": "Floresta",
        "alimento": "Herbívoro"
      },
      {
        "nome": "Crocodilo",
        "especie": "Crocodylus niloticus",
        "habitat": "Rio",
        "alimento": "Carnívoro"
      }
    ]
  }`;

var animaisObj = JSON.parse(animaisJSON);
animaisObj.animais[1].nome = "Jaguar";
animaisObj.animais[1].especie = "Panthera onca";
animaisObj.animais[1].habitat = "Floresta Amazônica";
animaisObj.animais[1].alimento = "Carnívoro";

for (var i = 0; i < animaisObj.animais.length; i++) {
  console.log("Nome: " + animaisObj.animais[i].nome);
  console.log("Espécie: " + animaisObj.animais[i].especie);
  console.log("Habitat: " + animaisObj.animais[i].habitat);
  console.log("Alimento: " + animaisObj.animais[i].alimento);
  console.log(" ");
}

animaisObj.animais.push({ nome: "Urso", especie: "Ursus arctos", habitat: "Floresta", alimento: "Onívoro" });

for (var i = 0; i < animaisObj.animais.length; i++) {
  console.log("Nome: " + animaisObj.animais[i].nome);
  console.log("Espécie: " + animaisObj.animais[i].especie);
  console.log("Habitat: " + animaisObj.animais[i].habitat);
  console.log("Alimento: " + animaisObj.animais[i].alimento);
  console.log(" ");
}

var nomeAnimal = "Girafa";

var indicePorNome = animaisObj.animais.map((animal, index) => {
  if (animal.nome === nomeAnimal) {
    return index;
  }
}).findIndex(index => index !== undefined);

console.log(indicePorNome);

var habitatAnimal = "Floresta";

var indicePorHabitat = animaisObj.animais.map((animal, index) => {
  if (animal.habitat === habitatAnimal) {
    return index;
  }
}).findIndex(index => index !== undefined);

console.log(indicePorHabitat);

var buscaPorNome = animaisObj.animais.filter(animal => animal.nome === nomeAnimal);
console.log(buscaPorNome);

buscaPorNome = animaisObj.animais.filter(animal => animal.nome != nomeAnimal);
console.log(buscaPorNome);
*/
 
/*Ex8
document.getElementById("ex8").addEventListener("click", function(){
    alert("Sou uma mensagem gerada com JavaScript");
});
*/



















let iceCream = "chocolate";
if (iceCream === "doce"){
    alert("sim, eu amo sorvete de chocolate!");
} else {
    alert("Aaaah, mas chocolate é o meu preferido...");
}

let myVariable = document.querySelector("h1");
alert("Bem Vindo ao Mozilla:)");

function multiply(a, b, c) {
    let result = a + b * c;
    return result;
}
console.log(multiply(2, 3, 8));

document.querySelector("p").addEventListener("click",function() {
    alert("Ai! Pare de me cutucar");
});
document.querySelector("h1").addEventListener("click", 
    () => {
        alert("Aaaa! Pare de me cutucar!");
    });


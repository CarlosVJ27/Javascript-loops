const container = document.querySelector('body');

// For

for(let i = 1; i <= 5; i++) {
    const cicloFor = document.createElement('div');
    container.appendChild(cicloFor);
    cicloFor.textContent = 'Valor de i es: ' + i;
}

// For in

let numeros = [1,2,3,4,5];
for (x in numeros) {
    const cicloForIn = document.createElement('div');
    container.appendChild(cicloForIn);
    cicloForIn.textContent = numeros[x];
}

// For each

let a = ['a', 'b', 'c'];
a.forEach(function(valor) {
    const cicloForEach = document.createElement('div');
    container.appendChild(cicloForEach);
    cicloForEach.textContent = valor;
});

// While

let d = 1;
while (d < 5) {
    const cicloWhile = document.createElement('div');
    container.appendChild(cicloWhile);
    cicloWhile.textContent += 'El número es: ' + d;
    d++;
}
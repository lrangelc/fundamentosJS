var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve())

console.log(`Revise si estaba lloviendo ${contador} ${contador >1?'veces':'vez'}`);
const listaDeCompras = [
    { produto: "Arroz", preco: 19.90 },
    { produto: "Feijão", preco: 12.90 },
    { produto: "Macarrão", preco: 4.30 },
    { produto: "Carne", preco: 43.90 },
    { produto: "Leite", preco: 5.10 }
];

const listaOrdenada = listaDeCompras.sort((a, b) => a.preco - b.preco);

console.log("Lista de compras ordenada por preço:");
console.log(listaOrdenada);
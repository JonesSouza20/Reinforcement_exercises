function soma(a, b) {
    return a + b;
}

setTimeout(soma, 5000);

setTimeout(() => {
    console.log(soma(10, 10), ("Executada apenas uma vez em 5 segundos"));
}, 5000);


setInterval(soma, 2000);

setInterval(() => {
    console.log(soma(10, 10), ("Executada sempre a cada 2 segundos"));
}, 2000);
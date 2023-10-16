"use strict";
const multiplicar = (val1, val2) => { return val1 * val2; };
console.log(multiplicar(2, 2));
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    saudacao() {
        return `Olá meu nome é ${this.nome}`;
    }
}
const pessoa1 = new Pessoa('Marvin');
console.log(pessoa1.saudacao());

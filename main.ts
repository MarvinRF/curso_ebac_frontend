const multiplicar = (val1: number, val2: number): number => { return val1 * val2; }
console.log(multiplicar(2, 2));

class Pessoa {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  saudacao():string {
    return `Olá meu nome é ${this.nome}`;
  }
}
const pessoa1 = new Pessoa('Marvin');
console.log(pessoa1.saudacao());
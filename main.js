// Classe abstrata Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  descrever() {
    throw new Error("Método descrever() deve ser implementado pelas subclasses");
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }
  descrever() {
    return `${this.nome} é um estudante de ${this.curso} com ${this.idade} anos de idade.`;
  }
}


class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }
  descrever() {
    return `${this.nome} é um professor de ${this.disciplina} com ${this.idade} anos de idade.`;
  }
}


const estudante1 = new Estudante("Alice", 20, "Engenharia");
const estudante2 = new Estudante("Eva", 22, "Medicina");
const professor1 = new Professor("Carlos", 35, "Matemática");


console.log(estudante1.descrever());
console.log(estudante2.descrever());
console.log(professor1.descrever());
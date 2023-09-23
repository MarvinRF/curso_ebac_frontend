const alunos = [
  { nome: 'Sebas', nota: 7 },
  { nome: 'Tião', nota: 5 },
  { nome: 'Chico', nota: 8 },
  { nome: 'Joana', nota: 4 },
  { nome: 'Carlos', nota: 6 },
  { nome: 'Josias', nota: 3 },
];

const alunosAprovados = arrayDeAlunos => arrayDeAlunos.filter(aluno => aluno.nota >= 6);
const alunosReprovados = arrayDeAlunos => arrayDeAlunos.filter(aluno => aluno.nota < 6);

try {
  const alunosAprovadosArray = alunosAprovados(alunos);
  const alunosReprovadosArray = alunosReprovados(alunos);

  console.log('Alunos aprovados:');
  console.log(alunosAprovadosArray);
  console.log(' ');
  console.log('Alunos reprovados:');
  console.log(alunosReprovadosArray);
} catch (error) {
  console.error('Ocorreu um erro ao processar os alunos:', error);
}

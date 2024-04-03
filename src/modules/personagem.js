export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  descricao;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
  }

  obterTitulo() {
    return `${this.tipo} Iniciante`;
  }
}

export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
  }

  obterTitulo() {
    return `${this.constructor.tipo} Iniciante`;
  }
}

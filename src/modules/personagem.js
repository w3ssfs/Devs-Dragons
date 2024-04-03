export class Personagem {
  nome;
  vida = 100;
  mana = 100;
  level;
  tipo;
  descricao;

  constructor(nome, level, tipo, descricao) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
    this.descricao = descricao;
  }

  obterTitulo() {
    if (this.level >= 5) {
      return `${this.tipo} Aventureiro `;
    }
    return `${this.tipo} Iniciante`;
  }
}

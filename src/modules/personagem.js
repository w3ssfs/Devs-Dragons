export class Personagem {
  nome;
  vida;
  mana;
  level;
  classe;
  descricao;

  constructor(nome, vida, mana, level, classe, descricao) {
    this.nome = nome;
    this.vida = vida;
    this.mana = mana;
    this.level = level;
    this.classe = classe;
    this.descricao = descricao;
  }

  obterTitulo() {
    if (this.level >= 5) {
      return `${this.classe} Aventureiro `;
    }
    return `${this.classe} Iniciante`;
  }
}

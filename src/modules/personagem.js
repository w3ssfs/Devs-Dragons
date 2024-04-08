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

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return "Empate";
    } else if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} Wins`;
    } else {
      return `${personagem2.constructor.tipo} ${personagem2.nome} Wins`;
    }
  }
}

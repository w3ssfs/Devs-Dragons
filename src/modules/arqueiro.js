import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  static tipo = "Arqueiro";
  static descricao = "Nunca se erra, quando atira com o coração!";
  destreza;

  constructor(nome, level, destreza) {
    super(nome, level);
    this.destreza = destreza;
  }

  obterTitulo() {
    if (this.destreza >= 10 && this.level >= 7) {
      return `Dominador de flechas`;
    }
    return super.obterTitulo();
  }
}

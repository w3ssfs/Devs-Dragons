import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  tipo = "Arqueiro";
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

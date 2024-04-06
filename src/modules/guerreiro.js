import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  tipo = "Guerreiro";
  forca;

  constructor(nome, level, forca) {
    super(nome, level);
    this.forca = forca;
  }

  obterTitulo() {
    if (this.forca >= 10) {
      return `${this.nome} é um Glorioso ${this.tipo}`;
    } else {
      return super.obterTitulo();
    }
  }
}

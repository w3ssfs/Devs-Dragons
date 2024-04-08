import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
  static tipo = "Guerreiro";
  static descricao = "Vive por sua honra e coragem";
  forca;

  constructor(nome, forca) {
    super(nome);
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

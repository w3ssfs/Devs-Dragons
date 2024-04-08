import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static descricao = "Detentor de lancas e flechas mágicas!";
  static tipo = "ArqueiroMago";

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  }
  obterTitulo() {
    return `${this.ladoArqueiro.obterTitulo()} e ${this.ladoMago.obterTitulo()}`;
  }
}

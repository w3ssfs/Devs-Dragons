import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static descricao = "Detentor de lancas e flechas mágicas!";
  static tipo = "ArqueiroMago";

  constructor(
    nome,
    level,
    destreza,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level);
    this.ladoArqueiro = new Arqueiro(nome, level, destreza);
    this.ladoMago = new Mago(
      nome,
      level,
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }
  obterTitulo() {
    return `${this.ladoArqueiro.obterTitulo()} e ${this.ladoMago.obterTitulo()}`;
  }
}

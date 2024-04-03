import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
  elementoMagico;
  levelMagico;
  inteligencia;
  tipo = "Mago";

  constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
    super(nome, level);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  obterTitulo() {
    if (this.levelMagico >= 20 && this.inteligencia >= 25) {
      return `Mestre ${this.elementoMagico === "Trevas" ? "Das" : "Do"} ${
        this.elementoMagico
      }`;
    } else if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Dominador ${this.elementoMagico === "Trevas" ? "Das" : "Do"} ${
        this.elementoMagico
      }`;
    }
    return `Aprendiz ${this.elementoMagico === "Trevas" ? "Das" : "Do"} ${
      this.elementoMagico
    }`;
  }
}

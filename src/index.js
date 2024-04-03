import { Personagem } from "./modules/personagem.js";

const personagemWesley = new Personagem(
  "Wesley",
  30,
  10,
  10,
  "guerreiro",
  "Um grande guerreiro"
);

const personagemLuna = new Personagem(
  "Luna",
  15,
  30,
  4,
  "Mago",
  "Um grande Mago"
);

console.log(personagemLuna);

console.log(personagemWesley.obterTitulo());

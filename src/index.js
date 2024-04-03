import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";

const personagemWesley = new Personagem(
  "Wesley",
  10,
  "Arqueiro",
  "Um grande guerreiro"
);

const personagemLuna = new Personagem("Luna", 4, "Mago", "Um grande Mago");

const personagens = [personagemWesley, personagemLuna];

new PersonagemView(personagens).render();

console.log(new Mago("Fogo", 5, 4));

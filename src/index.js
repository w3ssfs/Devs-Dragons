import { Guerreiro } from "./modules/guerreiro.js";
import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoLuna = new Mago("Luna", 4, "Fogo", 5, 5);
const magoJune = new Mago("June", 8, "Trevas", 130, 124);

const guerreiroJota = new Guerreiro("Jota", 5, 2);
// const guerreiroTetra = new Guerreiro("Tetra", 10, 22);

const arqueiroWesley = new Arqueiro("Wesley", 15, 10);

const arqueiroMagoWess = new ArqueiroMago("wess", 1, 60, "Gelo", 510, 102);

const personagens = [
  magoJune,
  magoLuna,
  guerreiroJota,
  arqueiroWesley,
  arqueiroMagoWess,
];

new PersonagemView(personagens).render();

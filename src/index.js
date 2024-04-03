import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";

const magoLuna = new Mago("Luna", 4, "Fogo", 5, 5);
const magoJune = new Mago("June", 8, "Trevas", 130, 124);

const arqueiroWesley = new Arqueiro("Wesley", 15, 10);

const personagens = [magoJune, magoLuna, arqueiroWesley];

new PersonagemView(personagens).render();

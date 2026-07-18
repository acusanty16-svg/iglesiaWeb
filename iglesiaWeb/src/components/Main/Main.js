import "./Main.css";
import Hero from "./Hero/Hero";
import Familia from "./Familia/Familia";
import Creencias from "./Creencias/Creencias";
import Contacto from "./Contacto/Contacto";

const Main = () => {
  return `
    ${Hero()}
    ${Familia()}
    ${Creencias()}
    ${Contacto()}
    `;
};
export default Main;

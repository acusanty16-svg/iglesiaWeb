import "./Images.css";
const fotos = ["iglesia1.jpg", "iglesia2.jpg", "iglesia3.jpg"];

const HeroCarruselFotos = () => {
  const contenidoFotos = fotos
    .map(
      (foto) => `
        <div class="carrusel-item">
            <img src="/images/${foto}" alt="Foto iglesia">
        </div>
        `,
    )
    .join("");
  return `
    <section class="carrusel">
        ${contenidoFotos}
    </section>
    
    `;
};
export default HeroCarruselFotos;

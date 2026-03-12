import "./Images.css";
const fotos = [
  "iglesia1.jpg",
  "iglesia2.jpg",
  "iglesia3.jpg",
  "iglesia1.jpg",
  "iglesia2.jpg",
  "iglesia3.jpg",
];

const HeroCarruselFotos = () => {
  const contenidoFotos = fotos
    .map(
      (foto, index) => `
        <div class="carrusel-item">
            <img src="/images/${foto}" alt="Imagen ${index + 1} de la iglesia" loading="lazy">
        </div>
        `,
    )
    .join("");
  return `
    <section class="carrusel">
      <div class="carrusel-track">
        ${contenidoFotos}
      </div>
    </section>
    
    `;
};
export default HeroCarruselFotos;

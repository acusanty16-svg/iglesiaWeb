import "./Hero.css";
import HeroCarruselFotos from "../../imagesCarrusel/Images";
const Hero = () => {
  return `
    <section class="hero">

  <div class="hero-left">
    <h2>Conoce quienes somos</h2>

    <p>
      Somos una iglesia trinitaria con deseo de seguir a Cristo.
    </p>
    <div class="image-hero">
    ${HeroCarruselFotos()}
    </div>

  </div>


  <div class="hero-right">
      <div class="hero-card-top">
        <p class="tag">Nuestras reuniones</p>
        <h3>Domingo 10:30am</h3>
        <h3>Miércoles 08.30pm</h3>
      </div>

      <div class="hero-actions">
      <a class="btn btn-primary" href="#familia">Conoce a nuestra familia</a>
      <a class="btn btn-ghost" href="#contacto">¿Quieres ser parte?</a>
    </div>
    
  </div>

</section>
    
    `;
};

export default Hero;

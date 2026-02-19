import "./Hero.css";

const Hero = () => {
  return `
    <section class="hero">

  <div class="hero-left">
    <h2>Iglesia Cristiana Amor Fraternal</h2>

    <p>
      Somos una iglesia trinitaria con deseo de seguir a Cristo.
    </p>

    <div class="hero-actions">
      <a class="btn btn-primary" href="#productos">Ver catálogo</a>
      <a class="btn btn-ghost" href="#contacto">Pedir por WhatsApp</a>
    </div>

    <div class="badge">
      <span class="badge-dot"></span>
      <span>Envío 24/48h · Península</span>
    </div>
  </div>


  <div class="hero-right">

    <article class="hero-card">
      <div class="hero-card-top">
        <p class="tag">TOP VENTAS</p>
        <h3>Pack Degustación</h3>
        <p class="muted">4 sabores · 800g</p>
      </div>

      <div class="hero-card-price">
        <span class="price">16,90€</span>
        <span class="mini muted">IVA incl.</span>
      </div>

      <button class="btn btn-secondary">
        Añadir al carrito
      </button>

      <div class="shine"></div>
    </article>

    <div class="floating-sausage">🌭</div>

  </div>

</section>
    
    `;
};

export default Hero;

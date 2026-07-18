import "./Footer.css";

const Footer = () => {
  return `
    <footer class="footer" role="contentinfo">
      <div class="footer-contenedor">
        <div class="footer-brand">
          <img src="/images/logo.svg" alt="ICAF" width="36" height="44" class="footer-logo">
          <div>
            <h4>ICAF</h4>
            <p>Iglesia Cristiana Amor Fraternal</p>
          </div>
        </div>

        <div class="footer-links">
          <a href="#familia">Familia</a>
          <a href="#creencias">Creencias</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div class="footer-verse">
          <p>"Donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos."</p>
          <span>— Mateo 18:20</span>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ICAF. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
};

export default Footer;

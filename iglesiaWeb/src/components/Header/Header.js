import "./Header.css";

const Header = () => {
  return `
    <header class="topbar" role="banner">
  <div class="brand">
    <span class="logo" aria-hidden="true">⛪</span>

    <div class="brand-text">
      <h1>ICAF</h1>
      <p>Iglesia Cristiana Amor Fraternal.</p>
    </div>
  </div>

  <nav class="nav">
    <a href="#familia">Familia</a>
    <a href="#creencias">Creencias</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>
    
    `;
};

export default Header;

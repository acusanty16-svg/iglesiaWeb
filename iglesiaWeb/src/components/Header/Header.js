import "./Header.css";

const Header = () => {
  return `
    <header class="topbar" role="banner">
  <div class="brand">
    <img class="logo" src="/images/logo.svg" alt="ICAF" width="50" height="60">

    <div class="brand-text">
      <h1>ICAF</h1>
      <p>Iglesia Cristiana Amor Fraternal.</p>
    </div>
  </div>

  <nav class="nav">
    <a href="#familia">Familia</a>
    <a href="#creencias">Creencias</a>
    <a href="#contacto">Contacto</a>
    <a href="/alabanza.html">Alabanza</a>
  </nav>
</header>
    
    `;
};

export default Header;

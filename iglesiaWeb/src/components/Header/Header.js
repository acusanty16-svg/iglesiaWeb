import "./Header.css";

const Header = () => {
  return `
    <header class="topbar">
  <div class="brand">
    <span class="logo">⛪</span>

    <div class="brand-text">
      <h1>ICAF</h1>
      <p>Iglesia comprometida en amar a los demas.</p>
    </div>
  </div>

  <nav class="nav">
    <a href="#productos">Familia</a>
    <a href="#proceso">Creencias</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>
    
    `;
};

export default Header;

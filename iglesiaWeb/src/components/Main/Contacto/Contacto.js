import "./Contacto.css";

const Contacto = () => {
  return `
    <section class="contacto" id="contacto">
      <div class="contacto-header">
        <h2>CONTACTO</h2>
        <p>Queremos conocerte</p>
      </div>

      <div class="contacto-contenedor">
        <div class="contacto-info">
          <div class="contacto-card">
            <div class="contacto-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="2"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>contacto@icaf.org</p>
          </div>

          <div class="contacto-card">
            <div class="contacto-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <h3>Teléfono</h3>
            <p>+1 (555) 123-4567</p>
          </div>

          <div class="contacto-card">
            <div class="contacto-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Dirección</h3>
            <p>Ciudad, País</p>
          </div>
        </div>

        <form class="contacto-form">
          <div class="form-grupo">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
          </div>
          <div class="form-grupo">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required>
          </div>
          <div class="form-grupo">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
          </div>
          <button type="submit" class="btn-form">Enviar mensaje</button>
        </form>
      </div>
    </section>
  `;
};

export default Contacto;

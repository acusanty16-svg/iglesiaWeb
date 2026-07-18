import "./Familia.css";
import versiculos from "../../versiculos.json";

const versiculoHoy = versiculos[Math.floor(Math.random() * versiculos.length)];

const ministerios = [
  {
    nombre: "Ministerio de Hombres",
    descripcion: "Un espacio para el crecimiento espiritual, la comunión y el servicio. Hombres dedicados a liderar con fe y amor sus hogares y su comunidad.",
    icono: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
  },
  {
    nombre: "Ministerio de Mujeres",
    descripcion: "Mujeres transformadas por el amor de Dios, edificando juntas en oración, estudio bíblico y obras de misericordia.",
    icono: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M9 22l3-3 3 3"/></svg>`
  },
  {
    nombre: "Ministerio de Niños",
    descripcion: "Guiando a los más pequeños en el camino de Cristo con enseñanzas bíblicas, canciones y actividades que fortalecen su fe.",
    icono: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-6 2-6 4h12c0-2-2-4-6-4z"/><path d="M18 5l-3 3"/><path d="M6 5l3 3"/></svg>`
  },
  {
    nombre: "Misiones",
    descripcion: "Llevando el evangelio y el amor de Cristo a comunidades cercanas y lejanas, apoyando obras misioneras en todo el mundo.",
    icono: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
  },
  {
    nombre: "Asociación Humanitaria<br>Amor Fraternal",
    descripcion: "Extendiendo la mano al necesitado a través de obras sociales, asistencia comunitaria y programas de ayuda humanitaria.",
    icono: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  }
];

const Familia = () => {
  return `
    <section class="familia" id="familia">

      <div class="familia-verso">
        <p class="familia-verso-texto">"${versiculoHoy.texto}"</p>
        <span class="familia-verso-cita">— ${versiculoHoy.cita}</span>
      </div>

      <h2 class="familia-titulo">NUESTRA FAMILIA</h2>
      <p class="familia-subtitulo">Conoce los ministerios de ICAF</p>

      <div class="familia-grid">
        ${ministerios.map((m) => `
          <div class="familia-card">
            <div class="familia-card-icono">${m.icono}</div>
            <h3 class="familia-card-nombre">${m.nombre}</h3>
            <p class="familia-card-desc">${m.descripcion}</p>
          </div>
        `).join("")}
      </div>

    </section>
    `;
};
export default Familia;

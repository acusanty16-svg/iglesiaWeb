import "./Creencias.css";

const Creencias = () => {
  return `
    <section class="creencias" id="creencias">
      <div class="creencias-header">
        <h2>CREENCIAS</h2>
        <p>Nuestra fe se fundamenta en la Palabra de Dios</p>
      </div>

      <div class="creencias-grid">
        <div class="creencias-card">
          <div class="creencias-icon">&#10010;</div>
          <h3>La Trinidad</h3>
          <p>Creemos en un solo Dios eterno en tres personas: Padre, Hijo y Espíritu Santo.</p>
        </div>

        <div class="creencias-card">
          <div class="creencias-icon">&#10010;</div>
          <h3>Jesucristo</h3>
          <p>Creemos que Jesucristo es el Hijo de Dios, nacido de virgen, crucificado y resucitado al tercer día.</p>
        </div>

        <div class="creencias-card">
          <div class="creencias-icon">&#10010;</div>
          <h3>La Salvación</h3>
          <p>Creemos que la salvación es por gracia mediante la fe en Cristo Jesús, no por obras.</p>
        </div>

        <div class="creencias-card">
          <div class="creencias-icon">&#10010;</div>
          <h3>La Iglesia</h3>
          <p>Creemos en la iglesia como el cuerpo de Cristo, una comunidad de creyentes unidos en amor.</p>
        </div>
      </div>
    </section>
  `;
};

export default Creencias;

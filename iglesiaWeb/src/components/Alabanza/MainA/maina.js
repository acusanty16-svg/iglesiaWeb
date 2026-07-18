import "./maina.css";
import repertorio from "../data/repertorio";
import miembros from "../data/miembros";

export function LoginScreen() {
  return `
    <div class="login-a">
      <div class="login-bg-a"></div>
      <div class="login-card-a">
        <div class="login-icon-a">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>
        <h2 class="login-titulo-a">Ministerio de Alabanza</h2>
        <p class="login-desc-a">Ingresa la contraseña para acceder</p>
        <form id="login-form-a" class="login-form-a">
          <input type="password" id="password-input-a" class="login-input-a" placeholder="Contraseña" required>
          <p id="login-error-a" class="login-error-a"></p>
          <button type="submit" class="login-btn-a">Entrar</button>
        </form>
        <a href="/" class="login-back-a">Volver al inicio</a>
      </div>
    </div>
  `;
}

function HeroSection() {
  return `
    <div class="hero-a">
      <div class="hero-overlay-a"></div>
      <div class="hero-content-a">
        <h1>Ministerio de Alabanza</h1>
        <p class="hero-sub-a">ICAF <span class="hero-dot-a">•</span> Iglesia Cristiana Amor Fraternal</p>
        <div class="hero-verse-a">
          <p>"Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia."</p>
          <span>— Salmos 136:1</span>
        </div>
        <a href="https://doc.clickup.com/90151994685/d/h/2kyqmh9x-675/c570b665763427d/2kyqmh9x-955" target="_blank" rel="noopener noreferrer" class="hero-link-a">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Más información — ClickUp
        </a>
      </div>
    </div>
  `;
}

function TabBar() {
  return `
    <nav class="tab-bar-a">
      <button class="tab-btn-a active" data-tab="repertorio">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        Repertorio
      </button>
      <button class="tab-btn-a" data-tab="miembros">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
        Miembros
      </button>
      <button class="tab-btn-a" data-tab="entrenamiento">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
        Entrenamiento
      </button>
    </nav>
  `;
}

function EnsayosBanner() {
  return `
    <div class="ensayos-banner-a">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      <span>Próximos ensayos — Programación disponible pronto</span>
    </div>
  `;
}

function RepertorioContent() {
  const allKeys = [...new Set(repertorio.map((s) => s.tono))].sort();
  const keyOptions = allKeys.map((k) => `<option value="${k}">${k}</option>`).join("");

  const songs = repertorio.map((s, i) => `
    <div class="song-card-a" data-index="${i}">
      <span class="song-name-a">${s.cancion}</span>
      <div class="song-meta-a">
        <span class="song-tag-a tono-a">${s.tono}</span>
        <span class="song-tag-a bpm-a">${s.bpm} BPM</span>
      </div>
    </div>
  `).join("");

  return `
    <div class="tab-panel-a active" id="tab-repertorio">
      <div class="repertorio-tools-a">
        <div class="search-wrap-a">
          <svg class="search-icon-a" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="repertorio-search" class="repertorio-search-a" placeholder="Buscar canción...">
        </div>
        <select id="repertorio-filtro-tono" class="repertorio-filtro-a">
          <option value="">Todos los tonos</option>
          ${keyOptions}
        </select>
      </div>
      <div class="repertorio-count-a" id="repertorio-count">${repertorio.length} canciones</div>
      <div class="repertorio-grid-a" id="repertorio-grid">${songs}</div>
    </div>
  `;
}

function MiembrosContent() {
  const grupos = {};
  miembros.forEach((m) => {
    if (!grupos[m.grupo]) grupos[m.grupo] = [];
    grupos[m.grupo].push(m);
  });

  const gruposHtml = Object.entries(grupos).map(([grupo, miembrosGrupo]) => {
    const cards = miembrosGrupo.map((m) => `
      <div class="member-card-a">
        <div class="member-avatar-a">${m.nombre.charAt(0)}</div>
        <span class="member-name-a">${m.nombre}</span>
        <span class="member-rol-a">${m.rol}</span>
      </div>
    `).join("");
    return `
      <div class="member-grupo-a">
        <h3 class="member-grupo-titulo-a">${grupo}</h3>
        <div class="miembros-grid-a">${cards}</div>
      </div>
    `;
  }).join("");

  return `
    <div class="tab-panel-a" id="tab-miembros">
      ${gruposHtml}
    </div>
  `;
}

const topics = [
  {
    titulo: "Cómo respira una canción",
    def: "La dinámica crea la narrativa emocional. Inhalar/exhalar musicalmente guía a la congregación.",
    full: "La música necesita respirar. Si alguien te gritara todo el tiempo, dejarías de escuchar. Si alguien susurrara todo el tiempo, te dormirías. Las dinámicas guían a la iglesia sobre cuándo meditar y cuándo celebrar. Una canción respira cuando tiene momentos de intimidad, momentos de celebración y momentos de guerra espiritual.",
  },
  {
    titulo: "Lead",
    def: "Línea melódica principal. Voz o instrumento que lleva el protagonismo.",
    full: "El lead guía la melodía y aporta identidad a la pieza. Puede ser la voz principal, la guitarra líder, un instrumento solista o un sintetizador. En worship, es crucial que el lead sea claro para que la congregación pueda seguir la melodía.",
  },
  {
    titulo: "Riff",
    def: "Patrón melódico repetitivo que define el carácter de la canción.",
    full: "Los riffs suelen ser pegajosos y memorables, funcionando como un elemento central que define la identidad de una canción. Captan la atención del oyente desde el inicio y pueden usarse como base para construir otras partes. Comunes en rock, blues, funk y pop.",
  },
  {
    titulo: "Groove",
    def: "Sensación rítmica creada por la interacción de batería, bajo y guitarra rítmica.",
    full: "Es el 'alma' rítmica de la canción, lo que invita al movimiento. Se logra con la comunicación con Dios, ensayo personal y ensayo grupal. Tocar con total cohesión permite llegar al 'groove perfecto'. Es más una sensación que una figura musical específica.",
  },
  {
    titulo: "Build",
    def: "Aumento progresivo de tensión antes del coro o drop.",
    full: "Se logra con varias técnicas: crescendo (aumento gradual del volumen), densidad instrumental (entran más instrumentos), ritmo (fills rápidos, toms), y tensión armónica (acordes con tensión). Ubicación típica: Pre-Coro o Puente.",
  },
  {
    titulo: "Drop (Caída)",
    def: "Reducción drástica de instrumentación para crear contraste.",
    full: "La banda reduce drásticamente: solo voz + pad, batería para, el groove desaparece. Crea un momento íntimo antes de un regreso explosivo. En producciones modernas, el drop hace que el coro se sienta más fuerte por contraste.",
  },
  {
    titulo: "Break / Corte",
    def: "Silencio repentino de 1-2 tiempos que añade dramatismo.",
    full: "Toda la banda toca una frase → silencio exacto en el beat 4 → vuelve más fuerte. Añade sorpresa y dinamismo. Crea un 'respiro' que reorganiza la atención del oyente y puede usarse como señal musical para cambiar de sección.",
  },
  {
    titulo: "Tag",
    def: "Repetición final de una frase del coro con variación. Cierre enfático.",
    full: "También llamado coda corta. Ejemplo: 'Poderoso… poderoso…' repetido varias veces antes de terminar. Da sensación de final extendido y enfatizado. Ayuda a fijar el mensaje principal en la memoria del oyente.",
  },
  {
    titulo: "Stabs",
    def: "Acentos marcados de varios instrumentos simultáneos.",
    full: "Batería + bajo + guitarras + metales tocan acentos juntos: ¡TA! ¡TA-TA! ¡TA! Se usan para cambiar de sección, reforzar la energía o crear 'momentos' dentro del arreglo. Son como signos de puntuación musical.",
  },
  {
    titulo: "Layering (Capas)",
    def: "Agregar capas progresivas de instrumentos para aumentar energía sin subir volumen.",
    full: "Ejemplo: Verso → pad / Pre-coro → pad + piano / Coro → pad + piano + guitarras + synths + coros. Es clave para construir dinámica sin que los músicos tengan que tocar más fuerte. Ayuda a diferenciar secciones.",
  },
  {
    titulo: "Drive",
    def: "Sensación constante de impulso rítmico.",
    full: "Creada por guitarra eléctrica con rasgueo continuo, hi-hat en semicorcheas y bajo muy estable. Mantiene la canción avanzando, especialmente en puentes y precoros donde se necesita sostener tensión sin llegar a la dinámica máxima.",
  },
  {
    titulo: "Dinámicas (p–ff)",
    def: "Escala de intensidad musical: de suave a fuerte.",
    full: "Piano (p) = suave, Mezzo Piano (mp) = medio suave, Mezzo Forte (mf) = medio fuerte, Forte (f) = fuerte, Fortissimo (ff) = muy fuerte. Los conectores: crescendo (aumento gradual) y decrescendo (disminución gradual).",
  },
  {
    titulo: "Transposición",
    def: "Ajuste de tesitura vocal para encontrar la tonalidad correcta.",
    full: "Pasos: 1) Determinar el rango vocal de la persona, 2) Determinar el rango de la canción, 3) Encontrar el 'match' donde la canción quede cómoda para el cantante. A veces hay que 'forzar medio tono' para que funcione.",
  },
  {
    titulo: "Transiciones",
    def: "Conexión entre canciones usando acordes, tempo, o arpegios.",
    full: "Conocer la setlist es clave. Transiciones suaves: acordes de paso (slow), cambio de tempo (fast), arpeggio o ambient loop (secreto). Roles clave: el tecladista/pad sostiene mientras los demás se preparan para la siguiente canción.",
  },
  {
    titulo: "Rutina de Pulso y Tempo",
    def: "Ejercicios grupales para mejorar la cohesión rítmica.",
    full: "Ejercicios base (todos los ensayos): Negras unificadas (5 min), Subdivisión consciente (3-4 min), Palmas en 2 y 4 (3 min), Silencio controlado (4 min). Rotativos: Dinámica sin cambio de tempo, El director manda, Tempo emocional.",
  },
];

function EntrenamientoContent() {
  const cards = topics.map((t, i) => `
    <div class="topic-card-a" data-topic="${i}">
      <div class="topic-header-a">
        <h3>${t.titulo}</h3>
        <button class="topic-toggle-a" data-topic="${i}" aria-label="Ver más">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      </div>
      <p class="topic-preview-a">${t.def}</p>
      <div class="topic-full-a" id="topic-full-${i}">
        <p>${t.full}</p>
      </div>
    </div>
  `).join("");

  return `
    <div class="tab-panel-a" id="tab-entrenamiento">
      <p class="entrenamiento-intro-a">Apuntes de teoría musical y organización para el equipo de alabanza</p>
      <div class="topicos-grid-a">${cards}</div>
    </div>
  `;
}

export function AdminContent() {
  return `
    <main class="alabanza-main">
      ${HeroSection()}
      <div class="alabanza-container">
        ${TabBar()}
        ${EnsayosBanner()}
        ${RepertorioContent()}
        ${MiembrosContent()}
        ${EntrenamientoContent()}
        <button id="logout-btn-a" class="logout-btn-a">Cerrar sesión</button>
      </div>
    </main>
  `;
}

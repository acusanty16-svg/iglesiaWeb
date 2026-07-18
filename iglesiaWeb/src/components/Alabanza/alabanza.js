import "./alabanza.css";
import HeaderA from "./HeaderA/headera";
import { LoginScreen, AdminContent } from "./MainA/maina";
import FooterA from "./FooterA/footera";

const PASSWORD = import.meta.env.VITE_ALABANZA_PASSWORD;

function initLogin() {
  const form = document.getElementById("login-form-a");
  const input = document.getElementById("password-input-a");
  const error = document.getElementById("login-error-a");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === PASSWORD) {
      sessionStorage.setItem("alabanza_auth", "true");
      renderApp();
    } else {
      error.textContent = "Contraseña incorrecta";
      input.value = "";
      input.focus();
    }
  });
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn-a");
  const panels = {
    repertorio: document.getElementById("tab-repertorio"),
    miembros: document.getElementById("tab-miembros"),
    entrenamiento: document.getElementById("tab-entrenamiento"),
  };

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabs.forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
      Object.values(panels).forEach((p) => p?.classList.remove("active"));
      panels[tab]?.classList.add("active");
    });
  });
}

function initRepertorioSearch() {
  const input = document.getElementById("repertorio-search");
  const filtro = document.getElementById("repertorio-filtro-tono");
  const count = document.getElementById("repertorio-count");
  if (!input || !filtro || !count) return;

  function filtrar() {
    const texto = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const tono = filtro.value;
    let visibles = 0;

    document.querySelectorAll(".song-card-a").forEach((card) => {
      const nombre = card.querySelector(".song-name-a")?.textContent?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";
      const cardTono = card.querySelector(".tono-a")?.textContent || "";
      const coincideTexto = !texto || nombre.includes(texto);
      const coincideTono = !tono || cardTono === tono;
      card.classList.toggle("filtrada", !(coincideTexto && coincideTono));
      if (coincideTexto && coincideTono) visibles++;
    });

    count.textContent = `${visibles} canción${visibles !== 1 ? "es" : ""}`;
  }

  input.addEventListener("input", filtrar);
  filtro.addEventListener("change", filtrar);
}

function initEntrenamiento() {
  document.querySelectorAll(".topic-toggle-a").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".topic-card-a");
      if (card) {
        card.classList.toggle("abierto");
        btn.setAttribute("aria-label", card.classList.contains("abierto") ? "Ver menos" : "Ver más");
      }
    });
  });
}

export function renderApp() {
  const autenticado = sessionStorage.getItem("alabanza_auth") === "true";

  document.querySelector("#app").innerHTML = autenticado
    ? `${HeaderA()}${AdminContent()}${FooterA()}`
    : LoginScreen();

  if (autenticado) {
    document.getElementById("logout-btn-a")?.addEventListener("click", () => {
      sessionStorage.removeItem("alabanza_auth");
      renderApp();
    });
    initTabs();
    initRepertorioSearch();
    initEntrenamiento();
  } else {
    initLogin();
  }
}

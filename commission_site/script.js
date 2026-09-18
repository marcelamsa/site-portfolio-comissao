const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");
const brandLink = document.querySelector("[data-tab-link]");

function activateTab(tabName, updateHash = true) {
  tabs.forEach((tab) => {
    const active = tab.dataset.tab === tabName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });

  panels.forEach((panel) => {
    const active = panel.dataset.panel === tabName;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });

  if (updateHash) {
    history.replaceState(null, "", `#${tabName}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

brandLink.addEventListener("click", (event) => {
  event.preventDefault();
  activateTab("termos");
});

const hashTab = window.location.hash.replace("#", "");
if (["termos", "redes", "portfolio"].includes(hashTab)) {
  activateTab(hashTab, false);
}

document.getElementById("year").textContent = new Date().getFullYear();

function copyDiscord(event) {
  event.preventDefault();

  const username = "@seuusuario";

  navigator.clipboard.writeText(username);

  alert("Usuário do Discord copiado!");
}
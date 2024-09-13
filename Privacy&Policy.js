// Previene l'azione predefinita del tasto destro del mouse, quindi di conseguenza non è più possibile salvare immagini o gestire altre opzioni del menù contestuale del tasto destro
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); 
  });

// Disabilita il trascinamento delle immagini in una altra scheda (per togliere la possibilità di copiarle)
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });

// Forza lo scroll della pagina all'inizio ogni volta che viene ricaricata o quando si lascia la pagina e la si riapre dopo.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
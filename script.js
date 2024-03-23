// Funzione per aprire il popup quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden"; // Impedisce lo scroll dello sfondo quando il popup è attivo
  });
  
  // Funzione per chiudere il popup quando si clicca sul pulsante "Chiudi"
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto"; // Riabilita lo scroll dello sfondo quando il popup viene chiuso
  }
  // Lista di immagini di sfondo
  const backgroundImageList = [
    "tortaalcioccolato.png",
    "TORTA-AL-CIOCCOLATO-CON-CREMA-AL-MASCARPONE-E-NUTELLA.jpeg",
    "16x9-455432p707452.jpg",
    // Aggiungi qui altre immagini di sfondo
  ];

  // Funzione per cambiare l'immagine di sfondo
  function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImageList.length);
    const randomImage = backgroundImageList[randomIndex];
    document.getElementById('homepage').style.backgroundImage = `url('${randomImage}')`;
  }

  // Cambia l'immagine di sfondo della homepage ogni 10 secondi (10000 millisecondi)
  setInterval(changeBackgroundImage, 10000);
  
  // Cambia l'immagine di sfondo all'avvio della pagina
  changeBackgroundImage();
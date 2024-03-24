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
    "TORTA AL CIOCCOLATO 1.png",
    "TORTA AL CIOCCOLATO 2.jpg",
    "PREPARAZIONE TORTA.png",
    "TORTA NUZIALE 1.png",
    "TORTA NUZIALE 2.png",
    "TORTA PER LE FESTE.png",
    "TORTA TIRAMISÙ.png",
  ];

  // Funzione per cambiare l'immagine di sfondo
  function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImageList.length);
    const randomImage = backgroundImageList[randomIndex];
    document.getElementById('homepage').style.backgroundImage = `url('${randomImage}')`;
  }

  // Cambia l'immagine di sfondo della homepage ogni 10 secondi (5000 millisecondi)
  setInterval(changeBackgroundImage, 5000);
  
  // Cambia l'immagine di sfondo all'avvio della pagina
  changeBackgroundImage();
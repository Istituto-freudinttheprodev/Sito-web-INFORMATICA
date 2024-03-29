// Funzione per aprire il popup quando il documento è pronto
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden"; // Impedisce lo scroll della pagina quando il popup è attivo
  });
  
  // Funzione per chiudere il popup quando si clicca sul pulsante "Chiudi"
  function chiudipopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto"; // Riabilita lo scroll della pagina quando il popup viene chiuso
  }

  // Lista di immagini di sfondo
  const listaimmaginidisfondo = [
    "TORTA SACHER.png",
    "TORTA AL DOPPIO CIOCCOLATO.jpg",
    "PREPARAZIONE TORTA.png",
    "TORTA NUZIALE 1.png",
    "TORTA NUZIALE 2.png",
    "TORTA PARADISO.jpg",
    "TORTA PER LE FESTE.png",
    "TORTA TIRAMISÙ.png",
  ];

  // Funzione per cambiare l'immagine di sfondo
  function cambioimmaginedisfondo() {
    const mumerorandomico = Math.floor(Math.random() * listaimmaginidisfondo.length);
    const immaginerandomica = listaimmaginidisfondo[mumerorandomico];
    document.getElementById('homepage').style.backgroundImage = `url('${immaginerandomica}')`;
  }

  // Cambia l'immagine di sfondo della homepage ogni 3 secondi (3000 millisecondi)
  setInterval(cambioimmaginedisfondo, 3000);
  
  // Cambia l'immagine di sfondo all'avvio della pagina
  cambioimmaginedisfondo();
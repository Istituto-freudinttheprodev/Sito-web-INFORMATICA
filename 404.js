// Disabilita il trascinamento delle immagini in una altra scheda (per togliere la possibilità di copiarle)
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
});

// Previene l'azione predefinita del tasto destro del mouse, quindi di conseguenza non è più possibile salvare immagini o gestire altre opzioni del menù contestuale del tasto destro
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); 
});

// Forza lo scroll della pagina all'inizio ogni volta che viene ricaricata o quando si lascia la pagina e la si riapre dopo
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function countdownhomepage() {
    // Questa variabile imposta il timer a 60 secondi
    let timer = 60;

    // Mostra il countdown
    const countdownElement = document.getElementById("countdownhomepage");
    const interval = setInterval(() => {
        countdownElement.innerHTML = timer; // Aggiorna il timer visualizzato nella pagina
        timer--; // Decrementa il valore della variabile timer di 1 ad ogni secondo, in modo da far terminare il timer entro i 60 secondi prestabiliti prima

        // Quando il timer arriva a zero, ferma l'intervallo e reindirizza alla pagina HTML indicata sotto
        if (timer < 0) {
            clearInterval(interval); // Ferma l'intervallo di aggiornamento del timer
            window.location.href = "index.html"; // Viene indicato il nome della pagina HTML a cui deve reindirizzare
        }
    }, 1000); // Aggiorna ad ogni secondo il timer nel codice
}

// Avvia il timer quando la pagina è caricata
window.onload = countdownhomepage;
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
    // Questa variabile imposta il countdown a 60 secondi
    let countdown = 30;

    // Mostra il countdown
    const countdowntimerhomepage = document.getElementById("countdownhomepage");
    const intervalloditempocountdown = setInterval(() => {
        countdowntimerhomepage.innerHTML = countdown; // Aggiorna il countdown visualizzato nella pagina
        countdown--; // Decrementa il valore della variabile countdown di 1 ad ogni secondo, in modo da far terminare il countdown entro i 60 secondi prestabiliti prima

        // Quando il countdown arriva a zero, ferma l'intervallo e reindirizza alla pagina HTML indicata sotto
        if (countdown < 0) {
            clearInterval(intervalloditempocountdown); // Ferma l'intervallo di aggiornamento del countdown
            window.location.href = "index.html"; // Viene indicato il nome della pagina HTML a cui deve reindirizzare
        }
    }, 1000); // Aggiorna ad ogni secondo il countdown nel codice
}

// Avvia il countdown quando la pagina è completamente caricata
window.onload = countdownhomepage;
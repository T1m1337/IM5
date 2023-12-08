document.addEventListener('DOMContentLoaded', function () {
    // Füge einen Event-Listener hinzu, um auf das Laden der Seite zu reagieren
    window.addEventListener('load', function () {
        // Rufe die Funktion zum Einfliegen der Divs auf
        flyInDivs();
    });
});

function flyInDivs() {
    // Füge die Klasse 'animated' zu den Divs hinzu, um die CSS-Animation auszulösen
    document.getElementById('flex-container').classList.add('subpage-animated');

}


function toggleContent(contentId, buttonId) {
    var content = document.getElementById(contentId);
    var button = document.getElementById(buttonId);
    if (content.style.display == 'none' || content.style.display == '') {
        content.style.display = 'block';
        button.textContent = 'Beispiel verbergen';
    } else {
        content.style.display = 'none';
        button.textContent = 'Beispiel Anzeigen';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.left-content');

    function checkVisibility() {
        elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initial prüfen
    checkVisibility();

    // Event Listener für das Scrollen hinzufügen
    window.addEventListener('scroll', checkVisibility);
});
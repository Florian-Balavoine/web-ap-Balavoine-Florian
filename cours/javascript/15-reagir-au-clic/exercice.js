// Sélection des éléments pour l'équipe Silent Vipers
const boutonSilentVipers = document.querySelector('#bouton-silent-vipers');
const detailsSilentVipers = document.querySelector('#details-silent-vipers');

// Sélection de tous les boutons portant la classe .bouton-equipe
const boutonsEquipes = document.querySelectorAll('.bouton-equipe');

// Un seul gestionnaire de clic réutilisable pour tous les boutons
function basculerEquipe(event) {
    // 1. Retrouver le bouton qui a déclenché l'événement grâce à event.currentTarget
    const boutonClique = event.currentTarget;

    // 2. Lire l'attribut data-cible via .dataset.cible pour trouver le bloc correspondant
    const idCible = boutonClique.dataset.cible;
    const blocDetails = document.querySelector(`#${idCible}`);

    // 3. Basculer la classe 'cachee' pour afficher ou masquer le bloc
    blocDetails.classList.toggle('cachee');

    // 4. Modifier le texte du bouton selon l'état du bloc (affiché ou masqué)
    // On sauvegarde le nom de l'équipe au premier clic si ce n'est pas déjà fait
    if (!boutonClique.dataset.nomEquipe) {
        boutonClique.dataset.nomEquipe = boutonClique.textContent;
    }
    const nomEquipe = boutonClique.dataset.nomEquipe;

    if (blocDetails.classList.contains('cachee')) {
        boutonClique.textContent = `Afficher ${nomEquipe}`;
    } else {
        boutonClique.textContent = `Masquer ${nomEquipe}`;
    }
}

// Attacher ce même gestionnaire à chaque bouton de la liste
boutonsEquipes.forEach((bouton) => {
    bouton.addEventListener('click', basculerEquipe);
});

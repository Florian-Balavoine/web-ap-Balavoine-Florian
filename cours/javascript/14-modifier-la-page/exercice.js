// Informations sur un joueur de l'équipe Silent Vipers
const pseudoJoueur = "Serpent";
const posteJoueur = "Duelliste";
const scoreSaison = 6140;

// 1. Afficher les informations du joueur
const elementNom = document.querySelector("#nom-joueur");
const elementStatut = document.querySelector("#statut-joueur");

elementNom.textContent = pseudoJoueur;
elementStatut.textContent = posteJoueur;

// 2. Ajouter une classe selon une condition
elementNom.classList.toggle("score-eleve", scoreSaison > 5000);
console.log(document.querySelector("#nom-joueur").outerHTML);

// 3. textContent contre innerHTML
const commentaire = "Ce joueur est <strong>en pleine forme</strong> cette saison.";

/*
 * Différence de rendu entre textContent et innerHTML :
 * - Avec textContent : le navigateur affiche les balises <strong> littéralement comme du texte brut, sans mettre le texte en gras.
 * - Avec innerHTML : le navigateur interprète la balise HTML <strong> et affiche réellement « en pleine forme » en gras.
 */

// Faille de sécurité : injection XSS (Cross-Site Scripting).
// Affecter directement une saisie utilisateur à innerHTML permet à un attaquant d'injecter et d'exécuter du code JavaScript malveillant dans la page.
elementStatut.innerHTML = commentaire;

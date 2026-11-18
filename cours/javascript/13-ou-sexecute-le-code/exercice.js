// Informations sur un joueur de l'équipe Iron Phoenix
const pseudoJoueur = "Ashen";
const posteJoueur = "Duelliste";
let scoreSaison = 5210;

// --- 1. Afficher une valeur calculée ---
// Exemple : calcul d'une moyenne sur 10 matchs joués
const moyenneParMatch = scoreSaison / 10;
console.log(pseudoJoueur + " a une moyenne de " + moyenneParMatch + " points par match.");

// --- 2. Une valeur booléenne ---
// Vérifie si le score dépasse 5000 (renvoie true si scoreSaison > 5000, sinon false)
const objectifAtteint = scoreSaison > 5000;
console.log("Objectif des 5000 points atteint : " + objectifAtteint);

// --- 3. Le mystère de l'addition ---
console.log(5 + 3);

// Le signe + entre une chaîne de caractères ("5") et un nombre (3) effectue une concaténation (collage de texte) et non une addition mathématique.
console.log("5" + 3);

// Les ordinateurs stockent les nombres décimaux en binaire (norme IEEE 754), ce qui crée une minuscule imprécision d'arrondi lors de la conversion de 0.1 et 0.2.
console.log(0.1 + 0.2);


const joueurs = [
    { pseudo: "Maple", poste: "Support", scoreSaison: 2510 },
    { pseudo: "Quill", poste: "Initiateur", scoreSaison: 1870 },
    { pseudo: "Frostbyte", poste: "Duelliste", scoreSaison: 3620 },
];

joueurs.sort((a, b) => b.scoreSaison - a.scoreSaison);

3000
let lignesHTML = "";

for (const joueur of joueurs) {

    let classeCSS = "";
    if (joueur.scoreSaison > 3000) {
        classeCSS = ' class="score-eleve"';
    }

    lignesHTML += `
    <tr${classeCSS}>
      <td>${joueur.pseudo}</td>
      <td>${joueur.poste}</td>
      <td>${joueur.scoreSaison}</td>
    </tr>
  `;
}

document.querySelector("#corps-tableau").innerHTML = lignesHTML;

const joueurs = [
    { pseudo: "Serpent", poste: "Duelliste", scoreSaison: 6140 },
    { pseudo: "Onyx", poste: "Controleur", scoreSaison: 4470 },
    { pseudo: "Whisper", poste: "Sentinelle", scoreSaison: 3890 },
    { pseudo: "Tempest", poste: "Initiateur", scoreSaison: 5030 },
];

const champRecherche = document.querySelector("#champ-recherche");
const corpsTableau = document.querySelector("#corps-tableau");


function normaliserTexte(texte) {
    return texte
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function afficherJoueurs(listeJoueurs) {
    if (listeJoueurs.length === 0) {
        corpsTableau.innerHTML = `
      <tr>
        <td colspan="3">Aucun joueur ne correspond à la recherche.</td>
      </tr>
    `;
        return;
    }

    let lignesTableau = "";

    for (const joueur of listeJoueurs) {
        lignesTableau +=
            "<tr><td>" +
            joueur.pseudo +
            "</td><td>" +
            joueur.poste +
            "</td><td>" +
            joueur.scoreSaison +
            "</td></tr>";
    }

    corpsTableau.innerHTML = lignesTableau;
}

champRecherche.addEventListener("input", () => {
    const recherche = normaliserTexte(champRecherche.value);

    const joueursFiltres = joueurs.filter((joueur) => {
        const pseudoNormalise = normaliserTexte(joueur.pseudo);
        return pseudoNormalise.includes(recherche);
    });

    afficherJoueurs(joueursFiltres);
});

afficherJoueurs(joueurs);


let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

// Initialisation du maximum et du minimum
let maximum = nombres[0];
let minimum = nombres[0];

let positionMax = 0;
let positionMin = 0;

// Recherche d'une valeur
let recherche = 31;

// -1 signifie que la valeur n'est pas encore trouvée
let position = -1;

// Recherche du maximum et du minimum
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
        positionMax = i;
    }

    if (nombres[i] < minimum) {
        minimum = nombres[i];
        positionMin = i;
    }
}

// Recherche de la valeur cible
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        position = i;
        break;
    }
}

// Affichage des résultats
console.log("Maximum : " + maximum + " (Index : " + positionMax + ")");
console.log("Minimum : " + minimum + " (Index : " + positionMin + ")");

if (position !== -1) {
    console.log("La valeur " + recherche + " est présente dans le tableau.");
} else {
    console.log("La valeur " + recherche + " est absente du tableau.");
}

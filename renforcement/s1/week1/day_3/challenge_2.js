let ingrédient =
    [
        { nom: 'bata', quantite: 12039, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'légume' },
        { nom: 'Checken', quantite: 9800, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'viande' },
        { nom: 'tahmira', quantite: 4000, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'épice' },
        { nom: 'apple', quantite: 11920, unite: 'litres', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'boisson' },

        { nom: 'maticha', quantite: 5890, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'légume' },
        { nom: 'meat', quantite: 4598, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'viande' },
        { nom: 'zaafaran', quantite: 12900, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'épice' },
        { nom: 'orange', quantite: 12900, unite: 'litres', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'boisson' },


        { nom: 'dinjal', quantite: 9800, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'légume' },
        { nom: 'meat', quantite: 2300, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'viande' },
        { nom: 'karkom', quantite: 2897, unite: 'kg', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'épice' },
        { nom: 'afokado', quantite: 12900, unite: 'litres', prix_unitaire: 90, seuil_alerte: 5000, categorie: 'boisson' },
    ]

let quantit_alerte = ingrédient.filter(ingre => ingre.quantite < ingre.seuil_alerte)
console.log(quantit_alerte);
console.log("-----------------------------------------------------------------------------")

ingrédient.forEach(ingre => {
    console.log("la valur de quantite : " + (ingre.quantite * ingre.prix_unitaire))
})

console.log("-----------------------------------------------------------------------------")
ingrédient.forEach(ingre => {
    let categorie = ingre.categorie
    let quantit_valur = ingrédient.filter(ingre => ingre.categorie == categorie)
    let num = 0;
    for (let i = 0; i < quantit_valur.length; i++) {

        num += quantit_valur[i].quantite
        console.log(quantit_valur[i].categorie)
    }
    console.log("la valur de stock  : " + num)

})
console.log("-----------------------------------------------------------------------------")

let command = [{ nom: 'Checken', quantites: 5000 },
{ nom: 'orange', quantites: 7000 },
{ nom: 'karkom', quantites: 3000 }
]
for (let i = 0; i < command.length; i++) {
    for (let j = 0; j < ingrédient.length; j++) {
        if (command[i].nom == ingrédient[j].nom) {
            if (command[i].quantites <= ingrédient[j].quantite) {
                ingrédient[j].quantite = ingrédient[j].quantite - command[i].quantites
                console.log("kayn ")
            } else {
                console.log("la : " + (command[i].quantites - ingrédient[j].quantite))

            }
        }
    }
}
console.log("-----------------------------------------------------------------------------")
let seuil_alertes = ingrédient.filter(ingre => ingre.quantite < ingre.seuil_alerte)
seuil_alertes.forEach(seuil_alerte => {
    console.log("le nom " + seuil_alerte.nom + ' quantité à commander pour revenir au double du seuil ' + (seuil_alerte.seuil_alerte - seuil_alerte.quantite))
})


let mensuelles  = 
[
     { mois :1,  chiffre_affaire :12900,nb_clients : 327,ville : 'marrakche'}
    ,{ mois :2,  chiffre_affaire :56048,nb_clients : 454,ville : 'casablonca'}
    ,{ mois :3,  chiffre_affaire :80348,nb_clients : 613,ville : 'rabat'}
    
    ,{ mois :4,  chiffre_affaire :69000,nb_clients : 310,ville : 'nadore'}
    ,{ mois :5,  chiffre_affaire :45939 ,nb_clients : 438,ville : 'tanja'}
    ,{ mois :6,  chiffre_affaire :23000,nb_clients : 367,ville : 'casablonca'}
    
    ,{ mois :7,  chiffre_affaire :34843,nb_clients : 690,ville : 'miknas'}
    ,{ mois :8,  chiffre_affaire :23455 ,nb_clients : 545,ville : 'tanja'}
    ,{ mois :9,  chiffre_affaire :43443,nb_clients : 343,ville : 'marrakche'}
    
    ,{ mois :10,  chiffre_affaire :93432,nb_clients : 345,ville : 'casablonca'}
    ,{ mois :11,  chiffre_affaire :53342,nb_clients : 342,ville : 'asafe'}
    ,{ mois :12,  chiffre_affaire :34933,nb_clients : 389,ville : 'marrakche'}

]
let affaires_total = 0 ;
mensuelles.forEach(mensuelle=>{
     affaires_total +=mensuelle.chiffre_affaire;
})
console.log('le chiffre daffaires total de lannée : '+affaires_total);
console.log("-------------------------------------------------")
console.log('Calcule le chiffre daffaires moyen par mois : '+(affaires_total/12))
console.log("-------------------------------------------------")

let mois_meilleur='';
let chiffre_affaire_mois = 0;
mensuelles.forEach(mensuelle=>{
  
    if(mensuelle.chiffre_affaire > chiffre_affaire_mois){
      chiffre_affaire_mois = mensuelle.chiffre_affaire
      mois_meilleur = mensuelle.mois
    }
     
})
console.log('le mois avec le meilleur chiffre d affaires : '+mois_meilleur);
console.log("-------------------------------------------------")

let mois_client ='';
let nb_clients_mois = 0;
mensuelles.forEach(mensuelle=>{
  
    if(mensuelle.nb_clients > nb_clients_mois){
      nb_clients_mois = mensuelle.nb_clients
      mois_client = mensuelle.mois
    }
})
console.log('le mois avec le moins de clients : '+mois_client);

console.log("-------------------------------------------------")


let mensuelle = mensuelles.filter(mois=>mois.chiffre_affaire>50000)
mensuelle.forEach(mensuell=>{
    console.log(mensuell);
})
console.log("-------------------------------------------------")

mensuelles.sort((a,b)=>b.chiffre_affaire-a.chiffre_affaire)
mensuelles.forEach(mensuell=>{
    console.log(mensuell);
})
console.log("-------------------------------------------------")
mensuelles.sort((a,b)=>a.mois-b.mois)

let croissance_mois=[];
for(let i = 1 ; i<mensuelles.length;i++){
  croissance_mois.push({
   dernier_mois: mensuelles[i - 1].mois,
        chiffre_affaires_dernier_mois: mensuelles[i - 1].chiffre_affaire,
        Mois: mensuelles[i].mois,
        chiffre_affaires: mensuelles[i].chiffre_affaire,
        croissance: mensuelles[i].chiffre_affaire - mensuelles[i - 1].chiffre_affaire
})
}
for(let i = 0 ; i<mensuelles.length ;i++){
 console.log(croissance_mois[i])
}

console.log("-------------------------------------------------")


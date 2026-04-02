let contact = [
    { nom :'mouad sertati',  entreprise  :'cegedim',email : 'mouadsertati@gmial.con',telephone : '0708217493',ville:'marrakch'},
      { nom :'sara tati',  entreprise  :'flam flower',email : 'saratati@gmial.con',telephone : '0708217493',ville:'marrakch'},
    { nom :'amine ahiedon',  entreprise  :'boxkick',email : 'amineahirdone@gmial.con',telephone : '0708217493',ville:'rabat'},
    { nom :'ahmed rihale',  entreprise  :'footweb',email : 'ahmedrihale@gmial.con',telephone : '0708217493',ville:'casa'},
    { nom :'youssef sartati',  entreprise  :'efcompte',email : 'youssefsartati@gmial.con',telephone : '0708217493',ville:'rabat'},
    { nom :'nour ama',  entreprise  :'atlase',email : 'nourama@gmial.con',telephone : '0708217493',ville:'casa'},

]
let adresse = [
    { rue :'mohemmad 5',  code_postal  :4000,ville:'casa',pays :'moroc'},
    { rue :'masera',  code_postal  :5000,ville:'marrakch',pays : 'france'},
    { rue :'afak',  code_postal  :6000,ville : 'marrakch',pays : 'use'},
    { rue :'dir dabchi',  code_postal  :7000,ville:'rabat',pays : 'italai'},
    { rue :'zohore',  code_postal  :8000,ville:'casa',pays : 'spn'},
    { rue :'himo',  code_postal  :9000,ville:'rabat',pays : 'portogale'},

]

contact.forEach(contact=>{
    console.log("nom : "+contact.nom+" ville : "+contact.ville)
})
console.log('------------------------- ---------------------------------------------')

for(let i = 0 ;i <contact.length;i++){
    let ville = contact[i].ville;
    let filparville= contact.filter(num=>num.ville==ville);
    console.log("la ville : "+ville)
    console.log("les noms: ")
    filparville.forEach(fil=>{
    console.log(fil.nom)
      
    })
}
console.log('----------------------------------------------------------------------')
let nam_entreprise ="atlase";
 let nom= contact.filter(num=>num.entreprise==nam_entreprise);
 console.log(nom);
 console.log('----------------------------------------------------------------------')
 let contact_id = 5;
 contact[contact_id].nom ='erin yuger';
  contact[contact_id].entreprise ='aot';
  contact[contact_id].email ='erin@gmial.com';
  contact[contact_id].ville ='bardaise';
  
  contact.forEach(contact=>{
    console.log(contact)
})
console.log('----------------------------------------------------------------------')










  
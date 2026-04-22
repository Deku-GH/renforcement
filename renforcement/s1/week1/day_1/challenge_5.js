let etud = [
{  nom: 'mouad', prenom: "sertati", age:22 ,moyenne :12},
{  nom: 'sara', prenom: "dhma", age:21 ,moyenne :14},
{  nom: 'anime', prenom: "telj", age:18 ,moyenne :10},
{  nom: 'ayman', prenom: "vens", age:19 ,moyenne :13},
{  nom: 'yasir', prenom: "ai", age:23 ,moyenne :9},

]

etud.forEach(etudent=>{
    if(etudent['moyenne']>=12){
        console.log('l étudiants qui ont une moyenne supérieure ou égale à 12 :'+etudent['nom']);
    }
})


etud.sort((s1,s2)=>s1.age-s2.age);
console.log(etud)




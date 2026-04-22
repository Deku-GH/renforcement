let reservations  = [
  {
    name: "Ali",
    nombre_personnes: 10,
    date: "2026-04-05",
    heure: "19:00",
    telephone: "0600000001"
  },
  {
    name: "Sara",
    nombre_personnes: 15,
    date: "2026-04-05",
    heure: "19:00",
    telephone: "0600000002"
  },
  {
    name: "Youssef",
    nombre_personnes: 5,
    date: "2026-04-05",
    heure: "19:00",
    telephone: "0600000003"
  },
  {
    name: "Lina",
    nombre_personnes: 5,
    date: "2026-04-05",
    heure: "19:00",
    telephone: "0600000004"
  },
  {
    name: "Karim",
    nombre_personnes: 20,
    date: "2026-04-05",
    heure: "20:00",
    telephone: "0600000005"
  },
  {
    name: "Nadia",
    nombre_personnes: 8,
    date: "2026-04-05",
    heure: "20:00",
    telephone: "0600000006"
  },
  {
    name: "Omar",
    nombre_personnes: 5,
    date: "2026-04-05",
    heure: "20:00",
    telephone: "0600000007"
  },
  {
    name: "Leila",
    nombre_personnes: 12,
    date: "2026-04-06",
    heure: "19:00",
    telephone: "0600000008"
  }
];
console.log(reservations.length);

function ajoute_reservation(name,nombre_personnes,date,heure,telephone){
    let numbre_totl =reservations.length;
    if(numbre_totl>=30){
        let msg="en attente"
        return msg;
    }

}
  let msg=  ajoute_reservation('mouad',23,'2026-04-06','20:00','0600000009')
  console.log(msg)
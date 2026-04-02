let équipes = [
  { nom: 'monshister untith', points: 27, buts_pour: 10, buts_contre: 5, matchs_joues: 11 },
  { nom: 'barcalona', points: 27, buts_pour: 17, buts_contre: 8, matchs_joues: 11 },
  { nom: 'jueventus', points: 23, buts_pour: 9, buts_contre: 4, matchs_joues: 11 },
  { nom: 'monshister city', points: 26, buts_pour: 14, buts_contre: 9, matchs_joues: 11 },
  { nom: 'milan', points: 23, buts_pour: 6, buts_contre: 6, matchs_joues: 11 },
  { nom: 'real madrid', points: 28, buts_pour: 13, buts_contre: 6, matchs_joues: 11 },
  { nom: 'bayer manchen', points: 24, buts_pour: 10, buts_contre: 6, matchs_joues: 11 },
]
équipes.forEach(equipe => {
  console.log('l equipe ' + equipe.nom + " différence de buts pour chaque équipe " + (equipe.buts_pour - equipe - buts_contre))
})




équipes.sort((a, b) => b.points - a.points);

console.log(équipes)





let utilisateurs = [
    { pseudo :'nuz',  note  :4.5,commentaire : 'your are good man ',date : '2026-02-02'},
    { pseudo :'yora',  note  :3,commentaire : 'why you do that',date : '2026-06-02'},
    { pseudo :'asta',  note  :1,commentaire : 'your a good ',date : '2026-22-02'},
    { pseudo :'loffy',  note  :1,commentaire : 'your a good ',date : '2026-03-01'},
    { pseudo :'axfa',  note  :3,commentaire : 'your a good ',date : '2026-03-02'},
    { pseudo :'rim',  note  :4,commentaire : 'your a good ',date : '2026-03-03'},
    { pseudo :'gambole',  note  :2,commentaire : 'your a good ',date : '2026-03-04'},
    { pseudo :'erin',  note  :4,commentaire : 'your a good ',date : '2026-03-05'},
    { pseudo :'etchigo',  note  :3,commentaire : 'your a good ',date : '2026-04-01'},
    { pseudo :'niziko',  note  :1.5,commentaire : 'your a good ',date : '2026-04-02'},
    { pseudo :'arlon',  note  :4,commentaire : 'your a good ',date : '2026-04-03'},
    { pseudo :'firman',  note  :5,commentaire : 'your a good ',date : '2026-04-04'},
    { pseudo :'ana',  note  :3.5,commentaire : 'your a good ',date : '2026-04-05'},
    { pseudo :'arya',  note  :3,commentaire : 'your a good ',date : '2026-01-06'},
    { pseudo :'ozi',  note  :5,commentaire : 'your a good ',date : '2026-05-02'}

]

let noteMoyen = 0
utilisateurs.forEach(e=>{
    noteMoyen+= e.note
})
noteMoyen= Math.round((noteMoyen/utilisateurs.length)*10)/10
console.log("Note moyen:", noteMoyen, "\n")

let starCount=[0,0,0,0,0,0]
utilisateurs.forEach(e=>{
  starCount[e.note]++
})
for(let i=0;i<starCount.length;i++){
  console.log(`${i} stars count: ${starCount[i]}`)
}

let positive = utilisateurs.filter((a)=>{
  return a.note >= 4
})
let negative = utilisateurs.filter((a)=>{
  return a.note <= 2
})
let normal = utilisateurs.filter((a)=>{
  return a.note <= 2 && a.note >= 4
})

console.log(`positives: `, positive, "\n")
console.log('negatives: ', negative, "\n")

let sortedByComments = utilisateurs.toSorted((a,b)=>{
  return a.commentaire.length - b.commentaire.length
})

let longestComment = sortedByComments[sortedByComments.length-1]
console.log("longest comment is:", longestComment)

console.log(`${noteMoyen}/5 basé sure ${utilisateurs.length} avis -- ${positive.length} positive, ${negative.length} negative, ${normal.length} neutre`)

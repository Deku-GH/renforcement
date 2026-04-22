let note =[12, 8, 15, 6, 18, 9, 14];
 let some = 0 ;
 for(let i = 0 ; i < note.length ;i++)
 {
   some +=note[i];
 }
 console.log('la somme :'+some)
  console.log('la moyanne de class : '+some/note.length)

let basse_note = note[0] ;
for(let i = 0 ; i < note.length ;i++)
 {
   if(basse_note > note[i]){
     basse_note =note[i]
   }
 }
 console.log('la note la moyenne de la classe : '+basse_note);
 
 let note_plus_houte = note[0];
 for(let i = 0 ; i < note.length ;i++)
 {
   if(basse_note < note[i]){
    note_plus_houte =note[i]
   }
 }
 console.log('la note la plus haute : '+note_plus_houte);
 
 let nombre_eleves = 0;
  for(let i = 0 ; i < note.length ;i++)
 {
   if(10 <= note[i]){
    nombre_eleves++
   }
 }
 console.log('le nombre d eleves qui ont la moyenne : '+nombre_eleves);
 
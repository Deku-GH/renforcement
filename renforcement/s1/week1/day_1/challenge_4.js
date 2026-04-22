
let articles = [{
  nom: 'banan',
  quantite: 20,
  prix: 2.03 

},
{
  nom : 'tv',
  quantite  :3,
  prix  : 1000.2

},
{
  nom : 'phone',
  quantite  :12,
  prix  : 2000.03 

},
{
  nom : 'apple',
  quantite  :20,
  prix  : 3.03

},
{
  nom : 'box just',
  quantite  :50,
  prix  : 8.73

}
]
articles.forEach(article =>{
  
  console.log(article['nom']+' X '+article['quantite'] +' = '+(article['quantite']*article['prix']*0.20)+'€');
  
})
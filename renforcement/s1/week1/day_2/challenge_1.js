let chansons =
    [
        {
            title: 'save your tears',
            artiste: 'the weeknd',
            duree: 127,
            genre: 'pop'
        },
        {
            title: 'remmebre',
            artiste: 'the wknd',
            duree: 256,
            genre: 'pop'
        },
        {
            title: 'I Love Rock N Roll',
            artiste: 'Joan Jett & the Blackhearts',
            duree: 289,
            genre: 'Rock'
        }
        ,
        {
            title: 'Born to Run',
            artiste: 'Bruce Springsteen',
            duree: 197,
            genre: 'Rock'
        }
        ,
        {
            title: 'Summertime ',
            artiste: 'George Gershwin',
            duree: 290,
            genre: 'jazz'
        },
        ,

        {
            title: "Levitating",
            artiste: "Dua Lipa",
            duree: 203,
            genre: "Pop"
        },

        {
            title: "Hotel California",
            artiste: "Eagles",
            duree: 391,
            genre: "Rock"
        },

        {
            title: "Bad Guy",
            artiste: "Billie Eilish",
            duree: 194,
            genre: "Electropop"
        },

        {
            title: "Smells Like Teen Spirit",
            artiste: "Nirvana",
            duree: 301,
            genre: "Grunge"
        },

        {
            title: "Shape of You",
            artiste: "Ed Sheeran",
            duree: 234,
            genre: "Pop"
        },

        {
            title: "Superstition",
            artiste: "Stevie Wonder",
            duree: 245,
            genre: "Funk"
        },

        {
            title: "HUMBLE.",
            artiste: "Kendrick Lamar",
            duree: 177,
            genre: "Hip-Hop"
        }
    ]

chansons.forEach(chanson => {
    console.log(chanson.title);
})
console.log("-------------------------------------------------")
let rock = chansons.filter(chanson => chanson.genre === "Rock")
rock.forEach(chanson => {
    console.log(chanson);
})
console.log("-------------------------------------------------")

// let duree = chansons.map(chanson =>chanson.duree =parseInt(chanson.duree /60)+':'+parseInt(chanson.duree%60))
// duree.forEach(chanson=>{
//   console.log( chanson);
// })
console.log("-------------------------------------------------")

let Duree = [];
let count = 0;
chansons.forEach(chanson => {
    Duree[count] = chanson.duree;
    count++;

})

for (let i = 0; i < Duree.length; i++) {

    let min = parseInt(Duree[i] / 60);
    let secone = parseInt(Duree[i] % 60);

    if (secone > 10) {

        Duree[i] = min + ":" + secone;

    }
    else {

        Duree[i] = min + ":0" + secone;
    }
}

for (let i = 0; i < Duree.length; i++) {

    console.log(Duree[i]);
}
console.log("-------------------------------------------------")


let total = 0;
chansons.forEach(chason => {
    total += chason.duree;
})

let formtotale = parseInt(total / 60) + ':' + parseInt(total % 60);
console.log('la durée totale de la playlist ' + formtotale);

console.log("-------------------------------------------------")


let longsong = 0;
let song;
chansons.forEach(chason => {
    if (chason.duree > longsong) {
        longsong = chason.duree
        song = chason
    }
})

console.log(" la chanson la plus longue");
console.log(song);
console.log("-------------------------------------------------")

let countthesong = 0;
chansons.forEach(chason => {
    if (chason.duree / 60 > 6) {
        countthesong++;
    }
})
if (countthesong == 0) {
    console.log('toutes les chansons durent moins de 6 minutes')
} else {
    console.log('se  toutes les chansons ne durent pas moins de 6 minutes')

}
console.log("-------------------------------------------------")
let countjazz = 0;
chansons.forEach(chason => {
    if (chason.genre == 'jazz') {
        countjazz++;
    }
})
if (countjazz != 0) {
    console.log('si au moins une chanson est du genre Jazz')
} else {
    console.log('si au moins une chanson n est pas du genre "Jazz"')
}


console.log("-------------------------------------------------")

chansons.sort((a, b) => a.duree - b.duree);


chansons.forEach(chanson => {
    console.log(chanson);
})

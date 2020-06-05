"use strict";
//alert('Hello');
//consol.log(1);
//const result = confirm("Are you here?");
//console.log(result);
//const answer = prompt("Do you have 18?","18");
//console.log(answer);
// const answer = +prompt("Do you have 18?","18");
// console.log(typeof(answer));
//const answers = [];
// answers[0] = prompt ('What is you name?','');
// answers[1] = prompt ('What is you suename?','');
// answers[2] = prompt ('How old are you?','');
// document.write(answers); //вывод на страницу
//console.log(typeof(answers));

// //  let incr = 10;
//      decr = 10;
//  incr++;//++incr:
//  decr--;//--decr;

//  console.log(incr);//console.log(++incr);
//  console.log(decr);//console.log(--decr);

//  console.log(11%3);// остаток
//  console.log(3*4==12);// === строгое сравнение, числа; == может число строка;
 // && И; || или; ! отрицание;


 //const numberOfFilms = +prompt('How many films do you watch','');

 let numberOfFilms;

 function start() {
    numberOfFilms = +prompt('How many films do you watch','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you watch','');
    }
 }
 //start();

    const personalMovieDB = {
        count: 'numberOfFilms',
        movies: {},
        actors: {},
        genres: [],
        privat: true
    };
    // const a = prompt("What is one of the last watched films?", ""),
	//       b = prompt("what time to rate it on?", ''),
	//       c = prompt("What is one of the last watched films?", ''),
	//       d = prompt("what time to rate it on?", '');

    //     personalMovieDB.movies[a] = b;
    //     personalMovieDB.movies[c] = d;
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("What is one of the last watched films?", ""),
            b = prompt("what time to rate it on?", '');
          if (a != null && b !=null && a != '' && b != '' && a.length < 50) { 
            personalMovieDB.movies[a] = b;
            console.log("Done");
           } else {
            console.log("error");
            i--;
          }        
    }
}
//rememberMyFilms();

//     let i=0;
// while (i<2) {
//     let a = prompt("What is one of the last watched films?", ""),
//         b = prompt("what time to rate it on?", '');
//         if (a != null && b !=null && a != '' && b != '' && a.length < 50) { 
//                     personalMovieDB.movies[a] = b;
//                     console.log("Done");
//                    } else {
//                     console.log("error");
//                   }        
//                  i++;
                
//  }


// do {
//     let a = prompt("What is one of the last watched films?", ""),
//             b = prompt("what time to rate it on?", '');
//             if (a != null && b !=null && a != '' && b != '' && a.length < 50) { 
//                         personalMovieDB.movies[a] = b;
//                         console.log("Done");
//                        } else {
//                         console.log("error");
//                       }        
//                      i++;
// }

    

function detectPersonallevel() {
    if (personalMovieDB.count < 10) {
        console.log ("Looked at quite a few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDB.count >= 30) {
        console.log("You are movie fan");
    } else {
        console.log("An error has occurred");
    }
}
//detectPersonallevel();

     console.log(personalMovieDB);


       function showMyDB(hidden) {
          if (!hidden) {
              console.log(personalMovieDB);
          }
       }

       showMyDB(personalMovieDB.privat);

    

    function writeYourGenres() {
        for (let i = 1; i<=3; i++) {
            // const genre = prompt(`Your like genre unde namber ${i}`);
            // personalMovieDB.genres[i-1] = genre;
            personalMovieDB.genres[i-1] = prompt(`Your like genre unde namber ${i}`);
        }
    }
    writeYourGenres();

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


 const numberOfFilms = +prompt('How many films do you watch','');

    const personalMovieDB = {
        count: 'numberOfFilms',
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    const a = prompt("What is one of the last watched films?", ""),
	      b = prompt("what time to rate it on?", ''),
	      c = prompt("What is one of the last watched films?", ''),
	      d = prompt("what time to rate it on?", '');

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;

     
    console.log(personalMovieDB);
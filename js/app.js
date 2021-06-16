
'use stmindct';

let score = 0;

function add() {
  score += 1;
}

let userName = prompt('please enter your Name!');
// console.log(userName);
alert(' welcome   '   +  userName +   ' to our web site');

function askN3meh(){

let home = prompt('do i live in jordan!').toLowerCase();
// console.log(home);
if (home ==='yes' || home === 'y') {
    alert('correct');
    add(); 

} else if (home === 'no' || home === 'n')  {

    alert(' try a gain ' );
    
}else
{
    alert('try (yes) or (y) or (no) or (n)');
}


}

let animals = prompt('do i like animals!').toLowerCase();
// console.log(animals);

if (animals === 'yes'|| animals === 'y') 
{
    alert('animals are very beautiful beings');
    add(); 
    
} else if (animals === 'no'|| animals==='n') {
    alert('wrong answer');
}
      else {  
        
        
        alert('try (yes) or (y) or (no) or (n)');

    
}
 

let sport = prompt('do i know how to play football!').toLowerCase();
// console.log(sport);

if (sport === 'no'|| sport === 'n' )
 {
    alert(' i think its a boys  sport')
    
}
else if (sport==='yes'|| sport==='y') {
    alert('no i like yoga more than sport')
    add(); 
    
}
else {        alert('try (yes) or (y) or (no) or (n)');
}


let cooking = prompt('do  you think i know how to cook !').toLowerCase();
// console.log(cooking);
if (cooking === 'yes' || cooking === 'y' )  {

    alert('i know how to make dessert');
    
} else if (cooking === 'no' || cooking === 'n' )
 {
    alert('most of time i use youtube for helping me at cooking');
    add(); 
}
else{       
    
    alert(  'try (yes) or (y) or (no) or (n) ');
}

let reading = prompt('do  you think i like reading !').toLowerCase();
// console.log(reading);
if (reading === 'yes' || reading === 'y' )  {

    alert('am in love with reading');
    add(); 
} else if (reading === 'no' || reading === 'n' )
 {
    alert('i do  alot of reading in my free time ');
    
}
else{       
    alert(  userName + 'try (yes) or (y) or (no) or (n) ' );

    alert( 'try (yes) or (y) or (no) or (n) ');
}


function myBooks() {
  for (let i = 0; i < 4; i++) {
    let myBooks = prompt('can you guess how many books i have ? ');

    if (myBooks == 20) {
      alert(" thats correct answer ");
      score++;
      break;

    }
    else if (myBooks < 32) {
      alert("your answer(" + myBooks + ') its less than correct answer');
      count++;
    }
    else {
      alert("your answer(" + myBooks + ') its more than correct answer');
      count++;
    }

  }

  if (count == 4) {
    alert( 'The correct answer is 20 books');
  }
}

myBooks();




let beautifulMinds = ["a movie", "a story" , "a song" , "a book"];
let status;

function beautiful(mind) {
  for (let i = 0; i < 6; i++) {
    let guess = prompt('what do you think a beautifulMinds refer to ').toLowerCase();

    for (let j = 0; j <mind.length; j++) {
      if (mind[j] === guess.toLocaleLowerCase()) {
        alert(" thats correct answer ");
        score++;
        status = true;
        break;

      }
    }

    if (status) {

      break;
    }


  }

  return mind;
}


askN3meh('do i live in jordan!','correct','try again');

askN3meh('do i like animals!','animals are very beautiful beings','wrong');

askN3meh('do i know how to play football!',' i think its a boys  sport','no i like yoga more than sport');


askN3meh('do  you think i know how to cook !','i know how to make dessert','most of time i use youtube for helping me at cooking');

askN3meh2();
mind();



'use strict';

let score = 0;



function add() {
  score += 1;
}




let userName = prompt('please enter your Name!');
// console.log(userName);
alert(' welcome   '   +  userName +   ' to our web site');






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
console.log(sport);

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

    alert('i know how to do dessert');
    
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


let i = 0;

while(i<4){

let weight = prompt('How much do you think I weigh ? ...you have four attempts?');

if (weight==50) {
    alert('correct');
    add(); 
    break;
   
  } else if (weight> 50) {
alert('too high');

  } else {
    alert('too low');
      

  }



i++;
}

alert('i am 50 kgs');




while(i<4){

    let mobilePhone = prompt('How many mobile phones do you think I have?');
    
    if (mobilePhone==1) {
        alert('correct');
        add(); 
        break;
       
      } else if (mobilePhone> 50) {
    alert('too high');
    
      } else {
        alert('too low');
          
    
      }
    
    
    
    i++;
    }
    
    alert('i only need one :)');
    
    


while(i<4){

    let books = prompt('How many books do you think I got?');
    
    if (weight==20) {
        alert('correct');
        add(); 
        break;
       
      } else if (books> 50) {
    alert('too high');
    
      } else {
        alert('too low');
          
    
      }
    
    
    
    i++;
    }
    
    alert(' about 20 differnt books, stories and novels');
    
    
 

while(i<4){

    let pets = prompt('How many pits do you think I have?');
    
    if (pets==3) {
        alert('correct');
        add(); 
        break;
       
      } else if (pets> 3) {
    alert('too high');
    
      } else {
        alert('too low');
          
    
      }
    
    
    
    i++;
    }
    
    alert('i have  a  kitten, a bird and a turtle ^_^');
    
    



while(i<4){

    let car = prompt('How many cars do think I own?');
    
    if (car==1) {
        alert('correct');
        add(); 
        break;
       
      } else if (car> 1) {
    alert('too high');
    
      } else {
        alert('too low');
          
    
      }
    
    
    
    i++;
    }
    
    alert('i do have one ^_*');
    


    
 

while(i<4){

    let courses = prompt('How many courses do you think I have attended? ');
    
    if (courses==3) {
        alert('correct');
        add(); 
        break;
       
      } else if (courses> 3) {
    alert('too high');
    
      } else {
        alert('too low');
          
    
      }
    
    
    
    i++;
    }
    
    alert(' the answer is three courses');
    
    


    

while(i<6){

    let beautifulMinds = ["a movie", "a story" , "a song" , "a book"];
    let guess = prompt('what do you think a beautifulMinds refer to ?');
    alert(guess +    'choose one answer'   +   beautifulMinds);
// console.log(beautifulMinds);
    if  (guess == 'a movie') {
        alert('correct');
        add(); 
        break;
       
      } else  {
    alert('try a gain from the choices');
    
      } 
    
    
    
    i++;
    }
    
// }
alert(score);
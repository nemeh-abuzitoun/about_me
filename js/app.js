
// 'use strict';

// let score = 0;



// function add() {
//   score += 1;
// }




// let userName = prompt('please enter your Name!');
// // console.log(userName);
// alert(' welcome   '   +  userName +   ' to our web site');

// function askN3meh(){

// let home = prompt('do i live in jordan!').toLowerCase();
// // console.log(home);
// if (home ==='yes' || home === 'y') {
//     alert('correct');
//     add(); 

// } else if (home === 'no' || home === 'n')  {

//     alert(' try a gain ' );
    
// }else
// {
//     alert('try (yes) or (y) or (no) or (n)');
// }


// }



// let animals = prompt('do i like animals!').toLowerCase();
// // console.log(animals);

// if (animals === 'yes'|| animals === 'y') 
// {
//     alert('animals are very beautiful beings');
//     add(); 
    
// } else if (animals === 'no'|| animals==='n') {
//     alert('wrong answer');
// }
//       else {  
        
        
//         alert('try (yes) or (y) or (no) or (n)');

    
// }
 



// let sport = prompt('do i know how to play football!').toLowerCase();
// console.log(sport);

// if (sport === 'no'|| sport === 'n' )
//  {
//     alert(' i think its a boys  sport')
    
// }
// else if (sport==='yes'|| sport==='y') {
//     alert('no i like yoga more than sport')
//     add(); 
    
// }
// else {        alert('try (yes) or (y) or (no) or (n)');
// }






// let cooking = prompt('do  you think i know how to cook !').toLowerCase();
// // console.log(cooking);
// if (cooking === 'yes' || cooking === 'y' )  {

//     alert('i know how to make dessert');
    
// } else if (cooking === 'no' || cooking === 'n' )
//  {
//     alert('most of time i use youtube for helping me at cooking');
//     add(); 
// }
// else{       
    
//     alert(  'try (yes) or (y) or (no) or (n) ');
// }

 









// let reading = prompt('do  you think i like reading !').toLowerCase();
// // console.log(reading);
// if (reading === 'yes' || reading === 'y' )  {

//     alert('am in love with reading');
//     add(); 
// } else if (reading === 'no' || reading === 'n' )
//  {
//     alert('i do  alot of reading in my free time ');
    
// }
// else{       
//     alert(  userName + 'try (yes) or (y) or (no) or (n) ' );

//     alert( 'try (yes) or (y) or (no) or (n) ');
// }







// let i = 0;

// while(i<4){

//     let books = prompt('How many books do you think I got?');
    
//     if (books==20) {
//         alert('correct');
//         add(); 
//         break;
       
//       } else if (books> 20) {
//     alert('too high');
    
//       } else {
//         alert('too low');
          
    
//       }
    
    
    
//     i++;
//     }
    
//     alert(' about 20 differnt books, stories and novels');
    
    





 
//     let beautifulMinds = ["a movie", "a story" , "a song" , "a book"];

// while(i<6){

//   let guess = prompt('what do you think a beautifulMinds refer to ?');

    
//     alert(guess    +   beautifulMinds);
// // console.log(beautifulMinds);
//     if  (guess === beautifulMinds) {
//         alert('correct');
//         add(); 
//         break;
       
//       } else  {
//     alert('try a gain from the choices');
    
//       } 
    
    
    
//     i++;
//     }
    
// // }





// alert(score);












function askN3meh(q,correct,wrong){
  let entry;
  do { entry =prompt(q);
}
while(entry!=='yes' && entry !=='y' && entry!=='no'&& entry!=='n');
if(entry==='yes'||entry==='y'){
 alert(correct);
}else{
  alert(wrong);

}


}
askN3meh('do i live in jordan!','correct','try again');

askN3meh('do i like animals!','animals are very beautiful beings','wrong');

askN3meh('do i know how to play football!',' i think its a boys  sport','no i like yoga more than sport');

askN3meh('do  you think i know how to cook !','i know how to make dessert','most of time i use youtube for helping me at cooking');

askN3meh('do i live in jordan!','correct','try again');

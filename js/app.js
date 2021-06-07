
'use strict';




let userName = prompt('please enter your Name!');
console.log(userName);
alert(' welcome   '   +  userName +   ' to our web site');






let home = prompt('do i live in jordan!').toLowerCase();
console.log(home);
if (home ==='yes' || home === 'y') {
    alert('correct');
} else if (home === 'no' || home === 'n')  {

    alert(' try a gain ' );
    
}else
{
    alert('try (yes) or (y) or (no) or (n)');
}






let animals = prompt('do i like animals!').toLowerCase();
console.log(animals);

if (animals === 'yes'|| animals === 'y') 
{
    alert('animals are very beautiful beings');
    
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

    
}
else {        alert('try (yes) or (y) or (no) or (n)');
}






let cooking = prompt('do  you think i know how to cook !').toLowerCase();
console.log(cooking);
if (cooking === 'yes' || cooking === 'y' )  {

    alert('i know how to do dessert');
    
} else if (cooking === 'no' || cooking === 'n' )
 {
    alert('most of time i use youtube for helping me at cooking');
    
}
else{       
    
    alert(  'try (yes) or (y) or (no) or (n) ');
}


let reading = prompt('do  you think i like reading !').toLowerCase();
console.log(reading);
if (reading === 'yes' || reading === 'y' )  {

    alert('am in love with reading');
    
} else if (reading === 'no' || reading === 'n' )
 {
    alert('i do  alot of reading in my free time ');
    
}
else{       
    
    alert(  'try (yes) or (y) or (no) or (n) ');
}
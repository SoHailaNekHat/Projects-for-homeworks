//log to console
// console.log('hello world');
// console.log(123);
// var greeting='Hello';
// console.  log(greeting);
// console.  log([1,2,3,4]);
// var name='SoHaila';
// console.  log(`${name}hello`);
//Challenge 1
var mark_mass=75;
var mark_hieght=1.80;
var john_mass=80;
var john_hieght=1.75;
var bmi_mark=mark_mass/(mark_hieght*mark_hieght);
var bmi_john=john_mass/(john_hieght*john_hieght);
var mark_is_higher=bmi_mark>bmi_john;
console.log('Is mark\'s BMI higher than john = '+mark_is_higher);
//challenge 2
var team_1=(78+38+55);
var team_2=(34+59+65);
var mary_team=(97+134+105);
var team_1_avg=team_1/3;
var team_2_avg=team_2/3;
var team_mary_avg=mary_team/3;

var compare;
if((team_mary_avg>team_2_avg) && (team_mary_avg)){
  compare=true;
}
else{ compare=false;}
console.  log('Is mary\'s team is the owner? \n '+compare);
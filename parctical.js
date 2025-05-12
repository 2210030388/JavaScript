//practice QS2 -js 
let game=38;

let usernum = prompt("guess the game number");
while(usernum!=game)
{
   usernum = prompt("you enter the wrong number . guess again : ");

}
console.log("congratulations you enterd the right number");
console.log(typeof game);
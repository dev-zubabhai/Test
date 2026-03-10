



let iname = prompt('enter your name: ');
let iage = Number(prompt('enter your age: '));
let igender = prompt('enter your gender: ').toLowerCase();


let marriage_iage = 0;
let respect = ' ';


switch(igender)
{
   case "male":
    marriage_iage = 21;
    respect = "Brother!"
    break;

    case "female":
        marriage_iage = 18;
        respect = "Sister!";
        break;

}


if(iage >= marriage_iage)
{
    console.log(`
        Name: ${iname},
        Age: ${iage}, ${respect}, You are ready to marriage.
        `);
    
}else
{
    console.log(`
        Name: ${iname},
        Age: ${iage}, ${respect}, You are not ready for marriage.
        `);
}
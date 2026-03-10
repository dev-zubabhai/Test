

/**
 * 
 *  MALE AND FEMALE
 * FIGHT AND COOK PROJECT!!! 
 * 
 * 10/03/2026
 */







let iname = prompt("enter your name: ");
let iage = prompt('enter your age: ');
let igender = prompt('enter your gender: ').toLowerCase();


if( iage>=21 && (igender == 'male' || igender =='m'))
{
    console.log(`
        Name: ${iname},
        Age: ${iage}!, You are ready for fighting and you are a ${igender}.
        `);
     
}else if(iage<21 && (igender =='male' || igender == 'm'))

    {

        console.log(`
            Name: ${iname},
            Age: ${iage}!, You are not ready for fighting and you are  ${igender}. `);
        
    }else if(iage>=18 && (igender =='female' || igender =='f'))
    {

        console.log(`
            Name: ${iname},
            Age: ${iage}!, You are ready to cook and you are ${igender}.  `);
        
    }else if(iage<18 && (igender == 'female' || igender == 'f'))
    {

        console.log(`
            
            Name: ${iname},
            Age:${iage}!, You are not ready for cook and you are a ${igender}. `);
        
    }

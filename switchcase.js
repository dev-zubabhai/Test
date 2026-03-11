let amount = Number(prompt('enter your amount: '));
let currency = prompt('entet your currency: ').toLowerCase();


let rate = 0;


switch(currency)
{
    case 'usd':
        rate = 122;
        break;

    case 'pound':
        rate = 164;
        break;

    case 'euro':
        rate = 142;
        break;

    case 'cad':
        rate = 90;
        break;            
}




let bdt = parseInt(amount) * rate;

console.log(`$
    ${amount} ${currency} = ${bdt}
    `);




const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec',];

const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat',]

let date = new Date();


let hour = 0;
let ampm =0;


if(date.getHours() >12 )
{
 hour = date.getHours() -12;
 ampm = 'PM';
}else
{
    hour = date.getHours();
    ampm = 'AM';
}


console.log(`
    Hour:Minute:Second
    =====================================
    ${hour === 0 ? 12: hour}:${date.getMinutes()}:${date.getSeconds()} ${ampm}
 
    Date: ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}

    Day: ${day[date.getUTCDay()]}
    

    `);




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
 

    `);

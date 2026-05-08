


let date = new Date();


let hour = 0;
if(date.getHours() >12 )
{
 hour = date.getHours() -12;
}else
{
    hour = date.getHours();
}


console.log(`
    Hour         Minute            Second
    =====================================
    ${hour}             ${date.getMinutes()}.               ${date.getSeconds()}
 

    `);

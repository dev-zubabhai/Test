

const cal = [

    {
        name: 'abdul kalam',
        age: 43,
        id: 1001,
        salary: 500,
    },
    {
        name: 'monsur alom',
        age: 33,
        id: 1002,
        salary: 600,
    },
    {
        name: 'amena begum',
        age: 35,
        id: 1003,
        salary: 500,
    },
];

let totalcal = 0;



cal.map((data, index) =>
{
    console.log(`
        No. ${index +1 }
        Name                                 Salary
        =====================================================        
        ${data.name}                            ${data.salary}


        `);

        
    totalcal += data.salary;

});



console.log(` Total Salary: ${totalcal}`);


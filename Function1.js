
//Function;;;


function devsInfo(name, id, skill)
{

    console.log(`
        
        Name: ${name}
        Id: ${id}
        Skill: ${skill}
        `);
    

}

devsInfo('Alif', 4695, 'PHP');
devsInfo('Ratul', 4696, 'IOS');
devsInfo('Cat', 2345, 'react');





function ageCal(name = ' user', birthYear = null )
{


    let age = 2026 - birthYear;
    console.log(`
        I am ${name} and I am ${age} years old.
        `);
    
}

ageCal();


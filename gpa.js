
let name = prompt('Enter your Name: ');
let id = prompt('Enter your ID: ');


let ban = prompt('Enter your Bangla marks: ');
let eng = prompt('Enter your English marks: ');
let math = prompt('Enter your Math marks: ');
let sci = prompt('Enter your Science marks: ');
let rel = prompt('Enter your Relagion marks: ');





console.log(`
    
    Subject name                   Marks                   GPA                              Grade
    =================================================================================================
    Bangla                         ${ban}                 ${getGpa(ban)}              ${getGrade(ban)}
    English                        ${eng}                 ${getGpa(eng)}               ${getGrade(eng)}
    Math                           ${math}                ${getGpa(math)}              ${getGrade(math)}
    Science                        ${sci}                 ${getGpa(sci)}               ${getGrade(sci)}
    Relagion                       ${rel}                 ${getGpa(rel)}               ${getGrade(rel)}
    
    
    
    
    `);


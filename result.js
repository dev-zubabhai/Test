

let name = prompt('Enter Your Name: ');
let id = prompt('Enter your Student Id: ');
let sec = prompt('Enter your section: ');


let bn = prompt('Enter Bangla marks: ');
let eng = prompt('Enter English marks: ');
let math = prompt('Enter Math marks: ');
let cd = prompt('Enter Compiler design marks: ');
let cao = prompt('Enter Computer marks: ');
let ai = prompt("Enter Artificial Intelligenc marks: ");





console.log(`
    
    Student Info:
    Name:            ${name}
    Student Id:      ${id}
    Student Section: ${sec}
    <<<<<<<<<<<<<<<<<<=============================>>>>>>>>>>>>>>>>>> 

    Subject                     Marks                              GPA                                   GRADE
    Bangla                      ${bn}                            ${getGpa(bn)}                                ${getGrade(bn)}
    English                     ${eng}                           ${getGpa(eng)}                               ${getGrade(eng)}
    Mathematics                 ${math}                          ${getGpa(math)}                              ${getGrade(math)}                 
    Compiler Design             ${cd}                            ${getGpa(cd)}                                ${getGrade(cd)}
    Computer Arc and org        ${cao}                           ${getGpa(cao)}                               ${getGrade(cao)}
    Artificial Intelligence     ${ai}                            ${getGpa(ai)}                                ${getGrade(ai)}
    
    
    `);






// 1-59 : F
// 60-69 : D
// 70 - 79: C
//80-89:B
//90-100: A


const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sun = 0;
    for (let mark of marks)
        sun += mark;
     let avarage = sun / marks.length;

    if (avarage <= 59)
    return 'F';

    if(avarage > 59 && avarage <= 69)
    return 'D';

    if(avarage > 69 && avarage <= 79)
    return 'C';

    if(avarage > 79 && avarage <= 89)
    return 'B';

    return 'A';
    

}
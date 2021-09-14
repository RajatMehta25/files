//Leap Year check
var year=1800;
if ((year%4==0)&&(year%100!=0)||(year%400==0)){
console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);

}
//check whether the given character is : lowercase vowel,uppercase vowel,lowercase consonant,uppercase consonant,digit,space,special character.
var a='?';
if((a==='a')||(a==='e')||(a==='i')||a===('o')||(a==='u')){
    console.log(`${a} is a lowercase vowel.`);
}
else if ((a==='A')||(a==='E')||(a==='I')||(a==='O')||(a==='U')){
    console.log(`${a} is an uppercase vowel.`);
}
else if ((a==='b')||(a==='c')||(a==='d')||(a==='f')||(a==='g')||(a==='h')||(a==='j')||(a==='k')||(a==='l')||(a==='m')||(a==='n')||(a==='p')||(a==='q')||(a==='r')||(a==='s')||(a==='t')||(a==='v')||(a==='w')||(a==='x')||(a==='y')||(a==='z')){
    console.log(`${a} is a lowercase consonant.`);
}
else if ((a==='B')||(a==='C')||(a==='D')||(a==='E')||(a==='F')||(a==='G')||(a==='H')||(a==='J')||(a==='K')||(a==='L')||(a==='M')||(a==='N')||(a==='P')||(a==='Q')||(a==='R')||(a==='S')||(a==='T')||(a==='V')||(a==='W')||(a==='X')||(a==='Y')||(a==='Z')){
    console.log(`${a} is an uppercase consonant.`);
}
else if (typeof(a)=='number'){
    console.log(`${a} is a number.`);
}
else if (a===" "){
    console.log(`${a} is a space character.`);
}
else {
    console.log(`${a} is a special character.`);
}
//No. of days in a month
var month="december";
var mo=month.toLowerCase();
switch(mo){
    case "january":
        console.log(`${month} has 31 days`);
        break;
        case "february":
            console.log(`${month} has 28 days and 29 days in a leap year`);
            break;
            case "march":
                console.log(`${month} has 31 days`);
                break;
                case "april":
                    console.log(`${month} has 30 days`);
                    break;
                    case "may":
                        console.log(`${month} has 31 days`);
                        break;
                        case "june":
                            console.log(`${month} has 30 days`);
                            break;
                            case "july":
                                console.log(`${month} has 31 days`);
                                break;
                                case "august":
                                    console.log(`${month} has 31 days`);
                                    break;
                                    case "september":
                                        console.log(`${month} has 30 days`);
                                        break;
                                        case "october":
                                            console.log(`${month} has 31 days`);
                                            break;
                                            case "november":
                                                console.log(`${month} has 30 days`);
                                                break;
                                                case "december":
                                                    console.log(`${month} has 31 days`);
                                                    break;
                                                    default :
                                                    console.log(`${month} is not a valid month`);
                                                    break;

} 
//Calculator
var num1=2;
var num2=5;
var operation='**';
switch(operation){
case "+":
    console.log(`${num1} ${operation} ${num2} = ${num1+num2}`);
    break;
    case "-":
    console.log(`${num1} ${operation} ${num2} = ${num1-num2}`);
    break;
    case "*":
    console.log(`${num1} ${operation} ${num2} = ${num1*num2}`);
    break;
    case "/":
    console.log(`${num1} ${operation} ${num2} = ${num1/num2}`);
    break;
    case "%":
    console.log(`${num1} ${operation} ${num2} = ${num1%num2}`);
    break;
    case "**":
    console.log(`${num1} ${operation} ${num2} = ${num1**num2}`);
    break;
    default:
    console.log(`Enter correct operation`);
    break;
}
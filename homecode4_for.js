//Sum of range 
var start=1;
var end=10;
var sum=0;
for (let i=start;i<=end;++i)
{
  
    sum+=i;
   
}
console.log(`The Sum of the range is ${sum}`);

//Sum of odd and even numbers in a range
var start1=1;
var end1=10;
var oddsum=0;
var evensum=0;
for(let i=start1;i<=end1;++i)
{
    if (i%2==0){
        evensum+=i;
    }
    else{
        oddsum+=i;
    }
}
console.log(`The sum of even numbers in the range is ${evensum}`);
console.log(`The sum of odd numbers in the range is ${oddsum}`);

//factorial of a number

var number=7;
var factorial=1;
for(let i=1;i<=number;++i)
{
factorial*=i;
}
console.log(`The factorial of the given nymber ${number} is ${factorial}`);

// A number is a perfect number or not
var sum4=0;
var number4=6;                       
var rem;                              
for ( let i=1;i<number4;++i){        
    rem=number4%i;                  
    if(rem==0){                       
        sum4+=i;                     
    }
}
if(sum4==number4)
{console.log(`${number4} is a perfect number.`)}
else{
    console.log(`${number4} is not a perfect number.`)
}

// A number is prime or not
var number5=145666225567;
var flag=0;
for (let i=2;i<=number**0.5;++i){
    if(number5%i==0){
        flag=1;
        break;
    }
}
if (number5==1){
    console.log(`1 is neither prime nor composite.`)

}
else{
    if (flag==0){
        console.log(`${number5} is a prime number.`);
    }
    else{
        console.log(`${number5} is not a prime number.`);
    }
}

// HCF and LCM of two numbers

var number6_1=25;
var number6_2=8;
var hcf,lcm;
for(let i=1;i<=number6_1 && i<=number6_2;++i){
if(number6_1%i==0 && number6_2%i==0){
    hcf=i;
}
}
lcm=(number6_1*number6_2)/hcf;
console.log(`LCM of ${number6_1} and ${number6_2} is ${lcm}`);
console.log(`HCF of ${number6_1} and ${number6_2} is ${hcf}`);

// Fibonacci series upto given terms 
var number7=8;
var t1=0;
var t2=1;
var next=t1+t2;
console.log(`Series: \n ${t1} \n ${t2}`)
for (let i=3;i<=number7;++i){
    console.log(` ${next}`);
    t1=t2;
    t2=next;
    next=t1+t2;
}

// Sum of digits of a number
var num1=123456;
var sum=0;
console.log(`Sum of digits of ${num1} is :`);
while (num1!=0){
    let m=num1%10;
    sum+=m;
    num1=parseInt(num1/10);
}
console.log(sum);

// Sum of even digits and odd digits of a number.
 var num2=123;
 var counter=1;
 var evenSum=0;
 var oddSum=0;
 while (num2!=0) {
   if(counter%2==0)
   {
     evenSum += num2 % 10;
     num2 = parseInt(num2/10);
   }
   else
   {
     oddSum += num2 % 10;
     num2 = parseInt(num2/10);
   }
   counter++;
 }

 if(counter%2==0)
 {
   let temp=oddSum;
   oddSum=evenSum;
   evenSum=temp;
 }
 console.log("Sum of digits in even  places:",evenSum);
 console.log("Sum of digits in odd  places:",oddSum);

 // Count even and odd digits in a number.
 var num3=123;
 var count=1;
 var evenCount=0;
 var oddCount=0;
 while (num3!=0) {
   if(count%2==0)
   {
    num3 = parseInt(num3/10);
     evenCount+=1;
   }
   else
   {
    num3 = parseInt(num3/10);
     oddCount+=1;
   }
   count++;
 }

  console.log("\nNo. of digits in even  places:",evenCount);
 console.log("No. of digits in odd  places:",oddCount);

 // No. of occurrence of a specific digit.
 var cnt=0;
    var num4=455558;
    var digit=5;
 console.log(`\nNo. of ${digit} in ${num4} is:`)
    while(num4>0)
    {
        let rem=num4%10;
        if(rem==digit)
            cnt++;
        num4=parseInt(num4/10);
    }
 
    console.log(cnt);

    // No. of digits of a number.
    var num5=12454587;
    var count1=0;
    console.log(`\nNo. of digits in ${num5} is:`)
    while(num5!=0){
        num5=parseInt(num5/10);
        count1++;
    }
console.log(count1);

// Reverse a number
var num6=25;
var reverse=0;
console.log(`\nReverse of ${num6} is:`);
while(num6!=0)    
  {    
     let rem1=num6%10;                
     reverse=reverse*10+rem1;      
     num6=parseInt(num6/10);    
  }    
  console.log(reverse);

  // Number is neon or not 
var num7=5;
var sum7=0;
  sqr = num7*num7; 

  while(sqr!=0)
  {
     let rem7 = sqr%10;
      sum7 += rem7; 
      sqr = parseInt(sqr/10);  
  }

  if(sum7==num7){
      console.log(`\n${num7} is a neon number.`);
  }
     else
   {   console.log(`\n${num7} is not a neon number.`);
  }

  // Armstrong number 
var num8=153;
var sum8=0;
var temp=num8;
  while(num8!=0)    
{    
let rem8=num8%10;    
sum8=sum8+(rem8*rem8*rem8);    
num8=parseInt(num8/10);    
}    
if(temp==sum8){
  console.log(`\n${temp} is an armstrong  number `);    }
else    {
console.log(`\n${temp} is not an armstrong number`);    }

// Palindrome
var num9=151;
var sum9=0;
var temp1=num9;
  while(num9!=0)    
{    
let rem9=num9%10;    
sum9=(sum9*10)+rem9;    
num9=parseInt(num9/10);    
}    
if(temp1==sum9){
  console.log(`\n${temp1} is a palindrome  number `);    }
else    {
console.log(`\n${temp1} is not  a palindrome number`);    }

// Magical number

 var num10=1729;
 var sumOfDigits=0;
var temp10 = num10;
 

while(num10 != 0){
    
    sumOfDigits += num10 % 10;  
    num10 = parseInt(num10 / 10);      
}


num10 = sumOfDigits;
var rev=0;

while( num10!= 0){
    rev = rev*10 + num10 % 10; 
    num10 = parseInt(num10 / 10);
}

if(rev*sumOfDigits == temp10){
    console.log(`\n${temp10} is a Magic Number`);}
else{
    console.log(`\n${temp10} is not a Magic Number `);
}
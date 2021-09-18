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
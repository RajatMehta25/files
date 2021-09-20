// Prime number in a range 
var a=5;
var b=25;
var flag;
while (a < b)                      
{                                      
     flag=0;

for(let i = 2; i <= a**0.5; ++i)      
{
if(a % i == 0)
{
flag = 1;
break;
}
}
if (flag == 0){
    console.log(a);


}
++a;
}

//



// Area of Circle 
var radius=5;
var areaofCircle = (3.14*radius*radius);
console.log(`Area of circle with radius:${radius} is = ${areaofCircle} .`);
// Area of Square
var SideofSquare=8;
var AreaofSquare=(SideofSquare*SideofSquare);
console.log(`Area of Square with side:${SideofSquare} is = ${AreaofSquare} .`);
// TotalSurface Area of cuboid
var length=4;
var breadth=2;
var height=3;
var TotalSurfaceareaofcuboid=2*(length*breadth+breadth*height+length*height);
console.log(`Total Surface Area of Cuboid with length:${length},breadth:${breadth},height:${height} is = ${TotalSurfaceareaofcuboid} .`);
// Area of Right Angled Triangle
var base =5;
var height1=8;
var AreaofRtriangle=(0.5*base*height1);
console.log(`Area of Right Angled Triangle with base:${base} and height:${height1} is = ${AreaofRtriangle} .`);
// TotalSurface Area of cone 
var radius1=7;
var slantheight=16;
var TSAcone=(3.14*radius1*(radius1+slantheight));
console.log(`Total Surface Area of Cone with radius:${radius1} and slant height:${slantheight} is = ${TSAcone} .`);
// Temperature unit change
var Degcel=30;
var Far=50;
var toDegcel=((Far-32)*0.5556);
var toFar=(1.8*Degcel+32);
console.log(`${Degcel} Celsius in Fahrenheit is = ${toFar} .`);
console.log(`${Far} Fahrenheit in Celsius is = ${toDegcel} .`);
// Swapping 2 Variables
var a=5;
var b=2;
console.log(`Original values,a:${a},b:${b} .`);
a=a+b;
b=a-b;
a=a-b;
console.log(`Swapping values,a:${a},b:${b} . `);
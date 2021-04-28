function temp(){
const kelvin=293; // defining constant variable kelvin 
const celcius=kelvin-273; // converting kelvin to celcius
var fahrenheit= celcius*(9/5)+32; // converting celcius to fahrenheit 
var fahrenheit=Math.floor(fahrenheit); // using math library function floor to remove decimal places 
console.log("The temperature is "+ fahrenheit +" degrees Fahrenheit");
}

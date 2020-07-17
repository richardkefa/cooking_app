function convert(liters){
var gallons = liters*0.264172;
return gallons;
}
var liters=parseFloat(prompt("Enter number of liters"));
alert( convert(liters) + "Gallons");
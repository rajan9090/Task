/*
Author: Venkat
Description: 
Funcitons: 
*/

//Data 
var products = [
{
	img: "Tommy hilifiger.jpg",
	brand: "Tommy Hilfiger",
	cost: "2500",
	cat: "shirts",
	size:"M"
},
{
	img: "Gucci.jpg",
	brand: "Gucci",
	cost: "6000",
	cat: "shirts",
	size:"S"
},
{
	img: "allen solly.jpg",
	brand: "Allen Solly",
	cost: "4723",
	cat: "shirts",
	size:"L"
},
{
	img: "uspolo.jpg",
	brand: "U.S Polo",
	cost: "8541",
	cat: "shirts",
	size:"L"
}
]


//
var prodCont = document.getElementById('prodCont');

var prod = "";
for (product of products){

	//console.log(product.img)
	prod += "<div class='prod'><img src='images/"+product.img+"'><div class='cat'>"+product.cat+"</div><div class='cost'>"+product.cost+"</div><div class='brand'>"+product.brand+"</div><div class='size'>"+product.size+"</div></div>"

}
//console.log(prod)
prodCont.innerHTML = prod; 
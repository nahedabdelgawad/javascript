var products=document.querySelectorAll("#Allproducts .card")
var chooseProd=document.querySelector("#choose")
var titleProd=document.querySelector('#title')
var priceProd=document.querySelector('#price')
var showProduct= document.querySelector(".div1")
var btn=document.querySelector('#show')
var totalPrice=document.querySelector(".totalPr")
var prices=0
  
products.forEach(function (item) {
item.onclick= function(){
   showProduct.innerHTML += item.querySelector('h5').innerHTML+" "
   if (showProduct !=""){
    btn.style.display= "block";
   }
     prices += Number(item.querySelector('p').textContent)
    
   }
})  
btn.onclick=function () {
    totalPrice.innerHTML = prices+" $"
    
}

    
// var totalPrice = 0;
// var Cart = document.getElementById("cart");
// var prodact = document.querySelectorAll(".product-info ");
// var del = document.querySelectorAll(".delete");
// var element = document.querySelectorAll(".product-info button");
// var myInput = document.getElementById("myInput");
// var myButon = document.getElementById("myButon");




// prodact.forEach(function (item) {
//   var buyBtn = item.querySelector("button");  
  
//   buyBtn.onclick = function () {
//     var priceText = item.querySelector(".current-price").textContent;
//     var price = parseFloat(priceText);
//     var productName = item.querySelector("h3").textContent;

//     Cart.innerHTML += `
//       <div class="cart-item">
//         <span>${productName} - $${priceText}</span>
//          <button class="delete" data-price="${price}">حذف</button>
//       </div>
//     `;
// function updateTotal() {

//   var totalElement = document.getElementById("total");

//   totalElement.textContent = "المجموع الحالي: $" + totalPrice.toFixed(2);

// }
//   };

// });
// myButon.addEventListener('click' , add)
// function add (){
//   if (myInput.value === '') {
//       alert('enter value')
// }
// }



// Cart.onclick = function (event) {
//   if (event.target.classList.contains("delete")) {
//     var deleteBtn = event.target;
    
//     var itemPrice = parseFloat(deleteBtn.getAttribute("data-price"));
//     totalPrice -= itemPrice;
//     console.log("المجموع بعد الحذف:", totalPrice);

//     deleteBtn.parentElement.remove();
//   }
// };


var totalPrice = 0;

var Cart = document.getElementById("cart");
var prodact = document.querySelectorAll(".product-info");
var del = document.querySelectorAll(".delete");
var element = document.querySelectorAll(".product-info button");

var myInput = document.getElementById("myInput");
var myButon = document.getElementById("myButon");


prodact.forEach(function (item) {

  var buyBtn = item.querySelector("button");

  buyBtn.onclick = function () {

    var priceText = item.querySelector(".current-price").textContent;
    var price = parseFloat(priceText.replace("$", ""));
    var productName = item.querySelector("h3").textContent;

    Cart.innerHTML += `
      <div class="cart-item">
        <span>${productName} - $${priceText}</span>
        <button class="delete" data-price="${price}">حذف</button>
      </div>
    `;

    totalPrice += price;

    updateTotal();

  };

});


myButon.addEventListener("click", add);

function add() {

  if (myInput.value.trim() === "") {
    alert("enter value");
    return;
  }

  Cart.innerHTML += `
    <div class="cart-item">
      <span>${myInput.value}</span>
      <button class="delete" data-price="0">حذف</button>
    </div>
  `;

  myInput.value = "";

}


// تحديث المجموع
function updateTotal() {

  var totalElement = document.getElementById("total");

  totalElement.textContent = "المجموع الحالي: $" + totalPrice.toFixed(2);

}


Cart.onclick = function (event) {

  if (event.target.classList.contains("delete")) {

    var deleteBtn = event.target;

    var itemPrice = parseFloat(deleteBtn.getAttribute("data-price"));

    totalPrice -= itemPrice;


    deleteBtn.parentElement.remove();

    updateTotal();

  }

};

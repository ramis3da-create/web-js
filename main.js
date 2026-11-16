var totalPrice = 0;
var Cart = document.getElementById("cart");
var prodact = document.querySelectorAll(".product-info ");
var del = document.querySelectorAll(".delete");
var element = document.querySelectorAll(".product-info button");





prodact.forEach(function (item) {
  var buyBtn = item.querySelector("button");  
  
  buyBtn.onclick = function () {
    var priceText = item.querySelector(".current-price").textContent;
    var price = parseFloat(priceText);
    var productName = item.querySelector("h3").textContent;

    Cart.innerHTML += `
      <div class="cart-item">
        <span>${productName} - $${priceText}</span>
         <button class="delete" data-price="${price}">حذف</button>
      </div>
    `;

    totalPrice += price;
    Cart.innerHTML += `<p>المجموع الحالي: $${totalPrice}</p>`;
  };

});





Cart.onclick = function (event) {
  if (event.target.classList.contains("delete")) {
    var deleteBtn = event.target;
    
    var itemPrice = parseFloat(deleteBtn.getAttribute("data-price"));
    totalPrice -= itemPrice;
    console.log("المجموع بعد الحذف:", totalPrice);

    deleteBtn.parentElement.remove();
  }
};
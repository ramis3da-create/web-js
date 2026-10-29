var totalPrice = 0;
var Cart = document.getElementById("cart");
var prodact = document.querySelectorAll(".product-info ");

prodact.forEach(function (item) {
  item.onclick = function () {
    var priceText = item.querySelector(".current-price").textContent;
    cart.innerHTML += priceText + " ";
    Cart.innerHTML += item.textContent + " ";
    totalPrice += parseFloat(priceText);
    console.log(totalPrice);
    l;
  };
});

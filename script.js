let cart = [];

function add(item) {
  cart.push(item);
  document.getElementById("count").innerText = cart.length;
}

function openCart() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  cart.forEach(i => {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });

  document.getElementById("cartBox").style.display = "block";
}

function closeCart() {
  document.getElementById("cartBox").style.display = "none";
}
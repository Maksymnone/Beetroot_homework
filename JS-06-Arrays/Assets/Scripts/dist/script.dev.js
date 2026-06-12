"use strict";

function shopCartWrapper() {
  var CART = [{
    title: "Хліб тостовий",
    price: 36.8,
    isBuy: true,
    qty: 1
  }, {
    title: "Молоко",
    price: 42.0,
    isBuy: false,
    qty: 1
  }];

  function addToCart(title, price, qty) {
    var findedEl = CART.find(function (el) {
      return el.title.toLowerCase() === title.toLowerCase();
    });

    if (findedEl) {
      findedEl.qty += qty;
      return "update";
    } else {
      CART.push({
        title: title,
        price: price,
        qty: qty
      });
      return "add";
    }
  }

  function calcCartTotal() {
    var total = CART.reduce(function (acc, item) {
      return acc + item.price * item.qty;
    }, 0);
    console.log(total);
    getEl("cart_total").innerText = total.toFixed(2);
  }

  function showProdutsList() {
    var html = "";

    if (CART.length) {
      CART.toSorted(function (a, b) {
        return a.isBuy - b.isBuy;
      }).forEach(function (item, index) {
        var status = "<span class=\"tag is-".concat(item.isBuy ? "success" : "danger", "\">").concat(item.isBuy ? "Yes" : "No", "</span>");
        html += "<tr>\n\t\t\t\t<td>".concat(index + 1, "</td>\n\t\t\t\t<td>").concat(item.title, "</td>\n\t\t\t\t<td>").concat(status, "</td>\n\t\t\t\t<td>").concat(item.price.toFixed(2), "</td>\n\t\t\t\t<td>\n\t\t\t\t<button class=\"button is-info is-small\" onclick=\"actionProductHandler('").concat(item.title, "','decQty')\"> - </button>\n\t\t\t\t\t<input class=\"input qty-input\" type=\"number\" min=\"1\" value=\"").concat(item.qty, "\" />\n\t\t\t\t<button class=\"button is-info is-small\" onclick=\"actionProductHandler('").concat(item.title, "','incQty')\"> + </button>\n\t\t\t\t</td>\n\t\t\t\t<td>").concat((item.qty * item.price).toFixed(2), "</td>\n\t\t\t\t<td>").concat(!item.isBuy ? '<button class="button is-success is-small" onclick = "actionProductHandler(\'' + item.title + "','buy')\">Buy</button>" : '<button class="button is-danger is-small" onclick = "actionProductHandler(\'' + item.title + "','delete')\">Remove</button>", "</td>\t\t\t\t\n\t\t\t</tr>");
      });
    } else {
      html = "<tr>\n\t\t<td colspan=\"5\">No products in cart</td>\n\t\t</tr>";
    }

    var totalBuy = CART.filter(function (el) {
      return el.isBuy;
    }).reduce(function (acc, item) {
      return acc + item.price * item.qty;
    }, 0);
    var totalNotBuy = CART.filter(function (el) {
      return !el.isBuy;
    }).reduce(function (acc, item) {
      return acc + item.price * item.qty;
    }, 0);
    getEl("products_list").innerHTML = html;
    calcCartTotal();
  }

  function actionProduct(title, action) {
    var index = CART.findIndex(function (el) {
      return el.title === title;
    });

    switch (action) {
      case "delete":
        if (confirm("\u0412\u0438 \u0434\u0456\u0439\u0441\u043D\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 ".concat(title, " \u0437 \u043A\u043E\u0448\u0438\u043A\u0443?"))) {
          CART.splice(index, 1);
        }

        break;

      case "buy":
        CART[index].isBuy = true;
        break;

      case "incQty":
        CART[index].qty += 1;
        break;

      case "decQty":
        if (CART[index].qty > 1) {
          CART[index].qty -= 1;
        } else if (CART[index].qty = 1) {
          actionProduct(title, "delete");
        }

        break;
    }

    showProdutsList();
  }

  return {
    actionProduct: actionProduct,
    showProdutsList: showProdutsList,
    calcCartTotal: calcCartTotal,
    addToCart: addToCart
  };
}

var shopCart = shopCartWrapper();

var getEl = function getEl(id) {
  return document.getElementById(id);
};

function submitHandler() {
  var title = getEl("product_title").value;
  var price = getEl("product_price").valueAsNumber;
  var qty = getEl("product_qty").valueAsNumber;

  if (title === "") {
    toast.error("Enter product title");
    return false;
  }

  if (price <= 0 || isNaN(price)) {
    toast.error("Enter product price");
    return false;
  }

  if (qty <= 0 || isNaN(qty)) {
    toast.error("Enter product quantity");
    return false;
  }

  var addResult = shopCart.addToCart(title, price, qty);
  var message = addResult === "add" ? "Product successfully added to cart" : "Products quantity successfully changed ";
  toast.success(message);
  shopCart.showProdutsList();
  return false;
}

function actionProductHandler(title, action) {
  shopCart.actionProduct(title, action);
}

shopCart.showProdutsList();
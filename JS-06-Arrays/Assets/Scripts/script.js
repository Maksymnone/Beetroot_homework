
function shopCartWrapper() { 

const CART = [
	{
		title: "Хліб тостовий",
		price: 36.8,
		isBuy: true,
		qty: 1,
	},
	{
		title: "Молоко",
		price: 42.0,
		isBuy: false,
		qty: 1,
	},
	];
	
function addToCart(title, price, qty) {
	const findedEl = CART.find(
		(el) => el.title.toLowerCase() === title.toLowerCase(),
	);

	if (findedEl) {
		findedEl.qty += qty;
		return "update";
	} else {
		CART.push({
			title,
			price,
			qty,
		});
		return "add";
	}
}

function calcCartTotal() {
	const total = CART.reduce((acc, item) => acc + item.price * item.qty, 0);
	console.log(total);
	getEl("cart_total").innerText = total.toFixed(2);
}

function showProdutsList() {
	let html = "";
	if (CART.length) {
		CART.toSorted((a, b) => a.isBuy - b.isBuy).forEach((item, index) => {
			const status = `<span class="tag is-${item.isBuy ? "success" : "danger"}">${item.isBuy ? "Yes" : "No"}</span>`;
			html += `<tr>
				<td>${index + 1}</td>
				<td>${item.title}</td>
				<td>${status}</td>
				<td>${item.price.toFixed(2)}</td>
				<td>
				<button class="button is-info is-small" onclick="actionProductHandler('${item.title}','decQty')"> - </button>
					<input class="input qty-input" type="number" min="1" value="${item.qty}" />
				<button class="button is-info is-small" onclick="actionProductHandler('${item.title}','incQty')"> + </button>
				</td>
				<td>${(item.qty * item.price).toFixed(2)}</td>
				<td>${!item.isBuy ? '<button class="button is-success is-small" onclick = "actionProductHandler(\'' + item.title + "','buy')\">Buy</button>" : '<button class="button is-danger is-small" onclick = "actionProductHandler(\'' + item.title + "','delete')\">Remove</button>"}</td>				
			</tr>`;
		});
	} else {
		html = `<tr>
		<td colspan="5">No products in cart</td>
		</tr>`;
	}

	const totalBuy = CART.filter((el) => el.isBuy).reduce(
		(acc, item) => acc + item.price * item.qty,
		0,
	);
	const totalNotBuy = CART.filter((el) => !el.isBuy).reduce(
		(acc, item) => acc + item.price * item.qty,
		0,
	);

	getEl("products_list").innerHTML = html;

	calcCartTotal();
	}	
	function actionProduct(title, action) {
		const index = CART.findIndex((el) => el.title === title);
		switch (action) {
			case "delete":
				if (confirm(`Ви дійсно хочете видалити ${title} з кошику?`)) {
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
				} else if ((CART[index].qty = 1)) {
					actionProduct(title, "delete");
				}
				break;
		}
		showProdutsList();
	}

	return {
		actionProduct,
		showProdutsList,
		calcCartTotal,
		addToCart
	};
}

const shopCart = shopCartWrapper()

const getEl = (id) => document.getElementById(id);

function submitHandler() {
	const title = getEl("product_title").value;
	const price = getEl("product_price").valueAsNumber;
	const qty = getEl("product_qty").valueAsNumber;
	if (title === "") {
		toast.error("Enter product title")
		return false
	}

	if (price <= 0 || isNaN(price)) {
		toast.error("Enter product price");
		return false;
	}
	if (qty <= 0 || isNaN(qty)) {
		toast.error("Enter product quantity");
		return false;
	}

	
	const addResult = shopCart.addToCart(title, price, qty);

	const message =
		addResult === "add"
			? "Product successfully added to cart"
			: "Products quantity successfully changed ";
	
	toast.success(message)

	shopCart.showProdutsList();

	return false;
}

function actionProductHandler(title, action) {
	shopCart.actionProduct(title,action);
 }  









shopCart.showProdutsList();
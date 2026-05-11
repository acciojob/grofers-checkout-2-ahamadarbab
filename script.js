//your code here

// select all price cells
let prices = document.querySelectorAll('[data-ns-test="prices"]');

let total = 0;

// calculate total
prices.forEach((price) => {
	total += Number(price.textContent);
});

// Create new row
let totalRow = document.createElement("tr");

// Create new cell
let totalCell = document.createElement("td");

// set attributes and content
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.colSpan = 2;
totalCell.textContent = total;

// append cell to row
totalRow.appendChild(totalCell);

// append row to table
document.getElementById("groceryTable").appendChild(totalRow);
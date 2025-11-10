let orders = JSON.parse(localStorage.getItem('orders')) || [];

document.getElementById('order-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const tableNumber = document.getElementById('table-number').value;
  const dish = document.getElementById('dish').value;
  const price = document.getElementById('price').value;
  const order = { tableNumber, dish, price };
  createOrder(order);
  displayOrders();
  document.getElementById('order-form').reset();
});

function createOrder(order) {
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function displayOrders() {
  const orderTableBody = document.getElementById('order-table-body');
  orderTableBody.innerHTML = '';
  orders.forEach((order, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${order.tableNumber}</td>
      <td>${order.dish}</td>
      <td>${order.price}</td>
      <td>
        <button onclick="updateOrder(${index})">Update</button>
        <button onclick="deleteOrder(${index})">Delete</button>
      </td>
    `;
    orderTableBody.appendChild(row);
  });
}

function updateOrder(index) {
  const order = orders[index];
  const newTableNumber = prompt('Enter new table number:', order.tableNumber);
  const newDish = prompt('Enter new dish:', order.dish);
  const newPrice = prompt('Enter new price:', order.price);
  orders[index] = { tableNumber: newTableNumber, dish: newDish, price: newPrice };
  localStorage.setItem('orders', JSON.stringify(orders));
  displayOrders();
}

function deleteOrder(index) {
  orders.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
  displayOrders();
}

displayOrders();
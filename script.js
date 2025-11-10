// API URL for CRUD operations
const apiUrl ="https://crudcrud.com/api/727ed89450894ea8ab0de2e2b620d55a";
                              

                              
const orderForm = document.getElementById('//your-backend-api.com/orders';

// Get form and table elements
const orderForm = document.getElementById('order-form');
const orderTableBody = document.getElementById('order-table-body');

                                    
orderForm.addEventListener('// Add event listener to form submit
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const tableNumber = document.getElementById('table-number').value;
    const dish = document.getElementById('dish').value;
    const price = document.getElementById('price').value;
    const order = { tableNumber, dish, price };
    createOrder(order);
});

                     
function createOrder(order) {
    axios.post(apiUrl, order)
        .then((response) => {
            console.log(response.data);
            displayOrders();
            orderForm.reset();
        })
        .catch((error) => {
            console.error(error);
        });
}

                     
function displayOrders() {
    axios.get(apiUrl)
        .then((response) => {
            const orders = response.data;
            orderTableBody.innerHTML = '// Create a new order
function createOrder(order) {
    axios.post(apiUrl, order)
        .then((response) => {
            console.log(response.data);
            displayOrders();
            orderForm.reset();
        })
        .catch((error) => {
            console.error(error);
        });
}

// Display all orders
function displayOrders() {
    axios.get(apiUrl)
        .then((response) => {
            const orders = response.data;
            orderTableBody.innerHTML = '';
            orders.forEach((order) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.tableNumber}</td>
                    <td>${order.dish}</td>
                    <td>${order.price}</td>
                    <td>
                        <button onclick="updateOrder(${order.id})">Update</button>
                        <button onclick="deleteOrder(${order.id})">Delete</button>
                    </td>
                `;
                orderTableBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

                           
function updateOrder(id) {
    const newTableNumber = prompt('// Update an existing order
function updateOrder(id) {
    const newTableNumber = prompt('Enter new table number:');
    const newDish = prompt('Enter new dish:');
    const newPrice = prompt('Enter new price:');
    const updatedOrder = { tableNumber: newTableNumber, dish: newDish, price: newPrice };
    axios.put(`${apiUrl}/${id}`, updatedOrder)
        .then((response) => {
            console.log(response.data);
            displayOrders();
        })
        .catch((error) => {
            console.error(error);
        });
}

// Delete an existing order
function deleteOrder(id) {
    axios.delete(`${apiUrl}/${id}`)
        .then((response) => {
            console.log(response.data);
            displayOrders();
        })
        .catch((error) => {
            console.error(error);
        });
}

// Initial display of orders
displayOrders();

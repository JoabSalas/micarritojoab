// Obtener elementos del DOM
const botonesAñadir = document.querySelectorAll('.añadir-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');

let carrito = []; // Array para almacenar productos del carrito

// Función para actualizar el carrito
function actualizarCarrito() {
    // Limpiar el contenido del carrito
    listaCarrito.innerHTML = '';

    let totalCompra = 0; // Variable para el total de la compra

    // Recorrer los productos en el carrito
    carrito.forEach(producto => {
        const li = document.createElement('li'); // Crear un nuevo elemento de lista
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-carrito"> <!-- Imagen del producto en el carrito -->
            <span>${producto.nombre} - $${producto.precio}</span>
        `;
        listaCarrito.appendChild(li); // Añadir el elemento a la lista del carrito
        totalCompra += parseFloat(producto.precio); // Sumar al total
    });

    total.textContent = `Total: $${totalCompra.toFixed(2)}`; // Actualizar el total
}

// Evento de clic para añadir productos al carrito
botonesAñadir.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const producto = {
            id: e.target.dataset.id, // Obtener el ID del producto
            nombre: e.target.dataset.nombre, // Obtener el nombre del producto
            precio: e.target.dataset.precio, // Obtener el precio del producto
            imagen: e.target.dataset.imagen // Obtener la imagen del producto
        };
        carrito.push(producto); // Añadir el producto al carrito
        actualizarCarrito(); // Actualizar el carrito
    });
});
// Obtener el botón de comprar
const botonComprar = document.getElementById('comprar');

// Evento de clic para redirigir a la página de compra
botonComprar.addEventListener('click', () => {
    window.location.href = 'file:///C:/Users/lopez/Desktop/practica/index2compra.html'; // Cambia esto por la URL de tu página de compra
});

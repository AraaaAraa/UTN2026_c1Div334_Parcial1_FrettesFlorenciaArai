let productos = []
let carrito = []
//--- Funcion que obtiene el carrito del LocalStorage, lo parsea a un array y lo retorna ---//
function obtenerCarrito() 
{
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

//--- Funcion que guarda el carrito recibido al LocalStorage, previamente transformado a string ---//
function guardarCarrito(carrito) 
{
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function sumarAlCarrito(e) {
    let tarjeta = e.target.closest("li");
    let nombreProducto = tarjeta.querySelector(".nombre-producto").textContent;
    let precioProducto = parseInt(tarjeta.querySelector(".precio-producto").textContent.replace("$", ""));;

    let carrito = obtenerCarrito();
    let productoEnCarrito = carrito.find(produ => produ.nombre === nombreProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ nombre: nombreProducto, precio: precioProducto, cantidad: 1 });
    }

    alert(`Un/una: ${nombreProducto} fue agregado al carrito`);
    console.log(carrito);
    guardarCarrito(carrito);
}

function restarDelCarrito(e) 
{
    let carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert("No hay ningún producto guardado en el carrito");
        return; 
    }

    let tarjeta = e.target.closest("li");
    let nombreProducto = tarjeta.querySelector(".nombre-producto").textContent;


    let productoEncontrado = carrito.find(produ => produ.nombre === nombreProducto);

    if (!productoEncontrado) {
        alert(`No hay más ${nombreProducto} en el carrito`);
        return;
    }

    productoEncontrado.cantidad--;
    alert(`Un/una: ${nombreProducto} fue eliminado del carrito`);


    if (productoEncontrado.cantidad === 0) {
        carrito = carrito.filter(produ => produ.nombre !== nombreProducto);
    }

    console.log(carrito);
    guardarCarrito(carrito);
}

//--- [EVENTOS] Asociacion del evento "click" a los botones "+" y "-" con la funcion manejadora del evento ---//

window.addEventListener("DOMContentLoaded", () => 
{
const botonesSumar = document.querySelectorAll(".btn-sumar-a-carrito");
const botonesRestar = document.querySelectorAll(".btn-restar-a-carrito");

botonesSumar.forEach(btn => btn.addEventListener("click", sumarAlCarrito));
botonesRestar.forEach(btn => btn.addEventListener("click", restarDelCarrito));
});
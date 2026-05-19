function obtenerCarrito() 
{
    return;
}

function cargarProductosCarrito() 
{
    let tabla = document.getElementById("tabla-carrito");
}

function limpiarCarrito() 
{
    localStorage.removeItem('carrito');
    cargarProductosCarrito();
}

// Asociar evento al botón cuando la página carga
window.addEventListener("DOMContentLoaded", () =>
{
    cargarProductosCarrito();
    document.querySelector(".btn-limpiar-carrito").addEventListener("click", limpiarCarrito);
});
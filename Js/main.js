document.addEventListener('DOMContentLoaded', function() {
    // Event listener para el botón de la hamburguesa
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        const navCollapse = document.querySelector('.navbar-collapse');
        navCollapse.classList.toggle('active'); // Toggle class "active" on navbar-collapse
    });

    // Obtener todos los elementos del menú
    const menuItems = document.querySelectorAll('.navbar-nav .nav-item a');

    // Agregar evento de clic a cada elemento del menú
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            const navCollapse = document.querySelector('.navbar-collapse');
            navCollapse.classList.remove('active'); // Retraer el menú
        });
    });
});



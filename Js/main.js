document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        const navCollapse = document.querySelector('.navbar-collapse');
        navCollapse.classList.toggle('active'); // Toggle class "active" on navbar-collapse
    });
});


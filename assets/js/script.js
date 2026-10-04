// Menangani buka-tutup menu mobile di Layar HP
document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const menuHp = document.getElementById('menu-hp');

    if (btnMenu && menuHp) {
        btnMenu.addEventListener('click', function () {
            menuHp.classList.toggle('tampil');
        });

        // Menutup menu mobile saat salah satu link diklik
        const mobileLinks = menuHp.querySelectorAll('a');
        mobileLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                menuHp.classList.remove('tampil');
            });
        });
    }
});
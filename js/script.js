document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.site-nav');
    const btn = document.querySelector('.hamburger');
    const links = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
    const navLinksContainer = document.querySelector('.nav-links');

    function updateNavTop() {
        if (!header || !navLinksContainer) return;
        // Apenas em telas móveis (onde usamos overlay)
        if (window.innerWidth < 768) {
            const h = Math.ceil(header.getBoundingClientRect().height);
            navLinksContainer.style.top = h + 'px';
            // garanta que o overlay não cubra o header
            navLinksContainer.style.paddingTop = '12px';
        } else {
            navLinksContainer.style.top = null;
            navLinksContainer.style.paddingTop = null;
        }
    }

    // Atualiza no carregamento e ao redimensionar
    updateNavTop();
    window.addEventListener('resize', updateNavTop);

    if (!nav || !btn) return;

    btn.addEventListener('click', function () {
        // recalcula top antes de abrir para garantir alinhamento exato
        updateNavTop();
        const isOpen = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        btn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha o menu ao clicar em um link (bom para mobile)
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

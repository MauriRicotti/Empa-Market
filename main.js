// DATOS DE PRODUCTOS
const productos = [
    // EMPANADAS
    {
        id: 1,
        nombre: 'Carne Molida',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1000,
        descripcion: 'Carne picada con cebolla y especias',
        imagen: 'assets/Empanada 1.png',
        stock: 25,
        puntuacion: 4.8,
        resenas: 124,
        badge: 'Favorito'
    },
    {
        id: 2,
        nombre: 'Pollo BBQ',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1000,
        descripcion: 'Pollo desmenuzado con salsa BBQ casera',
        imagen: 'assets/Empanada 2.png',
        stock: 18,
        puntuacion: 4.9,
        resenas: 156,
        badge: 'Top Seller'
    },
    {
        id: 3,
        nombre: 'Queso y Jamón',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1000,
        descripcion: 'Queso fundido con jamón premium',
        imagen: 'assets/Empanada 3.png',
        stock: 22,
        puntuacion: 4.7,
        resenas: 98,
        badge: null
    },
    {
        id: 4,
        nombre: 'Espinaca y Queso',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1000,
        descripcion: 'Espinaca fresca con queso ricotta',
        imagen: 'assets/Empanada 4.png',
        stock: 30,
        puntuacion: 4.6,
        resenas: 87,
        badge: 'Vegana'
    },
    {
        id: 5,
        nombre: 'Atún Fresco',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1200,
        descripcion: 'Atún con ají y vegetales frescos',
        imagen: 'assets/Empanada 5.png',
        stock: 15,
        puntuacion: 4.5,
        resenas: 72,
        badge: 'Premium'
    },
    {
        id: 6,
        nombre: 'Corned Beef',
        categoria: 'empanadas',
        seccion: 'Empanadas',
        precio: 1200,
        descripcion: 'Corned beef tierno con cebolla',
        imagen: 'assets/Empanada 6.png',
        stock: 20,
        puntuacion: 4.7,
        resenas: 105,
        badge: null
    },
    // DELICIAS
    {
        id: 7,
        nombre: 'Medialunas Saladas',
        categoria: 'delicias',
        seccion: 'Delicias',
        precio: 750,
        descripcion: 'Medialunas saladas crujientes y doradas',
        imagen: 'assets/medialunas saladas.jpeg',
        stock: 40,
        puntuacion: 4.8,
        resenas: 110,
        badge: 'Favorito'
    },
    {
        id: 8,
        nombre: 'Medialunas Dulces',
        categoria: 'delicias',
        seccion: 'Delicias',
        precio: 750,
        descripcion: 'Medialunas dulces con azúcar brillante',
        imagen: 'assets/medialunas.jpg',
        stock: 35,
        puntuacion: 4.7,
        resenas: 95,
        badge: null
    },
    {
        id: 9,
        nombre: 'Chipá',
        categoria: 'delicias',
        seccion: 'Delicias',
        precio: 2400,
        descripcion: '5 Chipá tradicional hecho con queso y almidón',
        imagen: 'assets/chipa.webp',
        stock: 50,
        puntuacion: 4.6,
        resenas: 78,
        badge: null
    },
    {
        id: 10,
        nombre: 'Pastelitos',
        categoria: 'delicias',
        seccion: 'Delicias',
        precio: 1150,
        descripcion: 'Pastelitos rellenos de dulce de leche',
        imagen: 'assets/pastelitos.webp ',
        stock: 32,
        puntuacion: 4.9,
        resenas: 142,
        badge: 'Top Seller'
    },
    // PIZZAS
    {
        id: 11,
        nombre: 'Pizza Margarita',
        categoria: 'pizzas',
        seccion: 'Pizzas',
        precio: 8000,
        descripcion: 'Clásica pizza con tomate, mozzarella y albahaca',
        imagen: 'assets/pizza 1.jpg',
        stock: 16,
        puntuacion: 4.7,
        resenas: 89,
        badge: 'Vegana'
    },
    {
        id: 12,
        nombre: 'Pizza Pepperoni',
        categoria: 'pizzas',
        seccion: 'Pizzas',
        precio: 8000,
        descripcion: 'Pepperoni fresco con queso derretido',
        imagen: 'assets/pizza 2.jpg',
        stock: 12,
        puntuacion: 4.8,
        resenas: 134,
        badge: 'Top Seller'
    },
    {
        id: 13,
        nombre: 'Pizza Cuatro Quesos',
        categoria: 'pizzas',
        seccion: 'Pizzas',
        precio: 9500,
        descripcion: 'Combinación de 4 quesos premium',
        imagen: 'assets/pizza 3.jpg',
        stock: 10,
        puntuacion: 4.9,
        resenas: 167,
        badge: 'Premium'
    },
    // BEBIDAS
    {
        id: 14,
        nombre: 'Coca-cola 500ml',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 1900,
        descripcion: 'Coca-cola clásica 500ml',
        imagen: 'assets/coca.jpg',
        stock: 100,
        puntuacion: 4.5,
        resenas: 201,
        badge: null
    },
    {
        id: 15,
        nombre: 'Placer 500ml',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 1900,
        descripcion: 'Placer sabor a mandarina 500ml',
        imagen: 'assets/placer.jpg',
        stock: 85,
        puntuacion: 4.4,
        resenas: 65,
        badge: null
    },
    {
        id: 16,
        nombre: 'Cepita',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 2700,
        descripcion: 'Cepita jugo natural en botella',
        imagen: 'assets/cepita.jpg',
        stock: 70,
        puntuacion: 4.6,
        resenas: 88,
        badge: 'Premium'
    },
    {
        id: 17,
        nombre: 'Sprite',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 1900,
        descripcion: 'Sprite limón fresco 500ml',
        imagen: 'assets/sprite.jpg',
        stock: 95,
        puntuacion: 4.5,
        resenas: 112,
        badge: null
    },
    {
        id: 18,
        nombre: 'Pepsi',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 1900,
        descripcion: 'Pepsi cola 500ml',
        imagen: 'assets/pepsi.jpg',
        stock: 80,
        puntuacion: 4.4,
        resenas: 76,
        badge: null
    },
    {
        id: 19,
        nombre: 'Manaos',
        categoria: 'bebidas',
        seccion: 'Bebidas',
        precio: 1300,
        descripcion: 'Manaos sabores variados 1l',
        imagen: 'assets/manaos.jpg',
        stock: 120,
        puntuacion: 4.3,
        resenas: 54,
        badge: null
    }
];

// CARRITO
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Nota: el número de WhatsApp ahora se obtiene según la sucursal seleccionada por el usuario.
let currentSlide = 0;
let filtroActual = 'all';

// HORARIOS DE FUNCIONAMIENTO
const HORARIOS = {
    lunes: { abierta: 10, cierra: 21 },      // 10:00 - 21:00
    martes: { abierta: 10, cierra: 21 },     // 10:00 - 21:00
    miercoles: { abierta: 10, cierra: 21 },  // 10:00 - 21:00
    jueves: { abierta: 10, cierra: 21 },     // 10:00 - 21:00
    viernes: { abierta: 10, cierra: 21 },    // 10:00 - 21:00
    sabado: { abierta: 11, cierra: 22 },     // 11:00 - 22:00
    domingo: { abierta: 11, cierra: 21 }     // 11:00 - 21:00
};

// FUNCIÓN: Inicializar tema (detectar preferencia del sistema y del usuario)
 function inicializarTema() {
     const temaGuardado = localStorage.getItem('tema');
     const preferenciaDelSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
     let debeSerTemaClaro = false;
    
     if (temaGuardado) {
         // Si el usuario tiene una preferencia guardada, usarla
         debeSerTemaClaro = temaGuardado === 'light';
     } else {
         // Si no, usar la preferencia del sistema (invertida: light si el sistema es light)
         debeSerTemaClaro = !preferenciaDelSistema;
     }
    
     aplicarTema(debeSerTemaClaro, false);
     actualizarIconoTema(debeSerTemaClaro);
    
     // Escuchar cambios en la preferencia del sistema
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
         if (!localStorage.getItem('tema')) {
             const esOscuro = e.matches;
             aplicarTema(!esOscuro);
             actualizarIconoTema(!esOscuro);
         }
     });
    
     // Escuchar clicks en el botón de tema
     // Enlazar todos los toggles de tema (desktop/mobile). Después de la limpieza
     // dejamos solo el del panel lateral; esto asegura que si hay varios, se manejen.
     const themeToggles = document.querySelectorAll('#themeToggle, #themeToggleMobile');
     themeToggles.forEach(t => {
         if (t) t.addEventListener('click', alternarTema);
     });

    // Pre-cargar imágenes críticas (hero) para reducir el retardo al cambiar tema
    precargarImagenesHero();
}

// Sucursales con números de WhatsApp. Cada sucursal tiene `id`, `nombre`, `direccion` y `whatsapp` (código país + número)
const SUCURSALES = [
    { id: 'varela', nombre: 'Florencio Varela', direccion: 'Monteagudo Bernardo 3394, B1888 Florencio Varela, Provincia de Buenos Aires', whatsapp: '5491141948773' },
    { id: 'lomas_forougue', nombre: 'Lomas de Zamora - Forougue', direccion: 'Lomas de Zamora - Forougue 93', whatsapp: '549112345671' },
    { id: 'monte_grande', nombre: 'Monte Grande', direccion: 'Monte Grande Angel C. Rotta 53', whatsapp: '549112345672' },
    { id: 'banfield', nombre: 'Banfield', direccion: 'Banfield Maipu 95', whatsapp: '549112345673' },
    { id: 'temperley', nombre: 'Temperley', direccion: 'Temperley Cangallo 177', whatsapp: '549112345674' },
    { id: 'lanus_oeste', nombre: 'Lanús Oeste', direccion: 'Lanus Oeste - Hipoliro Yrigoyen 4500', whatsapp: '549112345675' },
    { id: 'san_francisco_solano', nombre: 'San Francisco Solano', direccion: 'San Francisco Solano - Calle 844 2339', whatsapp: '549112345676' },
    { id: 'burzaco', nombre: 'Burzaco', direccion: 'Burzaco - Pellegrini 872', whatsapp: '549112345677' },
    { id: 'ezeiza', nombre: 'Ezeiza', direccion: 'Ezeiza - Nestor Kirchner 1632', whatsapp: '549112345678' },
    { id: 'adrogue', nombre: 'Adrogué', direccion: 'Adrogué - Mitre 976', whatsapp: '549112345679' },
    { id: 'lomas_boedo', nombre: 'Lomas de Zamora - Boedo', direccion: 'Lomas de Zamora - Boedo 449', whatsapp: '549112345680' },
    { id: 'constitucion', nombre: 'Constitución', direccion: 'Constitucion - Salta 1749', whatsapp: '549112345681' }
];

function getSelectedSucursal() {
    try {
        const raw = localStorage.getItem('selectedSucursal');
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function setSelectedSucursal(suc) {
    localStorage.setItem('selectedSucursal', JSON.stringify(suc));
}

function getWhatsappNumberForUI() {
    const sel = getSelectedSucursal();
    if (sel && sel.whatsapp) return sel.whatsapp;
    return SUCURSALES[0].whatsapp; // fallback
}

// (Se removió la inicialización de mapas; ya no se usan mapas interactivos)

// Pre-cargar imágenes del hero para que el swap sea instantáneo
function precargarImagenesHero() {
    const imgs = [
        'assets/Hero section.jpg',
        'assets/img hero 2.jpg'
    ];
    // Guardar referencias para evitar garbage collection prematuro
    window.__preloadedHeroImages = window.__preloadedHeroImages || [];
    imgs.forEach(src => {
        const img = new Image();
        img.src = src;
        window.__preloadedHeroImages.push(img);
    });
}

/* ---------- Selector de Sucursal (modal, persistencia) ---------- */
function buildSucursalItem(suc) {
    const div = document.createElement('div');
    div.className = 'sucursal-item';
    div.innerHTML = `
        <div class="sucursal-main">
            <div class="sucursal-nombre">${suc.nombre}</div>
            <div class="sucursal-direccion">${suc.direccion || ''}</div>
        </div>
        <div class="sucursal-actions">
            <button class="btn btn-primary btn-choose" data-id="${suc.id}">Elegir</button>
        </div>
    `;
    return div;
}

function openSucursalModal() {
    const modal = document.getElementById('sucursalModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeSucursalModal() {
    const modal = document.getElementById('sucursalModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initSucursalSelector() {
    const modal = document.getElementById('sucursalModal');
    if (!modal) return;

    const list = document.getElementById('sucursalList');
    list.innerHTML = '';
    SUCURSALES.forEach(s => {
        const item = buildSucursalItem(s);
        list.appendChild(item);
    });

    // Delegación de clicks en botones Elegir
    list.addEventListener('click', (ev) => {
        const btn = ev.target.closest('.btn-choose');
        if (!btn) return;
        const id = btn.getAttribute('data-id');
        const suc = SUCURSALES.find(x => x.id === id);
        if (!suc) return;
        setSelectedSucursal(suc);
        mostrarNotificacion(`Sucursal seleccionada: ${suc.nombre}`);
        updateWhatsappLinks();
        updateNavbarSucursal();
        closeSucursalModal();
    });

    // Close / skip
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeSucursalModal();
    });
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => closeSucursalModal());
    const skip = document.getElementById('sucursalSkip');
    if (skip) skip.addEventListener('click', () => closeSucursalModal());

    // Mostrar modal sólo si no hay sucursal seleccionada
    const sel = getSelectedSucursal();
    if (!sel) openSucursalModal();
    else {
        updateWhatsappLinks();
        updateNavbarSucursal();
    }
}

function updateWhatsappLinks() {
    const wa = getWhatsappNumberForUI();
    // Actualizar footer/íconos que tengan data-whatsapp anchor
    const anchors = document.querySelectorAll('a[data-role="whatsapp-link"]');
    anchors.forEach(a => {
        a.href = `https://wa.me/${wa}`;
    });
    // Actualizar enlaces que usen WHATSAPP_NUMBER en el envío de pedidos (no modifica JS)
}

// Actualizar la UI del navbar con la sucursal seleccionada
function updateNavbarSucursal() {
    const sel = getSelectedSucursal();
    const nameMobileEl = document.getElementById('sucursalNameMobile');
    const nameDesktopEl = document.getElementById('sucursalName');
    const displayEl = document.getElementById('sucursalDisplay');
    
    if (sel) {
        if (nameMobileEl) nameMobileEl.textContent = sel.nombre;
        if (nameDesktopEl) nameDesktopEl.textContent = sel.nombre;
        if (displayEl) displayEl.style.display = 'inline-flex';
    } else {
        if (nameMobileEl) nameMobileEl.textContent = 'Sucursal';
        if (nameDesktopEl) nameDesktopEl.textContent = 'Sucursal';
        if (displayEl) displayEl.style.display = 'inline-flex';
    }
}

// Abrir modal desde botón del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const btnMobile = document.getElementById('changeSucursalMobile');
    if (btnMobile) btnMobile.addEventListener('click', () => {
        // cuando se abre el menú móvil, la clase .nav-links.mobile estará aplicada; abrir modal y cerrar menú si existe
        openSucursalModal();
        const nav = document.querySelector('.nav-links.mobile');
        if (nav) nav.classList.remove('open');
    });

    // Botón de sucursal en desktop
    const btnDesktop = document.getElementById('changeSucursal');
    if (btnDesktop) btnDesktop.addEventListener('click', () => {
        openSucursalModal();
    });

    // Asegurar sincronización inicial
    updateNavbarSucursal();
});

function aplicarTema(esClaro, animate = true) {
    const html = document.documentElement;

    // Si no queremos animación (por ejemplo, al cargar la página), aplicar directamente
    if (!animate) {
        if (esClaro) html.classList.add('light-theme');
        else html.classList.remove('light-theme');

        cambiarImagenHero(esClaro);
        localStorage.setItem('tema', esClaro ? 'light' : 'dark');
        return;
    }

    // Aplicar la clase de tema y el icono inmediatamente para que la UI responda rápido
    if (esClaro) html.classList.add('light-theme');
    else html.classList.remove('light-theme');
    actualizarIconoTema(esClaro);
    localStorage.setItem('tema', esClaro ? 'light' : 'dark');

    // Animación sutil: cambiar la imagen al instante y usar solo la overlay para suavizar
    const heroBackground = document.getElementById('heroBackground');
    const heroOverlay = document.querySelector('.hero-overlay');
    const ANIM_MS = 220; // corto, solo para la overlay

    // Cambiar imagen al instante (las imágenes ya deberían estar precargadas)
    cambiarImagenHero(esClaro);

    // Animar solo la overlay para dar una sensación de transición sin ocultar el fondo
    if (heroOverlay) {
        // añadir clase que reduce la opacidad y luego volver a su estado
        heroOverlay.classList.add('fade-out-overlay');
        setTimeout(() => {
            heroOverlay.classList.remove('fade-out-overlay');
        }, ANIM_MS);
    }
}

function cambiarImagenHero(esClaro) {
    const heroBackground = document.getElementById('heroBackground');
    if (!heroBackground) return;
    
    if (esClaro) {
        // Imagen para tema claro: usar la imagen clara (overlay oscuro se aplica con .hero-overlay)
        heroBackground.style.backgroundImage = 'url("assets/img hero 2.jpg")';
        heroBackground.style.filter = 'brightness(0.85) contrast(1.05) saturate(0.98)';
    } else {
        // Imagen para tema oscuro (original)
        heroBackground.style.backgroundImage = 'url("assets/Hero section.jpg")';
        heroBackground.style.filter = 'none';
    }
}

function actualizarIconoTema(esClaro) {
    // Actualizar todos los toggles si hay varios (desktop + mobile)
    const toggles = document.querySelectorAll('#themeToggle, #themeToggleMobile');
    toggles.forEach(themeToggle => {
        if (!themeToggle) return;
        const icono = themeToggle.querySelector('i');
        if (icono) {
            if (esClaro) icono.className = 'bi bi-sun-fill';
            else icono.className = 'bi bi-moon-fill';
        }
        if (esClaro) themeToggle.setAttribute('aria-label', 'Cambiar a tema oscuro');
        else themeToggle.setAttribute('aria-label', 'Cambiar a tema claro');
    });
}

function alternarTema() {
    const html = document.documentElement;
    const esActualmenteclaro = html.classList.contains('light-theme');
    aplicarTema(!esActualmenteclaro);
}

// FUNCIÓN: Actualizar estado de abierto/cerrado
function actualizarEstadoHero() {
    const heroStatus = document.getElementById('heroStatus');
    if (!heroStatus) return;
    
    const ahora = new Date();
    const diaSemana = ahora.getDay(); // 0 = domingo, 1 = lunes, etc.
    const horaActual = ahora.getHours();
    
    // Mapear día de semana (0-6) a los nombres en HORARIOS
    const diasMap = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const diaHoy = diasMap[diaSemana];
    const horarioHoy = HORARIOS[diaHoy];
    
    const estaAbierto = horaActual >= horarioHoy.abierta && horaActual < horarioHoy.cierra;
    
    const statusIndicator = heroStatus.querySelector('.status-indicator');
    const statusText = heroStatus.querySelector('.status-text');
    
    if (estaAbierto) {
        statusIndicator.classList.remove('closed');
        statusIndicator.classList.add('open');
        statusText.textContent = 'Abierto - Tomando pedidos';
    } else {
        statusIndicator.classList.remove('open');
        statusIndicator.classList.add('closed');
        statusText.textContent = 'Cerrado';
    }
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    inicializarProductos();
    actualizarCarritoUI();
    inicializarFiltros();
    inicializarHoverMobile();
    agregarParallax();
    inicializarMenuHamburguesa();
    inicializarFAQ();
    actualizarEstadoHero();
    inicializarMapaSucursales();  // Inicializar mapa de sucursales

    // Indicador de sección activa en navbar (solo escritorio)
    if (window.innerWidth > 768) {
        const sections = [
            {id: 'hero', link: null},
            {id: 'productos', link: null},
            {id: 'instagram', link: null},
            {id: 'contacto', link: null},
        ];
        const navLinks = document.querySelectorAll('.nav-links a');
        sections.forEach(sec => {
            sec.link = Array.from(navLinks).find(a => a.getAttribute('href') === '#' + sec.id);
        });

        function updateActiveSection() {
            let scrollPos = window.scrollY + 80; // compensar navbar fija
            let current = sections[0];
            for (let sec of sections) {
                const el = document.getElementById(sec.id);
                if (el && el.offsetTop <= scrollPos) {
                    current = sec;
                }
            }
            navLinks.forEach(a => a.classList.remove('active'));
            if (current.link) current.link.classList.add('active');
        }
        window.addEventListener('scroll', updateActiveSection);
        window.addEventListener('resize', updateActiveSection);
        updateActiveSection();
    }

    // Actualizar estado cada minuto para reflejar cambios de horario
    setInterval(actualizarEstadoHero, 60000);

    // Seguridad: asegurar que el modal de completar pedido esté oculto al cargar
    const orderModal = document.getElementById('orderModal');
    if (orderModal && orderModal.getAttribute('aria-hidden') !== 'true') {
        orderModal.setAttribute('aria-hidden', 'true');
    }
    // Envolver apariciones de la marca "Empa-market" después de que el contenido dinámico cargue
    // Se llama con pequeño delay para cubrir inserciones asíncronas (productos, etc.)
    setTimeout(() => {
        if (typeof wrapEmpaMarket === 'function') wrapEmpaMarket();
    }, 0.01);

    // Inicializar modal de selección de sucursal (si corresponde)
    initSucursalSelector();
});

// MENU HAMBURGUESA: abrir/cerrar en móviles
function inicializarMenuHamburguesa() {
    const btn = document.getElementById('hamburgerBtn');
    const nav = document.querySelector('.nav-links');
    if (!btn || !nav) return;

    nav.classList.remove('mobile', 'open');
    try { document.body.classList.remove('no-scroll'); } catch (e) {}

    btn.addEventListener('click', (e) => {
        const isOpen = nav.classList.contains('open');
        nav.classList.add('mobile');
        if (isOpen) {
            nav.classList.remove('open');
            btn.setAttribute('aria-label', 'Abrir menú');
            try { document.body.classList.remove('no-scroll'); } catch (e) {}
        } else {
            nav.classList.add('open');
            btn.setAttribute('aria-label', 'Cerrar menú');
            try { document.body.classList.add('no-scroll'); } catch (e) {}
        }
    });

    // Botón X para cerrar el menú lateral
    let closeBtn = nav.querySelector('.close-menu');
    if (!closeBtn) {
        closeBtn = document.createElement('button');
        closeBtn.className = 'close-menu';
        closeBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
        closeBtn.setAttribute('aria-label', 'Cerrar menú');
        nav.insertBefore(closeBtn, nav.firstChild);
    }
    closeBtn.onclick = () => {
        nav.classList.remove('open');
        btn.setAttribute('aria-label', 'Abrir menú');
        try { document.body.classList.remove('no-scroll'); } catch (e) {}
    };

    // Cerrar menú al hacer click fuera del panel lateral
    document.addEventListener('mousedown', (e) => {
        if (nav.classList.contains('open')) {
            if (!nav.contains(e.target) && e.target !== btn) {
                nav.classList.remove('open');
                btn.setAttribute('aria-label', 'Abrir menú');
                try { document.body.classList.remove('no-scroll'); } catch (e) {}
            }
        }
    });

    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            nav.classList.remove('open');
            try { document.body.classList.remove('no-scroll'); } catch (e) {}
        }
    });

    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Escape' || e.key === 'Esc') && nav.classList.contains('open')) {
            nav.classList.remove('open');
            try { document.body.classList.remove('no-scroll'); } catch (err) {}
            btn.setAttribute('aria-label', 'Abrir menú');
        }
    });

    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        if (w > 768) {
            if (nav.classList.contains('open') || nav.classList.contains('mobile')) {
                nav.classList.remove('open', 'mobile');
                try { document.body.classList.remove('no-scroll'); } catch (e) {}
                btn.setAttribute('aria-label', 'Abrir menú');
            }
        }
    });
}

// PARALLAX EFFECT
function agregarParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero-background');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.transform = `translateY(${scrollPosition * 0.6}px)`;
        }

        // Parallax para divisor-parallax y divisor-parallax-special
        document.querySelectorAll('.divisor-parallax, .divisor-parallax-special').forEach(div => {
            // Efecto más suave en móviles
            const isMobile = window.innerWidth <= 768;
            const factor = isMobile ? 0.25 : 0.5;
            div.style.backgroundPosition = `center ${-window.scrollY * factor}px`;
        });
    });
}

// PRODUCTOS
function inicializarProductos() {
    mostrarProductos(productos, 'all');
}

function mostrarProductos(productosAMostrar, filtro) {
    const grid = document.getElementById('productosGrid');
    // transición de salida
    grid.classList.remove('fade-in');
    grid.classList.add('fade-out');

    // esperar a que termine la transición antes de reemplazar contenido
    setTimeout(() => {
        grid.innerHTML = '';
    
    let productosAgrupados = {};
    
    // Agrupar por sección
    productosAMostrar.forEach(producto => {
        const seccion = producto.seccion;
        if (!productosAgrupados[seccion]) {
            productosAgrupados[seccion] = [];
        }
        productosAgrupados[seccion].push(producto);
    });
    
    // Orden específico de secciones
    const ordenSecciones = ['Empanadas', 'Delicias', 'Pizzas', 'Bebidas'];
    
    let primeraSección = true;
    
    ordenSecciones.forEach(seccion => {
        if (productosAgrupados[seccion] && productosAgrupados[seccion].length > 0) {
            // Agregar separador (excepto antes de la primera sección)
            if (!primeraSección) {
                const separador = document.createElement('div');
                separador.className = 'section-separator';
                grid.appendChild(separador);
            }
            
            // Agregar título de sección
            const titulo = document.createElement('div');
            titulo.className = 'section-header';
            titulo.innerHTML = `
                <h3>${seccion}</h3>
                <div class="separator-line"></div>
            `;
            grid.appendChild(titulo);
            
            // Agregar productos de la sección
            productosAgrupados[seccion].forEach((producto, idx) => {
                const card = document.createElement('div');
                card.className = 'producto-card';
                
                // Generar estrellas
                const stars = Array(5).fill(0).map((_, i) => 
                    i < Math.floor(producto.puntuacion) ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>'
                ).join('');
                
                // Determinar color de stock
                let stockColor = 'en-stock';
                if (producto.stock < 10) stockColor = 'bajo-stock';
                if (producto.stock === 0) stockColor = 'sin-stock';
                
                // Badge
                const badgeHTML = producto.badge ? `<span class="producto-badge">${producto.badge}</span>` : '';
                
                card.innerHTML = `
                    <div class="producto-image-container">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-image">
                        ${badgeHTML}
                        <div class="producto-overlay"></div>
                    </div>
                    <div class="producto-info">
                        <h3 class="producto-name">${producto.nombre}</h3>
                        <p class="producto-description">${producto.descripcion}</p>
                        <div class="producto-rating">
                            <div class="stars">${stars}</div>
                            <span class="rating-text">${producto.puntuacion} (${producto.resenas})</span>
                        </div>
                        <p class="producto-price">$${producto.precio.toFixed(2)}</p>
                        <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
                            <i class="bi bi-bag-plus"></i> Agregar
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
            
            primeraSección = false;
        }
    });

        // Forzar repaint y animar entrada en cascada
        requestAnimationFrame(() => {
            grid.classList.remove('fade-out');
            grid.classList.add('fade-in');

            const cards = grid.querySelectorAll('.producto-card');
            cards.forEach((card, i) => {
                card.classList.remove('show');
                // Reducir el delay para que aparezcan más rápido
                card.style.transitionDelay = (i * 30) + 'ms';

                setTimeout(() => {
                    card.classList.add('show');

                    // Reducir la duración de la animación
                    setTimeout(() => {
                        try {
                            card.style.removeProperty('transition-delay');
                        } catch (e) {
                            card.style.transitionDelay = '0ms';
                        }
                    }, 200); // 200ms > duración de la transición (más rápida)
                }, 10 + i * 30);
            });
        });
    }, 280);
}

// FILTROS
function inicializarFiltros() {
    const filtros = document.querySelectorAll('.filter-btn');
    if (!filtros || filtros.length === 0) return;

    // Leer filtro guardado (fallback a 'all')
    const guardado = localStorage.getItem('productosFiltro') || 'all';

    filtros.forEach(btn => {
        btn.addEventListener('click', () => {
            filtros.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filtroActual = btn.dataset.filter;

            // Persistir la elección del usuario
            try { localStorage.setItem('productosFiltro', filtroActual); } catch (e) { /* ignore */ }

            if (filtroActual === 'all') {
                mostrarProductos(productos, 'all');
            } else {
                const filtrados = productos.filter(p => p.categoria === filtroActual);
                mostrarProductos(filtrados, filtroActual);
            }
        });
    });

    // Aplicar filtro guardado al cargar la página
    const inicial = Array.from(filtros).find(b => b.dataset.filter === guardado) || filtros[0];
    if (inicial) {
        // Marcar visualmente y renderizar contenido correspondiente
        filtros.forEach(b => b.classList.remove('active'));
        inicial.classList.add('active');
        filtroActual = inicial.dataset.filter;
        if (filtroActual === 'all') mostrarProductos(productos, 'all');
        else mostrarProductos(productos.filter(p => p.categoria === filtroActual), filtroActual);
    }
}

// HOVER EN MOBILE - Mantener estado hover al tocar
function inicializarHoverMobile() {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;
    
    const productCards = document.querySelectorAll('.producto-card');
    let hoveringCard = null;
    
    productCards.forEach(card => {
        card.addEventListener('touchstart', (e) => {
            e.preventDefault();
            
            // Remover hover de la tarjeta anterior
            if (hoveringCard && hoveringCard !== card) {
                hoveringCard.classList.remove('hover-active');
            }
            
            // Agregar hover a la tarjeta actual
            card.classList.add('hover-active');
            hoveringCard = card;
        });
    });
    
    // Remover hover cuando se toca otra parte de la pantalla
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.producto-card') && hoveringCard) {
            hoveringCard.classList.remove('hover-active');
            hoveringCard = null;
        }
    });
}

// CARRITO FUNCIONALIDAD
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const itemEnCarrito = cart.find(item => item.id === productoId);
    
    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        cart.push({
            ...producto,
            cantidad: 1
        });
    }
    
    guardarCarrito();
    actualizarCarritoUI();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

function quitarDelCarrito(productoId) {
    cart = cart.filter(item => item.id !== productoId);
    guardarCarrito();
    actualizarCarritoUI();
}

function actualizarCantidad(productoId, cantidad) {
    const item = cart.find(item => item.id === productoId);
    if (item) {
        item.cantidad = Math.max(1, cantidad);
        guardarCarrito();
        actualizarCarritoUI();
    }
}

function guardarCarrito() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function actualizarCarritoUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    const cartItemsContainer = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="bi bi-cart4"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        // Deshabilitar botón de checkout
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            checkoutBtn.style.cursor = 'not-allowed';
        }
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.nombre}</div>
                    <div class="cart-item-price">$${item.precio.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="actualizarCantidad(${item.id}, ${item.cantidad - 1})">−</button>
                        <span>${item.cantidad}</span>
                        <button class="quantity-btn" onclick="actualizarCantidad(${item.id}, ${item.cantidad + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="quitarDelCarrito(${item.id})" aria-label="Eliminar ${item.nombre}">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `).join('');
        // Habilitar botón de checkout
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            checkoutBtn.style.cursor = 'pointer';
        }
    }
    
    actualizarTotal();
}

function actualizarTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const impuestos = subtotal * 0.1; // 10% de impuestos
    const total = subtotal + impuestos;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('taxes').textContent = `$${impuestos.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

// CARRITO MODAL
document.getElementById('cartIcon').addEventListener('click', openCart);

function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');

    // Evitar scroll del body mientras el carrito está abierto
    try { document.body.classList.add('no-scroll'); } catch (e) {}
}

function closeCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');

    // Restaurar scroll
    try { document.body.classList.remove('no-scroll'); } catch (e) {}
}

document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (e.target === overlay) {
        closeCart();
    }
});

// Cerrar carrito con la tecla ESC si está abierto
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            closeCart();
        }
    }
});

function checkout() {
    if (cart.length === 0) {
        mostrarNotificacion('Tu carrito está vacío');
        return;
    }

    // Abrir modal de pedido (reemplaza prompts)
    openOrderModal();
}

// --- Order modal (reemplaza prompts) ---
function openOrderModal() {
    const modal = document.getElementById('orderModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    try { document.body.classList.add('no-scroll'); } catch (e) {}
    // focus primer campo
    const input = document.getElementById('orderNombre');
    if (input) input.focus();
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    try { document.body.classList.remove('no-scroll'); } catch (e) {}
}

// Función para validar teléfono (mínimo 10 dígitos)
function validarTelefono(telefono) {
    // Extraer solo dígitos del teléfono
    const soloDigitos = telefono.replace(/\D/g, '');
    // Debe tener al menos 10 dígitos
    return soloDigitos.length >= 10;
}

// Manejar envío desde el modal
document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    if (!orderForm) return;
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('orderNombre').value.trim();
        const telefono = document.getElementById('orderTelefono').value.trim();
        const direccion = document.getElementById('orderDireccion').value.trim();
        const nota = document.getElementById('orderNota').value.trim();

        // Validaciones
        if (!nombre || nombre.length < 3) {
            mostrarNotificacion('Por favor ingresa un nombre válido (mínimo 3 caracteres)', 'error');
            return;
        }

        if (!telefono) {
            mostrarNotificacion('Por favor ingresa tu teléfono', 'error');
            return;
        }

        if (!validarTelefono(telefono)) {
            mostrarNotificacion('Por favor ingresa un teléfono válido (mínimo 10 dígitos)', 'error');
            return;
        }

        if (!direccion || direccion.length < 5) {
            mostrarNotificacion('Por favor ingresa una dirección válida', 'error');
            return;
        }

        // Build order data and send
        const subtotal = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        const impuestos = subtotal * 0.1;
        const total = subtotal + impuestos;

        const lineas = cart.map(item => `${item.cantidad} x ${item.nombre} - ${formatCurrency(item.precio)} (cada uno)`);

        let mensaje = `*Nuevo pedido desde EMPA-MARKET*\n\n`;
        mensaje += `*Nombre:* ${nombre}\n`;
        mensaje += `*Teléfono:* ${telefono}\n`;
        mensaje += `*Dirección:* ${direccion}\n`;
        if (nota) mensaje += `*Nota:* ${nota}\n`;
        mensaje += `\n*Pedido:*\n${lineas.join('\n')}\n\n`;
        mensaje += `Subtotal: ${formatCurrency(subtotal)}\n`;
        mensaje += `Impuestos (10%): ${formatCurrency(impuestos)}\n`;
        mensaje += `*Total: ${formatCurrency(total)}*\n`;

        // Enviar a WhatsApp
        const encoded = encodeURIComponent(mensaje);
        const waNumber = getWhatsappNumberForUI();
        const waUrl = `https://wa.me/${waNumber}?text=${encoded}`;

        try {
            const a = document.createElement('a');
            a.href = waUrl;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (err) {
            try { window.open(waUrl, '_blank'); } catch (err2) { window.location.href = waUrl; }
        }

        mostrarNotificacion('Abriendo WhatsApp para completar el pedido...');

        // Limpiar formulario
        orderForm.reset();

        // Limpiar y cerrar modal/carrito
        cart = [];
        guardarCarrito();
        actualizarCarritoUI();
        // Cerrar modal y carrito
        closeOrderModal();
        closeCart();
    });
});

// Cerrar modal con Escape cuando está abierto
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        const modal = document.getElementById('orderModal');
        if (modal && modal.getAttribute('aria-hidden') === 'false') {
            closeOrderModal();
        }
    }
});

// Slider eliminado: la sección de promociones fue removida del HTML,
// por lo que se han quitado las funciones y el temporizador asociados al slider.

// FORMULARIO DE FRANQUICIA
document.getElementById('franchiseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    // Validaciones
    if (!nombre || nombre.length < 3) {
        mostrarNotificacion('Por favor ingresa un nombre válido (mínimo 3 caracteres)', 'error');
        return;
    }
    
    if (!email || !validarEmail(email)) {
        mostrarNotificacion('Por favor ingresa un email válido', 'error');
        return;
    }
    
    if (!telefono || telefono.length < 7) {
        mostrarNotificacion('Por favor ingresa un teléfono válido', 'error');
        return;
    }
    
    if (!mensaje || mensaje.length < 10) {
        mostrarNotificacion('Por favor ingresa un mensaje válido (mínimo 10 caracteres)', 'error');
        return;
    }
    
    console.log('Solicitud de Franquicia:', {
        nombre,
        email,
        telefono,
        mensaje,
        fecha: new Date().toLocaleDateString()
    });
    
    mostrarNotificacion(`¡Gracias ${nombre}! Recibimos tu solicitud. Nos contactaremos pronto.`, 'success');
    document.getElementById('franchiseForm').reset();
});

// Función validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// NOTIFICACIONES - Contenedor para manejar el apilamiento
let notificacionesContainer = null;

function obtenerContenedorNotificaciones() {
    if (!notificacionesContainer) {
        notificacionesContainer = document.createElement('div');
        notificacionesContainer.id = 'notificaciones-stack';
        notificacionesContainer.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 999;
            display: flex;
            flex-direction: column;
            gap: 12px;
            pointer-events: none;
        `;
        
        // Ajuste de top en móviles
        if (window.innerWidth <= 768) {
            notificacionesContainer.style.top = '100px';
        }
        
        document.body.appendChild(notificacionesContainer);
    }
    return notificacionesContainer;
}

function mostrarNotificacion(mensaje, tipo = 'success') {
    const contenedor = obtenerContenedorNotificaciones();
    
    const notificacion = document.createElement('div');
    
    // Estilos según tipo
    let bgColor = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    let iconClass = 'bi-check-circle-fill';
    
    if (tipo === 'error') {
        bgColor = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        iconClass = 'bi-exclamation-circle-fill';
    } else if (tipo === 'info') {
        bgColor = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
        iconClass = 'bi-info-circle-fill';
    }
    
    // Ajustar tamaño en móviles
    const isMobile = window.innerWidth <= 768;
    const padding = isMobile ? '10px 14px' : '16px 24px';
    const fontSize = isMobile ? '0.8rem' : '0.95rem';
    const maxWidth = isMobile ? '240px' : '320px';
    const iconSize = isMobile ? '0.95rem' : '1.2rem';
    const gap = isMobile ? '6px' : '12px';
    
    notificacion.style.cssText = `
        background: ${bgColor};
        color: white;
        padding: ${padding};
        border-radius: 10px;
        font-weight: 600;
        font-size: ${fontSize};
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.2);
        max-width: ${maxWidth};
        word-wrap: break-word;
        display: flex;
        align-items: center;
        gap: ${gap};
        pointer-events: auto;
        transition: transform 0.3s ease;
    `;
    
    // Crear contenido con ícono
    const icono = document.createElement('i');
    icono.className = `bi ${iconClass}`;
    icono.style.cssText = `
        font-size: ${iconSize};
        flex-shrink: 0;
    `;
    
    const texto = document.createElement('span');
    texto.textContent = mensaje;
    
    notificacion.appendChild(icono);
    notificacion.appendChild(texto);
    
    // Agregar al inicio del contenedor (arriba)
    contenedor.insertBefore(notificacion, contenedor.firstChild);
    
    // Animar las notificaciones existentes hacia abajo
    const notificaciones = contenedor.querySelectorAll('div');
    notificaciones.forEach((notif, index) => {
        if (index > 0) {
            notif.style.transform = `translateY(${index * 12}px)`;
        }
    });
    
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            notificacion.remove();
            
            // Reorganizar las notificaciones restantes
            const notificacionesRestantes = contenedor.querySelectorAll('div');
            notificacionesRestantes.forEach((notif, index) => {
                notif.style.transform = `translateY(${index * 12}px)`;
            });
            
            // Limpiar el contenedor si está vacío
            if (notificacionesRestantes.length === 0 && notificacionesContainer) {
                notificacionesContainer.remove();
                notificacionesContainer = null;
            }
        }, 300);
    }, 3000);
}

// INICIALIZAR TIMERS DE OFERTAS
function inicializarOfertasTimers() {
    const timerElements = document.querySelectorAll('.oferta-timer');
    
    timerElements.forEach(timerEl => {
        const deadline = timerEl.getAttribute('data-deadline');
        
        function actualizarTimer() {
            const now = new Date().getTime();
            const countdownDate = new Date(deadline).getTime();
            const distance = countdownDate - now;
            
            if (distance < 0) {
                timerEl.querySelector('.timer-value').textContent = '¡Expirada!';
                timerEl.style.opacity = '0.5';
                return;
            }
            
            const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            let tiempoText = '';
            if (dias > 0) tiempoText = `${dias}d ${horas}h`;
            else if (horas > 0) tiempoText = `${horas}h ${minutos}m`;
            else tiempoText = `${minutos}m`;
            
            timerEl.querySelector('.timer-value').textContent = tiempoText;
        }
        
        actualizarTimer();
        setInterval(actualizarTimer, 60000); // Actualizar cada minuto
    });
}

// ANIMACIONES
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// ANIMACIONES DE ENTRADA CON SCROLL
// ============================================

// Observer para animar elementos cuando entran al viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Si es un stat-item, animar los números
            if (entry.target.classList.contains('stat-item')) {
                animateCounter(entry.target);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Función para animar contadores
function animateCounter(element) {
    const numberElement = element.querySelector('.stat-number');
    if (!numberElement) return;
    
    const text = numberElement.textContent;
    const match = text.match(/(\d+)/);
    
    if (match) {
        const finalNumber = parseInt(match[1]);
        const isThousand = text.includes('K+');
        const displayNumber = isThousand ? finalNumber * 1000 : finalNumber;
        
        let currentNumber = 0;
        const increment = Math.ceil(displayNumber / 50);
        
        const counter = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= displayNumber) {
                currentNumber = displayNumber;
                clearInterval(counter);
            }
            
            if (isThousand) {
                numberElement.textContent = Math.floor(currentNumber / 1000) + 'K+';
            } else if (text.includes('★')) {
                numberElement.textContent = (currentNumber / 10).toFixed(1) + '★';
            } else {
                numberElement.textContent = currentNumber + '+';
            }
        }, 30);
    }
}

// Observar todos los feature-cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observar los stat-items para animar contadores
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        observer.observe(item);
    });

    // Observar otros elementos
    document.querySelectorAll('.producto-card, .instagram-item, .info-item, .about-text, .about-image').forEach(el => {
        observer.observe(el);
    });

    // Agregar clase visible para que se animen
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .feature-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});

// BACK TO TOP - botón flotante: inicializar después de que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    const toggleBackToTop = () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    // Inicial check
    toggleBackToTop();

    window.addEventListener('scroll', toggleBackToTop);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// FAQ - PREGUNTAS FRECUENTES
function inicializarFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Cerrar otros items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                // Toggle actual
                item.classList.toggle('active');
            });
        }
    });
}

// MODALES DE POLÍTICAS
function mostrarModal(tipo) {
    let modalId = tipo + 'Modal';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.setAttribute('aria-hidden', 'false');
        try { document.body.classList.add('no-scroll'); } catch (e) {}
    }
}

function cerrarModal(tipo) {
    let modalId = tipo + 'Modal';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.setAttribute('aria-hidden', 'true');
        try { document.body.classList.remove('no-scroll'); } catch (e) {}
    }
}

// Cerrar modales con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        ['terminos', 'privacidad', 'cookies'].forEach(tipo => {
            const modal = document.getElementById(tipo + 'Modal');
            if (modal && modal.getAttribute('aria-hidden') === 'false') {
                cerrarModal(tipo);
            }
        });
    }
});

// Cerrar modales al hacer click en el backdrop
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('policy-modal-backdrop')) {
        ['terminos', 'privacidad', 'cookies'].forEach(tipo => {
            const modal = document.getElementById(tipo + 'Modal');
            if (modal && modal.getAttribute('aria-hidden') === 'false') {
                cerrarModal(tipo);
            }
        });
    }
});

// CARRUSEL DE IMÁGENES HERO CON DESVANECIMIENTO
const heroImages = [
    'assets/Hero section.jpg',
    'assets/img hero 2.jpg',
    'assets/img hero 3.jpg',
    'assets/img hero 4.jpg',
    'assets/img hero 5.jpg'
];

let currentHero = 0;
const heroImg = document.getElementById('hero-img');

if (heroImg) {
    function fadeHeroImage(nextIndex) {
        heroImg.style.opacity = 0;
        setTimeout(() => {
            heroImg.src = heroImages[nextIndex];
            heroImg.style.opacity = 1;
        }, 1600); // Duración del fade-out (1s)
    }

    setInterval(() => {
        currentHero = (currentHero + 1) % heroImages.length;
        fadeHeroImage(currentHero);
    }, 4000); // Cambia cada 4 segundos (más tiempo para que el fade sea suave)
}

/*
 * wrapEmpaMarket
 * Busca apariciones de la marca "Empa-market" (case-insensitive, con o sin guión)
 * y las envuelve en un <span class="empa-market"> para aplicar la tipografía Roboto Slab.
 * Evita reemplazar dentro de <script>, <style>, <code>, <pre>, inputs, botones y enlaces.
 */
function wrapEmpaMarket() {
    const regex = /Empa[-\s]?market/gi;
    const excludedTags = ['SCRIPT','STYLE','NOSCRIPT','IFRAME','CODE','PRE','TEXTAREA','INPUT','BUTTON'];

    function isInsideExcluded(node) {
        if (!node || !node.parentNode) return true;
        // Evitar envolver si ya está dentro de un .empa-market
        if (node.parentNode && node.parentNode.closest && node.parentNode.closest('.empa-market')) return true;
        let el = node.parentNode;
        while (el && el.nodeType === 1) {
            if (excludedTags.includes(el.nodeName)) return true;
            el = el.parentNode;
        }
        return false;
    }

    function processTextNode(textNode) {
        if (!textNode || !textNode.nodeValue) return;
        if (!regex.test(textNode.nodeValue)) return;
        if (isInsideExcluded(textNode)) return;

        const text = textNode.nodeValue;
        const frag = document.createDocumentFragment();
        let lastIndex = 0;

        text.replace(regex, (match, offset) => {
            if (offset > lastIndex) {
                frag.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
            }
            const span = document.createElement('span');
            span.className = 'empa-market';
            span.textContent = match;
            frag.appendChild(span);
            lastIndex = offset + match.length;
            return match;
        });

        if (lastIndex < text.length) {
            frag.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        try {
            textNode.parentNode.replaceChild(frag, textNode);
        } catch (e) {
            // Fallback silencioso
        }
    }

    // Pase inicial sobre nodos de texto
    try {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                if (isInsideExcluded(node)) return NodeFilter.FILTER_REJECT;
                return regex.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        }, false);

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(processTextNode);
    } catch (err) {
        // no hacer nada si TreeWalker falla
    }

    // Observar nodos añadidos dinámicamente
    try {
        const mo = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes.forEach(n => {
                    if (n.nodeType === Node.TEXT_NODE) {
                        processTextNode(n);
                    } else if (n.nodeType === Node.ELEMENT_NODE) {
                        // buscar nodos de texto dentro del elemento añadido
                        n.querySelectorAll && n.querySelectorAll('*').forEach(el => {
                            el.childNodes && el.childNodes.forEach(child => {
                                if (child.nodeType === Node.TEXT_NODE) processTextNode(child);
                            });
                        });
                    }
                });
            });
        });
        mo.observe(document.body, { childList: true, subtree: true });
    } catch (err) {
        // Silencioso
    }
}

// INICIALIZAR MAPA DE SUCURSALES CON LEAFLET
function inicializarMapaSucursales() {
    // Intentar obtener el contenedor del mapa
    const mapContainer = document.getElementById('map-contact');
    if (!mapContainer || typeof L === 'undefined') return; // Leaflet no está disponible

    // Coordenadas centrales para el mapa (Buenos Aires, Argentina)
    const centerLat = -34.8;
    const centerLng = -58.5;

    // Inicializar el mapa
    const map = L.map('map-contact', {
        center: [centerLat, centerLng],
        zoom: 11,
        scrollWheelZoom: true,
        dragging: true
    });

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        minZoom: 8
    }).addTo(map);

    // Crear grupo de marcadores para zoom automático
    const featureGroup = L.featureGroup();

    // Añadir marcadores para cada sucursal
    SUCURSALES.forEach((sucursal) => {
        // Coordenadas aproximadas para cada sucursal (formato: [lat, lng])
        const coords = obtenerCoordenadasSucursal(sucursal.id);
        
        if (coords) {
            // Crear marcador personalizado
            const marker = L.marker(coords, {
                title: sucursal.nombre,
                riseOnHover: true
            })
            .bindPopup(`
                <div style="font-family: 'Poppins', sans-serif; font-size: 0.85rem;">
                    <strong style="color: #10b981; display: block; margin-bottom: 6px;">${sucursal.nombre}</strong>
                    <p style="margin: 4px 0; color: #666;">${sucursal.direccion}</p>
                    <a href="tel:${sucursal.whatsapp}" style="color: #10b981; text-decoration: none; font-weight: 500; display: block; margin-top: 8px;">
                        📞 Llamar
                    </a>
                    <a href="https://wa.me/${sucursal.whatsapp}" target="_blank" style="color: #10b981; text-decoration: none; font-weight: 500;">
                        📱 WhatsApp
                    </a>
                </div>
            `)
            .addTo(map);
            
            featureGroup.addLayer(marker);
        }
    });

    // Ajustar zoom y centrado automáticamente para ver todos los marcadores
    if (featureGroup.getLayers().length > 0) {
        map.fitBounds(featureGroup.getBounds(), { padding: [50, 50] });
    }
}

// Función auxiliar para obtener coordenadas aproximadas de cada sucursal
function obtenerCoordenadasSucursal(sucursalId) {
    const coordenadas = {
        'varela': [-34.7707, -58.3378],
        'lomas_forougue': [-34.8061, -58.4381],
        'monte_grande': [-34.8403, -58.4661],
        'banfield': [-34.7756, -58.2992],
        'temperley': [-34.8242, -58.3314],
        'lanus_oeste': [-34.7261, -58.4062],
        'san_francisco_solano': [-34.6787, -58.3701],
        'burzaco': [-34.8868, -58.3996],
        'ezeiza': [-34.8638, -58.5314],
        'adrogue': [-34.8833, -58.3834],
        'lomas_boedo': [-34.8061, -58.4381],
        'constitucion': [-34.6223, -58.3874]
    };
    
    return coordenadas[sucursalId] || null;
}




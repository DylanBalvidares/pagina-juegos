document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. DARK / LIGHT MODE LOGIC
       ========================================= */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check LocalStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    /* =========================================
       2. SCROLL REVEAL ANIMATION
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* =========================================
       3. MODAL SYSTEM (Professional Data Injection)
       ========================================= */
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    const closeBtnAction = document.querySelector('.close-btn-action');
    const viewButtons = document.querySelectorAll('.btn-view');

    // Elementos del Modal
    const mTitle = document.getElementById('modalTitle');
    const mDesc = document.getElementById('modalDesc');
    const mTech = document.getElementById('modalTech');
    const mImg = document.getElementById('modalImg');
    const mLink = document.getElementById('modalLink');

    viewButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Subimos en el DOM hasta encontrar la tarjeta
            const card = e.target.closest('.project-card');
            
            // Extraemos los datos del HTML (Data Attributes)
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const techs = card.getAttribute('data-tech').split(','); // Array de tecnologias
            const img = card.getAttribute('data-img');
            const link = card.getAttribute('data-link');

            // Inyectamos datos al Modal
            mTitle.textContent = title;
            mDesc.textContent = desc;
            mImg.src = img;
            mLink.href = link;
            
            // Limpiamos y creamos los badges de tecnologías
            mTech.innerHTML = '';
            techs.forEach(tech => {
                const span = document.createElement('span');
                span.textContent = tech.trim();
                mTech.appendChild(span);
            });

            // Mostramos el modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scroll detrás
        });
    });

    function hideModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', hideModal);
    closeBtnAction.addEventListener('click', hideModal);
    
    // Cerrar si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });

    /* =========================================
       4. FORM VALIDATION SIMULATION
       ========================================= */
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío real
        
        // Simulación de envío
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            successMsg.style.display = 'block';
            form.reset();
            
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        }, 1500);
    });

    // Dynamic Year Footer
    document.getElementById('year').textContent = new Date().getFullYear();
});
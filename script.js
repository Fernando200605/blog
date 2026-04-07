document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const modules = document.querySelectorAll('.data-module');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');

            modules.forEach(module => {
                module.style.opacity = '0';
                module.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    if (target === 'all' || module.id === target) {
                        module.style.display = 'block';
                        setTimeout(() => {
                            module.style.opacity = '1';
                            module.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        module.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});
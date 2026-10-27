function startScripts() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.error-page-t-w').forEach((element) => {
            element.classList.add('show');
        });
    }
}
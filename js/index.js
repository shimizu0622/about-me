document.addEventListener('load', (event) => {
    setTimeout(() => {
        document.querySelector('.container').classList.remove('hidden');
        document.querySelectorAll('.link').forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('visible');
            }, index * 200);
        });
    }, 2000);
});
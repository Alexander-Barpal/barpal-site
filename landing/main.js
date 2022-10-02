function stopScroll() {
    const body = document.getElementById('body');
    body.style.overflow = 'hidden';
};

function startScroll() {
    const body = document.getElementById('body');
    body.style.overflow = 'auto';
}
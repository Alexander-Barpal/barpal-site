function stopScroll(id) {
    const elem = document.getElementById(id);
    elem.style.overflow = 'hidden';
};

function startScroll(id) {
    const elem = document.getElementById(id);
    elem.style.overflow = 'auto';
}
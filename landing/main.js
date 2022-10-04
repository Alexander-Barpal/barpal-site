window.onhashchange = hashChange;

function hashChange() {
    if (location.hash == '') {
        document.getElementById('body').style.overflow = 'auto';
    } else if (location.hash == '#Projects') {
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('Projects').style.overflow = 'auto';
    } else {
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('Projects').style.overflow = 'hidden';
    }
}
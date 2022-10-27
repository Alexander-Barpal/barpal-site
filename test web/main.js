const root = document.querySelector(":root");
root.dataset.light = localStorage.light;

function changeTheme() {
    localStorage.light = !(root.dataset.light == 'true');
    root.dataset.light = localStorage.light;
};
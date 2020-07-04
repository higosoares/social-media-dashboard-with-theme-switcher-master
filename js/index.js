let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function(e) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle("dark");
});
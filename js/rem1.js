(function () {
    var timer;
    changeFixedW();

    function changeFixedW() {
        var html = document.querySelector('html');
        var width = html.getBoundingClientRect().width;
        html.style.fontSize = width / 10 + 'px';
    }
    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(changeFixedW, 300);
    }, false);
})();
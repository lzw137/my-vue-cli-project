(function () {
    var timer;
    changeFixedW();

    function changeFixedW() {
        var width = window.screen.width;
        var fixedW = 375;
        var scale = width / fixedW;
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=' + fixedW + ',initial-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no');
        document.head.appendChild(meta);
    }
    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(changeFixedW, 300);
    }, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(changeFixedW, 300);
        }
    }, false);
})();
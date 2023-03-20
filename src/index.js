


const PAGE = {
    init: function () {
        this.bind();
    },
    bind: function () {
        window.addEventListener('resize', this.resizeRem.bind(this));
        window.addEventListener('pageshow', this.resizeRem.bind(this));
    },
    resizeRem: function () {
        let docElement = document.documentElement;
        let width = docElement.getBoundingClientRect().width;
        let rem = width / 7.5;
        docElement.style.fontSize = rem + 'px';
    },
}

PAGE.init();
class Scrollandscreen {
    load() {
      window.addEventListener('resize', this.screen);
    };
     screen() {
     console.log(`ScreenSize: ${w}, scrollpos: ${window.scrollY}`);
    };
    backtotop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    };
};
var scrollandscreen = new Scrollandscreen;
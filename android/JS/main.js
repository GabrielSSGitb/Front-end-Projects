function loadscrolloff() {
    document.querySelector('.backtotop').style.display= 'none';
    document.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        document.querySelector('.backtotop').style.display= 'none';
    }else {
        document.querySelector('.backtotop').style.display= 'block';
    }
})
};

function inicio() {
   window.scroll({
       top: 0,
       right: 0,
       behavior: 'smooth'
   })
};
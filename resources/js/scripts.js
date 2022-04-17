/* nav */
function openNav() {

    let toggler = document.querySelector('.nav-prompt')

    let navigation = document.querySelector('.main-nav')

    toggler.onclick = function() {
        navigation.classList.toggle('open')
    }
}

openNav()

// this is the image gallery

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

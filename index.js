const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn')
const navWrapper = document.querySelector('.navlinks-wrapper');
const linkWrappers = document.querySelectorAll('.link-wrapper');
const navLinks = document.querySelectorAll('.navlink');

menuBtn.addEventListener('click', () => {
    navWrapper.classList.add('visible-nav');
    closeBtn.style.display = 'block'
    menuBtn.style.visibility = 'hidden'
})
closeBtn.addEventListener('click', () => {
    navWrapper.classList.remove('visible-nav');
    closeBtn.style.display = 'none';
    menuBtn.style.visibility = 'visible';
})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        linkWrappers.forEach( linkWrapper => {
            linkWrapper.classList.remove('active');
        })
        navLink.parentElement.parentElement.classList.toggle('active');
    })
})
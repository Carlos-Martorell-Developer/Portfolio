

const menuButton = document.querySelector('#menu-button');
const menuNavBar = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('#menu li');

menuButton.addEventListener('click', () => {
    
    menuNavBar.classList.remove('hidden', 'animate-slide-out');
    menuNavBar.classList.add('animate-slide-in', 'flex');
   
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth >= 640) return;
        menuNavBar.classList.add('animate-slide-out');
        menuNavBar.classList.remove('animate-slide-in');
    });
});


window.addEventListener('resize', () => {
    if(window.innerWidth >= 640) {
        menuNavBar.classList.replace('hidden', 'flex');
        menuNavBar.classList.remove('animate-slide-in', 'animate-slide-out');
    }
    else {
        menuNavBar.classList.replace('flex', 'hidden');
    }
}
);

menuNavBar.addEventListener('animationend', () => {
    if(menuNavBar.classList.contains('animate-slide-out')) {
        menuNavBar.classList.add('hidden');
        menuNavBar.classList.remove('flex');
    }
});


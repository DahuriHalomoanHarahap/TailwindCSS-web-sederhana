// absolute top-14 w-full left-0 bg-slate-800 devide-gray-900 devide-y-2

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger-menu');

const iconBar = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

menu.addEventListener('click', displayMenu);
hamburger.addEventListener('click', displayMenu);
function displayMenu() {
    if(menu.classList.contains('absolute')) {
        menu.classList.add('hidden');
        iconBar.style.display = 'inline';
        iconClose.style.display = 'none';

        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-salate-500');
        menu.classList.remove('devide-gray-500');
        menu.classList.remove('devide-y-2');

    } else {
        menu.classList.remove('hidden');
        iconBar.style.display = 'none';
        iconClose.style.display = 'inline';

        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-salate-500');
        menu.classList.add('devide-gray-500');
        menu.classList.add('devide-y-2');
    }
}
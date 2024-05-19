import searchIcon from './assets/icons/magnify.svg';
import cartIcon from './assets/icons/cart-outline.svg';
import './styles/fonts.css';
import './styles/reset.css';
import './styles/style.css';

window.addEventListener('load', () => {
    const headerIcons = document.querySelector('.header-icons');

    const search = new Image();
    search.src = searchIcon;
    search.alt = 'search';
    search.className = 'icon search';

    const cart = new Image();
    cart.src = cartIcon;
    cart.alt = 'cart';
    cart.className = 'icon cart';

    headerIcons.append(search, cart);
});


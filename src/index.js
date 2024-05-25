import { homeContentGenerator } from './pages/home';
import { contactContentGenerator } from './pages/contact';
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

    generatePageContent(null, new homeContentGenerator());
});

const homeButton = document.querySelector('.home-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', (event) => generatePageContent(event, new homeContentGenerator()));
contactButton.addEventListener('click', (event) => generatePageContent(event, new contactContentGenerator()));

const generatePageContent = (event, contentGenerator) => {
    if (event) {
        document.querySelector('.nav-button.active')?.classList.remove('active');
        event.target.classList.add('active');
    }

    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
    contentDiv.append(...contentGenerator.create());
    contentDiv.className = contentGenerator.pageName;

    const pageContentLoadEvent = new CustomEvent('load', {
        detail: {
            pageName: contentGenerator.pageName,
        },
    });
    contentDiv.dispatchEvent(pageContentLoadEvent);
};


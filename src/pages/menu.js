import './../styles/menu.css';
import { Listing, categorize } from './../modules/listing';
import listings from './../assets/data/menu.json';
import * as commonUICreator from './../utils/commonUICreator';

const createMenuCategoryDisplay = (menu) => {
    const menuItemsImages = require.context('./../assets/images/menu-items/');

    const menuCategoryDisplay = document.createElement('ul');
    menuCategoryDisplay.className = 'menu-category-display';

    menu.forEach(listing => {
        const listingItem = document.createElement('li');
        listingItem.className = 'listing';

        const listingImage = new Image();
        listingImage.src = menuItemsImages(listing.image);
        listingImage.atr = `${listing.name}-image`;
        listingImage.className = 'listing-image';

        const listingName = document.createElement('h6');
        listingName.textContent = listing.name;
        listingName.className = 'listing-name';

        const listingPrice = document.createElement('b');
        listingPrice.textContent = `$${listing.price}`;
        listingPrice.className = 'listing-price';

        const listingDescription = document.createElement('p');
        listingDescription.textContent = listing.description;
        listingDescription.className = 'listing-description';

        listingItem.append(
            listingImage,
            listingName,
            listingPrice,
            listingDescription,
        );

        menuCategoryDisplay.append(listingItem);
    });

    return menuCategoryDisplay;
};

class MenuCategoryGenerator {
    #menu;

    constructor(category, menu) {
        this.category = category;
        this.#menu = menu;
    }
    
    create () {
        const menuCategoryContainer = document.createElement('section');
        menuCategoryContainer.className = 'menu-category-container';

        const menuCategoryTitle = document.createElement('h4');
        menuCategoryTitle.textContent = this.category;
        menuCategoryTitle.className = 'menu-category-title';

        menuCategoryContainer.append(
            menuCategoryTitle,
            createMenuCategoryDisplay(this.#menu),
        );

        return menuCategoryContainer;
    };
}

const generateMenuContent = (event, categoryGenerator) => {
    if (event) {
        document.querySelector('.category-button.active')?.classList.remove('active');
        event.target.classList.add('active');
    }

    const menuDisplay = document.querySelector('.menu-display');
    menuDisplay.textContent = '';
    menuDisplay.append(categoryGenerator.create());
};

const createNavBar = (menu) => {
    const categoriesNav = document.createElement('nav');
    categoriesNav.className = 'categories-nav';

    Object.keys(menu).forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.className = `nav-button category-button ${category.toLowerCase()}-button`;

        categoryButton.addEventListener('click', (event) => generateMenuContent(event, new MenuCategoryGenerator(category, menu[category])))

        categoriesNav.appendChild(categoryButton);
    });

    return categoriesNav;
};

export class MenuContentGenerator {
    static menus = categorize(listings.map(listing => Listing.fromJSON(listing)));

    constructor() {
        this.pageName = 'menu';
    }

    create() {
        const menuDisplay = document.createElement('div');
        menuDisplay.className = 'menu-display menu-category';
        
        return [
            commonUICreator.createSubHeader(this.pageName, {
                title: 'Taste Palestine',
                description: 'Experience the rich heritage of Palestine through our thoughtfully crafted menu, featuring authentic dishes that celebrate tradition and flavor.',
            }),
            createNavBar(MenuContentGenerator.menus),
            menuDisplay,
        ];
    }
}

const contentDiv = document.querySelector('#content');

contentDiv.addEventListener('load', (event) => {
    if (event.detail.pageName === 'menu') {
        const firstCategoryButton = document.querySelector('.category-button');
        firstCategoryButton.dispatchEvent(new Event('click'));
    }
});


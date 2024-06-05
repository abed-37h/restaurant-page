import '../styles/home.css';
import watermelonImage from '../assets/images/watermelon.png';

const createHeroArea = () => {
    const heroArea = document.createElement('div');
        heroArea.className = 'hero-area';

        const heroImage = new Image();
        heroImage.src = watermelonImage;
        heroImage.alt = 'hero-image';
        heroImage.className = 'hero-image';

        const primaryText = document.createElement('h1');
        primaryText.textContent = 'Experience Authentic Palestinian Flavors';
        primaryText.className = 'primary-text';

        const secondaryText = document.createElement('p');
        secondaryText.textContent = 'Savor Halal cuisine untainted by the suffering of Palestinians. Together, we boycott injustice and stand for the rights of all.';
        secondaryText.className = 'secondary-text';

        const heroText = document.createElement('div');
        heroText.append(primaryText, secondaryText);
        heroText.className = 'hero-text';

        const orderNowButton = document.createElement('button');
        orderNowButton.textContent = 'Order Now';
        orderNowButton.className = 'cta order-now-button';

        heroArea.append(
            heroImage,
            heroText,
            orderNowButton
        );

        return heroArea;
};

export class HomeContentGenerator {
    constructor() {
        this.pageName = 'home';
    }

    create() {
        return [
            createHeroArea(),
        ];
    }
}


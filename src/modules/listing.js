

export class Listing {
    #name;
    #category;
    #description;
    #price;
    #image;

    constructor(name, category, description, price, image) {
        this.#name = name;
        this.#category = category;
        this.#description = description;
        this.#price = price;
        this.#image = image;
    }

    get name() {
        return this.#name;
    }

    get category() {
        return this.#category;
    }

    get description() {
        return this.#description;
    }

    get price() {
        return this.#price;
    }

    get image() {
        return this.#image;
    }

    toJSON() {
        return {
            name: this.name,
            category: this.category,
            description: this.description,
            price: this.price,
            image: this.image,
        };
    }

    static fromJSON(serializedJSON) {
        return new Listing(...Object.values(serializedJSON));
    }
}

export const categorize = (listings) => {
    return listings.reduce((menus, listing) => {
        if (!menus[listing.category]) {
            menus[listing.category] = [];
        }

        menus[listing.category].push(listing);
        return menus;
    }, {});
};


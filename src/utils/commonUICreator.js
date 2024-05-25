

export const createSubHeader = (pageName, content) => {
    const subHeader = document.createElement('div');
    subHeader.className = `sub-header ${pageName}`;

    const pageTitle = document.createElement('h2');
    pageTitle.textContent = content.title;
    pageTitle.className = 'page-title';

    const pageDescription = document.createElement('p');
    pageDescription.textContent = content.description;
    pageDescription.classList = 'page-description';
    
    subHeader.append(
        pageTitle,
        pageDescription,
    );

    return subHeader;
};


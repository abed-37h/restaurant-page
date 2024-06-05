import './../styles/contact.css';
import instagramIcon from './../assets/icons/instagram.svg';
import facebookIcon from './../assets/icons/facebook.svg';
import twitterIcon from './../assets/icons/twitter.svg';
import * as commonUICreator from './../utils/commonUICreator';

const createDetail = (textContent, className) => {
    const detail = document.createElement('p');
    detail.textContent = textContent;
    detail.className = `contact-detail ${className}`;

    return detail;
};

const createSocialMedia = (name, iconSrc, linkHref = '#') => {
    const link = document.createElement('a');
    link.href = linkHref;
    link.className = 'social-media-link';

    const icon = new Image();
    icon.src = iconSrc;
    icon.alt = `${name}-icon`;
    icon.className = 'icon social-media-icon';

    link.appendChild(icon);

    return link;
};

const createContactDetails = () => {
    const contactDetails = document.createElement('section');
    contactDetails.className = 'contact-details';

    const socialMedia = document.createElement('div');
    socialMedia.className = 'social-media';

    socialMedia.append(
        createSocialMedia('instagram', instagramIcon),
        createSocialMedia('facebook', facebookIcon),
        createSocialMedia('twitter', twitterIcon),
    );

    const messagePrompt = document.createElement('p');
    messagePrompt.textContent = 'Or send a message!';
    messagePrompt.className = 'message-prompt';

    contactDetails.append(
        createDetail('Al-Quds, near Al-Aqsa Mosque', 'location'),
        createDetail('Sat-Thu: 9:00-23:00 | Fri: 9:00-12:30, 13:30-23:00', 'opening-time'),
        createDetail('1234567890', 'phone-number'),
        createDetail('contact.resistaurant@fakemail.com', 'email-address'),
        socialMedia,
        messagePrompt,
    );
    
    return contactDetails;
};

const createInputField = (label, type, placeholder = null, required = true) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'input-wrapper';

    const inputLabel = document.createElement('label');
    inputLabel.textContent = label;
    inputLabel.className = 'input-label';

    const inputField = type == 'textarea'
        ? document.createElement('textarea')
        : Object.assign(document.createElement('input'), { type });
    inputField.name = inputField.id = label.toLowerCase().replace(' ', '-');
    inputField.required = required;
    inputField.placeholder = placeholder ? placeholder : label;
    inputField.className = 'input-field';

    wrapper.append(
        inputLabel,
        inputField,
    );

    return wrapper;
};

const createForm = () => {
    const contactForm = document.createElement('form');
    contactForm.method = 'get';
    contactForm.action = '#';
    contactForm.className = 'contact-form';

    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.className = 'send-button';

    contactForm.append(
        createInputField('Full Name', 'text', 'John Smith'),
        createInputField('Email', 'email', 'john.smith@example.com'),
        createInputField('Phone Number', 'text', '1234567890'),
        createInputField('Message', 'textarea', 'Your message here'),
        sendButton,
    );

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    return contactForm;
};

export class ContactContentGenerator {
    constructor() {
        this.pageName = 'contact';
    }

    create() {
        return [
            commonUICreator.createSubHeader(this.pageName, {
                title: 'Contact us',
                description: 'We\'d love to hear from you! Whether you have questions, feedback, or special requests, our team is here to help. Fill out the form below or use the provided contact details to get in touch. We look forward to connecting with you!',
            }),
            createContactDetails(),
            createForm(),
        ];
    }
}


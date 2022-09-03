import { isArray } from '../utils/isArray';

export const toNode = (parentNode, childNode) => {
    const other = childNode.other.other;

    const element = document.createElement(childNode.tagName);

    if (isArray(childNode.className)) {
        element.className = childNode.className.join(' ');
    } else {
        element.className = childNode.className;
    }

    if (childNode.id) element.id = childNode.id;
    if (isArray(childNode.children)) {
        const children = childNode.children;

        children.forEach(el => {
            console.log(el);
        });
    } else {
        element.textContent = childNode.children;
    }

    const events = childNode.events;

    for (const event in events) {
        const handler = events[event];
        element.addEventListener(event, handler);
    }

    parentNode.append(element);
};

export const toHTML = (app, html) => {
    app.innerHTML += `${html}`;
};

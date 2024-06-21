function createElement(tagName, classnames, options = {}) {
    const element = document.createElement(tagName);
    element.className = classnames;
    Object.entries(options).forEach(([name, value]) => {
        element[name] = value;
    });
    return element;
}
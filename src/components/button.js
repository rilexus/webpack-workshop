const button = ({text, className}) => {
    const button = document.createElement('button');
    const innerText = document.createTextNode(text)
    button.appendChild(innerText);

    if (className){
        button.className = className
    }
    return button
}

export { button };

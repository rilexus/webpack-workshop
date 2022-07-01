import createButton from 'repo/createButton';
import light from 'repo/light';

console.log(light);


const button = createButton({
    class: "button",
    text: "click",
    onClick: () => {
        console.log('clicked!')
    },
});

document.body.appendChild(button);




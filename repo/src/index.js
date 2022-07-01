import "./styles/style.css";
// import css from '@styles/style.css';

import value from "./value";
import { makeValue } from "./makeValue";

// if you specify resolve.extensions = ['ts'], you can remove the ".ts" suffix
import { tsValue } from "./ts-value.ts";
import createButton from "./components/createButton";

const loadTheme = (theme) => import(`./themes/${theme}`);

const loadDialog = () =>
  import(
    /* webpackChunkName:"dialog", webpackPrefetch: true */ "./components/createDialog"
  );

console.log(`makeValue: ${makeValue(2)}`);
console.log(`js-value: ${value}`);
console.log(`ts-value: ${tsValue}`);

const button = createButton({
  class: "button",
  text: "click",
  onClick: () => {
    loadDialog().then(({ default: createDialog }) => {
      const d = createDialog({
        children: ["1"],
      });
      document.body.appendChild(d);
      d.open = true;
    });
  },
});

const addThemeButtons = () => {
  const lightThemeButton = createButton({
    text: "light",
    onClick: () => {
      loadTheme("light").then(({ default: light }) => {
        console.log(light);
      });
    },
  });

  const darkThemeButton = createButton({
    text: "dark",
    onClick: () => {
      loadTheme("dark").then(({ default: light }) => {
        console.log(light);
      });
    },
  });
  document.body.appendChild(lightThemeButton);
  document.body.appendChild(darkThemeButton);
};

console.log(process.env.NODE_ENV);

addThemeButtons();
document.body.appendChild(button);

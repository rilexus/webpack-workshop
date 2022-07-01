const appendChildren = (element, children) => {
  let c = [];

  if (!Array.isArray(children)) {
    c.push(children);
  } else {
    c = [...children];
  }

  c.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
};

const addAttributes = (element, props) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.toLowerCase().split("on")[1];
      element.addEventListener(eventName, value);
    } else {
      element.setAttribute(key, value);
    }
  });
};

const createElement = (type, props = {}, children = []) => {
  const element = document.createElement(type);

  addAttributes(element, props);
  appendChildren(element, children);
  return element;
};

export default createElement;

import createElement from "../utils/createElement";

const createDialog = ({ children }) => {
  let dialog = null;
  const button = createElement(
    "button",
    {
      onClick: () => {
        dialog.open = false;
      },
    },
    "close"
  );

  const c = Array.isArray(children)
    ? [button, ...children]
    : [button, children];

  dialog = createElement("dialog", undefined, c);

  return dialog;
};

export default createDialog;

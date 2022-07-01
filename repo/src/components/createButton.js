import createElement from "../utils/createElement";

const createButton = ({ text, ...rest }) => {
  return createElement("button", rest, text);
};

export default createButton

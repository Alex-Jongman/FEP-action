function getText() {
  return 'Action test';
}

function addText() {
  let TEXT_NODE = document.querySelector('.text');
  const text = document.createTextNode(getText());
  TEXT_NODE.append(text);
}

addText();

export {
  getText,
  addText,
};

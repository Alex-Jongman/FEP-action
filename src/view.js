export function getText() {
  return 'Action test';
}

export function addText() {
  const TEXT_NODE = document.querySelector('.text');
  const text = document.createTextNode(getText());
  TEXT_NODE.append(text);
}

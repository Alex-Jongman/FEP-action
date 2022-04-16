function getText() {
    return 'Action test';
}

function addText() {
    const text_node = document.querySelector('.text');
    const text = document.createTextNode(getText());
    text_node.append(text);
}

addText();

export {
    getText,
    addText
}

const h1 = document.querySelector('heading');
const text = HelseFactory.getHeadingText();

function textTypingEffect(element, text, i=0) {
    element.textContent += text[i];

    if ( i=== text.length -1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i+1), 50);

   

}

textTypingEffect(h1, text);


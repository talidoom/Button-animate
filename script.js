const buttonBubble = document.querySelector('.button-bubble');
buttonBubble.addEventListener('click', (evt) => {
    evt.preventDefault();
    buttonBubble.classList.add('animate');

    setTimeout(() => {
        buttonBubble.classList.remove('animate');
    }, 600)
})

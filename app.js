const cardMessage = document.getElementById('cardMessage');
const userText = document.getElementById('userText');

const updateText = () => {
    cardMessage.innerText = userText.value
};

const changeTextColor = (selectedColor) => {
    cardMessage.style.color = selectedColor;
};
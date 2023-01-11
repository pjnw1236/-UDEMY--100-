const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document. getElementById('remaining-chars');

// console.dir(remainingCharsElement)

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
    const enteredText  = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
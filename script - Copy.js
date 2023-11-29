let translated = false
let handleClick

document.addEventListener("DOMContentLoaded", function () {
    handleClick = () => {
        const textElement = document.getElementById("par")
        const buttonElement = document.getElementById("translate-button")
        if (!translated) {
            textElement.innerHTML = "Love Ukraine, like you love the sun, the wind, the grasses, and the waters...In the hour of good fortune and the moment of joy, love her in the moment of discord."
            buttonElement.innerText = "Переклад"
            translated = true
        } else {
            textElement.innerHTML = "Любіть Україну, як сонце любіть, як вітер, і трави, і води... В годину щасливу і в радості мить, любіть у годину негоди."
            buttonElement.innerText = "Translate"
            translated = false
        }

    }
})
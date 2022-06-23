let buttons = document.querySelectorAll(".main__malfunction-button-buttons")
let texts = document.querySelectorAll(".main__malfunction-text-texts")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (!(button.classList.contains("active"))) {
            buttons.forEach(button => {
                button.classList.remove("active")
            });

            texts.forEach(text => {
                if (text.getAttribute("name") === button.getAttribute("name")) {
                    texts.forEach(text => {
                        text.classList.remove("active")
                    });
                    text.classList.add("active")
                    button.classList.add("active")
                }
              
            });

            



            // button.classList.add("active")
        }
        
    })
});

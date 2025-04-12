function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancy");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            let words = sentences[i].split(" ");
            if (words.length > 0) {
                words[words.length - 1] += "-MOO";
                sentences[i] = words.join(" ");
            }
        }
    }
    
    textArea.value = sentences.join(".");
} 
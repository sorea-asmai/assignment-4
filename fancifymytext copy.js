function myAlert() {
    window.alert("Hello, world!");
    document.getElementById("elementID").style.fontSize = "24px";
}

const fancyShmancy = document.getElementById('fancyShmancy');
const boringBetty = document.getElementById('boringBetty');

fancyShmancy.addEventListener('change', function() {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
});

boringBetty.addEventListener('change', function() {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
    textArea.style.fontSize = "10pt";
    textArea.style.textTransform = "none";
});

const moo = document.getElementById('moo');

moo.addEventListener('click', function() {
    textArea.style.textTransform = "uppercase";
    let textAreaValue = textArea.value;
    let sentences = textAreaValue.split(" ");
    for(let i = 0; i < sentences.length; i++) {
        if(sentences[i].slice(-1) == "." || sentences[i].slice(-1) == "!" || sentences[i].slice(-1) == "?") {
           sentences[i] = sentences[i].slice(0, -1) + "-Moo" + sentences[i].charAt(sentences[i].length - 1);
        }
    }
    textArea.value = sentences.join(" ");
});






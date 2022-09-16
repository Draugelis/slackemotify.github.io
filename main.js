const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertText);

function convertText() {
    const inputText = document.getElementById("inputText").value;
    let converedText = inputText.replace(/([a-z])/ig, ":alphabet-white-$1:");
    converedText = converedText.replace("0", ":zero:");
    converedText = converedText.replace("1", ":one:");
    converedText = converedText.replace("2", ":two:");
    converedText = converedText.replace("3", ":three:");
    converedText = converedText.replace("4", ":four:");
    converedText = converedText.replace("5", ":five:");
    converedText = converedText.replace("6", ":six:");
    converedText = converedText.replace("7", ":seven:");
    converedText = converedText.replace("8", ":eight:");
    converedText = converedText.replace("9", ":nine:");
    converedText = converedText.replace(" ", "  ");

    const outputText = document.getElementById("outputText");
    outputText.value = converedText;
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyText);

function copyText() {
    const outputText = document.getElementById("outputText");
    navigator.clipboard.writeText(outputText.value);
}
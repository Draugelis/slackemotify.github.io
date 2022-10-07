document.getElementById("convertButton").addEventListener("click", convertText);
document.getElementById("copyButton").addEventListener("click", copyText);

function getLetterOption() {
    const radioButtons = document.querySelectorAll('input[name="letters"]');
    for(const radioButton of radioButtons) {
        if(radioButton.checked) {
            console.log(radioButton)
            return radioButton.id;
        }
    }
}

function convertText() {
    const inputText = document.getElementById("inputText").value;
    const output_letters = `:${getLetterOption()}: `

    let converedText = inputText.replace(/([a-z])/ig, output_letters);
    converedText = converedText.replace(/0/g, ":zero:");
    converedText = converedText.replace(/1/g, ":one:");
    converedText = converedText.replace(/2/g, ":two:");
    converedText = converedText.replace(/3/g, ":three:");
    converedText = converedText.replace(/4/g, ":four:");
    converedText = converedText.replace(/5/g, ":five:");
    converedText = converedText.replace(/6/g, ":six:");
    converedText = converedText.replace(/7/g, ":seven:");
    converedText = converedText.replace(/8/g, ":eight:");
    converedText = converedText.replace(/9/g, ":nine:");
    converedText = converedText.replace(/(\s)/g, "$1$1");

    const outputText = document.getElementById("outputText");
    outputText.value = converedText;
}


function copyText() {
    const outputText = document.getElementById("outputText");
    navigator.clipboard.writeText(outputText.value);
}

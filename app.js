var translateButton = document.querySelector("#btn-in");
var translateInput = document.querySelector("#trans-input");
var translateOutput = document.querySelector("#trans-output");
translateButton.addEventListener("click", buttonclickHandler)
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTransUrl(txt) {
    return serverUrl + "?" + "text=" + txt
}

function errorHandler(error){
    console.log("Error occured",error);
    alert("Somthin went wrong try after some time :)");
}
function buttonclickHandler(){
    var textinput = translateInput.value;
    console.log(textinput)
    fetch(getTransUrl(textinput))
        .then(response => response.json())
        .then(json => {
            var transtxt = json.contents.translated;
            translateOutput.innerText = transtxt;

        })
        .catch(errorHandler)
        
}

var btn = document.querySelector("#clickme");
var txtIn = document.querySelector("#userinput");
var output = document.querySelector("#output");

var serverURL="	https://api.funtranslations.com/translate/chef.json";

function translateURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

// function btnHandler() {
//     var inputText = txtInput.value; // taking input

//     // calling server for processing
//     fetch(getTranslationURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             divOut.innerText = translatedText; // output
//            })
//         .catch(errorHandler)
// };

// btnTranslate.addEventListener("click", btnHandler)

btn.addEventListener("click", function btnHandler() {
  fetch(translateURL(userinput.value))
    .then((response) => response.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
});

function displayPoem(response) {
      new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
    function generatePoem(event) {
  event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "t0a95c0efc70cab947746c265ob4d438";
  let prompt = "Generate a poem about ${instructionsInput}";
  let context = "You are a poem expert and love to write witty short poems. Your misson is to write a 5 line poem in basic HTML";
  let apiUrl = "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}";

  axios.get(apiUrl).then(displayPoem)};

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
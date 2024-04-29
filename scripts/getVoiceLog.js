function getVoiceLog() {

    let result = ''

    const speaches = document.querySelector("#transcript-container").children[0].children
    for (speach of speaches) result += Array.from(speach.children).slice(1).reduce((accumulator, currentValue) => accumulator += currentValue.innerText, `[${speach.children[0].innerText}]: `) + '\n'

    navigator.clipboard.writeText(result);
    alert("Transcript copiado com sucesso! Apenas cole em seu documento utilizando Ctrl+V")

}

getVoiceLog();
  
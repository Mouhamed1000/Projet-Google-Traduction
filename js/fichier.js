const firstText = document.querySelector(".texte1")
selection = document.querySelectorAll("select")
secondText = document.querySelector(".texte2")
translateBtn = document.querySelector("button")

//Evenement click sur bouton
translateBtn.addEventListener("click", () => {
    let texte = firstText.value,
    translateFrom = "fr-FR",
    translateTo = "en-US";
    //Utilisation d'une Api de Traduction
    let apiUrl = `https://api.mymemory.translated.net/get?q=${texte}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl).then(res => res.json()).then (data => {
        console.log(data);
        secondText.value = data.responseData.translatedText;
    })
});
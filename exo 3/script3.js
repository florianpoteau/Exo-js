let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let mail = document.getElementById('mail');
let mdp = document.getElementById('mdp')
let form = document.querySelector(".form")



nom.addEventListener("input", (e) =>{
   nom = e.target.value
})
prenom.addEventListener("input", (e) =>{
   prenom = e.target.value
})
mail.addEventListener("input", (e) =>{
   mail = e.target.value
})
mdp.addEventListener("input", (e) =>{
   mdp = e.target.value
})

form.addEventListener("submit", (e) =>{
    form = e
    console.log(form);
    if (nom.value == "") {
        alert("Veuillez entrez votre nom")
    }
    else if (prenom.value == ""){
        alert("Veuillez entrez votre prénom")
    }
    else if (mail.value == ""){
        alert("Veuillez entrez votre mail")
    }
    else if (mdp.value == ""){
        alert("Veuillez entrez un mot de passe")
    }
    else {
        document.querySelector("form > div").innerHTML = `<br>Votre nom est: ${nom} <br> <br> Votre prénom est: ${prenom} <br> <br> Votre mail est: ${mdp} <br> <br> Votre mot de passe est: très simple à trouver`
        e.preventDefault();
    }
    
})
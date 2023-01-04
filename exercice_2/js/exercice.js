// Ajoutez une couleur d'arrière-plan "bleu clair" et un peu de rembourrage au fichier <div>.

if (document.querySelector("div").style.background = " lightblue") {
    alert( "Bonjour x et y")
}

// Ne pas afficher le <li> qui contient le nœud de texte "John".

document.querySelector("li").style.display = "none"

// Ajoutez une bordure au <li>qui contient le nœud de texte "Pete".

let colorText = document.getElementsByTagName("li")[0]

colorText.style.border = "3px solid red"

// colorText.document.querySelector("li").style.border = 1px solid
// document.querySelector("li").style.border  = "2px"

// Modifiez la taille de la police de tout le corps.
document.querySelector("body").style.fontSize = "48px"

/* Bonus : Si la couleur de fond du div est "bleu clair", alertez "Bonjour x et y"
    (x et y sont les utilisateurs dans la div).
*/

// ( voir 1ere question)

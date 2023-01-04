
/* Utilisation de Javascript :
Récupérez le div et console.log it
Changez le nom "Pete" en "Richard".
Remplacez chaque prénom des deux <ul>'spar votre nom.
Supprimez le <li>qui contient le nœud de texte "Sarah".

*/



let container = document.getElementById(" container ")
console.log(container)

// Changez le nom "Pete" en "Richard". 


let changeName = document.querySelector(".list li:last-child")
changeName .setAttribute ( "list" , " Richard")
console.log ( changeName)

// Remplacez chaque prénom des deux <ul>'spar votre nom.

let changeNameOfLi = document.querySelectorAll(".list")

changeNameOfLi.forEach(dataLi => dataLi.firstElementChild.textContent = ("N'ZO"))

// Supprimez le <li>qui contient le nœud de texte "Sarah".
changeNameOfLi[1].children[1].remove()

console.log(changeNameOfLi)


// Bonus - Utilisation de Javascript :
// Ajoutez une classe appelée student_listaux deux <ul>'s.

document.querySelectorAll("ul")[0].classList.add("student_listaux" )
document.querySelectorAll("ul")[1].classList.add("student_listaux")

// Ajoutez les classes universityet attendanceau premier <ul>.
document.querySelector("ul").classList.add("university" )
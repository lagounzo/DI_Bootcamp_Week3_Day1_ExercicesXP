
/* 3 Initiate the array with 2 books of your choice (ie. Add manually 2 
    books objects in the array */

    allBooks = [
    {
        "title": "Etrange",
        "author": "AlbertCamus",
        "image ": "https://img.over-blog-kiwi.com/2/02/71/53/20160413/ob_bdd7c6_avt-albert-camus-1969.jpeg",
        "alreadyRead": true
    },
    {
        "title": "climbié",
        "author": "bernardBinlinDadié",
        "image ": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUp4ZOyJ3t59qACPTyJ6hCtqmFGAcn9qw1Xg&usqp=CAU",
        "alreadyRead": false
    }


]

// 4 Requirements : 

/*4-1 Using the DOM, render the books inside an HTML
 table (the HTML table must be added to the <div> created in part 1). */

 //We create a element table
 let newTable = document.createElement('table') 
 // we append our great div with the table ceated
 document.querySelector(".listBooks").appendChild(newTable)

 //we great the first tr
 let tr=document.createElement('tr')
 // we use a loop for create each th 
for (let index = 0; index < 3; index++) {
//we append the first tr with table
        document.getElementsByTagName('table')[0].appendChild(tr)
        for (let index1 = 0; index1 < 1; index1++) {
            let th=document.createElement('th')
            document.getElementsByTagName('tr')[0].appendChild(th)
        }
}
//we generate the thead of table
document.getElementsByTagName('th')[0].textContent="book’s title"
document.getElementsByTagName('th')[1].textContent="book’s author"
document.getElementsByTagName('th')[2].textContent="book’s image"
newTable.setAttribute("border","1px;")
// set a background color

document.getElementsByTagName('tr')[0].setAttribute("style","background-color:blue;color:white;font-weight:bold;")
//for each books we take information and create a td
allBooks.forEach((element,index)=> {
    let tr1=document.createElement('tr')
    newTable.appendChild(tr1)
    let td1=document.createElement('td')
    tr1.appendChild(td1)
    let td2=document.createElement('td')
    tr1.appendChild(td2)
    let td3=document.createElement('td')
    tr1.appendChild(td3)
    let img=document.createElement('img')
    td3.appendChild(img)
    td1.textContent=element.title
    td2.textContent=element.author
    img.setAttribute('src',element["image "]);
    //set a dimension for image
    img.setAttribute("style","width:100px;height:100px;")
    //control if the book is read 
    if(element.alreadyRead){
        td1.setAttribute("style","color:red;")
    }
});
/*
Dans le fichier js, créez un tableau appelé allBooks. Il s'agit d'un tableau d'objets.
Chaque objet est un livre qui possède 4 clés (soit 4 propriétés) :
Titre,
auteur,
image : une url,
déjàRead : qui est un booléen (vrai ou faux).
*/
/*
let pocketBook1 = {
    title: "avantureAmbigure",
    author: "cheikhHamidouKane",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cheikh_Hamidou_Kane.jpg/260px-Cheikh_Hamidou_Kane.jpg",
    valreadyRead: "yes"
}

let pocketBook2 = {
    titre: "etrange",
    author: "albertCamus",
    image: "https://img.over-blog-kiwi.com/2/02/71/53/20160413/ob_bdd7c6_avt-albert-camus-1969.jpeg",
    valreadyRead: "yes"
}


let pocketBook3 = {
    titre: "etrangeDestinDeWangrin",
    author: "amadouHampâtéBâ",
    image: "https://lesechosdufaso.net/wp-content/uploads/2016/09/Amadou-Hampat%C3%A9-Ba-le-sage-du-fleuve-Niger.jpg",
    valreadyRead: "yes"
}

let pocketBook4 = {
    titre: "climbié",
    author: "bernardBinlinDadié ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUp4ZOyJ3t59qACPTyJ6hCtqmFGAcn9qw1Xg&usqp=CAU",
    valreadyRead: "yes"
}

*/



const notesContainer = document.querySelector(".notes-container");
const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//when we close and open the browser it should check local storage and if there is any data in th local storage it should display particular data as notes
function showNotes() {
    let storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
    }
}
showNotes();



// for local storage
//update data in our browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
    //whatever is written in notescontainer innerhtml that will be stored in the browse with the names notes
}

CreateBtn.addEventListener("click", ()=>{
    //whenever we click on button btn in the index it will execute this code
    let inputBox = document.createElement("p");
    //create variable inputbox and creates and stores element p in it
    let img = document.createElement("img");
   

    inputBox.className = "input-box";
     //in p element add classname inputbox and attribute contenteditable which is set true
    inputBox.setAttribute("contenteditable", "true");


    img.src = "Images/Delete.png";
    // add image of delete icon

    notesContainer.appendChild(inputBox).appendChild(img);
    //inputbox is displayed inside the notes container 
    //appendchild img means img is displayed inside p tag of input box
})

//for delete button functionality inside notes
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update local storage after deletion
    } else if (e.target.tagName === "P") {
        e.target.onkeyup = function() {
            updateStorage(); // Update local storage when content is edited
        };
    }
});


document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
    //when we click enter then it will add one line break in the p tag and it will prevent the default feature of the enter key
})
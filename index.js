// if user add a note, add in the local storage
showNotes();

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let addtitle= document.getElementById("addtitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj={
    title: addtitle.value,
    text: addtxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  addtitle.value="";
  // console .log(notesObj);
  showNotes();
});

// show notes from local storage
function showNotes () {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
           <div class="noteCard my-3 mx-2 card" style="width: 18rem">
           <div class="card-body">
             <h5 class="card-title">${element.title}</h5>
             <p class="card-text">${element.text} </p> 
          <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div> `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else{
      notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to show note`;
  }
};

// function to delete node
function deleteNote(index){
    // console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

//search function
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
      let inputval = search.value.toLowerCase();
      let noteCard = document.getElementsByClassName('noteCard');
      Array.from(noteCard).forEach(function(element){
             let cardTxt = element.getElementsByTagName("p")[0].innerText;
             if(cardTxt.includes(inputval)){
                 element.style.display = "block";
             }
             else{
                element.style.display = "none";
             }
      })
})
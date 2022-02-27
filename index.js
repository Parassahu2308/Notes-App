// if user add a note, add in the local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e){
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value=" ";
    console .log(notesObj);
    showNotes();
})

const showNotes = () =>{
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html +=`
           <div class="noteCard my-3 mx-2 card" style="width: 18rem">
           <div class="card-body">
             <h5 class="card-title">Note ${index +1}</h5>
             <p class="card-text">${element} </p> 
          <button class="btn btn-primary">Delete Note</button>
        </div>
      </div> `;
    });
    let notesElm = document.getElementById('notes');
    if(notes.length != 0){
       notesElm.innerHTML = html;
    }
}

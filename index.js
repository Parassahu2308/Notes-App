// if user add a note, add in the local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e){
     
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
})
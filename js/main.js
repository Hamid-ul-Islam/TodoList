//  if user adds a notes ,add it to the localStorage
showNotes() 
function additems() {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
};
// function to show elements from localStorage-------------
function showNotes() {
    let notes = localStorage.getItem("notes");
     if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
       
        <div id="click" class="p-4 mt-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md">
      <label class="flex items-center space-x-3">
      <input id="checkbox" type="checkbox"class="form-tick h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none">

      
      <button id="${index}" onclick="deleteNote(this.id)" class="dlt h-8 w-8 text-white rounded-lg bg-red-500 hover:bg-red-600"><i class="fa-solid fa-trash-can"></i></button>
      


      <span class="text-gray-900 font-medium"><strong id="todotext"> ${element} </strong></span>
    </label>
    </div>
 

    
    
   
  
        `

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML=`Add Some Todo`
    }
}

// function to delete a  note
function deleteNote(index) {
    // console.log("hfjahsfijj", index);
      let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes(); 
}

//! "Enter" button to add item
const input = document.getElementById("addTxt");
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    additems();
  }
});
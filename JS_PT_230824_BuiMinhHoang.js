let notes = [
];
function renderNotes(notes) {
  let tableDataEl = document.getElementById("tableBody");
  let dataString = ``;
  for (let i in notes) {
      dataString += `
          
      <tr class="note-data">
      <td>${notes[i].name}
       <button onclick="DeleteNote(${notes[i].id})" type="button">Delete</button></td>
 </tr>
          
      `

  }
  tableDataEl.innerHTML= dataString;
}
renderNotes(notes)


function CreateNote(note){
  note.preventDefault()
  console.log("đã vào")
let newNotes = {
  id: Date.now() * Math.random(),
  name:note.target.name.value,
 
 }
notes.push(newNotes);
renderNotes(notes)
}

function DeleteNote(noteId) { 
      for (let i in notes) {
        if (notes[i].id == noteId) {
            notes.splice(i, 1);
            break;
        }
    }
    renderNotes(notes);
}


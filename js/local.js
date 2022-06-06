
//! get item from oldItems
function getitem() {
  let old = localStorage.getItem("todoList");
  if (old) {
    const item = JSON.parse(old);
    item.forEach((items) => {
      let allitem = items.todo;
      showolditem(allitem);
    });
  }
}

//! show old item
function showolditem(showitem) {
  const node = document.createElement("div");

  node.innerHTML = `<div id="click" class="p-4 hamid mt-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md textdiv">
      <label class="flex items-center space-x-3">
      <input id="checkbox" type="checkbox"class="form-tick h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none">
      <span class="text-gray-900 font-medium"><strong id="todotext"> ${showitem} </strong></span>
    </label>
  </div>`;

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);
}

getitem();
//! creating div with todo value

function myFunction() {
  const input = document.getElementById("input").value;

  document.getElementById("input").value = "";
  // Create an "li" node:
  const node = document.createElement("div");

  node.innerHTML = `<div id="click" class="p-4 hamid mt-4 max-w-7xl mx-auto bg-white rounded-xl shadow-md textdiv">
      <label class="flex items-center space-x-3">
      <input id="checkbox" type="checkbox" class="form-tick h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none">
      <span class="text-gray-900 font-medium"><strong id="todotext"> ${input} </strong></span>
    </label>
  </div>`;

  // Append the "li" node to the list:
  document.getElementById("myList").appendChild(node);

  //! set to localStorage
  var oldItems = JSON.parse(localStorage.getItem("todoList")) || [];

  var newItem = {
    todo: input,
  };

  oldItems.push(newItem);

  localStorage.setItem("todoList", JSON.stringify(oldItems));
}

//! "Enter" button to add item
const input = document.getElementById("input");
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    myFunction();
  }
});

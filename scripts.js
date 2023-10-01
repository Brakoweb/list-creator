const addItemButton = document.getElementById("add-btn");
const deleteItemButton = document.getElementById("delete-btn");
const deleteAllButton = document.getElementById("delete-all-btn");
const itemList = document.getElementById("item-list");
const itemInput = document.getElementById("item");

addItemButton.addEventListener("click", addItem);
deleteAllButton.addEventListener("click", deleteAllItems);

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
                <span draggable="true" ondragstart="drag(event)">${itemText}</span>
                <button class="delete-item-btn">Delete</button>
            `;
  itemList.appendChild(listItem);

  deleteItem();

  itemInput.value = "";
}

function deleteItem() {
  const itemsToDelete = itemList.querySelectorAll(".delete-item-btn");
  itemsToDelete.forEach((item) => {
    item.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });
}

//functions for drag and drop

function deleteAllItems() {
  itemList.innerHTML = "";
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <span>${data}</span>
        <button class="delete-item-btn">Delete</button>
    `;
  itemList.appendChild(listItem);
  deleteItem();
}

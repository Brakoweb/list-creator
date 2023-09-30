const addItemButton = document.getElementById("add-btn");
const deleteItemButton = document.getElementById("delete-btn");
const deleteAllButton = document.getElementById("delete-all-btn");
const itemList = document.getElementById("item-list");
const itemInput = document.getElementById("item");

addItemButton.addEventListener("click", addItem);
deleteItemButton.addEventListener("click", deleteItem);
deleteAllButton.addEventListener("click", deleteAllItems);

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
                ${itemText}
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

function deleteAllItems() {
  itemList.innerHTML = "";
}

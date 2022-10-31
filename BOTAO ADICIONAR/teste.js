window.onload = () => {
    const addButton = document.querySelector("#add-button");
    const clearButton = document.querySelector("#clear-button");
    const itemInput = document.querySelector("#item-input");
    const list = document.querySelector("#list");
  
    clearButton.onclick = () => {
        itemInput.value = "";
    }
    
    let count = 0;
    addButton.onclick = () => {
      const itemName = itemInput.value;
      itemInput.value = "";
      if (itemName == "") return;
  
      const itemElement = document.createElement("div");
      itemElement.classList.add("todo-item");
      if (count % 2 === 0) {
        itemElement.style.background = "lightgray";
      }
      count += 1;
  
  
  
      const itemText = document.createElement("div");
      itemText.classList.add("text");
      itemText.textContent = itemName;
  
      const deleteItem = document.createElement("div");
      deleteItem.classList.add("delete-button");
      deleteItem.textContent = "delete";
      deleteItem.onclick = () => {
        itemElement.remove();
      };
  
      itemElement.appendChild(itemText);
      itemElement.appendChild(deleteItem);
  
      list.appendChild(itemElement);
    };
  };
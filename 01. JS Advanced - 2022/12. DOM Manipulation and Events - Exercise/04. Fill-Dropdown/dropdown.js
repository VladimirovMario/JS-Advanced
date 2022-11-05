function addItem() {
  const newItemText = document.getElementById(`newItemText`);
  const newItemValue = document.getElementById(`newItemValue`);

  if (newItemText.value !== `` && newItemValue.value !== ``) {
    const option = document.createElement(`option`);
    option.textContent = newItemText.value;
    option.value = newItemValue.value;
    const placeToAdd = document.getElementById(`menu`);
    placeToAdd.appendChild(option);

    newItemText.value = ``;
    newItemValue.value = ``;
  }
}

async function getInfo() {
  const stopId = document.getElementById(`stopId`);
  const stopName = document.getElementById(`stopName`);
  const ul = document.getElementById(`buses`);

  const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

  try {
    ul.replaceChildren();
    const response = await fetch(`${baseUrl}/${stopId.value}`);
    stopId.value = ``;

    if (response.status != 200) {
      throw new Error(`Error`);
    }
    const data = await response.json();

    stopName.textContent = data.name;

    for (const item in data.buses) {
      let content = `Bus ${item} arrives in ${data.buses[item]} minutes`;
      const li = document.createElement(`li`);
      li.textContent = content;
      ul.appendChild(li);
    }
  } catch (error) {
    stopName.textContent = 'Error';
  }
}

// function getInfo() {
//   const stopId = document.getElementById(`stopId`);
//   const ul = document.getElementById(`buses`);
//   const stopName = document.getElementById(`stopName`);
//   const baseUrl = " http://localhost:3030/jsonstore/bus/businfo";

//   fetch(`${baseUrl}/${stopId.value}`)
//     .then((response) => response.json())
//     .then((data) => {
//       let name = data.name;
//       let buses = data.buses;

//       stopName.textContent = name;
//       ul.innerHTML = ``;

//       Object.keys(buses).forEach((bus) => {
//         let content = `Bus ${bus} arrives in ${buses[bus]} minutes`;
//         const li = document.createElement(`li`);
//         li.textContent = content;
//         ul.appendChild(li);
//       });
//     })
//     .catch(() => {
//       stopName.textContent = "Error";
//       ul.innerHTML = ``;
//     });
// }

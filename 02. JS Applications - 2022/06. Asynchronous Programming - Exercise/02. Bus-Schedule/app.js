// function solve() {
//   const baseUrl = "http://localhost:3030/jsonstore/bus/schedule";
//   const info = document.querySelector(`.info`);
//   const departBtn = document.getElementById(`depart`);
//   const arriveBtn = document.getElementById(`arrive`);

//   let stop = {
//     next: `depot`,
//   };

//   async function depart() {
//     departBtn.disabled = true;
//     arriveBtn.disabled = false;
//     try {
//       const res = await fetch(`${baseUrl}/${stop.next}`);

//       if (res.status != 200) {
//         throw new Error(`Error`);
//       }
//       stop = await res.json();

//       info.textContent = `Next stop ${stop.name}`;
//     } catch (error) {
//       info.textContent = `Error`;
//       departBtn.disabled = true;
//       arriveBtn.disabled = true;
//     }
//   }

//   function arrive() {
//     arriveBtn.disabled = true;
//     departBtn.disabled = false;
//     info.textContent = `Arriving at ${stop.name}`;
//   }

//   return {
//     depart,
//     arrive,
//   };
// }

// let result = solve();

function solve() {
  const baseUrl = "http://localhost:3030/jsonstore/bus/schedule";
  const info = document.getElementById(`info`);
  const departBtn = document.getElementById(`depart`);
  const arriveBtn = document.getElementById(`arrive`);

  let stop = {
    next: `depot`,
  };

  function depart() {
    departBtn.disabled = true;
    arriveBtn.disabled = false;

    fetch(`${baseUrl}/${stop.next}`)
      .then((res) => res.json())
      .then((data) => {
        stop = Object.assign(data);

        // console.log(stop);
        // console.log(data);

        info.textContent = `Next stop ${stop.name}`;
      })
      .catch((err) => {
        info.textContent = `Error`;
        departBtn.disabled = true;
        arriveBtn.disabled = true;
      });
  }

  function arrive() {
    arriveBtn.disabled = true;
    departBtn.disabled = false;
    info.textContent = `Arriving at ${stop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

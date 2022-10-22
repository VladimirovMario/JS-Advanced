function extract(content) {
  let text = document.getElementById(content).textContent;

  let pattern = /\((?<name>.*)\)/g;

  //   let result = ``;
  let result = [];

  let currName = pattern.exec(text);

  while (currName != null) {
    //   result += `${currName.groups.name}; `;
    result.push(currName.groups.name);

    currName = pattern.exec(text);
  }
  //   return result;
  return result.join(`; `);
}

// To try it we must run on the client console: extract(`content`)
// Expected output: "Bulgaria; Kazanlak; Rosa damascena Mill" 


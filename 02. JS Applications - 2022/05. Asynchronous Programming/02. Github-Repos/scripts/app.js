async function loadRepos() {
  const input = document.getElementById(`username`).value;
  const ul = document.getElementById(`repos`);
  const firstATag = document.querySelector(
    `#repos > li:nth-child(1) > a:nth-child(1)`
  );

  try {
    const response = await fetch(`https://api.github.com/users/${input}/repos`);

    if (response.ok == false) {
      //this is for invalid extensions:
      //`https://api.github.om/users/${input}/repossssssss`
      //404 Not Found
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    //TO DO: Clear the contents before attaching a new ones.
    for (let repo = 0; repo < data.length; repo++) {
      if (repo == 0) {
        firstATag.href = `${data[repo].html_url}`;
        firstATag.textContent = data[repo].full_name;
      } else {
        const li = document.createElement("li");
        const a = document.createElement(`a`);
        
        // TO DO: set a target="_blank"
        a.href = data[repo].html_url;
        a.textContent = data[repo].full_name;

        li.appendChild(a);
        ul.appendChild(li);
      }
    }
  } catch (err) {
    //this is for invalid address
    //`https://api.github.m/users/${input}/repos`
    //NetworkError when attempting to fetch resource.
    ul.textContent = err.message;
    alert(err.message);
  }
}

async function loadCommits() {
  const username = document.getElementById(`username`).value;
  const repo = document.getElementById(`repo`).value;
  const commits = document.getElementById(`commits`);

  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );

    if (response.ok == false) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();

    const ul = document.createElement(`ul`);

    commits.innerHTML = ``////////////////////////////

    for (const {commit} of data) {
      const li = document.createElement(`li`);
      li.textContent = `${commit.author.name}: ${commit.message}`;
      ul.appendChild(li);
    }
    commits.appendChild(ul);
  } catch (error) {
    const li = document.createElement(`li`);
    commits.appendChild(li);
    li.textContent = `Error: ${error.message} (Not Found)`;
  }
}

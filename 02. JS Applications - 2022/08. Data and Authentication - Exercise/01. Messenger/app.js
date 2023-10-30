async function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";

  const sendBtn = document.getElementById(`submit`);
  sendBtn.addEventListener(`click`, onPost);

  const refreshBtn = document.getElementById(`refresh`);
  refreshBtn.addEventListener(`click`, onRefresh);

  const authorInput = document.querySelector(`[name="author"]`);
  const contentInput = document.querySelector('[name="content"]');

  const output = document.getElementById(`messages`);

  async function onPost() {
    const data = {
      author: authorInput.value,
      content: contentInput.value,
    };
    if (authorInput.value == `` || contentInput.value == ``) {
      return;
    }

    authorInput.value = ``;
    contentInput.value = ``;

    try {
      const response = await fetch(`${url}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status != 200) {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function onRefresh() {
    output.value = ``;
    try {
      const res = await fetch(`${url}`);
      if (res.status != 200) {
        throw new Error(res.status);
      }

      const data = await res.json();

      const result = [];
      for (const item of Object.values(data)) {
        result.push(`${item.author}: ${item.content}`);
      }
      output.value = result.join(`\n`);
    } catch (error) {
      alert(error.message);
    }
  }
}

attachEvents();

// expected 'Spami: Hello, are you there?\nGarry: Yep, whats up :?\nGeorge: Hello, guys! :))\n'
//  to equal 'Spami: Hello, are you there?\nGarry: Yep, whats up :?\nGeorge: Hello, guys! :))'

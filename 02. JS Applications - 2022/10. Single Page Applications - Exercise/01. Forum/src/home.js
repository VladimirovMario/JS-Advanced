import { showDetails } from "./details.js";

const section = document.querySelector("#homeView");
section.querySelector("div.topic-title").addEventListener("click", showDetails);

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

const clearBtn = document.querySelector(".cancel");
clearBtn.addEventListener("click", () => form.reset());

section.remove();

export async function showHome(event) {
  event?.preventDefault();
  document.querySelector("#main").replaceChildren("Loading...");

  const res = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/posts"
  );
  const post = await res.json();

   document.querySelector("#main").replaceChildren(section);

  const postDiv = document.querySelector('.topic-container')
  postDiv.replaceChildren(...Object.values(post).map(createPost))


}

function createPost(post) {
  // <div class="topic-name-wrapper">
  const element = document.createElement("div");
  element.setAttribute("class", "topic-name-wrapper");
  element.innerHTML = `
    <div class="topic-name">
    <a href="/details" class="normal" id="${post._id}">
        <h2>${post.topicTitle}</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>${post.date}</time></p>
            <div class="nick-name">
                <p>Username: <span>${post.username}</span></p>
            </div>
        </div>
    </div>
</div>
    `;
 //    </div>
 return element
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const topicTitle = formData.get("topicName").trim();
  const username = formData.get("username").trim();
  const content = formData.get("postText").trim();
  const date = new Date();

  try {
    if (topicTitle == `` || username == `` || content == ``) {
      throw new Error("All fields are required!");
    }

    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/myboard/posts",
      {
        method: "post",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({ topicTitle, username, content, date }),
      }
    );

    if (res.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }

    form.reset();
    showHome();
    
  } catch (error) {
    alert(error.message);
  }
}

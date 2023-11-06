// TODO 
// Not working properly!!!

const section = document.querySelector("#detailsView");

const title = document.querySelector("#details-title");
const username = document.querySelector("#details-username");
const content = document.querySelector("#details-content");
const date = document.querySelector("#details-time");

const commentsList = document.querySelector("#user-comment");

const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);

section.remove();

export function showDetails(event) {
  let target = event.target;

  if (target.tagName == "H2") {
    target = target.parentElement;
  }
  if (target.tagName == "A") {
    event.preventDefault();
    showPost(target.id);
  }
}

async function showPost(postId) {
  document.querySelector("#main").replaceChildren("Loading...");

  //   const [resPost, resComments] = await Promise.all([
  //     fetch(
  //       "http://localhost:3030/jsonstore/collections/myboard/posts/" + postId
  //     ),
  //     fetch(
  //       "http://localhost:3030/jsonstore/collections/myboard/comments/" + postId
  //     ),
  //   ]);
  //   const [post, comments] = await Promise.all([
  //     resPost.json(),
  //     resComments.json(),
  //   ]);

  const postResponse = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/posts/" + postId);

  const post = await postResponse.json();

  form.id = postId; // ?

  title.textContent = post.topicTitle;
  username.textContent = post.username;
  content.textContent = post.content;
  date.textContent = post.date;

  const commentsResponse = await fetch(
    "http://localhost:3030/jsonstore/collections/myboard/comments/" + postId);


  if (commentsResponse.status != 204) {
      const comments = await commentsResponse.json();
       commentsList.replaceChildren(...Object.values(comments)
    //    .filter( c => c.postId == postId)
       .map(createComments));
  }

  document.querySelector("#main").replaceChildren(section);
}

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const username = formData.get("username").trim();
  const content = formData.get("postText").trim();
  const postId = form.id;
  const date = new Date();

  try {
    if (content == "" || username == "") {
      throw new Error("All fields are required!");
    }

    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/myboard/comments/" + postId,
      {
        method: "post",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({ username, content, postId, date }),
      }
    );
    if (res.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }

    form.reset();
    showPost(postId);
  } catch (error) {
    alert(error.message);
  }
}

function createComments(comment) {
  const element = document.createElement("div");
  element.setAttribute("class", "topic-name-wrapper");
  element.innerHTML = `
<div class="topic-name">
    <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
    <div class="post-content">
        <p>${comment.content}</p>
    </div>
</div>
`;
  return element;
}

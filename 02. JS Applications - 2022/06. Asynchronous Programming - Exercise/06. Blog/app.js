function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/blog";
  const posts = document.getElementById(`posts`);
  const ulComments = document.getElementById(`post-comments`);
  const title = document.getElementById(`post-title`);
  const postBody = document.getElementById(`post-body`);

  const buttonLoadPosts = document.getElementById(`btnLoadPosts`);
  buttonLoadPosts.addEventListener(`click`, onLoad);
  const buttonViewPost = document.getElementById(`btnViewPost`);
  buttonViewPost.addEventListener(`click`, onView);

  const postsArr = [];

  async function onLoad() {
    posts.replaceChildren();
    try {
      const res = await fetch(`${baseUrl}/posts`);
      if (res.status != 200) {
        throw new Error(res.status);
      }
      const data = await res.json();

      for (const post of Object.values(data)) {
        const { body, id, title } = post;

        const currOption = document.createElement(`option`);
        currOption.setAttribute(`value`, id);
        currOption.textContent = title;
        posts.appendChild(currOption);
        postsArr.push({ body, id, title });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function onView() {
    ulComments.replaceChildren();

    try {
      const res = await fetch(`${baseUrl}/comments`);
      if (res.status != 200) {
        throw new Error(res.status);
      }
      const data = await res.json();

      const currPost = postsArr.find((el) => el.id == posts.value);
      title.textContent = currPost.title;
      postBody.textContent = currPost.body;

      const comments = Object.values(data).filter(
        (el) => el.postId == currPost.id);

      for (const comment of comments) {
        const li = document.createElement(`li`);
        li.id = comment.id;
        li.textContent = comment.text;
        ulComments.appendChild(li);
      }
    } catch (error) {
      alert(error.message);
    }
  }
}
attachEvents();

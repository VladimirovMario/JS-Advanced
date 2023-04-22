window.addEventListener("load", forumPosts);

function forumPosts() {
  const publishButton = document.getElementById(`publish-btn`);
  publishButton.addEventListener(`click`, publish);

  const clearButton = document.getElementById(`clear-btn`);
  clearButton.addEventListener(`click`, deletePost);

  let input = {
    title: document.getElementById(`post-title`),
    category: document.getElementById(`post-category`),
    content: document.getElementById(`post-content`),
  };

  const reviewUl = document.getElementById(`review-list`);
  const publishedUl = document.getElementById(`published-list`);

  
  function publish(event) {
    event.preventDefault();

    if (input.title.value == ``
    || input.category.value  == ``
    || input.content.value == ``)
      {return;}

    let title = input.title.value;
    let category = input.category.value;
    let content = input.content.value;


    
    const li = createEl(`li`, ``, `rpost`);
    reviewUl.appendChild(li);
    const article = createEl(`article`);
    li.appendChild(article);
    article.appendChild(createEl(`h4`, `${input.title.value}`));
    article.appendChild(createEl(`p`, `Category: ${input.category.value}`));
    article.appendChild(createEl(`p`, `Content: ${input.content.value}`));

    const editButton = createEl(`button`, `Edit`, `action-btn edit`, onEdit);
    li.appendChild(editButton);
    const approveButton = createEl(`button`,`Approve`,`action-btn approve`,
      onApprove);
    li.appendChild(approveButton);

    input.title.value = ``;
    input.category.value = ``;
    input.content.value = ``; 

    function onEdit() {
    input.title.value = title;
    input.category.value = category;
    input.content.value = content;
    li.remove();
    }

    function onApprove() {
      publishedUl.appendChild(li);
      editButton.remove();
      approveButton.remove();
    }

    function createEl(type, content, className, addEvent) {
      const element = document.createElement(type);
      element.textContent = content;
      if (className) {
        element.className = className;
      }
      element.addEventListener(`click`, addEvent);
      return element;
    }
  }

  function deletePost() {
    const allLiForDelete = Array.from(publishedUl.children);
    for (const currLi of allLiForDelete) {
      currLi.remove();
    }
  }
}

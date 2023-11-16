export function initialize(links) {
  const main = document.querySelector("main");

  const nav = document.querySelector(`nav`);
  nav.addEventListener(`click`, onNavigate);

  const context = {
    showSection,
    goTo,
    checkUserNav,
  };

  return context;

  function showSection(section) {
    main.replaceChildren(section);
  }

  function onNavigate(event) {
    let target = event.target;
    if (target.tagName == "IMG") {
      target = target.parentElement;
    }
    if (target.tagName == `A`) {
      event.preventDefault();
      const url = new URL(target.href);

      goTo(url.pathname);
    }
  }

  function goTo(viewName, ...params) {
    const handler = links[viewName];
    if (typeof handler == "function") {
      handler(context, ...params);
      return true;
    } else {
      return false;
    }
  }

  function checkUserNav() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      nav
        .querySelectorAll("#guest")
        .forEach((el) => (el.style.display = "none"));
      nav
        .querySelectorAll("#user")
        .forEach((el) => (el.style.display = "block"));
    } else {
      nav
        .querySelectorAll("#guest")
        .forEach((el) => (el.style.display = "block"));
      nav
        .querySelectorAll("#user")
        .forEach((el) => (el.style.display = "none"));
    }
  }
}

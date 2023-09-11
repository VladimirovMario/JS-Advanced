const userNavigation = document.querySelector("#user");
const guestNavigation = document.querySelector("#guest");

export function updateAuth() {
  let user = localStorage.getItem("userData");

  if (user) {
    userNavigation.style.display = "inline-block";
    guestNavigation.style.display = "none";
  } else {
    guestNavigation.style.display = "inline-block";
    userNavigation.style.display = "none";
  }
}

export function logout() {
  localStorage.removeItem("userData");
  updateAuth();
}

export function getToken(){
  let serializedUser = localStorage.getItem("userData");
  
  if (serializedUser){
    const userData = JSON.parse(serializedUser)
    return userData.accessToken
  }
}
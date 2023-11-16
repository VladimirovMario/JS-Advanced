const host = "http://localhost:3030";
//{ email, password } === data
async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    ///////////////////
    // console.log(`From api`, data);
    /////////////////
    options.body = JSON.stringify(data);
  }

  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData != null) {
    options.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const res = await fetch(host + url, options);

    if (res.ok == false) {
      if (res.status == 403) {
        localStorage.removeItem("userData");
      }
      const error = await res.json();
      throw new Error(error.message);
    }
    if (res.status == 204) {
      return res;
    } else {
      return await res.json();
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export async function get(url) {
  return request("get", url);
}

export async function post(url, data) {
  return request("post", url, data);
}

// TODO check if it works?
export async function put(url, data) {
  return request("put", url, data);
  // test it with  url + `/data/movies/" + id`
}

export async function onDelete(url) {
  return request("delete", url);
}

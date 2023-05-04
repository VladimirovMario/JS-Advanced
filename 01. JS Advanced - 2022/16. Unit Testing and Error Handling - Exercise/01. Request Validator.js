function requestValidator(obj) { // 88 points
  const method = [`GET`, `POST`, `DELETE`, `CONNECT`];
  const uri = /^[\w\.]+$/;
  const version = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];
  const message = /[\w]*[<>\\&'"]+/;

  if (method.includes(obj.method) == false || obj.method == undefined) {
    throw new Error(`Invalid request header: Invalid Method`);
  }
  if (
    (uri.test(obj.uri) || `*`) == false ||
    obj.uri == `` ||
    obj.uri == undefined
  ) {
    throw new Error(`Invalid request header: Invalid URI`);
  }
  if (version.includes(obj.version) == false || obj.version == undefined) {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  if (message.test(obj.message) || obj.message == undefined) {
    throw new Error(`Invalid request header: Invalid Message`);
  }
  return obj;
}
// console.log(
//   requestValidator({
//     method: "GET",
//     uri: "svn.public.catalog",
//     version: "HTTP/1.1",
//     message: "",
//   })
// );

// console.log(
//   requestValidator({
//     method: "OPTIONS",
//     uri: "git.master",
//     version: "HTTP/1.1",
//     message: "-recursive",
//   })
// );

console.log(
  requestValidator({
    method: "POST",
    uri: "home.bash",
    version: "HTTP/1.1",
    message: "DROP TABLE",
  })
);

/*
expected output on third calling
{
  method: 'POST',
  uri: 'home.bash',
  version: 'HTTP/1.1',
  message: 'DROP TABLE'
}
*/
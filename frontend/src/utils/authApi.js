const BASE_URL = "http://api.mesto-sp.nomoredomains.monster";

function makeRequest(url, method, body, token) {
  const headers = { "Content-Type": "application/json" };
  const config = { method, headers, credentials: "include" };
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }
  return fetch(`${BASE_URL}${url}`, config).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  });
}

export function register({ email, password }) {
  return makeRequest("/signup", "POST", { password, email });
}

export function authorize({ email, password }) {
  return makeRequest("/signin", "POST", { password, email });
}

export function getContent(token) {
  return makeRequest("/users/me", "GET", undefined, token);
}

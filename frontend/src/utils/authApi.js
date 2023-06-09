const BASE_URL = "//api.mesto-sp.nomoredomains.monster";

function makeRequest(url, method, body) {
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
  return makeRequest("/signup", "POST", { email, password });
}

export function authorize({ email, password }) {
  return makeRequest("/signin", "POST", { email, password });
}

export function logout() {
  return makeRequest("/users/me", "DELETE");
}

export function getContent() {
  return makeRequest("/users/me", "GET");
}

const SERVER_BASE_URL = "http://localhost:5500";

export const loginService = (userDetails) => {
  return fetch(`${SERVER_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
};

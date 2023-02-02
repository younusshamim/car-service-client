export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  // get jwt token
  fetch("https://genius-car-server-ys.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("genius-token", data.token);
    });
};

const API = "http://127.0.0.1:3000";

async function register() {
  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPass").value;
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please fill all fields";
    return;
  }

  try {
    const res = await fetch(API + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    msg.innerText = data.message;
  } catch (err) {
    msg.innerText = "Server not reachable";
  }
}

async function login() {
  const email = document.getElementById("lEmail").value;
  const password = document.getElementById("lPass").value;
  const msg = document.getElementById("msg");

  if (!email || !password) {
    msg.innerText = "Please fill all fields";
    return;
  }

  try {
    const res = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "portfolio.html";
    } else {
      msg.innerText = data.message;
    }
  } catch (err) {
    msg.innerText = "Server not reachable";
  }
}

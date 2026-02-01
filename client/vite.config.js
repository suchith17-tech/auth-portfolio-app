<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Portfolio</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="wrapper">
    <div class="box">
      <h2>Welcome 🎉</h2>
      <p id="userEmail"></p>

      <button onclick="logout()">Logout</button>
    </div>
  </div>

  <script>
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      window.location.href = "index.html";
    } else {
      document.getElementById("userEmail").innerText =
        "Logged in as: " + user.email;
    }

    function logout() {
      localStorage.removeItem("user");
      window.location.href = "index.html";
    }
  </script>

</body>
</html>

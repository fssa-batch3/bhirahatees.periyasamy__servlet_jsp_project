<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Registration Form</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      .registration-form {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        width: 120%;
      }

      .registration-form h2 {
        text-align: center;
      }

      .registration-form form label {
        display: block;
        margin-top: 10px;
      }

      .registration-form form input {
        width: 96%;
        padding: 10px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }

      .registration-form form button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        width: 100%;
        margin-top: 15px;
      }

      .registration-form form button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <div class="registration-form">
      <h2>Registration Form</h2>
      <form action="RegistrationServlet" method="post">
        <label for="firstname">First Name*</label>
        <input type="text" id="firstname" name="firstname" required />
        <label for="lastname">Last Name*</label>
        <input type="text" id="lastname" name="lastname" required />
        <label for="teamcode">Class Code</label>
        <input type="text" id="teamcode" name="teamcode" />
        <label for="email">Email*</label>
        <input type="email" id="email" name="email" required />
        <label for="password">Password*</label>
        <input type="password" id="password" name="password" required />

        <label for="confirm-password">Confirm Password*</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  </body>
</html>

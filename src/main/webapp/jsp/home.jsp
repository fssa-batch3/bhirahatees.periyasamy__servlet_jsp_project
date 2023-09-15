<!DOCTYPE html>
<html>
  <head>
    <meta charset="ISO-8859-1" />
    <title>Pupdesk | Home</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        color: #333;
      }

      h1 {
        background-color: #007bff;
        color: #fff;
        text-align: center;
        padding: 20px;
        margin: 0;
      }

    

      .link-container {
        margin: 10px 0;
      }

      .link-container a {
        display: block;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        padding: 10px 15px;
        margin: 10px auto;
        text-align: center;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
      }

      .link-container a:hover {
        background-color: #0056b3;
      }

      .user-info {
        text-align: right;
        margin-top: 20px;
      }
    </style>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../assets/css/navbar-style.css" />
    <link rel="stylesheet" href="../assets/css/style.css" />
    <link rel="stylesheet" href="../assets/css/dashboard.css" />
  </head>
  <body>
    <jsp:include page="./header.jsp"></jsp:include>

    <div class="container">
      <div class="link-container">
        <a href="create-ticket.jsp">Raise Ticket</a>
      </div>
      <div class="link-container">
        <a href="ListTicketServlet?status=open">List Ticket</a>
      </div>
      <div class="link-container">
        <a href="ListTicketServlet?status=closed">List Closed Ticket</a>
      </div>

      <div class="link-container">
        <a href="ListTeamMatesServlet">Class</a>
      </div>
      <div class="link-container">
        <a href="ProfileServlet">Profile</a>
      </div>
      <div class="user-info">
        Logged In User: <%=(String) session.getAttribute("loggedInEmail")%>
        <a href="../LogoutServlet">Logout</a>
      </div>
    </div>
  </body>
  <script
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
    integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
    crossorigin="anonymous"
  ></script>
</html>
